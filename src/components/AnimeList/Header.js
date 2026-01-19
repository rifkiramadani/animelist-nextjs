import Link from 'next/link'
import React from 'react'

const Header = ({ title, linkHref, linkTitle }) => {
    return (
        <div>
            <div className="flex justify-between items-center p-4">
                {linkHref && linkTitle ? (
                    <>
                        <h1 className="text-2xl font-bold">{title}</h1>
                        <Link href={linkHref} className="md:text-xl text-md underline hover:text-indigo-500 transition-all">{linkTitle}</Link>
                    </>
                ) : (
                    <>
                        <h1 className="text-2xl font-bold">{title}</h1>
                    </>
                )}
            </div>
        </div>
    )
}

export default Header
