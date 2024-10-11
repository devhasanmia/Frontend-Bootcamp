import React, { useState } from "react";
import { BsMenuButtonWideFill } from "react-icons/bs";
import { Button, Layout, Menu } from "antd";
import { Footer } from "antd/es/layout/layout";
import { Outlet } from "react-router-dom";
import { SidebarItemGenerator } from "../../utils/SidebarGenerator";
import { facultyPaths } from "../../routes/faculty.routes";
import { adminPaths } from "../../routes/admin.routes";
import { studentPaths } from "../../routes/student.routes";
import { ItemType, MenuItemType } from "antd/es/menu/interface";
import { TSidebarItem } from "../../types";
const { Header, Sider, Content } = Layout;

// Role Managment Start
let userRole = {
  ADMIN: "admin",
  FACULTY: "faculty",
  STUDENT: "student",
};

let role = "faculty";

let sidebarItem: TSidebarItem[] | ItemType<MenuItemType>[] | undefined;

switch (role) {
  case userRole.ADMIN:
    sidebarItem = SidebarItemGenerator(adminPaths, userRole.ADMIN);
    break;
  case userRole.FACULTY:
    sidebarItem = SidebarItemGenerator(facultyPaths, userRole.FACULTY);
    break;
  case userRole.STUDENT:
    sidebarItem = SidebarItemGenerator(studentPaths, userRole.STUDENT);
    break;
}

// Role Managment End

const App: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <Layout style={{ height: "100vh" }}>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div
          style={{
            color: "white",
            height: "4rem",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h1>PH</h1>
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["6"]}
          items={sidebarItem}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0 }}>
          <Button
            type="text"
            icon={
              collapsed ? <BsMenuButtonWideFill /> : <BsMenuButtonWideFill />
            }
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              color: "white",
              width: 64,
              height: 64,
            }}
          />
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
          }}
        >
          <Outlet />
        </Content>
        <Footer style={{ textAlign: "center" }}>
          PH &copy; 2024-{new Date().getFullYear()} All Rights Reserved.
        </Footer>
      </Layout>
    </Layout>
  );
};

export default App;
