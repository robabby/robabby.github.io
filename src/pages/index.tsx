import * as React from "react"
// import { Link } from "gatsby"
import { withLayout } from "../components/Layout/index"

const IndexPage = (props): any => {
  console.log(props)
  return <div>Hello World</div>
}

export default withLayout(IndexPage)
