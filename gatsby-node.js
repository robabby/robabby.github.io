const path = require('path');
const slash = require('slash');
const {kebabCase, uniq, get, compact, times} = require('lodash');

require('source-map-support').install()
require('ts-node').register({
  compilerOptions: {
    module: 'commonjs',
    target: 'es2017',
  },
})


// Don't forget to update hard code values into:
// - `templates/blog-page.tsx:23`
// - `pages/blog.tsx:26`
// - `pages/blog.tsx:121`
const POSTS_PER_PAGE = 10
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const cleanArray = arr => compact(uniq(arr))

// Create slugs for files.
// Slug will used for blog page path.
exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  let slug
  if (node.internal.type === "MarkdownRemark") {
    const fileNode = getNode(node.parent)
    const [basePath, name] = fileNode.relativePath.split("/")
    slug = `/${basePath}/${name}/`
  }

  if (slug) {
    createNodeField({ node, name: `slug`, value: slug })
  }
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    const templates = ["article", "blog", "tags"].reduce(
      (mem, templateName) => {
        return Object.assign({}, mem, {
          [templateName]: path.resolve(
            `src/templates/${kebabCase(templateName)}/index.tsx`,
          ),
        })
      },
      {},
    )

    graphql(
      `
        {
          posts: allMarkdownRemark {
            edges {
              node {
                fields {
                  slug
                }
                frontmatter {
                  tags
                }
              }
            }
          }
        }
      `,
    ).then(result => {
      if (result.errors) {
        return reject(result.errors)
      }

      const posts = result.data.posts.edges.map(p => p.node)

      // Create blog pages
      posts
        .filter(post => post.fields.slug.startsWith("/blog/"))
        .forEach(post => {
          createPage({
            path: post.fields.slug,
            component: slash(templates.article),
            context: {
              slug: post.fields.slug,
            },
          })
        })

      // TODO: Create tags pages
      posts
        .reduce(
          (mem, post) => cleanArray(mem.concat(get(post, "frontmatter.tags"))),
          [],
        )
        .forEach(tag => {
          createPage({
            path: `/blog/tags/${kebabCase(tag)}/`,
            component: slash(templates.tags),
            context: {
              tag,
            },
          })
        })

      // Create blog pagination
      const pageCount = Math.ceil(posts.length / POSTS_PER_PAGE)
      times(pageCount, index => {
        createPage({
          path: `/blog/page/${index + 1}/`,
          component: slash(templates.blog),
          context: {
            skip: index * POSTS_PER_PAGE,
          },
        })
      })

      resolve()
    })
  })
}
