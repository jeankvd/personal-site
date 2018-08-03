import React from 'react';

import Navbar from '../header/Navbar'
import Footer from '../footer/Footer'
import Head from 'next/head'

const page = (props) => {
   return(
    <div>
        <Head>
            <title>Hello</title>
        </Head>

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