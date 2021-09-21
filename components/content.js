import Image from 'next/image'
import Countdown from "react-countdown"
import TeamArea from './team'

const Content = () => {
    return (
        <div className="main-wrapper demo-06">
            <div className="hero-area">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6">
                            <div className="heading">
                                <h1 className="text-white">
                                    Llegaremos <br /> Pronto
                                </h1>
                            </div>
                            <Countdown date={Date.parse('2021-10-01')} renderer={Timer} />
                        </div>
                        <div className="col-xl-5 col-lg-5" >
                            <Image src={`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/uploads/logo512_55e651fea1.png`} width={600} height={800} className="cover-img" />
                        </div>
                    </div>
                </div>
            </div>
             {/*  <TeamArea /> */}
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