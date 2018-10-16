import React, { Component } from 'react';

class BlogEntry extends Component {

    render() {
        return(
            <div className="blog-entry">
                <h1>{this.props.entry.title.rendered}</h1>
                <img src={this.props.entry.better_featured_image.source_url} alt=""/>
                <div dangerouslySetInnerHTML={{"__html": this.props.entry.content.rendered}}></div>
            </div>
        )
    }
}

export default BlogEntry;