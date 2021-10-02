import CenterFooter from "./center";

const FooterDiv = ({ data }) => {
    return (
        <>
            <CenterFooter data={data} />
            {
                //<hr className="btmspace-50" />
            }
        </>
    );
}

export default FooterDiv;