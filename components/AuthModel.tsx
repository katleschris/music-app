'use client'

import Model from './Model';

const AuthModel = () => {
    return (
        <Model 
        title='Welcome back'
        description='Login to your account'
        isOpen
        onChange={() => {}}>
            Auth Model children
        </Model>
    )
}

export default AuthModel