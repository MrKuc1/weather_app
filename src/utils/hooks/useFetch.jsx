import React, {useEffect, useState} from 'react';

const UseFetch = (request, options) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const fetchData = async (request) => {
        setLoading(true);
        try {
            await request(options)
                .then((data) => {
                    if (data.status === 200) {
                        setData(data);
                    }
                })
        } catch (error) {
            console.error(error);
            setError(error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        if (request) {
            fetchData(request);
        }
    }, [])


    return [data, loading, error];
};

export default UseFetch;