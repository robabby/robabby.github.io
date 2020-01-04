import * as React from "react"
import {
  Avatar,
  Box,
  Button,
  ColorModeProvider,
  Heading,
  Stack,
  Text,
  ThemeProvider,
  theme
  // useColorMode
} from "@chakra-ui/core"
import { FaLinkedin, FaTwitch, FaTwitter } from "react-icons/fa"
import { GoMarkGithub } from "react-icons/go"
import { Helmet } from "react-helmet"
import avatar from "../../assets/images/photo.jpg"
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
  // const { colorMode, toggleColorMode } = useColorMode()
  // const isLightMode = colorMode === "light"

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
          <Box
            d="flex"
            flexDirection="column-reverse"
            position="relative"
            w="100%"
            h="100vh"
            overflowY="hidden"
            backgroundColor="gray.800"
          >
            {/* TODO: Setup navigation */}
            {/* <Box
              p={4}
              position="absolute"
              top="0"
              right="0"
              left="0"
              zIndex="docked"
            >
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
                  <Box mr="4">
                    <Link to="/about">About</Link>
                  </Box>
                  <Box>
                    <Link to="/blog">Blog</Link>
                  </Box>
                </Flex>
              </Flex>
            </Box> */}
            <Box
              d="flex"
              flexDirection="column"
              justifyContent="space-between"
              alignItems="center"
              position="relative"
              w="100%"
              h="100%"
              p="12"
              backgroundColor="gray.700"
              borderTop="4px"
              borderColor="blue.300"
            >
              <Box my="12" w="50%">
                <Box>
                  <Stack isInline spacing={4} d="flex" alignItems="center">
                    <Avatar size="lg" src={avatar} border="1px" />
                    <Heading as="h1" fontSize="6xl" color="teal.100">
                      Rob Abby
                    </Heading>
                  </Stack>
                  <Heading as="h2" fontSize="3xl" mt={5} color="gray.300">
                    UI/UX &amp; Product Professional
                  </Heading>
                  <Text
                    color="gray.300"
                    fontSize="xl"
                    mt="4"
                    lineHeight="shorter"
                  >
                    I am a seasoned{" "}
                    <a href="https://blog.pragmaticengineer.com/the-product-minded-engineer/">
                      <Text as="ins" color="blue.300">
                        product engineer
                      </Text>
                    </a>{" "}
                    with a passion for innovating and building engaging
                    experiences for users on the web. I enjoy collaborating with
                    product, user experience, and development teams to create
                    engaging products and experiences. I thrive working in
                    high-functioning, cross-disciplinary teams that focus on an
                    agile, user-centered discovery process where collaboration
                    and growth are the core values.
                  </Text>
                </Box>
                <Stack isInline mt="12">
                  <Button
                    leftIcon={GoMarkGithub}
                    color="gray.50"
                    cursor="pointer"
                    onClick={() =>
                      (window.location = "https://github.com/robabby")
                    }
                  >
                    GitHub
                  </Button>
                  <Button
                    leftIcon={FaLinkedin}
                    color="gray.50"
                    cursor="pointer"
                    onClick={() =>
                      (window.location = "https://www.linkedin.com/in/robabby/")
                    }
                  >
                    LinkedIn
                  </Button>
                  <Button
                    leftIcon={FaTwitter}
                    color="gray.50"
                    cursor="pointer"
                    onClick={() =>
                      (window.location = "https://twitter.com/robabby83")
                    }
                  >
                    Twitter
                  </Button>
                  <Button
                    leftIcon={FaTwitch}
                    color="gray.50"
                    cursor="pointer"
                    onClick={() =>
                      (window.location = "https://www.twitch.tv/bliss_83")
                    }
                  >
                    Twitch
                  </Button>
                </Stack>
              </Box>
            </Box>
            <Box mx="auto" w="100%" h="100%" zIndex="base">
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
