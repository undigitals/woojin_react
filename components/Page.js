import React, { Component } from "react";
import { Layout} from 'antd'
// import { Container, Inner } from './styles/Page';
// import Header from "./Header";
import SideBar from './Sidebar';
import Meta from "./Meta";
import styled, { ThemeProvider } from "styled-components";
import { withRouter } from "next/router"

const {Content, Header} = Layout


const NonDashboardRoutes = [
    '/signin',
    '/signup',
    '/forgot',
    '/lockscreen',
    '/_error'
];



class Page extends Component {
  constructor(props){
      super(props)
  }

  render() {

    const {router, children} = this.props
    const isNotDashboard = NonDashboardRoutes.includes(router.pathname);

    return (
      <ThemeProvider theme={theme}>
        <StyledPage>
          <Meta />
         
        
            {!isNotDashboard && <SideBar>{children}</SideBar>}
          

             {/* <Header style={{ background: '#fff', padding: 0 }} />
            <Content style={{ margin: '0 16px' }}>
                    {!isNotDashboard ? <Inner>{this.props.children}</Inner>: children}
                </Content> 
           */}
            
         
        </StyledPage>
      </ThemeProvider>
    );
  }
}

export default withRouter(Page);

const theme = {
  red: "#FF0000",
  black: "#393939",
  grey: "#3A3A3A",
  lightgrey: "#E1E1E1",
  offWhite: "#EDEDED",
  maxWidth: "1000px",
  bs: "0 12px 24px 0 rgba(0, 0, 0, 0.09)"
};

const StyledPage = styled.div`
  background: white;
  color: ${props => props.theme.black};
`;

const Inner = styled.div`
 padding: 24, 
 background: '#fff', 
 minHeight: "90%" 
`;

// injectGlobal`
//   @font-face {
//     font-family: 'radnika_next';
//     src: url('/static/radnikanext-medium-webfont.woff2') format('woff2');
//     font-weight: normal;
//     font-style: normal;
//   }
//   html {
//     box-sizing: border-box;
//     font-size: 10px;
//   }
//   *, *:before, *:after {
//     box-sizing: inherit;
//   }
//   body {
//     padding: 0;
//     margin: 0;
//     font-size: 1.5rem;
//     line-height: 2;
//     font-family: 'radnika_next';
//   }
//   a {
//     text-decoration: none;
//     color: ${theme.black};
//   }
//   button {  font-family: 'radnika_next'; }
// `;
