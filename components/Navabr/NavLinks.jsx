import Image from 'next/image'


export default function NavLinks() {

    return (
        <>
          <div className='flex'>
            <ul className='flex flex-col sm:relative sm:flex-row gap-5'>
              <li><a href="#">Our Products</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Signup</a></li>
            </ul>
          </div>
        </>
    )
}

// absolute right-10 top-20 bg-white h-[100%] text-purple-700 sm:text-white