import Image from 'next/image'
import Countdown from "react-countdown"
import TeamArea from './team'

const Content = ({ images }) => {
    return (
        <div className="main-wrapper demo-06">
            <div className="hero-area">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-7">
                            <div className="heading">
                                <h1 className="text-white">
                                    Llegaremos <br /> Pronto
                                </h1>
                            </div>
                            <Countdown date={Date.parse('2021-10-17')} renderer={Timer} />
                        </div>
                        <div className="col-xl-5 col-lg-5" >
                            <Image src={images.hero.author[0].url} width={634} height={951} className="cover-img" alt={images.hero.author[0].name} />
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
const Timer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
        return <h1>Completado!</h1>
    } else {
        return <>
            <div className="countdown d-flex">
                <div className="single-count-content">
                    <span className="count">{days}</span>
                    <p className="text">Dias</p>
                </div>
                <div className="single-count-content">
                    <span className="count">{hours}</span>
                    <p className="text">Horas</p>
                </div>
                <div className="single-count-content">
                    <span className="count">{minutes}</span>
                    <p className="text">Minutos</p>
                </div>
                <div className="single-count-content">
                    <span className="count">{seconds}</span>
                    <p className="text">Segundos</p>
                </div>
            </div>
        </>
    }
}

export default Content
/**
 * 
 * 
 */

/**
 * Inicio
 *  Bienvenida
 *  Mision
 *  Vision
 *  Objetivos
 *  Politicas
 *  Invitacion
 * 
 * Inversiones
 *  Informacón
 *  Requisitos
 *  Servicios
 *  Caja de Ahorro
 *  Fondo de retiro
 *  Rendimiento sobre interes compuesto
 *  Financiamiento universitario
 *  Educación
 * 
 * Paginas adicionales
 *  Acerca de
 *  Terminos y condiciones
 *  
 * 
 * Restaurante (publicidad)
 *  Logo
 *  Concepto
 *  Galería
 * 
 */