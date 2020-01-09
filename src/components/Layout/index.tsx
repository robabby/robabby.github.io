import * as React from "react"
import {
  Avatar,
  Box,
  IconButton,
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
import MetatronsCube from "../MetatronsCube"
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
    <div className={styles.layout}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Rob Abby</title>
      </Helmet>
      <Box
        d="flex"
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
          flexDirection="column"
          justifyContent="space-between"
          alignItems="center"
          position="relative"
          w={{ base: "100%", md: 550 }}
          h="100%"
          p={["4", "6", "12"]}
          backgroundColor="gray.700"
        >
          <Box
            d={["none", "block"]}
            position="relative"
            w="100%"
            h="100%"
            maxH="482px"
          >
            <MetatronsCube />
          </Box>
          <Box
            mt={["0", "12"]}
            ml={["0", "6"]}
            p={["4", "0"]}
            w={["100vw", "100%"]}
          >
            <Stack isInline spacing={4} d="flex" alignItems="center">
              <Avatar size="lg" src={avatar} border="1px" />
              <Heading as="h1" fontSize="6xl" color="teal.100">
                Rob Abby
              </Heading>
            </Stack>
            <Heading as="h2" fontSize="3xl" mt={5} color="gray.300">
              UI/UX &amp; Product Professional
            </Heading>
            <Text color="gray.300" fontSize="xl" mt="4" lineHeight="shorter">
              I am a seasoned{" "}
              <a href="https://blog.pragmaticengineer.com/the-product-minded-engineer/">
                <Text as="ins" color="blue.300">
                  product engineer
                </Text>
              </a>{" "}
              with a passion for innovating and building engaging experiences
              for users on the web. I enjoy collaborating with product, user
              experience, and development teams to create engaging products and
              experiences. I thrive working in high-functioning,
              cross-disciplinary teams that focus on an agile, user-centered
              discovery process where collaboration and growth are the core
              values.
            </Text>
          </Box>
          <Box
            d="flex"
            w="100%"
            flexDirection={{ base: "column", md: "row" }}
            justifyContent="space-around"
          >
            <a href="https://github.com/robabby">
              <IconButton
                variantColor="messenger"
                color="white"
                aria-label="GitHub"
                icon={GoMarkGithub}
                mb={{ base: 2, md: 0 }}
                cursor="pointer"
              >
                GitHub
              </IconButton>
            </a>
            <a href="https://www.linkedin.com/in/robabby/">
              <IconButton
                variantColor="messenger"
                color="white"
                aria-label="LinkedIn"
                icon={FaLinkedin}
                mb={{ base: 2, md: 0 }}
                cursor="pointer"
              >
                LinkedIn
              </IconButton>
            </a>
            <a href="https://twitter.com/robabby83">
              <IconButton
                variantColor="messenger"
                color="white"
                aria-label="Twitter"
                icon={FaTwitter}
                mb={{ base: 2, md: 0 }}
                cursor="pointer"
              >
                Twitter
              </IconButton>
            </a>
            <a href="https://www.twitch.tv/bliss_83">
              <IconButton
                variantColor="messenger"
                color="white"
                aria-label="Twitch"
                icon={FaTwitch}
                cursor="pointer"
              >
                Twitch
              </IconButton>
            </a>
          </Box>
        </Box>
        {/* <Box d={["none", "block"]} mx="auto" w="100%" h="100%" zIndex="base">
          {props.children}
        </Box> */}
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
