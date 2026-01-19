declare module "*.css" ;

declare module "mfe1/App" {
  const App: React.ComponentType<any>;
  export default App;
}

declare module "mfe2/App" {
  const App: React.ComponentType<any>;
  export default App;
}
declare module "shared-ui/Menu" {
  const MenuItem: React.ComponentType<any>;
  export default MenuItem;
}
declare module "shared-ui/Sidebar" {
  import React from "react";
  export type SidebarProps = {
    onNavigate: (route: string) => void;
  };
  export const Sidebar: React.ComponentType<SidebarProps>;
  const _default: React.ComponentType<SidebarProps>;
  export default _default;
}

declare module "shared-ui/src/components/Sidebar" {
  import React from "react";
  export type SidebarProps = {
    onNavigate: (route: string) => void;
  };
  export const Sidebar: React.ComponentType<SidebarProps>;
  const _default: React.ComponentType<SidebarProps>;
  export default _default;
}

declare module "shared_ui/MenuItem" {
  const MenuItem: React.ComponentType<any>;
  export default MenuItem;
}
declare module "shared_ui/Sidebar" {
  import React from "react";
  export type SidebarProps = {
    onNavigate: (route: string) => void;
  };
  export const Sidebar: React.ComponentType<SidebarProps>;
  const _default: React.ComponentType<SidebarProps>;
  export default _default;
}