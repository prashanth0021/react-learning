import { MenuItem } from "shared-ui/src/components/MenuItem";

type Props = {
  active: string;
  onNavigate: (route: string) => void;
};

export function Sidebar({ active, onNavigate }: Props) {
  return (
    <aside className="w-64 bg-gray-900 p-4 space-y-2">
      <h2 className="text-white text-lg font-semibold mb-4">
        Micro Frontend
      </h2>

      <MenuItem
        label="Screen 1"
        route="mfe1"
        active={active === "mfe1"}
        onClick={onNavigate}
      />

      <MenuItem
        label="Screen 2"
        route="mfe2"
        active={active === "mfe2"}
        onClick={onNavigate}
      />
    </aside>
  );
}
