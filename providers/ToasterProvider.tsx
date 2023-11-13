'use client'

import {Toaster} from 'react-hot-toast';

const ToasterProvider = () => {
    return (
        <Toaster
            toastOptions={{
                style: {
                    background: 'green',
                    color: '#fff'
                }
            }}
        />
    )
}

export default ToasterProvider;