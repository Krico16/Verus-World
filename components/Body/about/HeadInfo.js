const HeadInfo = () => {
    return (
        <div className="full-screen about d-lg-flex justify-content-center align-items-center ubuntu">
            <div className="container-fluid">
                <div className="row ">
                    <div className="col-12">
                        <div className="about-text text-center">
                            <h1>Nuestro pensamiento</h1>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {sections}
                </div>
            </div>
        </div >
    );
}

export default HeadInfo;