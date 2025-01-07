"use client"

import { useParams } from 'next/navigation';

/**
 * Client components accessing the dynamic path/slug path params.
 */
const AnalyticsDetail = () => {

    const params = useParams();
    const id = params.id;

    return (
        <div>Analytics page :: {id}</div>
    );
}

export default AnalyticsDetail;
