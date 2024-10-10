const adminPaths = [
  {
    name: "dashboard",
    path: "dashboard",
    element: "<AdminDashboard />",
  },
  {
    name: "User Management",
    children: [
      {
        name: "dashboard",
        path: "dashboard",
        element: "<AdminDashboard />",
      },
      {
        name: "Create Faculty",
        path: "create-faculty",
        element: "<CreateFaculty />",
      },
      {
        name: "Create Student",
        path: "create-student",
        element: "<CreateStudent />",
      },
    ],
  },
];

/**
 * key: "Dashboard",
    label: <NavLink to={"/admin/dashboard"}>Dashboard</NavLink>,
 */

const sideBar = adminPaths.reduce((acc, item) => {
  if (item.name && item.path) {
    acc.push({
      key: item.name,
      label: "Navlink",
    });
  }
  if (item.children) {
    item.children.map((child) =>
      acc.push({
        key: child.name,
        label: child.name,
        children: []
      })
    );
  }
  return acc;
}, []);

console.log(sideBar);
