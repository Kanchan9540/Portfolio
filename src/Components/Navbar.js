import React, { useState } from "react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-black shadow-2xl shadow-yellow-300 sticky top-0 z-10" data-aos="fade-down" data-aos-duration="1000">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <div className="text-white font-bold text-lg hover:border-b-4 hover:border-yellow-300">Portfolio</div>
                    </div>
                    <div className="hidden md:flex md:items-center md:space-x-4">
                        <a href="#home" className="text-white p-4 font-bold text-lg hover:border-b-4 hover:border-yellow-300">Home</a>
                        <a href="#experience" className="text-white p-4 font-bold text-lg hover:border-b-4 hover:border-yellow-300">Experience</a>
                        <a href="#skills" className="text-white p-4 font-bold text-lg hover:border-b-4 hover:border-yellow-300">Skills</a>
                        <a href="#projects" className="text-white p-4 font-bold text-lg hover:border-b-4 hover:border-yellow-300">Projects</a>
                        <a href="#contact" className="text-white p-4 font-bold text-lg hover:border-b-4 hover:border-yellow-300">Contact</a>
                    </div>
                    <div className="flex md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-gray-300 hover:text-white focus:outline-none focus:text-white"
                        >
                            <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                                {isOpen ? (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                ) : (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            {isOpen && (
                <div className="md:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black">
                        <a href="#home" className="block px-3 py-2 rounded-md text-base font-bold text-white hover:border-b-4 hover:border-yellow-300">Home</a>
                        <a href="#experience" className="block px-3 py-2 rounded-md text-base font-bold text-white hover:border-b-4 hover:border-yellow-300">Experience</a>
                        <a href="#skills" className="block px-3 py-2 rounded-md text-base font-bold text-white hover:border-b-4 hover:border-yellow-300">Skills</a>
                        <a href="#projects" className="block px-3 py-2 rounded-md text-base font-bold text-white hover:border-b-4 hover:border-yellow-300">Projects</a>
                        <a href="#contact" className="block px-3 py-2 rounded-md text-base font-bold text-white hover:border-b-4 hover:border-yellow-300">Contact</a>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
