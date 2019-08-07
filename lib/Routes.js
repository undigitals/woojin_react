import {
  AlertCircle,
  Bold,
  Droplet,
  Gift,
  HelpCircle,
  Home,
  Image,
  Link,
  MapPin,
  MessageCircle,
  Navigation,
  PieChart,
  Sidebar,
  Terminal,
  Type,
  Underline,
  User
} from 'react-feather';

export default [
  // {
  //   path: '/',
  //   name: 'Home',
  //   icon: <Home strokeWidth={1} size={16} />
  // },
  {
    path:'/control',
    name: 'Control',
    icon: <MessageCircle strokeWidth={1} size={16} />,
    children: [
      {
        path: '/control/status',
        name: 'Status',
        children: [
          {
            path: '/control/status/busDetailStatus',
            name: 'Bus Detail Status'
          },
          {
            path: '/control/status/busMonitoring',
            name: 'Bus Monitoring'
          },
          {
            path: '/control/status/chagerStatus',
            name: 'Charger Status'
          }
        ]
      },
      {
        path: '/control/operation',
        name: 'Operation',
        children: [
          {
            path: '/control/operation/chargerOperate',
            name: 'Charger Operate'
           }, {
              path: '/control/operation/chargerStatus',
              name: 'Charger Status'
            }
        ]
      },
    ]
  },
  {
    path:'/lookup',
    name: 'Look Up',
    icon: <MessageCircle strokeWidth={1} size={16} />,
    children: [
      {
        path: '/lookup/historySearch',
        name: 'History Search',
        children: [
          {
            path: '/lookup/historySearch/busChargeHistory',
            name: 'Bus Charge History'
          },
          {
            path: '/lookup/historySearch/chargerChargeHistory',
            name: 'Charger Charge History'
          }
        ]
      },
    ]
  },
  {
    path:'/management',
    name: 'Management',
    icon: <MessageCircle strokeWidth={1} size={16} />,
    children: [
      {
        path: '/management/maintenance',
        name: 'Maintenance',
        children: [
          {
            path: '/management/maintenance/busAlarmProc',
            name: 'Bus Alarm Process'
          },
          {
            path: '/management/maintenance/chargerGenAlarm',
            name: 'Charger Gen Alarm'
          },
          {
            path: '/management/maintenance/maintenanceResult',
            name: 'Maintenance Result'
          }
        ]
      },
      {
        path: '/management/registrationManage',
        name: 'Registration Management',
        children: [
          {
            path: '/management/registrationManage/bmsRegistered',
            name: 'BMS Registered'
          },
          {
            path: '/management/registrationManage/buses',
            name: 'Buses'
          },
          {
            path: '/management/registrationManage/registeredClient',
            name: 'Registered Client'
          },
          {
            path: '/management/registrationManage/routesRegistered',
            name: 'Routes Registered'
          },
        ]
      },
      {
        path: '/management/settingsManage',
        name: 'Settings Management',
        children: [
          {
            path: '/management/settingsManage/baseCode',
            name: 'Base Code '
          },
          {
            path: '/management/settingsManage/group',
            name: 'Group'
          },
          {
            path: '/management/settingsManage/menu',
            name: 'Menu'
          },
          {
            path: '/management/settingsManage/partner',
            name: 'Partner'
          },
          {
            path: '/management/settingsManage/permissions',
            name: 'Permissions'
          },
          {
            path: '/management/settingsManage/user',
            name: 'User'
          },
        ]
      }
    ]
  }
 
];
