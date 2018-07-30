import '../styles/style.scss'

import fetch from 'isomorphic-unfetch'

import BlogSquare from '../components/blog/BlogSquare'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/header/Navbar'


const blogs = (props) => {
    return(
        <div className='blog'>
            <Navbar />
            <div className="blog-container layout">
                <Sidebar />
                <div>
                { 
                    props.data.map( 
                        blog => <BlogSquare blog={blog} key={blog.id} />
                    )
                }
                </div>
            </div>
        </div>  
    )
} 

blogs.getInitialProps = async function({ req, res, match }) {
    const request = await fetch('http://demo.wp-api.org/wp-json/wp/v2/posts/');
    const data = await request.json();
    return { data };
  }

export default blogs