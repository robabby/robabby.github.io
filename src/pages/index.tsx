/* eslint-disable @typescript-eslint/camelcase */
import * as React from "react"
import { Box, Heading, Text } from "@chakra-ui/core"
import MetatronsCude from "../components/MetatronsCube"
import Particles from "react-particles-js"
import styles from "./index.module.scss"
import svg from "../assets/images/metatrons_cube.svg"
import { withLayout } from "../components/Layout"

const IndexPage = (props): any => {
  return (
    <Box position="relative" w="100%" h="100%">
      <Particles
        className={styles.wrapper}
        canvasClassName={styles.canvas}
        width="100%"
        height="100%"
        params={{
          // polygon: {
          //   enable: true,
          //   scale: 0.5,
          //   type: "inline",
          //   move: {
          //     radius: 10
          //   },
          //   url: svg,
          //   inline: {
          //     arrangement: "equidistant"
          //   },
          //   draw: {
          //     enable: true,
          //     stroke: {
          //       color: "rgba(255, 255, 255, .2)"
          //     }
          //   }
          // },
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
            events: {
              onclick: {
                enable: true,
                mode: "push"
              },
              onhover: { enable: true, mode: "grab" }
            },
            modes: {
              grab: {
                distance: 200,
                line_linked: { opacity: 0.15 }
              },
              push: {
                particles_nb: 1
              }
            }
          },
          retina_detect: true
        }}
      />
      <MetatronsCude />
      {/* <Box position="absolute" top="30%" left="0" w="80%" p="4">
        <Heading as="h1" fontSize="6xl">
          Rob Abby
        </Heading>
        <Heading as="h2" fontSize="4xl" mt={5}>
          UI/UX &amp; Product Professional
        </Heading>
        <Text color="gray.500" fontSize="xl" mt="4" w="60%">
          I am a{" "}
          <a href="https://blog.pragmaticengineer.com/the-product-minded-engineer/">
            Product Engineer
          </a>{" "}
          with a passion for building engaging experiences for users on the web.
          I enjoy collaborating with product, user experience, and development
          teams in a startup environment. I have a passion for high-functioning,
          cross-disciplinary teams that focus on an agile, user-centered
          discovery process where collaboration and growth are the core values.
        </Text>
      </Box> */}
    </Box>
  )
}

export default withLayout(IndexPage)
