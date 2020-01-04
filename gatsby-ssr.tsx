import * as React from "react"
import { renderToString } from "react-dom/server"

export const replaceRenderer = ({ bodyComponent, replaceBodyHTMLString }) => {
  const ConnectedBody = () => bodyComponent

  replaceBodyHTMLString(renderToString(<ConnectedBody />))
}
