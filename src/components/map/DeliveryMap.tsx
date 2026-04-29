"use client";

import { useEffect, useMemo, useState } from "react";
import {
  MapContainer,
  TileLayer,
  Polyline,
  Marker,
  useMap,
} from "react-leaflet";
import L, { LatLngExpression } from "leaflet";
import "leaflet/dist/leaflet.css";

// ─────────── Route points (Dhaka, Bangladesh) ───────────
// From a Elara Shop fulfillment hub in Gulshan 2 to a customer in Dhanmondi 27.
export const ROUTE: [number, number][] = [
  [23.7925, 90.4140], // Gulshan 2 circle (pickup)
  [23.7912, 90.4075],
  [23.7880, 90.4020],
  [23.7830, 90.3985],
  [23.7775, 90.3955],
  [23.7720, 90.3930],
  [23.7655, 90.3895],
  [23.7590, 90.3860],
  [23.7530, 90.3825],
  [23.7478, 90.3790],
  [23.7461, 90.3742], // Dhanmondi Lake area (destination)
];

export const PICKUP: [number, number] = ROUTE[0];
export const DROPOFF: [number, number] = ROUTE[ROUTE.length - 1];

// Interpolate along a polyline based on a progress ratio (0–1).
function interpolateRoute(
  route: [number, number][],
  progress: number
): [number, number] {
  if (progress <= 0) return route[0];
  if (progress >= 1) return route[route.length - 1];

  // Total distance along route
  const segments: number[] = [];
  let total = 0;
  for (let i = 0; i < route.length - 1; i++) {
    const dx = route[i + 1][0] - route[i][0];
    const dy = route[i + 1][1] - route[i][1];
    const d = Math.sqrt(dx * dx + dy * dy);
    segments.push(d);
    total += d;
  }

  let travelled = progress * total;
  for (let i = 0; i < segments.length; i++) {
    if (travelled <= segments[i]) {
      const t = travelled / segments[i];
      const lat = route[i][0] + (route[i + 1][0] - route[i][0]) * t;
      const lng = route[i][1] + (route[i + 1][1] - route[i][1]) * t;
      return [lat, lng];
    }
    travelled -= segments[i];
  }
  return route[route.length - 1];
}

// Compute bearing between two points so the car icon faces direction of travel.
function bearing(from: [number, number], to: [number, number]) {
  const [lat1, lng1] = from;
  const [lat2, lng2] = to;
  const dy = lat2 - lat1;
  const dx = lng2 - lng1;
  return (Math.atan2(dx, dy) * 180) / Math.PI;
}

// Build a DivIcon that renders inline SVG for crisp, themeable markers.
function carIcon(angleDeg: number) {
  return L.divIcon({
    className: "",
    iconSize: [48, 48],
    iconAnchor: [24, 24],
    html: `
      <div style="position:relative;width:48px;height:48px;">
        <div style="
          position:absolute;inset:0;border-radius:9999px;background:#e21a1f;
          opacity:0.22;animation:carPulse 1.6s ease-out infinite;
        "></div>
        <div style="
          position:absolute;inset:8px;border-radius:9999px;background:#ffffff;
          box-shadow:0 6px 16px rgba(0,0,0,0.22);display:flex;align-items:center;justify-content:center;
        ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22" height="22" viewBox="0 0 24 24"
            fill="none" stroke="#e21a1f" stroke-width="2"
            stroke-linecap="round" stroke-linejoin="round"
            style="transform:rotate(${angleDeg}deg);transition:transform .2s linear;"
          >
            <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9L18.4 5.6c-.3-.8-1-1.4-1.9-1.4H7.5c-.9 0-1.6.6-1.9 1.4L3.5 11.1C2.7 11.3 2 12.1 2 13v3c0 .6.4 1 1 1h2"/>
            <circle cx="7" cy="17" r="2"/>
            <circle cx="17" cy="17" r="2"/>
          </svg>
        </div>
      </div>
      <style>
        @keyframes carPulse {
          0% { transform: scale(1); opacity: 0.22; }
          80% { transform: scale(1.6); opacity: 0; }
          100% { transform: scale(1.6); opacity: 0; }
        }
      </style>
    `,
  });
}

function pinIcon(color: string, label: string, emoji?: string) {
  return L.divIcon({
    className: "",
    iconSize: [36, 44],
    iconAnchor: [18, 44],
    html: `
      <div style="position:relative;width:36px;height:44px;">
        <svg width="36" height="44" viewBox="0 0 36 44" xmlns="http://www.w3.org/2000/svg">
          <path d="M18 0c9.9 0 18 8 18 17.9C36 31 18 44 18 44S0 31 0 17.9C0 8 8.1 0 18 0z" fill="${color}"/>
          <circle cx="18" cy="17" r="8" fill="white"/>
        </svg>
        <div style="
          position:absolute;top:9px;left:50%;transform:translateX(-50%);
          width:16px;height:16px;display:flex;align-items:center;justify-content:center;
          font-size:11px;font-weight:700;color:${color};
        ">${emoji ?? label}</div>
      </div>
    `,
  });
}

// Fit map bounds to the route once on mount.
function FitToRoute() {
  const map = useMap();
  useEffect(() => {
    const bounds = L.latLngBounds(ROUTE.map((p) => L.latLng(p[0], p[1])));
    map.fitBounds(bounds, { padding: [40, 40] });
  }, [map]);
  return null;
}

