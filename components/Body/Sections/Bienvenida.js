import Image from 'next/image'
import Link from 'next/link'

const Bienvenida = ({ datos }) => {
    return (
        <section className="about full-screen d-lg-flex justify-content-center align-items-center nunito">
            <div className="container">
                <div className="row">
                    <div className="col-lg-7 col-md-7 col-12 d-flex align-items-center">
                        <div className="about-text">
                            <h1 className="animated animated-text">
                                <span className="mr-2">{datos.Titulo}</span>
                            </h1>
                            <p>{datos.slogan}</p>
                            <div className="custom-btn-group mt-4">
                                <Link href="/nosotros">
                                    <a className="btn custom-btn custom-btn-bg custom-btn-link">Conoce mas acerca de nosotros</a>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5 col-md-5 col-12">
                        <div className="about-image svg">
                            <Image placeholder="blur" src={datos.background.url} width="500px" height="500px" layout="responsive" alt={datos.background.name} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Bienvenida;