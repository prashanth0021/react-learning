import { lazy, Suspense } from "react";

const MFE1 = lazy(() => import("mfe1/App"));
const MFE2 = lazy(() => import("mfe2/App"));

export function Router({ route }: { route: string }) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      {route === "mfe1" && <MFE1 />}
      {route === "mfe2" && <MFE2 />}
    </Suspense>
  );
}
