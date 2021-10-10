import BodyInformation from "./information";
import BodyList from "./list";

const BodyContent = ({ children }) => {
    return (
        <div className="wrapper row3">
            {/* <BodyList /> */}
            <BodyInformation />
        </div>
    );
}

export default BodyContent;