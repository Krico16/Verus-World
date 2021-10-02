const FaIcon = ({ iconClass, icon }) => {
    return (
        <li><a className={iconClass}><i className={`fab ${icon}`}></i></a></li>
    );
}

export default FaIcon;