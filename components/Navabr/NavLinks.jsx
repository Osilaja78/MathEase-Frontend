import Link from 'next/link';
import { useContext } from 'react';
import { AuthContext } from '../auth/AuthContext';
import { useRouter } from 'next/router';

export default function NavLinks() {

  const { accessToken, logout } = useContext(AuthContext);
  const router = useRouter();

  const handleSignOutClick = () => {
    logout();
    router.reload();
  }

  return (
    <>
      <div className='flex sm:mr-[60px] px-6 sm:px-0'>
        <ul className='flex flex-col sm:relative sm:flex-row gap-5 items-center'>
          {accessToken && <li><Link href="/question-history">Question history</Link></li>}
          <li><Link href="/products">Our Products</Link></li>
          <li><Link href="/about">About</Link></li>
          {accessToken ? '' : <li><Link href="/auth/login">Login</Link></li>}
          {accessToken ? '' : <li className=' bg-white p-3 rounded-lg text-purple-700'><Link href="/auth/register">Signup</Link></li>}
          {accessToken && <li onClick={handleSignOutClick} className=' bg-white p-3 rounded-lg text-purple-700 cursor-pointer'>Sig Out</li>}
        </ul>
      </div>
    </>
  )
}
