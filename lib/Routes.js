import { MessageCircle } from "react-feather";

export default [
  // {
  //   path: '/',
  //   name: 'Home',
  //   icon: <Home strokeWidth={1} size={16} />
  // },

  // Controller path
  {
    name: "Control",
    id: "control",
    icon: <MessageCircle strokeWidth={1} size={16} />,
    children: [
      {
        name: "Status",
        children: [
          {
            path: "/control/status/busDetailStatus",
            name: "Bus Detail Status",
            children: [
              {
                path: "/test",
                name: "Test"
              }
            ]
          },
          {
            path: "/control/status/busMonitoring",
            name: "Bus Monitoring",
            children: []
          },
          {
            path: "/control/status/chagerStatus",
            name: "Charger Status",
            children: []
          }
        ]
      },
      {
        path: "/control/operation",
        name: "Operation",
        children: [
          {
            path: "/control/operation/chargerOperate",
            name: "Charger Operate",
            children: []
          },
          {
            path: "/control/operation/chargerStatus",
            name: "Charger Status",
            children: []
          }
        ]
      }
    ]
  },
  //look up path
  {
    path: "/lookup",
    name: "Look Up",
    icon: <MessageCircle strokeWidth={1} size={16} />,
    children: [
      {
        path: "/lookup/historySearch",
        name: "History Search",
        children: [
          {
            path: "/lookup/historySearch/busChargeHistory",
            name: "Bus Charge History",
            children: []
          },
          {
            path: "/lookup/historySearch/chargerChargeHistory",
            name: "Charger Charge History",
            children: []
          }
        ]
      }
    ]
  },
  //management path
  {
    path: "/management",
    name: "Management",
    icon: <MessageCircle strokeWidth={1} size={16} />,
    children: [
      {
        path: "/management/registrationManage",
        name: "Registration Management",
        children: [
          {
            path: "/management/registrationManage/registeredClient",
            name: "Registered Client",
            children: []
          },
          {
            path: "/management/registrationManage/routesRegistered",
            name: "Routes Registered",
            children: []
          },
          {
            path: "/management/registrationManage/bmsRegistered",
            name: "BMS Registered"
          },
          {
            path: "/management/registrationManage/registeredBuses",
            name: "Buses",
            children: []
          }
        ]
      },
      {
        path: "/management/maintenance",
        name: "Maintenance",
        children: [
          {
            path: "/management/maintenance/busAlarmProc",
            name: "Bus Alarm Process",
            children: []
          },
          {
            path: "/management/maintenance/chargerGenAlarm",
            name: "Charger Gen Alarm",
            children: []
          },
          {
            path: "/management/maintenance/maintenanceResult",
            name: "Maintenance Result",
            children: []
          }
        ]
      },

      {
        path: "/management/settingsManage",
        name: "Settings Management",
        children: [
          {
            path: "/management/settingsManage/baseCode",
            name: "Base Code ",
            children: []
          },
          {
            path: "/management/settingsManage/group",
            name: "Group",
            children: []
          },
          {
            path: "/management/settingsManage/menu",
            name: "Menu",
            children: []
          },
          {
            path: "/management/settingsManage/partner",
            name: "Partner",
            children: []
          },
          {
            path: "/management/settingsManage/permissions",
            name: "Permissions",
            children: []
          },
          {
            path: "/management/settingsManage/user",
            name: "User",
            children: []
          }
        ]
      }
    ]
  }
];
