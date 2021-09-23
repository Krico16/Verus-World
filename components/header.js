const Header = ({ image }) => {

    return (
        <div className="header header-06" >
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-4">
                        <div className="logo"><img width={120} height={120} src={image.url} alt={image.name} /></div>
                    </div>
                    <div className="col-md-8">
                        <div className="header-right text-right">
                            <p>Bienvenid@ a Verus Wrld!</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Header;