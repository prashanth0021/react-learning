type Props = {
  label: string;
  route: string;
  active?: boolean;
  onClick: (route: string) => void;
};

export function MenuItem({ label, route, active, onClick }: Props) {
  return (
    <button
      onClick={() => onClick(route)}
      className={`flex items-center gap-3 w-full px-4 py-3 rounded-lg transition
        ${active ? "bg-blue-600 text-white" : "text-gray-300 hover:bg-gray-700"}
      `}
    >
      <span className="text-sm font-medium">{label}</span>
    </button>
  );
}
