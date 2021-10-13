import React, { useState } from 'react';

const PageHeader = () => {

    const [isOpen, setIsOpen] = useState(false)

    const toggleNavBar = () => {
        setIsOpen(!isOpen);
    }

    return (
        <nav className="navbar navbar-expand-sm navbar-light">
            <div className="container">
                <a className="navbar-brand title ubuntu">Verus</a>
                <button className={`navbar-toggler ${isOpen ? '' : 'collapsed'}`} aria-expanded={`${isOpen}`} type="button" onClick={toggleNavBar}>
                    <span className="navbar-toggler-icon"></span>
                    <span className="navbar-toggler-icon"></span>
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`}>
                    <ul className="navbar-nav mx-auto nunito">
                        <li className="nav-item">
                            <a href="#" className="nav-link">
                                <span>¿Quienes sómos?</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link">
                                <span>Inversiones</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link">
                                <span>Sobre nosotros</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default PageHeader;