
type NavItem = {
  label: string;
  key: string;
};

type SideNavProps = {
  items: NavItem[];
  onSelect: (key: string) => void;
  activeKey: string;
};

export function SideNav({ items, onSelect, activeKey }: SideNavProps) {
  return (
    <aside className="w-64 h-screen bg-white border-r p-4">
      <h1 className="text-xl font-bold text-orange-600 mb-6">
        ZoetisDx
      </h1>

      <nav className="space-y-2">
        {items.map((item) => (
          <button
            key={item.key}
            onClick={() => onSelect(item.key)}
            className={`w-full text-left px-4 py-2 rounded-lg transition
              ${
                activeKey === item.key
                  ? "bg-orange-100 text-orange-600"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
          >
            {item.label}
          </button>
        ))}
      </nav>
    </aside>
  );
}
