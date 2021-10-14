import Image from 'next/image'

const Section2 = () => {
    return (
        <section className="full-screen d-lg-flex nunito">
            <div className="container" id="quienes_somos">
                <h2 className="text-center">¿Quienes somos?</h2>
                <div className="row">
                    <div className="col-md-12 col-lg-7 mt-5 d-flex align-items-center">
                        <p className="mt-6">
                        Somos un grupo de inversión que quiere mejorar la calidad 
                        de vida de las personas mostrándoles una nueva realidad. 
                        Con nuestros esfuerzos, podemos ayudarle a lograr un mayor 
                        crecimiento económico y tener lo que siempre quisite.
                        Ofrecemos un rendimiento mensual de tu capital de hasta el 
                        <span style={{fontWeight:'bold'}}> 50%  </span>
                        </p>
                    </div>
                    <div className="col-md-12 col-lg-5">
                        <Image src="/images/DrawKit Vector Illustration Project Manager (1).svg" width="100%" height="100%" layout="responsive" />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Section2;