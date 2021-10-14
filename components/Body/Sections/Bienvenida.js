import Image from 'next/image'

const Bienvenida = () => {
    return (
        <section className="about full-screen d-lg-flex justify-content-center align-items-center nunito">
            <div className="container">
                <div className="row">
                    <div className="col-lg-7 col-md-7 col-12 d-flex align-items-center">
                        <div className="about-text">
                            <h1 className="animated animated-text">
                                <span className="mr-2">Bienvenido a Verus</span>
                            </h1>
                            <p>Estamos aquí para mostrate una nueva realidad</p>
                            <div className="custom-btn-group mt-4">
                                <a href="#" className="btn custom-btn custom-btn-bg custom-btn-link">Conoce mas acerca de nosotros</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5 col-md-5 col-12">
                        <div className="about-image svg">
                            <Image src="/images/Finance-amico.svg" width="500px" height="500px" layout="responsive" alt="Finances up" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Bienvenida;