import React from "react";

type MenuItemProps = {
	label: string;
	onClick: () => void;
	active?: boolean;
};

export const MenuItem: React.FC<MenuItemProps> = ({ label, onClick, active }) => {
	const base =
		"relative block w-full text-left pl-6 pr-4 py-3 rounded-lg transition transform duration-200 ease-out flex items-center gap-3";
	const state = active
		? "bg-white/20 scale-105 shadow-lg"
		: "hover:bg-white/10 hover:scale-105";

	return (
		<button
			onClick={onClick}
			aria-pressed={active}
			className={`${base} ${state} focus:outline-none focus:ring-2 focus:ring-indigo-300`}
		>
			{active && <span className="absolute left-0 top-0 h-full w-1 bg-white/90 rounded-r-md" />}

			<svg
				className="w-4 h-4 text-white/90 flex-shrink-0"
				viewBox="0 0 24 24"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				aria-hidden
			>
				<circle cx="12" cy="12" r="10" fill="currentColor" opacity="0.12" />
				<circle cx="12" cy="12" r="4" fill="currentColor" />
			</svg>
			<span className="text-base font-semibold">{label}</span>
		</button>
	);
};