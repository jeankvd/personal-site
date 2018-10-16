import React from "react";
import Link from "next/link";

function stripTags(data)
{
   var tmpElement = document.createElement("div");
   tmpElement.innerHTML = data;
   return tmpElement.textContent || tmpElement.innerText || "";
}

const BlogSquare = props => {
  return (
    <div className="blog-square">
      <h2>{props.blog.title.rendered}</h2>
      <img
        src={props.blog["_embedded"]["wp:featuredmedia"][0]["source_url"]}
        alt=""
      />
      <p dangerouslySetInnerHTML={{ "__html" : props.blog.excerpt.rendered }}></p>
      <Link href={"/post?id=" + props.blog.slug} as={`/post/${props.blog.slug}`}>
        <a className="read-more">Read More -></a>
      </Link>
      <div className="bottom-separator">
        <div className="separator-circle" />
        <hr />
      </div>
    </div>
  );
};

export default BlogSquare;