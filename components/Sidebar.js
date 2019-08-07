import {

  Badge,

  Layout,
  
  Menu,

  Breadcrumb
} from 'antd';
import { Book, LogOut, Triangle } from 'react-feather';
import 'antd/dist/antd.css';
import { capitalize, lowercase } from '../lib/helpers';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Routes from '../lib/routes';
import { useAppState } from './shared/AppProvider';
import { withRouter } from 'next/router';

import Header from './Header'
import Inner from './styles/Sidebar';

const { SubMenu } = Menu;
const { Content, Footer, Sider } = Layout;

let rootSubMenuKeys = [];

const getKey = (name, index) => {
  const string = `${name}-${index}`;
  let key = string.replace(' ', '-');
  return key.charAt(0).toLowerCase() + key.slice(1);
};

const SidebarContent = ({
  sidebarTheme,
  sidebarMode,
  sidebarIcons,
  collapsed,
  router,
  children
}) => {
  const [state, dispatch] = useAppState();
  const [openKeys, setOpenKeys] = useState([]);
  const [collapse, onCollapse] = useState(false);
  const [appRoutes] = useState(Routes);
  const { pathname } = router;

  const badgeTemplate = badge => <Badge count={badge.value} />;

  

  useEffect(() => {
    appRoutes.forEach((route, index) => {
      const isCurrentPath =
        pathname.indexOf(lowercase(route.name)) > -1 ? true : false;
      const key = getKey(route.name, index);
      rootSubMenuKeys.push(key);
      if (isCurrentPath) setOpenKeys([...openKeys, key]);
    });
  }, []);

  const onOpenChange = openKeys => {
    const latestOpenKey = openKeys.slice(-1);
    if (rootSubMenuKeys.indexOf(latestOpenKey) === -1) {
      setOpenKeys([...latestOpenKey]);
    } else {
      setOpenKeys(latestOpenKey ? [...latestOpenKey] : []);
    }
  };

  const menu = (
    <>
      <Menu
       theme="dark" defaultSelectedKeys={['1']} mode="inline" openKeys={openKeys} 
       onOpenChange={onOpenChange}>
        {appRoutes.map((route, index) => {
          const hasChildren = route.children ? true : false;
          if (!hasChildren)
            return (
              <Menu.Item
                key={getKey(route.name, index)}
                className={
                  pathname === route.path ? 'ant-menu-item-selected' : ''
                }
                onClick={() => {
                  setOpenKeys([getKey(route.name, index)]);
                  if (state.mobile) dispatch({ type: 'mobileDrawer' });
                }}
              >
                <Link href={route.path} prefetch>
                  <a>
                    {sidebarIcons && (
                      <span className="anticon">{route.icon}</span>
                    )}
                    {/* <Icon type="pie-chart" /> */}
                    <span className="mr-auto">{capitalize(route.name)}</span>
                    {route.badge && badgeTemplate(route.badge)}
                  </a>
                </Link>
              </Menu.Item>
            );

          if (hasChildren)
            return (
              <SubMenu
                key={getKey(route.name, index)}
                title={
                  <span>
                    {sidebarIcons && (
                      <span className="anticon">{route.icon}</span>
                    )}
                    <span>{capitalize(route.name)}</span>
                    {route.badge && badgeTemplate(route.badge)}
                  </span>
                }
              >
                {route.children.map((subitem, index) => {
                  // console.log("subitem",subitem)
                 const hasSubChild = subitem.children ? true : false;
                 if(!hasSubChild)
                 return ( 
                  <Menu.Item
                    key={getKey(subitem.name, index)}
                    className={
                      pathname === subitem.path ? 'ant-menu-item-selected' : ''
                    }
                    onClick={() => {
                      if (state.mobile) dispatch({ type: 'mobileDrawer' });
                    }}
                  >
                    <Link href={`${subitem.path ? subitem.path : ''}`} prefetch>
                      <a>
                        <span className="mr-auto">
                          {capitalize(subitem.name)}
                        </span>
                        {subitem.badge && badgeTemplate(subitem.badge)}
                      </a>
                    </Link>
                    </Menu.Item>
                  )
                  if(hasSubChild)
                  return (
                    <SubMenu
                      key={getKey(subitem.name, index)}
                      title={
                        <span>
                          {sidebarIcons && (
                            <span className="anticon">{subitem.icon}</span>
                          )}
                          <span>{capitalize(subitem.name)}</span>
                          {subitem.badge && badgeTemplate(subitem.badge)}
                        </span>
                      }
                    >
                    {subitem.children.map((nestSubItem, index)=>{ 
                          console.log("nestSubitems", nestSubItem)
                        return (
                        <Menu.Item
                          key={getKey(nestSubItem.name, index)}
                          className={
                            pathname === nestSubItem.path ? 'ant-menu-item-selected' : ''
                          }
                          onClick={() => {
                            if (state.mobile) dispatch({ type: 'mobileDrawer' });
                          }}
                        >
                        <Link href={`${nestSubItem.path ? nestSubItem.path : ''}`} prefetch>
                        <a>
                          <span className="mr-auto">
                            {capitalize(nestSubItem.name)}
                          </span>
                          {nestSubItem.badge && badgeTemplate(nestSubItem.badge)}
                        </a>
                      </Link>
                      </Menu.Item>
                    )})}

                    </SubMenu>
                  )
                })}
              </SubMenu>
            );
        })}
      </Menu>
    </>
  );



  const bread = (
    <>
    {appRoutes.map((route, index) => {
      const hasChildren = route.children ? true : false;
      if(!hasChildren)
        return (
          <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>{route.path}</Breadcrumb.Item>
          </Breadcrumb>
        )
    })}
    </>
  )
  return (
    <>
      {/* <Inner> */}
      <Layout style={{ minHeight: '100vh' }}>
        {!state.mobile && (
          <Sider
            width={240}
            collapsible
            // onClick={()=> dispatch({ type: 'sidebarIcons' })}
            // onClick={state.collapsed}
          >
            <div className="logo" >L O G O</div>
            {menu}
          </Sider>
        )}
          <Layout>
          
          <Header style={{ background: '#fff', padding: 0 }} />
            <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb>
            <div style={{ padding: 24, background: '#fff', minHeight: "90%" }} className="example-sass">{children}</div>
           </Content>
          
         </Layout>
        
        </Layout>
      {/* </Inner> */}
    </>
  );
};

export default withRouter(SidebarContent);
