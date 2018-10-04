import React from 'react';
import Helmet from 'react-helmet';
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
              <h1>About Me</h1>
              <p>
                Hey there!  My name is Rob, and I am a frontend developer
                with a passion for building engaging experiences for users on
                the web. I enjoy collaborating with product, user experience, and
                development teams in a startup environment.  I have a passion for
                high-functioning, cross-disciplinary teams that focus on an agile,
                user-centered discovery process where collaboration and growth are
                the core values.
              </p>

              {/* <p>
                I am now offering my set of talents, abilities and skills to the
                market as a freelance developer and consultant.  I am accepting
                work from anyone who thinks that the value I bring aligns with
                the goals of their business or organization.  With experience in
                Freelancing, Product Ownership, Software Development, and
                User Experience, I can help you solve problems and reach
                outcomes that were previously unobtainable.
                </p>

                <h2>I can help with the following:</h2>

                <div className="about-services">
                <ul>
                  <li><h4>Wireframing and Prototyping</h4></li>
                  <li><h4>Custom application development</h4></li>
                  <li><h4>Custom websites for your product or service</h4></li>
                  <li>
                <h4>
                Branding for your product, service or business with identity and logo design
                </h4>
                  </li>
                </ul>
              </div> */}

              {/* {items} */}
            </div>
          </div>
        </div>
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
