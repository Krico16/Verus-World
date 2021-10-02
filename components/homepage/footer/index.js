import FooterDiv from "./footer";

const Footer = ({content}) => {
    return (
        <div className="bgded overlay row4" style={{backgroundImage:`url(${content.background.url})`,backgroundPositionY:'60%'}}>
            <footer id="footer" className="hoc clear">
                <FooterDiv data={content} />
            </footer>
        </div>
    );
}

export default Footer;