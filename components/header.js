import Image from 'next/image'
import moment from 'react-moment'

import { getImagefromUrl } from "../lib/media";

const Header = ({ image }) => {

    const imageLogo = getImagefromUrl('/uploads/logo_c7adbfe6dd.png')
    return (
        <div className="header header-06" >
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-4">
                        <div className="logo"><img src={imageLogo} /></div>
                    </div>
                    <div className="col-md-8">
                        <div className="header-right text-right">
                            <a>Bienvenid@ a Verus Wrld!</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Header;