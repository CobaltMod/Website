'use client';

import { useEffect } from 'react';
import { info } from '@/lib/constants';
import Button from '@/components/Button';

export default function Discord() {
  useEffect(() => {
    window.location.href = info.discordServer;
  }, []);

  return (
    <div className="relative min-h-screen flex flex-col justify-between overflow-hidden">
      <link rel="icon" href="https://github.com/CobaltScripts.png" />

      <div className="ambient-glow" />
      <main className="grow flex flex-col items-center justify-center px-6 py-12 z-10 relative">
        <div className="max-w-3xl text-center flex flex-col items-center">
          <h1 className="text-6xl md:text-7xl font-extrabold tracking-tight mb-2 text-(--text-primary)">
            Redirecting
          </h1>
          <h2 className="text-5xl md:text-6xl font-extrabold mb-8">
            <span className="text-(--accent-color) underline-anim">
              To Discord.
            </span>
          </h2>

          <p className="text-base text-(--text-secondary) leading-relaxed max-w-2xl mb-10">
            If you aren&apos;t redirected automatically, click the button below.
          </p>

          <div className="flex flex-wrap gap-4 items-center justify-center">
            <Button text="Join Discord" url={info.discordServer} external />
          </div>
        </div>
      </main>
    </div>
  );
}
