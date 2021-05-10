import Link from 'next/link';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React from 'react';

const individualPost = () => {
    const router = useRouter();
    const { id } = router.query;

    return (
        <div>
            <Head>
                <title>Harsh Patel | Post</title>
            </Head>

            <div>
                <div>Post: {id}</div>

                <div>
                    <Link href="/">
                        <a>Go back to Home</a>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default individualPost;
