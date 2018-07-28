import React from 'react';

function createMarkup() {

}

const BlogSquare = (props) => {
    return(
        <div className="blog-square">
            <h1>{props.blog.title.rendered}</h1>
            <p 
                dangerouslySetInnerHTML={{ 
                    __html : props.blog.excerpt.rendered 
                }}
            >
            </p>
        </div>
    )
}

export default BlogSquare