import App, { Container } from "next/app";
import Page from "../components/Page";
import { ApolloProvider } from "react-apollo";
import AppProvider from '../components/shared/AppProvider';
import withData from "../lib/withData";

class MyApp extends App {
  // getInitialProps is next.js special lifecycle method
  // it will run before render().
  // these code will make page number on browser url
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};
    const userAgent = ctx.req
      ? ctx.req.headers['user-agent']
      : navigator.userAgent;
    // these code will crawl on the page look for any mutation or query
    // and before render it will fetch them and send to browser
    // as next.js SSRs
    let ie = false;
    if (userAgent.match(/Edge/i) || userAgent.match(/Trident.*rv[ :]*11\./i)) {
      ie = true;
    }
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    // this exposes the query to the user
    pageProps.query = ctx.query;
    pageProps.ieBrowser = ie;
    return { pageProps };
  }
  render() {
    const { Component, apollo, pageProps } = this.props;

    return (
      <Container>
        <ApolloProvider client={apollo}>
          <AppProvider>
          <Page>
            <Component {...pageProps} />
          </Page>
          </AppProvider>
        </ApolloProvider>
      </Container>
    );
  }
}

export default withData(MyApp);