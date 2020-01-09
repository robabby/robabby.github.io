import * as React from "react"
import { Box, Stack, Text } from "@chakra-ui/core"
import { Helmet } from "react-helmet"
import { Link } from "gatsby"
import styles from "./styles.module.scss"

export interface LayoutProps {
  location: {
    pathname: string
  }
  children: any
}

const Layout = (props: any): any => {
  return (
    <div className={styles.layout}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Rob Abby</title>
      </Helmet>
      <Box
        d="flex"
        flexDirection="column"
        position="relative"
        w="100vw"
        h="100vh"
        overflowX="hidden"
        overflowY={["hidden", "auto"]}
        backgroundColor="gray.800"
      >
        <Box
          d="flex"
          flexShrink={0}
          justifyContent="space-between"
          alignItems="center"
          position="relative"
          w="100%"
          h="80px"
          py="4"
          px="6"
          backgroundColor="gray.700"
        >
          <Box>
            <Link to="/">
              <Text fontSize="xl" fontWeight="bold" color="teal.100">
                Rob Abby
              </Text>
            </Link>
          </Box>
          <Stack color="white" isInline spacing="4">
            <Box>
              <Link to={"/about"} activeStyle={{ fontWeight: "bold" }}>
                <Text fontSize="lg" color="teal.100">
                  About
                </Text>
              </Link>
            </Box>
            <Box>
              <Link to={"/blog"} activeStyle={{ fontWeight: "bold" }}>
                <Text fontSize="lg" color="teal.100">
                  Blog
                </Text>
              </Link>
            </Box>
          </Stack>
        </Box>
        <Box d={["none", "block"]} mx="auto" w="100%" h="100%" zIndex="base">
          {props.children}
        </Box>
      </Box>
    </div>
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
