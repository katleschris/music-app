import { useEffect, useState } from 'react'

function useDelay<T>(value: T, delay?: number): T {
    const [delayedValue, setDelayedValue] = useState<T>(value)

    useEffect(() => {
        const timer =setTimeout(() => {
            setDelayedValue(value)
        }, delay || 500);

        return () => {
            clearTimeout(timer);
        }
    }, [value, delay]);
    return delayedValue
}

export default useDelay