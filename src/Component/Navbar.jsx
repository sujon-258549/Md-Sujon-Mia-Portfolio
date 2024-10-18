"use client"
import { useState } from 'react';
import './navber.css'
import { IoMenu } from 'react-icons/io5';
import { RxCross2 } from 'react-icons/rx';
import Banner from './Banner/Banner';
import Skills from './Skills/Skills';
import Project from './Project/Project';
import Contact2 from './contact/Contact2';


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);


    return (
        <section className=''>

            <div className='fixed w-full bg-black' style={{ zIndex: '999' }}>


                <nav className="relative max-w-6xl mx-auto ">
                    <div className=" px-5 py-3 mx-auto md:flex md:justify-between md:items-center">
                        <div className="flex items-center justify-between">



                            <button
                                style={{ boxShadow: '1px 1px 10px #fff' }} className="relative inline-flex items-center justify-center px-8 py-2.5 overflow-hidden tracking-tighter text-white bg-gray-800 rounded-md group"
                            >
                                <span
                                    className="absolute w-0 h-0 transition-all duration-500 ease-out bg-orange-600 rounded-full group-hover:w-56 group-hover:h-56"
                                ></span>
                                <span className="absolute bottom-0 left-0 h-full -ml-2">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-auto h-full opacity-100 object-stretch"
                                        viewBox="0 0 487 487"
                                    >
                                        <path
                                            fill-opacity=".1"
                                            fill-rule="nonzero"
                                            fill="#FFF"
                                            d="M0 .3c67 2.1 134.1 4.3 186.3 37 52.2 32.7 89.6 95.8 112.8 150.6 23.2 54.8 32.3 101.4 61.2 149.9 28.9 48.4 77.7 98.8 126.4 149.2H0V.3z"
                                        ></path>
                                    </svg>
                                </span>
                                <span className="absolute top-0 right-0 w-12 h-full -mr-3">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        class="object-cover w-full h-full"
                                        viewBox="0 0 487 487"
                                    >
                                        <path
                                            fill-opacity=".1"
                                            fill-rule="nonzero"
                                            fill="#FFF"
                                            d="M487 486.7c-66.1-3.6-132.3-7.3-186.3-37s-95.9-85.3-126.2-137.2c-30.4-51.8-49.3-99.9-76.5-151.4C70.9 109.6 35.6 54.8.3 0H487v486.7z"
                                        ></path>
                                    </svg>
                                </span>
                                <span
                                    className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-200"
                                ></span>
                                <span className="relative text-base font-semibold">My Portfolio</span>
                            </button>




                            {/* Mobile menu button */}
                            <div className="flex md:hidden">
                                <button
                                    onClick={() => setIsOpen(!isOpen)}
                                    type="button"
                                    className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
                                    aria-label="toggle menu"
                                >
                                    {!isOpen ? (
                                        <div className='text-3xl border rounded-[6px]'>
                                            <IoMenu></IoMenu>

                                        </div>
                                    ) : (
                                        <div className='text-3xl border rounded-[6px]'>
                                            <RxCross2></RxCross2>

                                        </div>
                                    )}
                                </button>
                            </div>
                        </div>

                        {/* Mobile Menu open: "block", Menu closed: "hidden" */}
                        <div
                            className={`absolute inset-x-0 z-20  w-full px-6 py-4 transition-all duration-300 ease-in-out lg:bg-transparent bg-white lg:dark:bg-transparent dark:bg-gray-800 md:mt-0 md:p-0 md:top-0 md:relative md:bg-transparent md:w-auto md:opacity-100 md:translate-x-0 md:flex md:items-center ${isOpen ? 'translate-x-0 opacity-100' : 'opacity-0 -translate-x-full'
                                }`}
                        >
                            <div className="flex flex-col md:flex-row gap-2 md:mx-6">
                                <a href={'#'}>
                                    <button className="button">
                                        <div className="blob1"></div>
                                        <div className="blob2"></div>
                                        <div className="inner">Home</div>
                                    </button>
                                </a>
                                <a href={'#'}>
                                    <button className="button">
                                        <div className="blob1"></div>
                                        <div className="blob2"></div>
                                        <div className="inner">About Us</div>
                                    </button>
                                </a>
                                <a href={'#'}>
                                    <button className="button">
                                        <div className="blob1"></div>
                                        <div className="blob2"></div>
                                        <div className="inner">Skills</div>
                                    </button>
                                </a>
                                <a href={'/reservation'}>
                                    <button className="button">
                                        <div className="blob1"></div>
                                        <div className="blob2"></div>
                                        <div className="inner">Servises</div>
                                    </button>
                                </a>


                                <a href={'#'}>
                                    <button className="button">
                                        <div className="blob1"></div>
                                        <div className="blob2"></div>
                                        <div className="inner">Contact Us</div>
                                    </button>
                                </a>

                            </div>


                        </div>
                    </div>
                </nav>
            </div>

            <Banner></Banner>
            <Skills></Skills>

            <section className='bg-[#000000cf]'>
                <section className='w-[90%] mx-auto banner pb-10 md:pb-20'>
                    <h2 className="text-2xl md:text-4xl md:w-96 text-[#01ecff] mx-auto  lg:text-5xl  font-bold text-center font-frank pb-10 md:pb-20">Project Section</h2>

                    <Project></Project>
                </section>

            </section>
            <section className='bg-[#000000cf] '>
                <Contact2></Contact2>
            </section>
        </section >
    );
};

export default Navbar;