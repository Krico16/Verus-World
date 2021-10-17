import Image from 'next/image'
import Countdown from "react-countdown"

const Content = ({ images }) => {
    const dateOptions = { timeZone: 'America/Lima', month: 'long', day: 'numeric', year: 'numeric' };

    const dateFormatter = new Intl.DateTimeFormat('en-US', dateOptions);
    const dateAsFormattedString = dateFormatter.format(new Date('2021-10-17'));

    return (
        <div className="main-wrapper demo-06" style={{paddingTop:'100px',paddingBottom:'100px'}}>
            <div className="hero-area">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-xl-7">
                            <div className="heading">
                                <h1 className="text-white text-center">
                                    Bienvendido
                                </h1>
                            </div>
                            <Countdown date={dateAsFormattedString} renderer={Timer} />
                        </div>
                        <div className="col-xl-5 col-lg-5" >
                            <Image src={images.hero.background.url} width={634} height={951} className="cover-img" alt={images.hero.background.name} />
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
const Timer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
        return <div style={{textAlign:'center'}}><a href="https://home.verus.world/" className="btn common-btn mt-10"><h2>Entrar</h2></a></div>
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