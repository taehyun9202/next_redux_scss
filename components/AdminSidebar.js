import AssignmentIcon from "@material-ui/icons/Assignment";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import LocalMallIcon from "@material-ui/icons/LocalMall";
import SettingsIcon from "@material-ui/icons/Settings";
import StorefrontIcon from "@material-ui/icons/Storefront";
import AdminSidebarOption from "./AdminSidebarOption";
import { useState } from "react";

function AdminSidebar() {
  const [selection, setSelection] = useState("dashboard");
  console.log(selection);
  return (
    <div className="dashboardSidebar h-screen flex flex-col">
      <h1 className="font-black text-4xl text-gray-600 my-10 pl-8">
        Ecommerce Admin
      </h1>
      <div className="flex flex-col justify-center w-full px-auto">
        <AdminSidebarOption
          icon={<AssignmentIcon />}
          text="Dashboard"
          onClick={() => setSelection("Dashboard")}
        />
        <AdminSidebarOption
          icon={<PeopleAltIcon />}
          text="Customers"
          onClick={() => setSelection("Customers")}
        />
        <AdminSidebarOption
          icon={<StorefrontIcon />}
          text="Items"
          onClick={() => setSelection("Items")}
        />
        <AdminSidebarOption
          icon={<LocalMallIcon />}
          text="Orders"
          onClick={() => setSelection("Orders")}
        />
        <AdminSidebarOption
          icon={<SettingsIcon />}
          text="Admins"
          onClick={() => setSelection("Admins")}
        />
      </div>
    </div>
  );
}

export default AdminSidebar;
