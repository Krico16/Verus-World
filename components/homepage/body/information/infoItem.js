import Link from 'next/link'

const InfoItem = ({ info, i }) => {
    return (
        <li className={`one_third ${i == 0 ? 'first' : ''}`}>
            <article><i className={`fas ${info.icon} fa-5x btmspace-50`}></i></article>
            <h6 className="heading">{info.title}</h6>
            <p className="btmspace-30">{info.info}</p>
            <footer>
                <Link href="/nosotros">
                    <a className="btn">Conocer Más</a>
                </Link>
            </footer>
        </li>
    );
}

export default InfoItem;