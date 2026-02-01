"use client";

import { Grid } from 'ldrs/react';
import 'ldrs/react/Grid.css';

interface LoaderProps {
  size?: string;
  speed?: string;
  color?: string;
}

export default function Loader({ 
  size = "60", 
  speed = "1.5", 
  color = "#f97316" // KDT Orange
}: LoaderProps) {
  return (
    <Grid
      size={size}
      speed={speed}
      color={color}
    />
  );
}
