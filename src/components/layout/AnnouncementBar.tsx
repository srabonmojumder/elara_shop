"use client";

import { useState, useEffect } from "react";
import { announcements } from "@/data/mock";

export default function AnnouncementBar() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % announcements.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-accent text-white text-center py-2 px-4 text-xs sm:text-sm relative overflow-hidden h-8 flex items-center justify-center">
      {announcements.map((msg, i) => (
        <span
          key={i}
          className={`absolute inset-x-0 flex items-center justify-center transition-all duration-500 px-4 ${
            i === current
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-full"
          }`}
          dangerouslySetInnerHTML={{ __html: msg }}
        />
      ))}
    </div>
  );
}
