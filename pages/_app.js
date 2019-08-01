import App, { Container } from "next/app";
import Page from "../components/Page";
import { ApolloProvider } from "react-apollo";
import withData from "../lib/withData";

class MyApp extends App {
  // getInitialProps is next.js special lifecycle method
  // it will run before render().
  // these code will make page number on browser url
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};
    // these code will crawl on the page look for any mutation or query
    // and before render it will fetch them and send to browser
    // as next.js SSRs
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    // this exposes the query to the user
    pageProps.query = ctx.query;
    return { pageProps };
  }
  render() {
    const { Component, apollo, pageProps } = this.props;

    return (
      <Container>
        <ApolloProvider client={apollo}>
          <Page>
            <Component {...pageProps} />
          </Page>
        </ApolloProvider>
      </Container>
    );
  }
}

export default withData(MyApp);
