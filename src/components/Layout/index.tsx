// import "prismjs/themes/prism-okaidia.css"
import * as React from "react"
import {
  Avatar,
  Box,
  ColorModeProvider,
  Flex,
  IconButton,
  ThemeProvider,
  theme,
  useColorMode
} from "@chakra-ui/core"
import { Helmet } from "react-helmet"
import { Link } from "gatsby"
import fry from "../../assets/images/fry.jpg"
import styles from "./styles.module.scss"

const { useEffect } = React

export interface LayoutProps {
  location: {
    pathname: string
  }
  children: any
}

const Layout = (props: any): any => {
  // TODO: Setup Color Mode
  const { colorMode, toggleColorMode } = useColorMode()
  const isLightMode = colorMode === "light"

  useEffect(() => {
    console.log(theme)
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <ColorModeProvider>
        <div className={styles.layout}>
          <Helmet>
            <meta charSet="utf-8" />
            <title>Rob Abby</title>
          </Helmet>
          <Box w="100%" h="100%" backgroundColor="gray.50">
            <Box p={4}>
              <Flex justify="space-between" align="center">
                <Link to="/">
                  <Avatar size="md" src={fry} />
                </Link>
                <Flex>
                  <IconButton
                    aria-label="Toggle Dark Mode"
                    icon="moon"
                    variant={isLightMode ? "ghost" : "solid"}
                    variantColor="blue"
                    onClick={toggleColorMode}
                  />
                  {/* TODO: Setup navigation */}
                  {/* <Box mr="4">
                    <Link to="/about">About</Link>
                  </Box>
                  <Box>
                    <Link to="/blog">Blog</Link>
                  </Box> */}
                </Flex>
              </Flex>
            </Box>
            <Box mx="auto" w={["100%", "1400px"]} h="100%">
              {props.children}
            </Box>
          </Box>
        </div>
      </ColorModeProvider>
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
