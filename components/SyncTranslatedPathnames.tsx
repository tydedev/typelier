// components/SyncTranslatedPathnames.tsx
"use client";
import { useEffect } from "react";
import { useTranslatedPathnamesStore } from "@/lib/store/translated-pathnames";

export function SyncTranslatedPathnames({
  pathnames,
}: {
  pathnames: Partial<Record<"it" | "en", string>>;
}) {
  const { setPathnames, clearPathnames } = useTranslatedPathnamesStore();

  useEffect(() => {
    setPathnames(pathnames);
    return () => clearPathnames(); // pulisce quando esci dalla pagina
  }, [pathnames, setPathnames, clearPathnames]);

  return null;
}
