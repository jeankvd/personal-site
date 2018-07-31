import '../styles/style.scss';

import fetch from 'isomorphic-unfetch';

import BlogEntry from '../components/BlogEntry';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/header/Navbar';


const post = (props) => {
    return(
        <div className='blog dark'>
            <Navbar />
            <div className="blog-container layout">
                <Sidebar />
                <BlogEntry entry={props.data}/>
            </div>
        </div>  
    )
} 

post.getInitialProps = async function({ query }) {
    const request = await fetch(`http://ssrblog.dev/wp-json/wp/v2/posts/${query.id}`);
    const data = await request.json();
    return { data };
  }

export default post