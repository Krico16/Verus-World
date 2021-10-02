import { useEffect, useState } from "react";

const BackToTop = () => {
    const [isVisible, setVisible] = useState(false)

    const toggleVisibility = () => {
        if (window.pageYOffset > 400) {
            setVisible(true)
        } else {
            setVisible(false)
        }
    }

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility)
    }, [isVisible])


    return (
        <p id="backtotop" className={isVisible?'visible':undefined} onClick={scrollToTop}><i className="fas fa-chevron-up"></i></p>
    );
}

export default BackToTop;