"use client";
import React from "react";
import { PinContainer } from "../../ui/PinContainer";
import { FaLeftLong, FaRightLong, FaSquareGithub } from "react-icons/fa6";
import { CgMediaLive } from "react-icons/cg";
// import Image from "next/image";
import './h.css'
import './socal.css'
import { IoServerSharp } from "react-icons/io5";
export function Project02() {
    return (
        <div className="bg-[#2D2D2D]">
            <div className="h-[29rem] w-full flex items-center justify-center mb-16">
                <PinContainer title="Details Project" href="https://twitter.com/mannupaaji">
                    <div
                        className="flex basis-full flex-col tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[28.5rem] ">
                        <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
                        Alternative Product
                        </h3>
                        <div className="text-base !m-0 !p-0 font-normal">
                            <span className="text-slate-500 ">
                            The Alternative Product Project is a full-stack project...
                            </span>
                        </div>
                        <div className="py-5">
                            {/* <h2 className="text-center">Image Scroll on Hover</h2> */}
                            <div className="col-md-4 col-md-offset-4 contents">
                                <div className="screens">
                                    <img src="/222.png" alt="Scrollable Content" />
                                </div>
                            </div>
                        </div>
                        <div />

                        <div className="flex justify-between items-center">
                            <FaLeftLong className="text-4xl text-[#1da1f2]" />
                            <div className="flex gap-2 justify-center">

                                <div className="tooltip-container" >
                                    <div className="tooltip">
                                        <div className="profile">

                                            <div className="text-white font-mono">GitHub Link</div>
                                        </div>
                                    </div>
                                    <div className="text">
                                        <a className="icon" href="https://github.com/sujon-258549/Alternative-product-clint-side">
                                            <div className="layer">
                                                <span></span>
                                                <span></span>
                                                <span></span>
                                                <span></span>
                                                <span className="fab fa-linkedin">
                                                    <div viewBox="0 0 448 512" height="2em" style={{ marginLeft: '4px', marginTop: '4px' }}>
                                                        <FaSquareGithub className="text-[#1da1f2]" />
                                                    </div>
                                                </span>
                                            </div>

                                        </a>
                                    </div>
                                </div>
                                <div className="tooltip-container" >
                                    <div className="tooltip">
                                        <div className="profile">

                                            <div className="text-white font-mono">Server Link</div>
                                        </div>
                                    </div>
                                    <div className="text">
                                        <a className="icon" href="https://github.com/sujon-258549/altranative-product-servire">
                                            <div className="layer">
                                                <span></span>
                                                <span></span>
                                                <span></span>
                                                <span></span>
                                                <span className="fab fa-linkedin">
                                                    <div viewBox="0 0 448 512" height="2em" style={{ marginLeft: '4px', marginTop: '4px' }}>
                                                        <IoServerSharp className="text-[#1da1f2]" />
                                                    </div>
                                                </span>
                                            </div>

                                        </a>
                                    </div>
                                </div>
                                <div className="tooltip-container" >
                                    <div className="tooltip">
                                        <div className="profile">

                                            <div className="text-white font-mono">Live Link</div>
                                        </div>
                                    </div>
                                    <div className="text">
                                        <a className="icon" href="https://alternative-product-11.web.app">
                                            <div className="layer">
                                                <span></span>
                                                <span></span>
                                                <span></span>
                                                <span></span>
                                                <span className="fab fa-linkedin">
                                                    <div viewBox="0 0 448 512" height="2em" style={{ marginLeft: '4px', marginTop: '4px' }}>
                                                        <CgMediaLive className="text-[#1da1f2]" />
                                                    </div>
                                                </span>
                                            </div>

                                        </a>
                                    </div>
                                </div>

                            </div>
                            <FaRightLong className="text-4xl text-[#1da1f2]" />
                        </div>
                    </div>
                </PinContainer>
            </div>
          
        </div>
    );
}
