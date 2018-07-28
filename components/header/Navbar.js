import React, { Component } from 'react';
import Link from 'next/link'

class Navbar extends Component {
    render() {
        return(
            <nav>
                <ul>
                    <Link href="/"><li><a>Home</a></li></Link>
                    <Link href="/blogs"><li><a>Blogs</a></li></Link>
                    <Link href="/about"><li><a>About Me</a></li></Link>
                    <Link href="/contact"><li><a>Contact Me</a></li></Link>
                </ul>
            </nav>
        )
    }
}

export default Navbar;