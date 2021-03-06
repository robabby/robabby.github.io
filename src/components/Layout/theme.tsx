import React from "react"
import { theme } from "@chakra-ui/core"

// Step 1: Each icon should be stored as an object of `path` and `viewBox`
const customIcons = {
  mixer: {
    path: (
      <g fill="currentColor">
        <path
          d="M116.03,77.68c-15.76-21.29-46.72-24.61-66.91-6.36c-17.42,16.04-18.8,43.13-4.7,62.21l90.96,121.92
          L43.87,378.48c-14.1,19.08-12.99,46.17,4.7,62.21c20.18,18.25,51.15,14.93,66.91-6.36l127.73-171.69c3.04-4.15,3.04-9.95,0-14.1
          L116.03,77.68z"
        />
        <path
          d="M396.37,77.68c15.76-21.29,46.72-24.61,66.91-6.36c17.42,16.04,18.8,43.13,4.7,62.21l-90.96,121.92
          l91.51,123.03c14.1,19.08,12.99,46.17-4.7,62.21c-20.18,18.25-51.15,14.93-66.91-6.36L269.47,262.36c-3.04-4.15-3.04-9.95,0-14.1
          L396.37,77.68z"
        />
      </g>
    ),
    viewBox: "0 0 512 512"
  }
}

const customTheme = {
  ...theme,
  icons: {
    ...theme.icons,
    ...customIcons
  }
}

export default customTheme
