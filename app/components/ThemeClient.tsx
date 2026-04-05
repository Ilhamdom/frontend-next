"use client";
import { useEffect } from "react";
import { setBrandTheme } from "@idds/react";

export default function ThemeClient() {
  useEffect(() => {
    setBrandTheme("lan");
  }, []);
  return null;
}