import "../styles/style.scss";

import fetch from "isomorphic-unfetch";

import BlogEntry from "../components/BlogEntry";
import Sidebar from "../components/Sidebar";
import Page from "../components/wrapper/page";

const post = props => {
  return (
    <Page className="blog dark">
      <div className="blog-container layout">
        <BlogEntry entry={props.data} />
      </div>
    </Page>
  );
};

post.getInitialProps = async function({ query }) {
  const request = await fetch(
    `http://ssrblog.dev/wp-json/wp/v2/posts/${query.id}`
  );
  const data = await request.json();
  return { data };
};

export default post;
