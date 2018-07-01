import React from 'react';
import Helmet from 'react-helmet';
import Particles from 'react-particles-js';
import Post from '../components/Post';
import Sidebar from '../components/Sidebar';

class IndexRoute extends React.Component {
  render() {
    const items = [];
    const { title, subtitle } = this.props.data.site.siteMetadata;
    const posts = this.props.data.allMarkdownRemark.edges;
    posts.forEach((post) => {
      items.push(<Post data={post} key={post.node.fields.slug} />);
    });

    return (
      <div>
        <Helmet>
          <title>{title}</title>
          <meta name="description" content={subtitle} />
        </Helmet>
        <div role="main">
          <Sidebar {...this.props} />
          <div className="content">
            <div className="content__inner">
              {items}
            </div>
          </div>
        </div>
        {/* <div className="particle-wrapper">
          <div className="particle-mask" />
          <Particles
            className="particle-container"
            params={{
          particles: {
          number: { value: 35 },
          line_linked: {
          distance: 250,
          shadow: {
          enable: true,
          color: '#121212',
          blur: 0.25
          }
          },
          move: { speed: 1 }
          }
            }}
          />
        </div> */}
      </div>
    );
  }
}

export default IndexRoute;

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
        subtitle
        copyright
        menu {
          label
          path
        }
        author {
          name
          email
          linkedin
          twitter
          github
        }
      }
    }
    allMarkdownRemark(
        limit: 1000,
        filter: { frontmatter: { layout: { eq: "post" }, draft: { ne: true } } },
        sort: { order: DESC, fields: [frontmatter___date] }
      ){
      edges {
        node {
          fields {
            slug
            categorySlug
          }
          frontmatter {
            title
            date
            category
            description
          }
        }
      }
    }
  }
`;
