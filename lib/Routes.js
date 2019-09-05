import { MessageCircle } from "react-feather";

export default [
  // {
  //   path: '/',
  //   name: 'Home',
  //   icon: <Home strokeWidth={1} size={16} />
  // },

  // Controller path
  {
    id: "control",
    name: "관제",
    icon: <MessageCircle strokeWidth={1} size={16} />,
    children: [
      {
        name: "현황",
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
        name: "운영",
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
    name: "조회",
    icon: <MessageCircle strokeWidth={1} size={16} />,
    children: [
          {
            path: "/lookup/busChargeHistory",
            name: "Bus Charge History",
            
          },
          {
            path: "/lookup/chargerChargeHistory",
            name: "Charger Charge History",
           
          }
        ]
  },
  //management path
  {
    path: "/management",
    name: "관리",
    icon: <MessageCircle strokeWidth={1} size={16} />,
    children: [
      {
        path: "/management/registeredClient",
        name: "Registered Client",
        
      },
      {
        path: "/management/routesRegistered",
        name: "Routes Registered",
       
      },
      {
        path: "/management/bmsRegistered",
        name: "BMS Registered"
      },
      // {
      //   path: "/management/registeredBuses",
      //   name: "Buses",
        
      // },
      {
        path: "/management/busAlarmProc",
        name: "Bus Alarm Process",
        
      },
      {
        path: "/management/chargerGenAlarm",
        name: "Charger Gen Alarm",
        
      },
      {
        path: "/management/maintenanceResult",
        name: "Maintenance Result",
        
      },
      // {
      //   path: "/management/baseCode",
      //   name: "Base Code ",
        
      // },
      // {
      //   path: "/management/group",
      //   name: "Group",
       
      // },
      // {
      //   path: "/management/menu",
      //   name: "Menu",
        
      // },
      // {
      //   path: "/management/partner",
      //   name: "Partner",
        
      // },
      // {
      //   path: "/management/permissions",
      //   name: "Permissions",
        
      // },
      {
        path: "/management/user",
        name: "User",
        
      }
    ]
  }
];
