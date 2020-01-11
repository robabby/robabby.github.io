import "./styles.scss"
import * as React from "react"
import { Box, Stack, Text, useTheme } from "@chakra-ui/core"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { Helmet } from "react-helmet"

export interface LayoutProps {
  location: {
    pathname: string
  }
  children: any
}

const Layout = (props: any): any => {
  const theme = useTheme()
  const COVER_BACKGROUND = theme.colors.gray["900"]

  console.log(theme)

  return (
    <>
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
          zIndex={theme.zIndices.toast}
        >
          <Box>
            <AniLink cover bg={COVER_BACKGROUND} direction="right" to="/">
              <Text fontSize="xl" fontWeight="bold" color="teal.100">
                Rob Abby
              </Text>
            </AniLink>
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
          zIndex={theme.zIndices.base}
        >
          {props.children}
        </Box>
      </Box>
    </>
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
