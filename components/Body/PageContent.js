const PageContent = () => {
    return (
        <section className="about full-screen d-lg-flex justify-content-center align-items-center">
            <div className="container">
                <div className="row">
                    <div className="col-lg-7 col-md-7 col-12 d-flex align-items-center">
                        <div className="about-text">
                            <h1 className="animated animated-text">
                                <span className="mr-2">Bienvenido a Verus</span>
                            </h1>
                            <p>Estamos aquí para mostrate una nueva realidad</p>
                            <div className="custom-btn-group mt-4">
                                <a href="" className="btn custom-btn custom-btn-bg custom-btn-link">Conoce mas acerca de nosotros</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-5 col-md-5 col-12">
                        <div class="about-image svg">
                            <img src="https://images.vexels.com/media/users/3/208677/isolated/preview/95911e31de748f9c9b91ffe7fbe0d3c0-hojas-frescas-de-acuarela.png" class="img-fluid" alt="svg image" />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default PageContent;

