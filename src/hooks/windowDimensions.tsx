import { useEffect, useState } from "react"

const BREAKPOINTS = {
  sm: 480,
  md: 768,
  lg: 992,
  xl: 1280
}

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window
  return {
    width,
    height,
    isSm: width <= BREAKPOINTS.sm,
    isMd: width > BREAKPOINTS.sm && width <= BREAKPOINTS.md,
    isLg: width > BREAKPOINTS.md && width <= BREAKPOINTS.lg,
    isXl: width > BREAKPOINTS.lg
  }
}

export default function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  )

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions())
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return windowDimensions
}
