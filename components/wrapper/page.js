import React from 'react';

import Navbar from '../header/Navbar'
import Footer from '../footer/Footer'

const page = (props) => {
   return(
    <div>
        <header>
            <Navbar />
        </header>
        <main>
            {props.children}
        </main>
        <Footer />
    </div>
   )
}

export default page;