const LinksTop = ({ info, n }) => {
    return (
        <li className={`${n == 0 ? 'first' : ''} one_third`} >
            <div className="block clear">
                <p className="link">
                    <i className={'fab ' + info.icon} style={{fontSize:'25px'}} ></i>
                </p>
                <span>
                    <strong>{info.title}</strong>{info.information}
                </span>
            </div>
        </li>
    );
}

export default LinksTop;