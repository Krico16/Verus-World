import React, { useState } from 'react';
import Link from 'next/link'

const PageHeader = () => {

    const [isOpen, setIsOpen] = useState(false)

    const toggleNavBar = () => {
        setIsOpen(!isOpen);
    }

    return (
        <nav className="navbar navbar-expand-sm navbar-light">
            <div className="container">
                <Link href="/"><a className="navbar-brand ubuntu">Verus</a></Link>
                <button className={`navbar-toggler ${isOpen ? '' : 'collapsed'}`} aria-expanded={`${isOpen}`} type="button" onClick={toggleNavBar}>
                    <span className="navbar-toggler-icon"></span>
                    <span className="navbar-toggler-icon"></span>
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className={`collapse navbar-collapse justify-content-end ${isOpen ? 'show' : ''}`}>
                    <ul className="navbar-nav nunito ">
                        <li className="nav-item">
                            <Link href="/inversiones">
                                <a className="nav-link">
                                    <span>Inversiones</span>
                                </a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default PageHeader;