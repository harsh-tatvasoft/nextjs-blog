import Link from 'next/link';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { useState } from 'react';

export default function Home() {
    const [pageNumber, setPageNumber] = useState('');

    return (
        <div className={styles.container}>
            <Head>
                <title>Harsh Patel | Home page</title>
            </Head>

            <div>
                <h1>Home Page</h1>

                <div>
                    <Link href="/about">
                        <a>About Page</a>
                    </Link>
                </div>
                <br />
                <div>
                    Please enter the post number you want to see{' '}
                    <input type="number" onChange={e => setPageNumber(e.target.value)} autoFocus />
                    <br />
                    {pageNumber && (
                        <Link href={`/post/${pageNumber}`}>
                            <a>Go to Post number {pageNumber}</a>
                        </Link>
                    )}
                </div>
            </div>
        </div>
    );
}
