import Link from 'next/link';
import Head from 'next/head';
import React from 'react';

const About = () => {
    return (
        <div>
            <Head>
                <title>Harsh Patel | About page</title>
            </Head>

            <div>
                <h1>About</h1>

                <Link href="/">
                    <a>Home Page</a>
                </Link>
            </div>
        </div>
    );
};

export default About;
