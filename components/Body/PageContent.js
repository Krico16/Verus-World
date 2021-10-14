import Bienvenida from "./Sections/Bienvenida";
import Section1 from "./Sections/Bienvenida";
import Section2 from "./Sections/Section2";

const HeadSection = ({ data }) => {
    return (
        <>
            <Bienvenida />
            <Section2 info={data} />
        </>
    );
}

export default HeadSection;

