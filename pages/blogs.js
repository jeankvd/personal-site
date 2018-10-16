import "../styles/style.scss";

import fetch from "isomorphic-unfetch";

import BlogSquare from "../components/blog/BlogSquare";
import Sidebar from "../components/Sidebar";
import Page from "../components/wrapper/page";

const blogs = props => {
  console.log(props);
  return (
    <Page className="blog">
      <div className="blog-container layout main">
        {props.data.map(blog => (
          <BlogSquare blog={blog} key={blog.id} id={blog.slug} />
        ))}
      </div>
    </Page>
  );
};

blogs.getInitialProps = async function({ req, res, match }) {
  const request = await fetch("http://ssrblog.dev/wp-json/wp/v2/posts/?_embed");
  const data = await request.json();
  return { data };
};

export default blogs;
