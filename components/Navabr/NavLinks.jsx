import Link from 'next/link';


export default function NavLinks() {

    return (
        <>
          <div className='flex sm:mr-[60px] px-6 sm:px-0'>
            <ul className='flex flex-col sm:relative sm:flex-row gap-5 items-center'>
              <li><Link href="/products">Our Products</Link></li>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/auth/login">Login</Link></li>
              <li className=' bg-white p-3 rounded-lg text-purple-700'><Link href="/auth/register">Signup</Link></li>
            </ul>
          </div>
        </>
    )
}
