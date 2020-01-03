import * as React from "react"
import { Box, Heading, Image, Text } from "@chakra-ui/core"
import chicago from "../assets/images/chicago.svg"
import { withLayout } from "../components/Layout/index"

const IndexPage = (props): any => {
  console.log(props)
  return (
    <Box position="relative" w="100%" h="100%">
      <Box position="absolute" top="30%" left="0" w="80%" p="4">
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
      </Box>
      <Box position="absolute" w="40%" top="25%" right="0" p="4">
        <Image src={chicago} />
      </Box>
    </Box>
  )
}

export default withLayout(IndexPage)
