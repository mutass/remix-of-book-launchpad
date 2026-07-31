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
    <div className="flex items-center gap-2 sm:gap-3">
      {units.map((unit, i) => (
        <div key={unit.label} className="flex items-center gap-2 sm:gap-3">
          <div className="min-w-16 rounded-xl bg-ink px-3 py-2 text-center text-ink-foreground shadow-[var(--shadow-card)]">
            <div className="text-2xl font-black tabular-nums sm:text-3xl">{pad(unit.value)}</div>
            <div className="text-[10px] uppercase tracking-widest opacity-70">{unit.label}</div>
          </div>
          {i < units.length - 1 && <span className="text-xl font-black text-ink/40">:</span>}
        </div>
      ))}
    </div>
  );
}
