"use client"

import React from 'react'

const Loading = () => {
    return (
        <div>
            <div className='min-h-screen flex justify-center items-center text-primary flex-col gap-y-3'>
                <div className='custom-loader'>
                </div>
                <span className='text-2xl font-bold text-primary'>LOADING...</span>
            </div>
        </div>
    )
}

export default Loading;