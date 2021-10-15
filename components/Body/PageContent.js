import Bienvenida from "./Sections/Bienvenida";
import Section1 from "./Sections/Bienvenida";
import Section2 from "./Sections/Section2";

const HeadSection = ({ data }) => {
    return (
        <>
            <Bienvenida />
            {data.map((d, i) => {
                return <Section2 info={d} site={i+1} key={i} />
            })}
        </>
    );
}

export default HeadSection;

