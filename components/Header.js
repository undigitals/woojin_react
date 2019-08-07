import { Avatar, Badge, Layout, List, Menu } from 'antd';
import {
  BarChart,
  Bell,
} from 'react-feather';
import DashHeader, { Notification } from './styles/Header';

import Link from 'next/link';
import MockNotifications from '../mock/notification';
import { useState } from 'react';
import styled from "styled-components"
const { SubMenu } = Menu;
const { Header } = Layout;

const MainHeader = () => {
  const [notifications] = useState(MockNotifications);
  return (
   
      <StyledHeader>
        <StyledMenu mode="horizontal">
          <SubMenu
            title={
              <Badge count={5}>
                <span className="submenu-title-wrapper">
                  <Bell size={20} strokeWidth={1} />
                </span>
              </Badge>
            }
          >
            <Menu.Item
            //   className="p-0 bg-transparent"
              style={{ height: 'auto' }}
            >
              <List
                className="header-notifications"
                itemLayout="horizontal"
                dataSource={notifications}
                footer={<div>5 Notifications</div>}
                renderItem={item => (
                  <Notification>
                    <List.Item>
                      <List.Item.Meta
                        avatar={item.avatar}
                        title={<a href="javascript:;">{item.title}</a>}
                        description={<small>{item.description}</small>}
                      />
                    </List.Item>
                  </Notification>
                )}
              />
            </Menu.Item>
          </SubMenu>
          <SubMenu
            title={
              <Badge count={5}>
                <span className="submenu-title-wrapper">
                  <Bell size={20} strokeWidth={1} />
                </span>
              </Badge>
            }
          >
            <Menu.Item
              className="p-0 bg-transparent"
              style={{ height: 'auto' }}
            >
              <List
                className="header-notifications"
                itemLayout="horizontal"
                dataSource={notifications}
                footer={<div>5 Notifications</div>}
                renderItem={item => (
                  <Notification>
                    <List.Item>
                      <List.Item.Meta
                        avatar={item.avatar}
                        title={<a href="javascript:;">{item.title}</a>}
                        description={<small>{item.description}</small>}
                      />
                    </List.Item>
                  </Notification>
                )}
              />
            </Menu.Item>
          </SubMenu>
        </StyledMenu>
      </StyledHeader>
 
  );
};

export default MainHeader;



const StyledHeader = styled(Header)`
    background: #fff !important;
    display: flex;
    flex-direction: column;
    justify-content: center;
`
const StyledMenu = styled(Menu)`
    border: none;
    text-align: right;
`

