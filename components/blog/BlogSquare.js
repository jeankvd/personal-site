import React from 'react';

function createMarkup() {

}

const BlogSquare = (props) => {
    return(
        <div className="blog-square">
            <h2>{props.blog.title.rendered}</h2>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrB6FZOrvD6S5qnkZRg4C3iiUVQct773T-DF76bCOnCEuy-ywnHQ" alt=""/>
            <p 
                dangerouslySetInnerHTML={{ 
                    __html : props.blog.excerpt.rendered 
                }}
            >
            </p>
            <a href="" className="read-more">Read More -></a>
        </div>
    )
}

export default BlogSquare