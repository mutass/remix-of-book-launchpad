import { useEffect, useState } from "react";

const DEAL_LENGTH_MS = 1000 * 60 * 60 * 47 + 1000 * 60 * 12;

function pad(n: number) {
  return String(Math.max(0, n)).padStart(2, "0");
}

export function CountdownTimer() {
  const [remaining, setRemaining] = useState(DEAL_LENGTH_MS);

  useEffect(() => {
    const deadline = Date.now() + DEAL_LENGTH_MS;
    const tick = () => setRemaining(Math.max(0, deadline - Date.now()));
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  const totalSeconds = Math.floor(remaining / 1000);
  const units = [
    { label: "Hours", value: Math.floor(totalSeconds / 3600) },
    { label: "Minutes", value: Math.floor((totalSeconds % 3600) / 60) },
    { label: "Seconds", value: totalSeconds % 60 },
  ];

  return (
    <div className="flex items-center gap-1 sm:gap-2 md:gap-3">
      {units.map((unit, i) => (
        <div key={unit.label} className="flex items-center gap-1 sm:gap-2 md:gap-3">
          <div className="min-w-10 rounded-lg bg-ink px-1 py-1 text-center text-ink-foreground shadow-[var(--shadow-card)] sm:min-w-16 sm:rounded-xl sm:px-3 sm:py-2">
            <div className="text-lg font-black tabular-nums sm:text-2xl md:text-3xl">{pad(unit.value)}</div>
            <div className="text-[8px] uppercase tracking-widest opacity-70 sm:text-[10px]">{unit.label}</div>
          </div>
          {i < units.length - 1 && <span className="text-sm font-black text-ink/40 sm:text-xl">:</span>}
        </div>
      ))}
    </div>
  );
}
