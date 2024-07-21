'use client';

import { useEffect, useState } from 'react';

const useHash = () => {
    const [hash, setHash] = useState<string>(window.location.hash);

    useEffect(() => {
        const onHashChange = () => {
            setHash(window.location.hash);
        };

        window.addEventListener('hashchange', onHashChange);

        return () => {
            window.removeEventListener('hashchange', onHashChange);
        };
    }, []);

    return hash;
};

export default useHash;
