import Head from 'next/head'
import { Imprima, Inter } from '@next/font/google'
import Image from 'next/image'
import { gsap } from "gsap";
import NavBar from '@/components/Navabr/NavBar';
import MobileNavBar from '@/components/Navabr/mobileNavBar';
import MathInput from '@/components/InputBox/mathQuestion';
import NaturalLanguagInput from '@/components/InputBox/naturalLanguageInput'

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

    animateText()
    aniateRocket()
  }

  return (
    <>
      <Head>
        <title>MathEase</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/logo.png" />
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
        <MathInput />
      </section>
      {/* HOW IT WORKS SECTION */}
      <section className='bg-gray-100 mt-20 py-4 pb-20'>
        <p className=' text-center text-[40px] m-10'>How it works in 3 easy steps</p>
        <div className='flex flex-col sm:flex-row gap-y-4 sm:gap-y-0 max-w-[800px] mx-auto justify-between gap-3'>
          <div id="card1" className='flex mx-auto md:mx-0 w-[300px] items-center text-center bg-white rounded-lg shadow-xl pr-6 py-8 hover:shadow-2xl'>
            <Image src="/images/hands-one.png" width="100" height="100" alt="hand-one"/>
            <p className=' text-[11px]'>Enter your search prompt in the input field above. Example prompt "solve 3x - 15 = 10"</p>
          </div>
          <div id="card3" className='flex mx-auto md:mx-0 w-[300px] items-center text-center bg-white rounded-lg shadow-xl pr-6 py-8 hover:shadow-2xl'>
            <Image src="/images/hands-two.png" width="100" height="100" alt="hand-two"/>
            <p className=' text-[11px]'>Click the submit button and wait for the system to generate your answer.</p>
          </div>
          <div id="card2" className='flex mx-auto md:mx-0 w-[300px] items-center text-center bg-white rounded-lg shadow-xl pr-6 py-8 hover:shadow-2xl'>
            <Image src="/images/hands-three.png" width="100" height="100" alt="hand-three"/>
            <p className=' text-[11px] ml-6'>And... you're all set</p>
          </div>
        </div>
      </section>
      {/* Natural language section */}
      <section>
        <NaturalLanguagInput />
      </section>
      <footer className='bg-[url(../public/images/footer-bg.png)] w-full h-[768px] bg-cover bg-center overflow-hidden'>

      </footer>
    </>
  )
}
