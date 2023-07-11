import * as React from "react";
import "./layout.scss";

type LayoutProps = {
  children: React.ReactNode;
};
const Layout: React.FC<LayoutProps> = ({ children }) => {
  return <main>{children}</main>;
};

export default Layout;
