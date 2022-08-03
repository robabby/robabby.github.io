import "./styles.scss"
import * as React from "react"
import { Box, Stack, Text, ThemeProvider } from "@chakra-ui/react"
import { Helmet } from "react-helmet"
import customTheme from "./theme"

export interface LayoutProps {
  location: {
    pathname: string
  }
  children: any
}

const Layout = (props: any): any => {
  // const COVER_BACKGROUND = customTheme.colors.gray["900"]

  console.log(customTheme)

  return (
    <ThemeProvider theme={customTheme}>
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
          position="fixed"
          top="0"
          right="0"
          left="0"
          h={{ base: "60px", md: "80px" }}
          py="4"
          px="6"
          backgroundColor="gray.700"
          borderTop="2px"
          borderTopColor="blue.300"
          zIndex={customTheme.zIndices.toast}
        >
          <Box>
            <Text fontSize="xl" fontWeight="bold" color="teal.100">
              Rob Abby
            </Text>
          </Box>
          <Stack color="white" isInline spacing="4">
            {/* <Box>
              <AniLink
                cover
                bg={COVER_BACKGROUND}
                to={"/about"}
                activeStyle={{ fontWeight: "bold" }}
              >
                <Text fontSize="lg" color="teal.100">
                  About
                </Text>
              </AniLink>
            </Box>
            <Box>
              <AniLink
                cover
                bg={COVER_BACKGROUND}
                to={"/blog"}
                activeStyle={{ fontWeight: "bold" }}
              >
                <Text fontSize="lg" color="teal.100">
                  Blog
                </Text>
              </AniLink>
            </Box> */}
          </Stack>
        </Box>
        <Box
          mx="auto"
          w="100vw"
          h="100vh"
          pt={{ base: "60px", md: "80px" }}
          zIndex={customTheme.zIndices.base}
        >
          {props.children}
        </Box>
      </Box>
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
