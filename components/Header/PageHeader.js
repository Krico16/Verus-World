import React, { useState } from 'react';

const PageHeader = () => {

    const [isOpen, setIsOpen] = useState(false)

    const toggleNavBar = () => {
        setIsOpen(!isOpen);
    }

    return (
        <div className="header-2">
            <nav className="py-2 md:py-4">
                <div className="container px-4 mx-auto md:flex md:items-center">
                    <div className="flex justify-between items-center">
                        <a href="" className="font-bold text-gray-100 text-3xl">Verus</a>
                        <button className="border border-solid border-gray-100 px-3 py-1 rounded text-gray-100 opacity-50 hover:opacity-75 md:hidden" onClick={toggleNavBar}>
                            <i className="fas fa-bars"></i>
                        </button>
                    </div>

                    <div className={`${isOpen?'flex':'hidden'} md:flex flex-col md:flex-row md:ml-auto mt-3 md:mt-0`}>
                        <a href="#" class="p-2 lg:px-4 md:mx-2 font-semibold text-gray-300">Página principal</a>
                        <a href="#" class="p-2 lg:px-4 md:mx-2 font-semibold text-gray-300">Inversiones</a>
                        <a href="#" class="p-2 lg:px-4 md:mx-2 font-semibold text-gray-300">Sobre nosotros</a>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default PageHeader;