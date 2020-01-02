// import "prismjs/themes/prism-okaidia.css"
import * as React from "react"
import { Avatar, Box, Flex, ThemeProvider, theme } from "@chakra-ui/core"
import { Helmet } from "react-helmet"
import { Link } from "gatsby"
import fry from "../../assets/images/fry.jpg"
import styles from "./styles.module.scss"

export interface LayoutProps {
  location: {
    pathname: string
  }
  children: any
}

const Layout = (props: any): any => {
  return (
    <ThemeProvider theme={theme}>
      <div className={styles.layout}>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Rob Abby</title>
        </Helmet>
        <Box w="100%" p={4} borderBottom="1px" borderBottomColor="gray.300">
          <Flex justify="space-between" align="center">
            <Link to="/">
              <Avatar size="md" src={fry} />
            </Link>
            {/* TODO: Setup navigation */}
            {/* <Flex>
              <Box mr="4">
                <Link to="/about">About</Link>
              </Box>
              <Box>
                <Link to="/blog">Blog</Link>
              </Box>
            </Flex> */}
          </Flex>
        </Box>
        {props.children}
      </div>
    </ThemeProvider>
  )
}

export default Layout

export const withLayout = <P extends object>(
  WrappedComponent: React.FunctionComponent<P>
) =>
  function WithLayout(props: P & LayoutProps) {
    return (
      <Layout location={props.location}>
        <WrappedComponent {...props} />
      </Layout>
    )
  }
