import Countdown from 'react-countdown'

const InvestBody = () => {
    const dateOptions = { timeZone: 'America/Lima', month: 'long', day: 'numeric', year: 'numeric' };

    const dateFormatter = new Intl.DateTimeFormat('en-US', dateOptions);
    const dateAsFormattedString = dateFormatter.format(new Date('2021-11-01'));

    const renderer = ({ days, hours, minutes, seconds, completed }) => {
        if (completed) {
            // Render a completed state
            return <Completionist />;
        } else {
            // Render a countdown
            return (
                <span style={{fontSize:'2.5rem',color:'#fff'}} className="text-center">{days}:{hours}:{minutes}:{seconds}</span>
            );
        }
    };
    return (
        <section className="full-screen">
            <div className="container">
                <div className="row">
                    <h1 className="text-center" style={{ color: 'transparent', 'textShadow': '0 0 32px rgba(0,0,0,0.7)' }}>Pronto Iniciaremos</h1>
                </div>
                <div className="row">
                    <Countdown renderer={renderer} date={dateAsFormattedString} />
                </div>
                <div className="row">
                    <img src="/images/dolar-min.png" className='text-center' alt="" style={{ width: '60%', height: '80%', display: 'block', 'margin': 'auto' }} />
                </div>
            </div>
            <div className="row">
                <div className="text-center">
                    <h3>¿Quieres más información?</h3>
                    <h4>
                        <i className="fab fa-whatsapp"></i>
                        <a style={{ color: '#42aa13' }} href="https://wa.me/message/IEHU3JWWF3UDO1"> Escríbenos por WhatsApp</a>
                    </h4>
                </div>
            </div>
        </section>
    );
}

export default InvestBody;