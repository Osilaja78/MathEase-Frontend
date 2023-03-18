import Link from 'next/link';


export default function NavLinks() {

    return (
        <>
          <div className='flex mr-[60px]'>
            <ul className='flex flex-col sm:relative sm:flex-row gap-5 items-center'>
              <li><Link href="/products">Our Products</Link></li>
              <li><Link href="">About</Link></li>
              <li><Link href="/auth/login">Login</Link></li>
              <li className=' bg-white p-3 rounded-lg text-purple-700'><Link href="/auth/register">Signup</Link></li>
            </ul>
          </div>
        </>
    )
}

// absolute right-10 top-20 bg-white h-[100%] text-purple-700 sm:text-white