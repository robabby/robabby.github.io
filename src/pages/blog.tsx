import * as React from "react"
import { Link, graphql } from "gatsby"
import { Box } from "@chakra-ui/react"
// import { ImageSharp } from "../graphql-types"
// import { get } from "lodash"
import { withLayout } from "../components/Layout/index"

const BlogPage = (props: any): any => {
  // const tags = props.data.tags.group
  const posts = props.data.posts.edges
  // const { pathname } = props.location
  // const pageCount = Math.ceil(props.data.posts.totalCount / 10)

  // TODO export posts in a proper component
  const Posts = (
    <Box>
      {posts.map(({ node }: { node: any }) => {
        const {
          frontmatter,
          // timeToRead,
          fields: { slug }
          // excerpt
        } = node
        // const avatar = frontmatter.author.avatar.children[0] as ImageSharp
        // const cover = get(frontmatter, "image.children.0.fixed", {})

        // const extra = (
        //   <Comment.Group>
        //     <Comment>
        //       <Comment.Avatar
        //         src={avatar.fixed.src}
        //         srcSet={avatar.fixed.srcSet}
        //       />
        //       <Comment.Content>
        //         <Comment.Author style={{ fontWeight: 400 }}>
        //           {frontmatter.author.id}
        //         </Comment.Author>
        //         <Comment.Metadata style={{ margin: 0 }}>
        //           {frontmatter.updatedDate} - {timeToRead} min read
        //         </Comment.Metadata>
        //       </Comment.Content>
        //     </Comment>
        //   </Comment.Group>
        // )

        // const description = (
        //   <Card.Description>
        //     {excerpt}
        //     <br />
        //     <Link to={slug}>Read more…</Link>
        //   </Card.Description>
        // )

        return (
          <Box
            key={slug}
            bg="#eee"
            borderWidth="1px"
            rounded="lg"
            p={4}
            color="#333"
            shadow="0px 0px 5px #333"
            mt="10px"
          >
            <Link to={slug}>{frontmatter.title}</Link>
          </Box>
        )
      })}
    </Box>
  )

  // return (
  //   <Container>
  //     {/* Title */}
  //     <BlogTitle />

  //     {/* Content */}
  //     <Segment vertical>
  //       <Grid padded style={{ justifyContent: "space-around" }}>
  //         <div style={{ maxWidth: 600 }}>
  //           {Posts}
  //           <Segment vertical textAlign="center">
  //             <BlogPagination
  //               Link={Link}
  //               pathname={pathname}
  //               pageCount={pageCount}
  //             />
  //           </Segment>
  //         </div>
  //         <div>
  //           <TagsCard Link={Link} tags={tags} tag={props.pageContext.tag} />
  //         </div>
  //       </Grid>
  //     </Segment>
  //   </Container>
  // )

  console.log(props)

  return Posts
}

export default withLayout(BlogPage)

export const pageQuery = graphql`
  query PageBlog {
    # Get tags
    tags: allMarkdownRemark(filter: { frontmatter: { draft: { ne: true } } }) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }

    # Get posts
    posts: allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___updatedDate] }
      filter: {
        frontmatter: { draft: { ne: true } }
        fileAbsolutePath: { regex: "/blog/" }
      }
      limit: 10
    ) {
      totalCount
      edges {
        node {
          excerpt
          # timeToRead
          fields {
            slug
          }
          frontmatter {
            title
            updatedDate(formatString: "DD MMMM, YYYY")
            image {
              children {
                ... on ImageSharp {
                  fixed(width: 700, height: 100) {
                    src
                    srcSet
                  }
                }
              }
            }
            author {
              id
              avatar {
                children {
                  ... on ImageSharp {
                    fixed(width: 35, height: 35) {
                      src
                      srcSet
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`
