import React, { useState } from "react";
import { BsMenuButtonWideFill } from "react-icons/bs";
import { Button, Layout, Menu, MenuProps } from "antd";
import { Footer } from "antd/es/layout/layout";
import { NavLink, Outlet } from "react-router-dom";

const { Header, Sider, Content } = Layout;

let items: MenuProps["items"] = [
  {
    key: "Dashboard",
    label: <NavLink to={"/admin/dashboard"}>Dashboard</NavLink>,
  },
  {
    key: "User Management",
    label: "User Management",
    children: [
      {
        key: "Create Faculty",
        label: <NavLink to={"/admin/create-faculty"}>Create Faculty</NavLink>,
      },
      {
        key: "Create Student",
        label: <NavLink to={"/admin/create-student"}>Create Student</NavLink>,
      },
    ],
  },
];

const App: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout style={{ height: "100vh" }}>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div
          style={{
            color: "white",
            height:'4rem',
            display:"flex",
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
          items={items}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0 }}>
          <Button
            type="text"
            icon={collapsed ? <BsMenuButtonWideFill /> : <BsMenuButtonWideFill />}
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
         <Outlet/>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          PH &copy; 2024-{new Date().getFullYear()} All Rights Reserved.
        </Footer>
      </Layout>
    </Layout>
  );
};

export default App;
