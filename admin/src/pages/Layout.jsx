import { Outlet } from "react-router-dom";
import Sidebar from "../common/Sidebar";

function Layout() {
  return (
    <>
      <Sidebar/>
      <Outlet />
    </>
  );
}

export default Layout;