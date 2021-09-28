
import Image from 'next/image'
import { getImagefromUrl } from '../../../lib/media';

const ListItem = ({ url }) => {
    return (
        <li className="one_third">
            <figure>
                <a href="#" className="imgover">
                    <img src={url} />
                </a>
                <figcaption>
                    <h6 className="heading">Title</h6>
                    <p>Subititle</p>
                </figcaption>
            </figure>
        </li>
    );
}

export default ListItem;