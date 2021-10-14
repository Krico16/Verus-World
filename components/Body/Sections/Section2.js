import Image from 'next/image'

const Section2 = ({ info }) => {
    return (
        <section className="full-screen d-lg-flex nunito">
            <div className="container" id="quienes_somos">
                <h2 className="text-center">¿Quienes somos?</h2>
                <div className="row">
                    <div className="col-md-12 col-lg-7 mt-5 d-flex align-items-center">
                        <p className="mt-6"> {info.Informacion} </p>
                    </div>
                    <div className="col-md-12 col-lg-5">
                        <Image src={info.Imagen.url} width="100%" height="100%" layout="responsive" alt={info.Imagen.name} />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Section2;