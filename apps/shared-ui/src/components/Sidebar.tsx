// // import React, { useState } from "react";
// // import { MenuItem } from "./MenuItem";

// // type SidebarProps = {
// //   onNavigate: (route: string) => void;
// // };

// // export const Sidebar: React.FC<SidebarProps> = ({ onNavigate }) => {
// //   const [selected, setSelected] = useState<string>("mfe1");

// //   const handleNav = (route: string) => {
// //     setSelected(route);
// //     onNavigate(route);
// //   };

// //   return (
// //     <aside className="w-64 h-screen flex flex-col bg-gradient-to-b from-indigo-600 via-purple-600 to-pink-600 text-white p-6 shadow-xl rounded-r-2xl">
// //       <div className="flex items-center gap-3 mb-6">
// //         <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shadow-md">
// //           <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
// //             <defs>
// //               <linearGradient id="g" x1="0" x2="1">
// //                 <stop offset="0" stopColor="#fff" stopOpacity="0.9" />
// //                 <stop offset="1" stopColor="#fff" stopOpacity="0.6" />
// //               </linearGradient>
// //             </defs>
// //             <rect width="24" height="24" rx="6" fill="url(#g)" opacity="0.12" />
// //             <path d="M6 12h12" stroke="#ffffff" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" opacity="0.95" />
// //           </svg>
// //         </div>
// //         <span className="sr-only">Microfrontend</span>
// //       </div>

// //       <nav className="space-y-3 mt-8">
// //         <MenuItem label="MFE 1" onClick={() => handleNav("mfe1")} active={selected === "mfe1"} />
// //         <MenuItem label="MFE 2" onClick={() => handleNav("mfe2")} active={selected === "mfe2"} />
// //       </nav>
      
// //     </aside>
// //   );
// // };
// import React, { useState } from "react";
// import { MenuItem } from "./MenuItem";

// type SidebarProps = {
//   onNavigate: (route: string) => void;
// };

// export const Sidebar: React.FC<SidebarProps> = ({ onNavigate }) => {
//   const [selected, setSelected] = useState<string>("mfe1");

//   const handleNav = (route: string) => {
//     setSelected(route);
//     onNavigate(route);
//   };

//   return (
//     <aside className="w-64 h-screen flex flex-col bg-gradient-to-b from-indigo-600 via-purple-600 to-pink-600 text-white p-6 shadow-xl rounded-r-2xl">
//       <div className="flex items-center gap-3 mb-6">
//         <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shadow-md">
//           {/* SVG Logo */}
//           <svg width="36" height="36" viewBox="0 0 24 24" fill="none">
//             <defs>
//               <linearGradient id="g" x1="0" x2="1">
//                 <stop offset="0" stopColor="#fff" stopOpacity="0.9" />
//                 <stop offset="1" stopColor="#fff" stopOpacity="0.6" />
//               </linearGradient>
//             </defs>
//             <rect width="24" height="24" rx="6" fill="url(#g)" opacity="0.12" />
//             <path d="M6 12h12" stroke="#ffffff" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" opacity="0.95" />
//           </svg>
//         </div>
//         <span className="sr-only">Microfrontend</span>
//       </div>

//       <nav className="space-y-3 mt-8">
//         <MenuItem label="MFE 1" onClick={() => handleNav("mfe1")} active={selected === "mfe1"} />
//         <MenuItem label="MFE 2" onClick={() => handleNav("mfe2")} active={selected === "mfe2"} />
//       </nav>
//     </aside>
//   );
// };
import React, { useState } from "react";
import { MenuItem } from "./MenuItem";

type SidebarProps = {
  onNavigate: (route: string) => void;
};

export const Sidebar: React.FC<SidebarProps> = ({ onNavigate }) => {
  const [selected, setSelected] = useState<string>("mfe1");

  const handleNav = (route: string) => {
    setSelected(route);
    onNavigate(route);
  };

  return (
    <aside className="w-64 h-screen flex flex-col bg-gradient-to-b from-indigo-600 via-purple-600 to-pink-600 text-white p-6 shadow-xl rounded-r-2xl">
      {/* Microfrontend label at the top */}
      <div className="flex items-center gap-3 mb-8">
        <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shadow-md">
          <svg width="36" height="36" viewBox="0 0 24 24" fill="none">
            <defs>
              <linearGradient id="g" x1="0" x2="1">
                <stop offset="0" stopColor="#fff" stopOpacity="0.9" />
                <stop offset="1" stopColor="#fff" stopOpacity="0.6" />
              </linearGradient>
            </defs>
            <rect width="24" height="24" rx="6" fill="url(#g)" opacity="0.12" />
            <path d="M6 12h12" stroke="#ffffff" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" opacity="0.95" />
          </svg>
        </div>
        <span className="text-xl font-bold">Microfrontend</span>
      </div>

      {/* MFE menu items */}
      <nav className="space-y-3">
        <MenuItem label="MFE 1" onClick={() => handleNav("mfe1")} active={selected === "mfe1"} />
        <MenuItem label="MFE 2" onClick={() => handleNav("mfe2")} active={selected === "mfe2"} />
      </nav>
    </aside>
  );
};
