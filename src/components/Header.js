import React from "react";
import { Disclosure } from '@headlessui/react';
import { useLocation, Link } from 'react-router-dom';

const Header = () => {
    const location = useLocation();
    return (
        <>
            <div className="min-h-full">
                <Disclosure as="nav" className="bg-extracolor">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="flex h-16 items-center justify-between">
                            <div className="flex items-center">
                                <div className="ml-10 flex items-baseline space-x-4">
                                    <ul className="flex flex-row">
                                        <li className={location.pathname === '/' ? 'active' : ''}>
                                            <Link to="/" className={location.pathname === '/' ? 'mr-6 text-xl text-textcolor font-bold underline underline-offset-8' : 'mr-6 text-xl text-gray-300 hover:text-white font-bold'}>Main</Link>
                                        </li>
                                        <li className={location.pathname === '/charector' ? 'active' : ''}>
                                            <Link to="/charecters" className={location.pathname === '/charecters' ? 'mr-6 text-xl text-textcolor font-bold underline underline-offset-8' : 'mr-6 text-xl text-gray-300 hover:text-white font-bold'}>Charecter</Link>
                                        </li>
                                        <li className={location.pathname === '/likes' ? 'active' : ''}>
                                            <Link to="/likes" className={location.pathname === '/likes' ? 'mr-6 text-xl text-textcolor font-bold underline underline-offset-8' : 'mr-6 text-xl text-gray-300 hover:text-white font-bold'}>Likes</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </Disclosure>
            </div>
        </>
    )
};

export default Header;