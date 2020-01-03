import * as React from "react"
import { motion, useMotionValue, useTransform } from "framer-motion"
import styles from "./styles.module.scss"

const { useState } = React

const tickVariants = {
  pressed: (isChecked: boolean) => ({ pathLength: isChecked ? 0.85 : 0.2 }),
  checked: { pathLength: 1 },
  unchecked: { pathLength: 0 }
}

const boxVariants = {
  hover: { scale: 1, strokeWidth: 2 },
  pressed: { scale: 0.95, strokeWidth: 2 },
  checked: { stroke: "#FF008C" },
  unchecked: { stroke: "#ddd", strokeWidth: 1 }
}

const MetatronsCube = (props): any => {
  const [isChecked, setIsChecked] = useState(false)
  const pathLength = useMotionValue(0)
  const opacity = useTransform(pathLength, [0.05, 0.15], [0, 1])

  return (
    <motion.svg
      className={styles.container}
      initial={false}
      animate={isChecked ? "checked" : "unchecked"}
      whileHover="hover"
      whileTap="pressed"
      width="435"
      height="482"
      onClick={() => setIsChecked(!isChecked)}
    >
      <motion.g>
        <motion.path
          d="M 262.5 241.5 A 47 47 0 1 1  168.5,241.5 A 47 47 0 1 1  262.5 241.5 z"
          fill="transparent"
          stroke="#FF008C"
          variants={boxVariants}
        />
        <motion.path
          d="M 262.5 335.5 A 47 47 0 1 1  168.5,335.5 A 47 47 0 1 1  262.5 335.5 z"
          fill="transparent"
          stroke="#FF008C"
          variants={boxVariants}
        />
        <motion.path
          d="M 262.5 147.5 A 47 47 0 1 1  168.5,147.5 A 47 47 0 1 1  262.5 147.5 z"
          fill="transparent"
          stroke="#FF008C"
          variants={boxVariants}
        />
        <motion.path
          d="M 180.5 194.5 A 47 47 0 1 1  86.5,194.5 A 47 47 0 1 1  180.5 194.5 z"
          fill="transparent"
          stroke="#FF008C"
          variants={boxVariants}
        />
        <motion.path
          d="M 344.5 194.5 A 47 47 0 1 1  250.5,194.5 A 47 47 0 1 1  344.5 194.5 z"
          fill="transparent"
          stroke="#FF008C"
          variants={boxVariants}
        />
        <motion.path
          d="M 180.5 288.5 A 47 47 0 1 1  86.5,288.5 A 47 47 0 1 1  180.5 288.5 z"
          fill="transparent"
          stroke="#FF008C"
          variants={boxVariants}
        />
        <motion.path
          d="M 344.5 288.5 A 47 47 0 1 1  250.5,288.5 A 47 47 0 1 1  344.5 288.5 z"
          fill="transparent"
          stroke="#FF008C"
          variants={boxVariants}
        />
        <motion.path
          d="M 262.5 429.5 A 47 47 0 1 1  168.5,429.5 A 47 47 0 1 1  262.5 429.5 z"
          fill="transparent"
          stroke="#FF008C"
          variants={boxVariants}
        />
        <motion.path
          d="M 262.5 53.5 A 47 47 0 1 1  168.5,53.5 A 47 47 0 1 1  262.5 53.5 z"
          fill="transparent"
          stroke="#FF008C"
          variants={boxVariants}
        />
        <motion.path
          d="M 98.5 147.5 A 47 47 0 1 1  4.5,147.5 A 47 47 0 1 1  98.5 147.5 z"
          fill="transparent"
          stroke="#FF008C"
          variants={boxVariants}
        />
        <motion.path
          d="M 426.5 147.5 A 47 47 0 1 1  332.5,147.5 A 47 47 0 1 1  426.5 147.5 z"
          fill="transparent"
          stroke="#FF008C"
          variants={boxVariants}
        />
        <motion.path
          d="M 98.5 335.5 A 47 47 0 1 1  4.5,335.5 A 47 47 0 1 1  98.5 335.5 z"
          fill="transparent"
          stroke="#FF008C"
          variants={boxVariants}
        />
        <motion.path
          d="M 426.5 335.5 A 47 47 0 1 1  332.5,335.5 A 47 47 0 1 1  426.5 335.5 z"
          fill="transparent"
          stroke="#FF008C"
          variants={boxVariants}
        />
      </motion.g>
      <motion.g>
        <motion.path
          d="M 215.5,53.5 L 379.5,147.5 L 379.5,335.5 L 215.5,429.5 L 51.5,335.5 L 51.5,147.5 L 215.5,53.5 z"
          fill="transparent"
          stroke="#FF008C"
          style={{ pathLength, opacity }}
          variants={tickVariants}
        />
        <motion.path
          d="M 215.5,53.5 L 51.5,335.5 L 379.5,335.5 L 215.5,53.5 z "
          fill="transparent"
          stroke="#FF008C"
          style={{ pathLength, opacity }}
          variants={tickVariants}
        />
        <motion.path
          d="M 51.5,147.5 L 215.5,429.5 L 379.5,147.5 L 51.5,147.5 z "
          fill="transparent"
          stroke="#FF008C"
          style={{ pathLength, opacity }}
          variants={tickVariants}
        />
        <motion.path
          d="M 215.5,147.5 L 133.5,194.5 L 133.5,288.5 L 215.5,335.5 L 297.5,288.5 L 297.5,194.5 L 215.5,147.5 z "
          fill="transparent"
          stroke="#FF008C"
          style={{ pathLength, opacity }}
          variants={tickVariants}
        />
        <motion.path
          d="M 133.5,288.5 L 215.5,53.5 L 297.5,288.5 L 133.5,288.5 z "
          fill="transparent"
          stroke="#FF008C"
          style={{ pathLength, opacity }}
          variants={tickVariants}
        />
        <motion.path
          d="M 215.5,429.5 L 133.5,194.5 L 297.5,194.5 L 215.5,429.5 z "
          fill="transparent"
          stroke="#FF008C"
          style={{ pathLength, opacity }}
          variants={tickVariants}
        />
        <motion.path
          d="M 51.5,147.5 L 379.5,335.5"
          fill="transparent"
          stroke="#FF008C"
          style={{ pathLength, opacity }}
          variants={tickVariants}
        />
        <motion.path
          d="M 51.5,335.5 L 379.5,147.5"
          fill="transparent"
          stroke="#FF008C"
          style={{ pathLength, opacity }}
          variants={tickVariants}
        />
        <motion.path
          d="M 215.5,53.5 L 215.5,429.5"
          fill="transparent"
          stroke="#FF008C"
          style={{ pathLength, opacity }}
          variants={tickVariants}
        />
        <motion.path
          d="M 51.5,335.5 L 215.5,147.5 L 297.5,288.5 L 51.5,335.5 z "
          fill="transparent"
          stroke="#FF008C"
          style={{ pathLength, opacity }}
          variants={tickVariants}
        />
        <motion.path
          d="M 379.5,335.5 L 215.5,147.5 L 133.5,288.5 L 379.5,335.5 z "
          fill="transparent"
          stroke="#FF008C"
          style={{ pathLength, opacity }}
          variants={tickVariants}
        />
        <motion.path
          d="M 379.5,147.5 L 133.5,194.5 L 215.5,335.5 L 379.5,147.5 z "
          fill="transparent"
          stroke="#FF008C"
          style={{ pathLength, opacity }}
          variants={tickVariants}
        />
        <motion.path
          d="M 51.5,147.5 L 215.5,335.5 L 297.5,194.5 L 51.5,147.5 z "
          fill="transparent"
          stroke="#FF008C"
          style={{ pathLength, opacity }}
          variants={tickVariants}
        />
      </motion.g>
    </motion.svg>
  )
}

export default MetatronsCube
