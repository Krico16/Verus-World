import Image from 'next/image'

const Section2 = ({ info, site }) => {


    return (
        <section className="full-screen d-lg-flex nunito">
            <div className="container" id="quienes_somos">
                <h2 className="text-center">{info.Titulo}</h2>
                <div className="row">
                    {(site % 2) ? <>
                        <div className={`col-md-12 ${site % 2 ? 'col-lg-7' : 'col-lg-5'} mt-5 d-flex align-items-center`}>
                            <p className="mt-6"> {info.Descripcion} </p>
                        </div>
                        <div className={`col-md-12 ${site % 2 ? 'col-lg-5' : 'col-lg-7'}`}>
                            <Image src={info.imagen.url} width="100%" height="100%" layout="responsive" alt={info.imagen.name} />
                        </div>
                    </> :
                        <>
                            <div className={`col-md-12 ${site % 2 ? 'col-lg-5' : 'col-lg-7'}`}>
                                <Image src={info.imagen.url} width="100%" height="100%" layout="responsive" alt={info.imagen.name} />
                            </div>
                            <div className={`col-md-12 ${site % 2 ? 'col-lg-7' : 'col-lg-5'} mt-5 d-flex align-items-center`}>
                                <p className="mt-6"> {info.Informacion} </p>
                            </div>
                        </>
                    }
                </div>
            </div>
        </section>
    );
}

export default Section2;
/*
                    <>
                        <div className={`col-md-12 ${site % 2 ? 'col-lg-7' : 'col-lg-5'} mt-5 d-flex align-items-center`}>
                            <p className="mt-6"> {info.Informacion} </p>
                        </div>
                        <div className={`col-md-12 ${site % 2 ? 'col-lg-5' : 'col-lg-7'}`}>
                            <Image src={info.Imagen.url} width="100%" height="100%" layout="responsive" alt={info.Imagen.name} />
                        </div>
                    </>


*/