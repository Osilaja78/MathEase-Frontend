import Head from 'next/head'
import { useRef } from "react";
import { Imprima, Inter } from '@next/font/google'
import Image from 'next/image'
import { gsap } from "gsap";
import NavBar from '@/components/Navabr/NavBar';
import MobileNavBar from '@/components/Navabr/mobileNavBar';

export default function MyHome() {

  // to prevent 'document' not defined error
  if (typeof document !== 'undefined') {
    let rocket = document.querySelector('#rocket')
    let heroText = document.querySelector('#heroText > p')
    let heroText2 = document.querySelector('#heroText2 > p')
    // let card1 = document.querySelector('#card1')
    
    // Rocket animation
    function aniateRocket() {
      const tl = gsap.timeline({defaults: {duration: 2}});
    
      tl.fromTo(rocket, {x: -20, y: -15}, {x: 5, y: 5 , yoyo: true, repeat: -1, yoyoEase: true})
    }

    // Hero text animation
    function animateText() {
      const tl = gsap.timeline({defaults: {duration: 1}});

      tl.fromTo(heroText, {y: 100, skewY: 10}, {y: 0, ease: "Power4.out", skewY: 0, stagger: {amount: 0.8}})
      tl.fromTo(heroText2, {y: 100, skewY: 10}, {y: 0, ease: "Power4.out", skewY: 0, stagger: {amount: 0.3}})
    }

    // function animateCrds() {
    //   const tl = gsap.timeline({defaults: {duration: 1}});

    //   tl.fromTo(card1, {opacity: 0}, {opacity: 1})
    // }
    animateText()
    aniateRocket()
    // animateCrds()
  }

  return (
    <>
      <Head>
        <title>MathEase</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className='w-full h-[700px] sm:h-[627px] bg-[url(../public/images/bg-img.png)] bg-cover bg-center overflow-hidden'>
        <NavBar />
        <MobileNavBar />
        <div className='sm:flex justify-between ml-10 mr-[-100px]'>
          <div className=' mt-10 sm:mt-28 text-white max-w-sm sm:max-w-2xl'>
            <div id="heroText" className=' relative overflow-hidden'>
              <p className=' text-[25px] sm:text-[40px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <div id="heroText2">
              <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                  Sunt natus numquam consequuntur dignissimos aperiam nisi 
                  enim sit illo esse, optio suscipit ut nesciunt officiis dolor 
                  laudantium dolore molestiae aspernatur eos?</p>
              </div>
            </div>
          </div>
          <Image id="rocket" src="/images/3d-rocket.png" alt="Rocket" width="600" height="600"/>
        </div>
      </section>
      <section>
        <div className=' mx-4 bg-[#fffaeb] border-2 border-[#d9d9d9] rounded-[30px] sm:max-w-[900px] p-[30px] text-center sm:mx-auto mt-10 flex flex-col gap-y-6'>
          <p className=' text-[30px]'>Mathematics Input</p>
          {/* Input form */}
          <form action="">
            <div className='flex border-2 border-orange-400 max-w-[450px] bg-white rounded-lg mx-auto mb-4'>
              <input className=' w-full sm:w-[400px] p-4 outline-none' type="text" placeholder='Enter what you want to calculate'/>
              <button className=' mb-3 mr-3 text-white bg-orange-400 px-2 mt-2 pb-1 sm:mb-0 sm:mr-0 rounded-md text-[20px]'>=</button>
            </div>
            <i className=' text-gray-400'>Example "solve 3x - 15 = 10"</i>
          </form>
          <div className='answer-div bg-white p-10 border rounded-md'>
            <i className=' text-center text-gray-500'>Answer box</i>
          </div>
        </div>
      </section>
      {/* HOW IT WORKS SECTION */}
      <section className='bg-gray-100 mt-20 py-4 pb-20'>
        <p className=' text-center text-[40px] m-10'>How it works in 3 easy steps</p>
        <div className='flex flex-col sm:flex-row gap-y-4 sm:gap-y-0 max-w-[800px] mx-auto justify-between gap-3'>
          <div id="card1" className='flex mx-auto md:mx-0 w-[300px] items-center text-center bg-white rounded-lg shadow-xl pr-6 py-8 hover:shadow-2xl'>
            <Image src="/images/hands-one.png" width="100" height="100"/>
            <p className=' text-[11px]'>Enter your search prompt in the input field above. Example prompt "solve 3x - 15 = 10"</p>
          </div>
          <div id="card3" className='flex mx-auto md:mx-0 w-[300px] items-center text-center bg-white rounded-lg shadow-xl pr-6 py-8 hover:shadow-2xl'>
            <Image src="/images/hands-two.png" width="100" height="100"/>
            <p className=' text-[11px]'>Click the submit button and wait for the system to generate your answer.</p>
          </div>
          <div id="card2" className='flex mx-auto md:mx-0 w-[300px] items-center text-center bg-white rounded-lg shadow-xl pr-6 py-8 hover:shadow-2xl'>
            <Image src="/images/hands-three.png" width="100" height="100"/>
            <p className=' text-[11px] ml-6'>And... you're all set</p>
          </div>
        </div>
      </section>
      {/* Natural language section */}
      <section>
        <div className='text-[20px] sm:text-[30px] text-center mt-20 mx-4'>
          <p>Do you want to ask a general knowledge question?</p>
          <p>Ask below.</p>
        </div>
        <div className='mx-4 bg-[#fffaeb] border-2 border-[#d9d9d9] rounded-[30px] max-w-[900px] p-[30px] text-center sm:mx-auto mt-10 flex flex-col gap-y-6'>
          <p className=' text-[30px]'>General Knowledge Input</p>
          {/* Input form */}
          <form action="">
            <div className='flex border-2 border-orange-400 max-w-[450px] bg-white rounded-lg mx-auto mb-4'>
              <input className='w-full sm:w-[400px] p-4 outline-none' type="text" placeholder='Enter what you want to know'/>
              <button className=' mb-3 mr-3 text-white bg-orange-400 px-2 mt-2 pb-1 sm:mb-0 sm:mr-0 rounded-md text-[20px]'>=</button>
            </div>
            <i className=' text-gray-400'>Example "who is the current US president"</i>
          </form>
          <div className='answer-div bg-white p-10 border rounded-md'>
            <i className=' text-center text-gray-500'>Answer box</i>
          </div>
        </div>
      </section>
      <footer className='bg-[url(../public/images/footer-bg.png)] w-full h-[768px] bg-cover bg-center overflow-hidden'>

      </footer>
    </>
  )
}
