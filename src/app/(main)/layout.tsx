import { type JSX } from "react";

function MainLayout({ children }: { children: React.ReactNode }): JSX.Element {
  return <div>{children}</div>;
}
export default MainLayout;
