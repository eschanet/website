import { useEffect, useState } from 'react';

import { profile } from '@/data/cv';

/** Renders nothing until mounted, so prerendered HTML never carries a stale clock. */
export function LocalTime() {
  const [time, setTime] = useState<string | null>(null);

  useEffect(() => {
    const fmt = new Intl.DateTimeFormat('en-GB', {
      hour: '2-digit',
      minute: '2-digit',
      timeZone: profile.timezone,
    });
    const tick = () => {
      setTime(fmt.format(new Date()));
    };
    tick();
    const id = setInterval(tick, 30_000);
    return () => {
      clearInterval(id);
    };
  }, []);

  if (time === null) return null;
  return (
    <span className="label" suppressHydrationWarning>
      {profile.location.split(',')[0]} · {time}
    </span>
  );
}
