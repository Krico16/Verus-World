import InfoItem from "./infoItem";

const BodyInformation = () => {
    const items = [
        {
            icon:'fa-book',
            title:'Misión',
            info:'Tellus lacus tempor in pharetra id imperdiet sit amet enim '
        },
        {
            icon:'fa-eye',
            title:'Visión',
            info:'Laoreet ligula phasellus pede phasellus faucibus '
        },
        {
            icon:'fa-check',
            title:'Objetivos',
            info:'Vitae lacinia eu interdum tempus massa in sodales purus '
        }]
    return (
        <div className="wrapper row2">
            <section className="hoc container clear">
                <div className="sectiontitle">
                    <p className="nospace font-xs">En resumen</p>
                    <h6 className="heading">Nuestra personalidad</h6>
                </div>
                <ul className="nospace group center">
                    {
                        items.map((item, i) => {
                            return <InfoItem info={item} key={i} i={i} />
                        })
                    }
                </ul>
            </section>
        </div>
    );
}

export default BodyInformation;