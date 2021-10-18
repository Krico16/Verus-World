const Info = ({ info }) => {
    return (
        <div className="col-sm-12 col-md-12 col-lg-4">
            <div className="icon text-center" style={{ fontSize: '9vh' }}><i className={`fa ${info.icon || 'fa-book'}`}></i></div>
            <div className="text-large text-center">
                <h2>{info.title}</h2>
            </div>
            <div className="text-small" style={{ color: '#fff', textAlign: 'justify' }} >
                <h4>{info.message}</h4>
            </div>
            {(info.author) ? <div><h4 style={{ color: '#fff', fontSize: '3vh' }} className="small-text">- {info.author}</h4></div> : ''}
        </div>
    );
}

export default Info;