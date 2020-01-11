/* eslint-disable @typescript-eslint/camelcase */
import * as React from "react"
import { Box, Heading, IconButton, Text } from "@chakra-ui/core"
import { FaLinkedin, FaTwitch, FaTwitter } from "react-icons/fa"
import { GoMarkGithub } from "react-icons/go"
import MetatronsCube from "../components/MetatronsCube"
import Particles from "react-particles-js"
import styles from "./index.module.scss"
import { withLayout } from "../components/Layout"

const IndexPage = (): any => {
  return (
    <Box d="flex" position="relative" w="100%" h="100%">
      <Particles
        className={styles.skyWrapper}
        canvasClassName={styles.skyCanvas}
        params={{
          particles: {
            number: {
              value: 120,
              density: {
                enable: true,
                value_area: 1500
              }
            },
            line_linked: {
              enable: true,
              opacity: 0.02
            },
            move: {
              direction: "right",
              speed: 0.05
            },
            size: {
              value: 1
            },
            opacity: {
              anim: {
                enable: true,
                speed: 1,
                opacity_min: 0.05
              }
            }
          },
          interactivity: {
            detect_on: "canvas",
            events: {
              onhover: { enable: true, mode: "grab" },
              resize: true
            },
            modes: {
              grab: { distance: 100, line_linked: { opacity: 0.2 } }
            }
          },
          retina_detect: true
        }}
      />
      <Box
        d="flex"
        flexDirection={{ base: "column-reverse", md: "row" }}
        justifyContent={"space-around"}
        alignItems="center"
        position="relative"
        zIndex="docked"
      >
        <Box
          d="flex"
          flexDirection="column"
          w={{ base: "100vw", md: "40%" }}
          h={{ base: "100%", md: "auto" }}
          p={{ base: "4", md: "2" }}
        >
          <Box w={"100%"} mt={{ base: "4", md: "0" }}>
            <Heading
              as="h1"
              fontSize={{ base: "4xl", xl: "5xl" }}
              color="gray.300"
            >
              UI/UX &amp; Product Professional
            </Heading>
            <Text
              color="gray.300"
              fontSize={{ base: "xl", xl: "2xl" }}
              mt="4"
              lineHeight="shorter"
            >
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
          <Box d="flex" w="100%" flexDirection="row" mt="6">
            <a href="https://github.com/robabby">
              <IconButton
                variantColor="messenger"
                color="white"
                aria-label="GitHub"
                icon={GoMarkGithub}
                mr="4"
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
                mr="4"
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
                mr="4"
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
        <Box
          d={{ base: "none", md: "block" }}
          position="relative"
          w="40%"
          h="100%"
          zIndex="docked"
        >
          <MetatronsCube />
        </Box>
      </Box>
    </Box>
  )
}

export default withLayout(IndexPage)
