/* eslint-disable @typescript-eslint/camelcase */
import * as React from "react"
import { AnimatePresence, motion, useAnimation } from "framer-motion"
import { Box } from "@chakra-ui/core"
// import Cube from "./Cube"
import Particles from "react-particles-js"
import styles from "./styles.module.scss"
import svg from "../../assets/images/cube.svg"

const { useState, useEffect } = React

const CIRCLES = [
  "M 262.5 53.5 A 47 47 0 1 1  168.5,53.5 A 47 47 0 1 1  262.5 53.5 z",
  "M 426.5 147.5 A 47 47 0 1 1  332.5,147.5 A 47 47 0 1 1  426.5 147.5 z",
  "M 426.5 335.5 A 47 47 0 1 1  332.5,335.5 A 47 47 0 1 1  426.5 335.5 z",
  "M 262.5 429.5 A 47 47 0 1 1  168.5,429.5 A 47 47 0 1 1  262.5 429.5 z",
  "M 98.5 335.5 A 47 47 0 1 1  4.5,335.5 A 47 47 0 1 1  98.5 335.5 z",
  "M 98.5 147.5 A 47 47 0 1 1  4.5,147.5 A 47 47 0 1 1  98.5 147.5 z",
  "M 262.5 147.5 A 47 47 0 1 1  168.5,147.5 A 47 47 0 1 1  262.5 147.5 z",
  "M 344.5 194.5 A 47 47 0 1 1  250.5,194.5 A 47 47 0 1 1  344.5 194.5 z",
  "M 344.5 288.5 A 47 47 0 1 1  250.5,288.5 A 47 47 0 1 1  344.5 288.5 z",
  "M 262.5 335.5 A 47 47 0 1 1  168.5,335.5 A 47 47 0 1 1  262.5 335.5 z",
  "M 180.5 288.5 A 47 47 0 1 1  86.5,288.5 A 47 47 0 1 1  180.5 288.5 z",
  "M 180.5 194.5 A 47 47 0 1 1  86.5,194.5 A 47 47 0 1 1  180.5 194.5 z",
  "M 262.5 241.5 A 47 47 0 1 1  168.5,241.5 A 47 47 0 1 1  262.5 241.5 z"
]
const OUTER_LINES = [
  "M 215.5,53.5 L 379.5,147.5 L 379.5,335.5 L 215.5,429.5 L 51.5,335.5 L 51.5,147.5 L 215.5,53.5 z",
  "M 215.5,53.5 L 51.5,335.5 L 379.5,335.5 L 215.5,53.5 z ",
  "M 51.5,147.5 L 215.5,429.5 L 379.5,147.5 L 51.5,147.5 z ",
  "M 215.5,147.5 L 133.5,194.5 L 133.5,288.5 L 215.5,335.5 L 297.5,288.5 L 297.5,194.5 L 215.5,147.5 z ",
  "M 133.5,288.5 L 215.5,53.5 L 297.5,288.5 L 133.5,288.5 z ",
  "M 215.5,429.5 L 133.5,194.5 L 297.5,194.5 L 215.5,429.5 z ",
  "M 51.5,147.5 L 379.5,335.5",
  "M 51.5,335.5 L 379.5,147.5",
  "M 215.5,53.5 L 215.5,429.5",
  "M 51.5,335.5 L 215.5,147.5 L 297.5,288.5 L 51.5,335.5 z ",
  "M 379.5,335.5 L 215.5,147.5 L 133.5,288.5 L 379.5,335.5 z ",
  "M 379.5,147.5 L 133.5,194.5 L 215.5,335.5 L 379.5,147.5 z ",
  "M 51.5,147.5 L 215.5,335.5 L 297.5,194.5 L 51.5,147.5 z "
]
const DASH_ARRAY = 2000
const ANIMATED_DASH_OFFSET = 2000
const COLORS = {
  pink: "rgb(244, 181, 248)",
  blue1: "rgba(144, 205, 244, .75)",
  blue2: "rgba(144, 205, 244, .20)"
}

