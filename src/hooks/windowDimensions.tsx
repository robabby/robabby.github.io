import { useEffect, useState } from "react"

const WINDOW = typeof window !== "undefined" && window
const BREAKPOINTS = {
  sm: 480,
  md: 768,
  lg: 992,
  xl: 1280
}

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = WINDOW && WINDOW
  return {
    width,
    height,
    isSm: width < BREAKPOINTS.md,
    isMd: width >= BREAKPOINTS.md && width <= BREAKPOINTS.lg,
    isMdAndUp: width >= BREAKPOINTS.md,
    isLg: width >= BREAKPOINTS.lg && width <= BREAKPOINTS.xl,
    isXl: width > BREAKPOINTS.xl
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

    WINDOW.addEventListener("resize", handleResize)
    return () => WINDOW.removeEventListener("resize", handleResize)
  }, [])

  return windowDimensions
}
