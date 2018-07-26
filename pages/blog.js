import '../styles/style.scss'
import BlogEntry from '../components/BlogEntry';
import fetch from 'isomorphic-unfetch'

const blog = (props) => {
    return(
        <div className='blog dark'>
            <BlogEntry entry={props.stuff[2]}/>
        </div>  
    )
} 

blog.getInitialProps = async function({ req, res, match }) {
    const hn = await fetch('http://demo.wp-api.org/wp-json/wp/v2/posts/');
    const stuff = await hn.json();
    return { stuff };
  }

export default blog