import NavBar from "@/components/Navabr/NavBar";
import MobileNavBar from "@/components/Navabr/mobileNavBar";
import React from "react";
import Image from "next/image";
import MathOne from "../../public/math-one.svg";

export default function AboutPage() {
  return (
    <>
        <section className=" bg-purple-700 pb-2">
            <NavBar />
            <MobileNavBar />
        </section>
        <div className="max-w-[90%] sm:max-w-[80%] m-auto my-20">
            <h1 className="text-[35px] pb-5 font-semibold max-w-[500px] text-center m-auto gradient-text-purple-blue-green">
                Welcome to MathEase, Your Intelligent Math Problem Solver
            </h1>
            <div className="flex flex-col md:flex-row items-center gap-8 justify-around mb-20">
                <Image src={MathOne} width={400} alt="math-one-illustration" className="px-10 sm:px-0"/>
                <div className="max-w-[500px]">
                    <h2 className="pb-5 text-[22px]">Unlock the Power of Computational Intelligence!</h2>
                    <p className="pb-5 text-[18px]">
                        Struggling with complex math problems? Look no further! MathEase is your
                        ultimate ally in conquering any mathematical challenge with ease.
                    </p>
                    <p className="pb-5 text-[18px]">
                        Harnessing the latest advancements in computational intelligence,
                        MathEase empowers you to tackle intricate equations, calculus problems,
                        algebraic expressions, and more, effortlessly. Our cutting-edge
                        algorithms and artificial intelligence combine to deliver lightning-fast
                        and accurate solutions, saving you time and boosting your
                        problem-solving prowess.
                    </p>
                </div>
            </div>
            <div className="max-w-max m-auto mb-5">
                <p className="text-[40px] font-medium text-center mb-2">PERKS</p>
                <hr className=" bg-purple-900"/>
            </div>
            <p className="pb-5 text-[18px]">
                Simplify your math journey with MathEase:
            </p>
            <ul className="list-disc pl-10">
                <li>Instantly solve any math question with just a single click.</li>
                <li>Experience real-time explanations and step-by-step solutions.</li>
                <li>
                    Seamlessly integrate with your favorite learning tools and
                    platforms.
                </li>
            </ul>
            <p className="py-5 mt-10 text-[18px] max-w-[500px] text-center m-auto">
                Whether you&apos;re a student striving for academic excellence or a
                professional seeking precision in your work, MathEase is here to elevate
                your math game. Ready to unleash the power of computational intelligence
                on your math challenges? Join MathEase today and witness the future of
                math problem-solving!
            </p>
        </div>
    </>
  );
}
