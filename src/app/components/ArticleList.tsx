import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ArticleList = () => {
  return (
    <div>
        <article className='shadow my-4'>
            <Link href="#" className='hover:opacity-75'>
                <Image 
                 src='https://source.unsplash.com/collection/1346951/1000×500?sig=5'
                 alt=''
                 width={1280}
                 height={300}/>
            </Link>
            <div className='bg-white flex flex-col p-6 justify-start'>
                <Link href="#" className='text-blue-700 pb-4 font-bold'>Technology</Link>
                <Link href="#" className='text-slate-900 text-3xl font-bold hover:text-gray-700 pb-4'>これはTEST</Link>
                <p className='text-sm pb-3 text-slate-900'>Publoshed on 2024/5/24</p>
                <Link href="#" className='text-slate-900 pb-6'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus adipisci perferendis ex eligendi neque saepe eveniet, magnam voluptate accusantium iusto blanditiis ad consectetur quae molestias, totam enim. Consequuntur, quos enim?
                </Link>

                <Link href="#" className='text-pink-800 hover:text-black'>
                    続きを読む
                </Link>
            </div>
        </article>

        <article className='shadow my-4'>
            <Link href="#" className='hover:opacity-75'>
                <Image 
                 src='https://source.unsplash.com/collection/1346951/1000×500?sig=5'
                 alt=''
                 width={1280}
                 height={300}/>
            </Link>
            <div className='bg-white flex flex-col p-6 justify-start'>
                <Link href="#" className='text-blue-700 pb-4 font-bold'>Technology</Link>
                <Link href="#" className='text-slate-900 text-3xl font-bold hover:text-gray-700 pb-4'>これはTEST</Link>
                <p className='text-sm pb-3 text-slate-900'>Publoshed on 2024/5/24</p>
                <Link href="#" className='text-slate-900 pb-6'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus adipisci perferendis ex eligendi neque saepe eveniet, magnam voluptate accusantium iusto blanditiis ad consectetur quae molestias, totam enim. Consequuntur, quos enim?
                </Link>

                <Link href="#" className='text-pink-800 hover:text-black'>
                    続きを読む
                </Link>
            </div>
        </article>
    </div>
  )
}

export default ArticleList