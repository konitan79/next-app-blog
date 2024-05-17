import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <header className='py-5 px-10 border-b flex justify-between items-center'>
        <div>
            <h1 className='text-2xl font-extrabold'>
                <Link href="/">MicroBlog-App</Link>
            </h1>
        </div>
        <div>
            <nav className='text-am font-medium'>
                <Link href="/articles/new" className='bg-orange-300 rounded-md px-3 py-3'>
                    記事を書く
                </Link>
            </nav>
        </div>
    </header>
  )
}

export default Header