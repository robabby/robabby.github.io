/* eslint-disable @typescript-eslint/camelcase */
import * as React from "react"
import { AnimatePresence, motion } from "framer-motion"
import { Box, Heading, IconButton, Text } from "@chakra-ui/core"
import { FaLinkedin, FaTwitch, FaTwitter } from "react-icons/fa"
import { GoMarkGithub } from "react-icons/go"
import MetatronsCube from "../components/MetatronsCube"
import Particles from "react-particles-js"
import styles from "./index.module.scss"

const IndexPage = (props): any => {
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
        flexDirection={{ base: "column-reverse", lg: "row" }}
        justifyContent={"space-around"}
        alignItems="center"
        position="relative"
        zIndex="docked"
      >
        <Box
          d="flex"
          flexDirection="column"
          w={{ base: "100vw", lg: "40%" }}
          h={{ base: "auto", lg: "auto" }}
          p={{ base: "4", lg: "2" }}
        >
          <AnimatePresence>
            <Box key="text-container" w={"100%"} mt={{ base: "2", md: "0" }}>
              <motion.div
                key={"title"}
                initial={{ x: -20, y: 0, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: 20, opacity: 0 }}
                transition={{ duration: 1 }}
              >
                <Heading
                  as="h1"
                  fontSize={{ base: "3xl", xl: "5xl" }}
                  color="gray.300"
                >
                  UI/UX &amp; Product Professional
                </Heading>
              </motion.div>
              <motion.div
                key={"description"}
                initial={{ x: -20, y: 0, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: 20, opacity: 0 }}
                transition={{ duration: 1, delay: 1 }}
              >
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
                  with a passion for innovating and building engaging
                  experiences for users on the web. I enjoy collaborating with
                  product, user experience, and development teams to create
                  engaging products and experiences. I thrive working in
                  high-functioning, cross-disciplinary teams that focus on an
                  agile, user-centered discovery process where collaboration and
                  growth are the core values.
                </Text>
              </motion.div>
            </Box>
            <Box
              key="social-icons"
              d="flex"
              w="100%"
              flexDirection="row"
              mt="8"
            >
              <motion.a
                key={"social-github"}
                initial={{ x: 0, y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -10, opacity: 0 }}
                transition={{ duration: 0.5, delay: 2 }}
                href="https://github.com/robabby"
              >
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
              </motion.a>
              <motion.a
                key={"social-linkedin"}
                initial={{ x: 0, y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -10, opacity: 0 }}
                transition={{ duration: 0.5, delay: 2.25 }}
                href="https://www.linkedin.com/in/robabby/"
              >
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
              </motion.a>
              <motion.a
                key={"social-twitter"}
                initial={{ x: 0, y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -10, opacity: 0 }}
                transition={{ duration: 0.5, delay: 2.5 }}
                href="https://twitter.com/robabby83"
              >
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
              </motion.a>
              <motion.a
                key={"social-twitch"}
                initial={{ x: 0, y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -10, opacity: 0 }}
                transition={{ duration: 0.5, delay: 2.75 }}
                href="https://www.twitch.tv/bliss_83"
              >
                <IconButton
                  variantColor="messenger"
                  color="white"
                  aria-label="Twitch"
                  icon={FaTwitch}
                  cursor="pointer"
                >
                  Twitch
                </IconButton>
              </motion.a>
            </Box>
          </AnimatePresence>
        </Box>
        <Box
          d={{ base: "none", md: "block" }}
          position="relative"
          w={{ base: "100%", lg: "40%" }}
          h={{ base: "100%" }}
          overflowY="hidden"
          zIndex="docked"
        >
          <MetatronsCube delay={3250} />
        </Box>
      </Box>
    </Box>
  )
}

export default IndexPage
