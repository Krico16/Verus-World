const Logo = ({ info }) => {
    return (
        <div id="logo" className="one_quarter first">
            <h1>{info.title}</h1>
            <p> {info.slogan} </p>
        </div>
    );
}

export default Logo;