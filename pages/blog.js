import '../styles/style.scss'

import fetch from 'isomorphic-unfetch'

import BlogEntry from '../components/BlogEntry';
import Sidebar from '../components/Sidebar'
import Navbar from '../components/header/Navbar'


const blog = (props) => {
    return(
        <div className='blog dark'>
            <Navbar />
            <div className="blog-container layout">
                <Sidebar />
                <BlogEntry entry={props.stuff[2]}/>
            </div>
        </div>  
    )
} 

blog.getInitialProps = async function({ req, res, match }) {
    const hn = await fetch('http://demo.wp-api.org/wp-json/wp/v2/posts/');
    const stuff = await hn.json();
    return { stuff };
  }

export default blog