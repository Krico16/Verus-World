import Countdown from "react-countdown"

const Content = () => {
    return (
        <div className="main-wrapper demo-06">
            <div className="hero-area">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="heading">
                                <h1 className="text-white">
                                    Llegaremos <br /> Pronto
                                </h1>
                            </div>
                        </div>
                        <div className="col-xl-7 col-lg-7">
                            <Countdown date={Date.parse('2021-10-01') } renderer={Timer} />
                        </div>
                        <div className="col-xl-5 col-lg-5">
                            <p></p>
                        </div>
                    </div>
                </div>
            </div>
        
            <div className="team-area">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-9">
                            <div className="section-title">
                                <h1>Nuestro equipo</h1>
                                <h2>Un equipo encargado de mejorar el futuro</h2>
                            </div>
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
        return <div class="countdown d-flex">
            <div class="single-count-content">
                <span class="count">{days}</span>
                <p class="text">Dias</p>
            </div>
            <div class="single-count-content">
                <span class="count">{hours}</span>
                <p class="text">Horas</p>
            </div>
            <div class="single-count-content">
                <span class="count">{minutes}</span>
                <p class="text">Minutos</p>
            </div>
            <div class="single-count-content">
                <span class="count">{seconds}</span>
                <p class="text">Segundos</p>
            </div>
        </div>
    }
}

export default Content