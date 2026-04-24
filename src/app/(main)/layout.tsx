import { type JSX } from "react";
import SideBar from "@/components/SideBar";

function MainLayout({ children }: { children: React.ReactNode }): JSX.Element {
  return (
    <div>
      <SideBar />
      {children}
    </div>
  );
}
export default MainLayout;
