'use client'
import { useEffect, useState} from 'react'
import Model from '@/components/Model';

const ModelProvider = () => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) {
        return null;
    }

    return (
        <>
            <Model />
        </>
    );
}

export default ModelProvider