const MetatronsCube = ({ delay = 0 }): any => {
  const [isReady, setIsReady] = useState(false)
  const [isChecked, setIsChecked] = useState(false)
  const lineControls = useAnimation()
  const gradientControls = useAnimation()
  const rotateControls = useAnimation()

  const circleSequence = async () => {
    await lineControls.start(i => ({
      opacity: 1,
      transition: {
        ease: "easeInOut",
        duration: 0.7,
        delay: i * 0.1
      }
    }))
  }

  const lineSequence = async () => {
    await lineControls.start({
      strokeDashoffset: 0,
      transition: {
        delay: 1.5,
        ease: "easeInOut",
        duration: 2
      }
    })
  }

  const gradientSequence = async () => {
    await gradientControls.start({
      stopColor: [COLORS.blue1, COLORS.pink, COLORS.blue2],
      transitionEnd: {
        stopColor: COLORS.blue2
      },
      transition: {
        delay: 1.5,
        ease: "easeInOut",
        duration: 3.5
      }
    })
  }

  const circleVariants = {
    hover: { strokeWidth: 1.25 },
    pressed: { strokeWidth: 1.5 },
    checked: { stroke: "url(#linearGradient)" },
    unchecked: { strokeWidth: 1 }
  }

  const lineGroupVariants = {
    hover: { scale: 1.02 },
    pressed: { scale: 0.95 },
    checked: { rotate: 360 },
    unchecked: { rotate: 0 }
  }

  useEffect(() => {
    const mountTimer = setTimeout(() => {
      setIsReady(true)
    }, delay)
    const innerTimer = setTimeout(circleSequence, delay + 2000)
    const outerTimer = setTimeout(lineSequence, delay + 2000)
    const gradientTimer = setTimeout(gradientSequence, delay + 2000)

    return () => {
      clearTimeout(outerTimer)
      clearTimeout(innerTimer)
      clearTimeout(gradientTimer)
      clearTimeout(mountTimer)
    }
  }, [])

  const renderContent = () => (
    <motion.div
      key="container"
      initial={{ x: 0, y: 20, opacity: 0, width: "100%", height: "100%" }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -20, opacity: 0 }}
      transition={{ duration: 2 }}
    >
      <Particles
        className={styles.particles}
        canvasClassName={styles.metatronCanvas}
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
      <motion.svg
        className={styles.metatron}
        initial={false}
        whileHover="hover"
        whileTap="pressed"
        animate={isChecked ? "checked" : "unchecked"}
        width="435"
        height="482"
        onClick={() => setIsChecked(!isChecked)}
      >
        <motion.defs>
          <motion.linearGradient
            id="linearGradient"
            x1="50%"
            x2="50%"
            y1="0%"
            y2="100%"
          >
            <motion.stop
              animate={gradientControls}
              offset="0%"
              stopColor={COLORS.pink}
            />
            <motion.stop
              animate={gradientControls}
              offset="100%"
              stopColor={COLORS.blue2}
            />
          </motion.linearGradient>
        </motion.defs>
        <motion.g>
          {CIRCLES.map((def, i) => (
            <motion.path
              key={def}
              d={def}
              animate={lineControls}
              custom={i}
              fill="transparent"
              initial={{
                opacity: 0,
                strokeWidth: 1,
                strokeDasharray: DASH_ARRAY,
                strokeDashoffset: 0,
                strokeLinecap: "round"
              }}
              stroke={"url(#linearGradient)"}
              variants={circleVariants}
            />
          ))}
        </motion.g>
        <motion.g
          initial={{ rotate: 0 }}
          variants={lineGroupVariants}
          transition={{ type: "spring", damping: 15 }}
        >
          {OUTER_LINES.map(def => (
            <motion.path
              key={def}
              d={def}
              animate={lineControls}
              fill="transparent"
              initial={{
                opacity: 1,
                strokeDasharray: DASH_ARRAY,
                strokeDashoffset: ANIMATED_DASH_OFFSET,
                strokeLinecap: "round",
                strokeWidth: 1
              }}
              stroke={"url(#linearGradient)"}
            />
          ))}
        </motion.g>
      </motion.svg>
      {/* <Box className={styles.cube}>
          <Cube depth={120} repeatDelay={5000} continuous />
        </Box> */}
    </motion.div>
  )

  return (
    <AnimatePresence initial={false}>
      {isReady && renderContent()}
    </AnimatePresence>
  )
}

export default MetatronsCube
