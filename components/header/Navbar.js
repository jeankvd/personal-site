import React, { Component } from 'react';
import Link from 'next/link'

class Navbar extends Component {
    render() {
        return(
            <nav>
                <Link href="/"><span>Home</span></Link>
                <Link href="/blogs"><span>Blogs</span></Link>
                <Link href="/about"><span>About Me</span></Link>
                <Link href="/contact"><span>Contact Me</span></Link>
            </nav>
        )
    }
}

export default Navbar;