// Custom zoom + recenter controls overlaid on the map.
function MapControls() {
  const map = useMap();

  const zoomIn = () => map.zoomIn(1);
  const zoomOut = () => map.zoomOut(1);
  const recenter = () => {
    const bounds = L.latLngBounds(ROUTE.map((p) => L.latLng(p[0], p[1])));
    map.flyToBounds(bounds, { padding: [40, 40], duration: 0.6 });
  };

  return (
    <div className="leaflet-top leaflet-right z-[400]">
      <div className="leaflet-control flex flex-col gap-2 !mt-4 !mr-4">
        <div className="bg-surface rounded-xl shadow-md overflow-hidden border border-border">
          <button
            type="button"
            onClick={zoomIn}
            aria-label="Zoom in"
            className="w-10 h-10 flex items-center justify-center text-text-primary hover:bg-surface-secondary transition-colors cursor-pointer"
          >
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="12" y1="5" x2="12" y2="19" />
              <line x1="5" y1="12" x2="19" y2="12" />
            </svg>
          </button>
          <div className="h-px bg-border-light" />
          <button
            type="button"
            onClick={zoomOut}
            aria-label="Zoom out"
            className="w-10 h-10 flex items-center justify-center text-text-primary hover:bg-surface-secondary transition-colors cursor-pointer"
          >
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12" />
            </svg>
          </button>
        </div>

        <button
          type="button"
          onClick={recenter}
          aria-label="Re-center map"
          className="w-10 h-10 bg-surface rounded-xl shadow-md border border-border flex items-center justify-center text-text-primary hover:bg-surface-secondary transition-colors cursor-pointer"
        >
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="3" />
            <path d="M12 2v3M12 19v3M2 12h3M19 12h3" />
          </svg>
        </button>
      </div>
    </div>
  );
}

interface DeliveryMapProps {
  progress: number; // 0–100
}

export default function DeliveryMap({ progress }: DeliveryMapProps) {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const check = () =>
      setIsDark(document.documentElement.classList.contains("dark"));
    check();
    const observer = new MutationObserver(check);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });
    return () => observer.disconnect();
  }, []);

  const ratio = progress / 100;
  const carPos = useMemo<[number, number]>(
    () => interpolateRoute(ROUTE, ratio),
    [ratio]
  );

  // Split route into "travelled" and "remaining" polylines.
  const { travelled, remaining } = useMemo(() => {
    const t: [number, number][] = [];
    const r: [number, number][] = [];

    const segments: number[] = [];
    let total = 0;
    for (let i = 0; i < ROUTE.length - 1; i++) {
      const dx = ROUTE[i + 1][0] - ROUTE[i][0];
      const dy = ROUTE[i + 1][1] - ROUTE[i][1];
      const d = Math.sqrt(dx * dx + dy * dy);
      segments.push(d);
      total += d;
    }
    const travelDist = ratio * total;

    t.push(ROUTE[0]);
    let acc = 0;
    for (let i = 0; i < segments.length; i++) {
      if (acc + segments[i] <= travelDist) {
        t.push(ROUTE[i + 1]);
        acc += segments[i];
      } else {
        t.push(carPos);
        r.push(carPos);
        for (let j = i + 1; j < ROUTE.length; j++) r.push(ROUTE[j]);
        return { travelled: t, remaining: r };
      }
    }
    return { travelled: t, remaining: [ROUTE[ROUTE.length - 1]] };
  }, [ratio, carPos]);

  // Bearing between previous and current position
  const angle = useMemo(() => {
    const lookback = Math.max(0, ratio - 0.01);
    const prev = interpolateRoute(ROUTE, lookback);
    return bearing(prev, carPos);
  }, [ratio, carPos]);

  const center: LatLngExpression = [
    (PICKUP[0] + DROPOFF[0]) / 2,
    (PICKUP[1] + DROPOFF[1]) / 2,
  ];

  const tileUrl = isDark
    ? "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
    : "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png";

  const tileAttribution =
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, &copy; <a href="https://carto.com/attributions">CARTO</a>';

  return (
    <MapContainer
      center={center}
      zoom={14}
      scrollWheelZoom={false}
      doubleClickZoom
      touchZoom
      style={{ height: "100%", width: "100%" }}
      zoomControl={false}
    >
      <TileLayer url={tileUrl} attribution={tileAttribution} />
      <FitToRoute />
      <MapControls />

      {/* Shadow/base route */}
      <Polyline
        positions={ROUTE}
        pathOptions={{
          color: "#e21a1f",
          opacity: 0.18,
          weight: 8,
          lineCap: "round",
          lineJoin: "round",
        }}
      />

      {/* Remaining route — dashed */}
      <Polyline
        positions={remaining}
        pathOptions={{
          color: "#e21a1f",
          opacity: 0.55,
          weight: 4,
          dashArray: "2 10",
          lineCap: "round",
        }}
      />

      {/* Travelled route — solid accent */}
      <Polyline
        positions={travelled}
        pathOptions={{
          color: "#e21a1f",
          opacity: 1,
          weight: 5,
          lineCap: "round",
          lineJoin: "round",
        }}
      />

      <Marker position={PICKUP} icon={pinIcon("#111111", "P", "P")} />
      <Marker position={DROPOFF} icon={pinIcon("#e21a1f", "H", "H")} />
      <Marker position={carPos} icon={carIcon(angle)} />
    </MapContainer>
  );
}
