import * as React from "react"
import {
  // Avatar,
  // Box,
  Heading,
  Image
  // Tag
} from "@chakra-ui/react"
import { LayoutProps, withLayout } from "../../components/Layout"
import {
  // ImageSharp,
  MarkdownRemark,
  MarkdownRemarkConnection,
  Site
} from "../../graphql-types"
// import { Link } from "gatsby"
import { get } from "lodash"
import { graphql } from "gatsby"

interface BlogPostProps extends LayoutProps {
  data: {
    post: MarkdownRemark
    recents: MarkdownRemarkConnection
    site: Site
  }
}

const BlogPostPage = (props: any) => {
  const {
    frontmatter
    // html,
    // timeToRead
  } = props.data.post
  // const avatar = frontmatter.author.avatar.children[0] as ImageSharp

  // const tags = props.data.post.frontmatter.tags.map(tag => (
  //   <Link key={tag} to={`/blog/tags/${tag}/`}>
  //     <Tag>{tag}</Tag>
  //   </Link>
  // ))

  // const recents = props.data.recents.edges.map(({ node }) => {
  //   const recentAvatar = node.frontmatter.author.avatar
  //     .children[0] as ImageSharp
  //   const recentCover = get(node, "frontmatter.image.children.0.fixed", {})

  //   return (
  //     <Link key={node.fields.slug} to={node.fields.slug}>
  //       <Box maxW="sm" borderWidth="1px" rounded="lg" overflow="hidden">
  //         <Image src={recentCover} alt={node.frontmatter.title} />
  //         <Avatar src={recentAvatar.fixed.src} />
  //         {node.frontmatter.author.id}
  //         {node.timeToRead} min read
  //       </Box>
  //     </Link>
  //   )
  // })

  const cover = get(frontmatter, "image.children.0.fixed", {})
  return (
    <div>
      <Image {...cover} fluid />
      <Heading>{frontmatter.title}</Heading>
      {/* <Avatar
        size="tiny"
        src={avatar.fixed.src}
      />
      <Segment vertical style={{ border: "none" }}>
        <Item.Group>
          <Item>
            <Item.Content>
              <Item.Description>{frontmatter.author.id}</Item.Description>
              <Item.Meta>{frontmatter.author.bio}</Item.Meta>
              <Item.Extra>
                {frontmatter.updatedDate} - {timeToRead} min read
              </Item.Extra>
            </Item.Content>
          </Item>
        </Item.Group>
        <Header as="h1">{frontmatter.title}</Header>
      </Segment>
      <Segment
        vertical
        style={{ border: "none" }}
        dangerouslySetInnerHTML={{
          __html: html
        }}
      />
      <Segment vertical>{tags}</Segment>
      {props.data.site &&
        props.data.site.siteMetadata &&
        props.data.site.siteMetadata.disqus && (
          <Segment vertical>
            <DiscussionEmbed
              shortname={props.data.site.siteMetadata.disqus}
              config={{}}
            />
          </Segment>
        )}
      <Segment vertical>
        <Grid padded centered>
          {recents}
        </Grid>
      </Segment> */}
    </div>
  )
}

export default withLayout(BlogPostPage)

export const pageQuery = graphql`
  query TemplateBlogPost($slug: String!) {
    site: site {
      siteMetadata {
        siteName
      }
    }
    post: markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      excerpt
      timeToRead
      fields {
        slug
      }
      frontmatter {
        tags
        author {
          id
          bio
          twitter
          avatar {
            children {
              ... on ImageSharp {
                fixed(width: 80, height: 80, quality: 100) {
                  src
                  srcSet
                }
              }
            }
          }
        }
        title
        updatedDate(formatString: "MMM D, YYYY")
        image {
          children {
            ... on ImageSharp {
              fixed(width: 900, height: 300, quality: 100) {
                src
                srcSet
              }
            }
          }
        }
      }
    }
    recents: allMarkdownRemark(
      filter: {
        fields: { slug: { ne: $slug } }
        frontmatter: { draft: { ne: true } }
        fileAbsolutePath: { regex: "/blog/" }
      }
      sort: { order: DESC, fields: [frontmatter___updatedDate] }
      limit: 4
    ) {
      edges {
        node {
          fields {
            slug
          }
          timeToRead
          frontmatter {
            title
            image {
              children {
                ... on ImageSharp {
                  fixed(width: 300, height: 100) {
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
                    fixed(width: 36, height: 36) {
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
