'use client'
import { useEffect, useState} from 'react'
import AuthModel from '@/components/AuthModel';

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
           <AuthModel />
        </>
    );
}

export default ModelProvider