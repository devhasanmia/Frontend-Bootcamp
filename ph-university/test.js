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


const sideberItems = adminPaths.reduce((acc, item) => {
  if (item.name && item.path) {
    acc.push({
      key: item.name,
      label: "Nav LINK"
    })
  }
  if (item.children) {
    acc.push({
      key: item.name,
      label: item.name,
      children: item.children.map((child) => ({
        key: child.name,
        label: "Navlink"
      }))
    })
  }
  return acc
}, [])


console.log(JSON.stringify(sideberItems));
        