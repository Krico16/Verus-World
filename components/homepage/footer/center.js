import FaIcon from "./icon";

/**
 * Titulo de página
 * Lista de botones
 * Slogan
 */
const CenterFooter = ({data}) => {
    return (
        <div className="center btmspace-50">
            <h6 className="heading">{data.title}</h6>
            <ul className="faico clear">
                <FaIcon iconClass="faicon-dribble" icon="fa-dribbble" />
                <FaIcon iconClass="faicon-facebook" icon="fa-facebook" />
                <FaIcon iconClass="faicon-google" icon="fa-google" />
                <FaIcon iconClass="faicon-linkedin" icon="fa-linkedin" />
                <FaIcon iconClass="faicon-twitter" icon="fa-twitter" />
                <FaIcon iconClass="faicon-vk" icon="fa-vk" />
            </ul>
            <p className="nospace">{data.slogan}</p>
        </div>
    );
}

export default CenterFooter;