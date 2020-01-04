/* eslint-disable @typescript-eslint/camelcase */
import * as React from "react"
import { Box } from "@chakra-ui/core"
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
    </Box>
  )
}

export default withLayout(IndexPage)
