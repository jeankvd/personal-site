import React from 'react';
import Link from 'next/link'


function createMarkup() {

}

const BlogSquare = (props) => {
    return(
        <div className="blog-square">
            <h2>{props.blog.title.rendered}</h2>
            <img src={props.blog["_embedded"]["wp:featuredmedia"][0]["source_url"]} alt=""/>
            <p 
                dangerouslySetInnerHTML={{ 
                    __html : props.blog.excerpt.rendered 
                }}
            >
            </p>
            <Link 
                href={"/post?id=" + props.blog.id }
                as={`/post/${props.blog.slug}`}
            >
                <a className="read-more">Read More -></a>
            </Link>
            <div className="bottom-separator">
                <div className="separator-circle"></div>
                <hr/>
            </div>
        </div>
    )
}

export default BlogSquare