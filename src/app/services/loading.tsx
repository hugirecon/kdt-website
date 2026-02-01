"use client";

import { Grid } from 'ldrs/react';
import 'ldrs/react/Grid.css';

export default function Loading() {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-[#0a0a0a]">
      <Grid
        size="60"
        speed="1.5"
        color="#f97316"
      />
    </div>
  );
}
