/* eslint-disable @typescript-eslint/camelcase */
import * as React from "react"
import { Box } from "@chakra-ui/core"
import MetatronsCube from "../components/MetatronsCube"
import Particles from "react-particles-js"
import styles from "./index.module.scss"
import svg from "../assets/images/cube.svg"
import { withLayout } from "../components/Layout"

const { useEffect } = React

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
      <Particles
        className={styles.cubeWrapper}
        canvasClassName={styles.cubeCanvas}
        params={{
          polygon: {
            enable: true,
            scale: 1.5,
            type: "inline",
            move: {
              radius: 5,
              type: "path"
            },
            url: svg,
            inline: {
              arrangement: "equidistant"
            },
            draw: {
              enable: true,
              stroke: {
                color: "rgba(255, 255, 255, .2)"
              }
            }
          },
          fps_limit: 28,
          particles: {
            number: {
              value: 200,
              density: {
                enable: false
              }
            },
            line_linked: {
              enable: true,
              distance: 25,
              opacity: 0.25
            },
            move: {
              speed: 1
            },
            opacity: {
              anim: {
                enable: true,
                opacity_min: 0.05,
                speed: 2,
                sync: false
              },
              value: 0.4
            }
          },
          interactivity: {
            events: {
              onhover: {
                enable: false,
                mode: "bubble"
              }
            },
            modes: {
              bubble: {
                size: 6,
                distance: 40
              }
            }
          },
          retina_detect: true
        }}
      />
      <MetatronsCube className={styles.cube} />
    </Box>
  )
}

export default withLayout(IndexPage)
