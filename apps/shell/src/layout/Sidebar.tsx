import React from "react";
import { lazy, Suspense } from "react";
import type { ComponentType } from "react";

type RemoteSidebarProps = { onNavigate: (route: string) => void };
const RemoteSidebar = lazy<ComponentType<RemoteSidebarProps>>(() =>
  import("shared_ui/Sidebar").then((mod) => ({ default: (mod as any).Sidebar || (mod as any).default }))
);

type Props = {
  onNavigate: (route: string) => void;
};

export default function Sidebar({ onNavigate }: Props) {
  return (
    <Suspense fallback={<div>Loading sidebar...</div>}>
      <RemoteSidebar onNavigate={onNavigate} />
    </Suspense>
  );
}