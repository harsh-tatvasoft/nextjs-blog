import { useRouter } from 'next/router';
import React from 'react';

const individualPost = () => {
    const router = useRouter();
    const { id } = router.query;

    return <div>Post: {id}</div>;
};

export default individualPost;
