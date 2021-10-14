const FooterSection = () => {
    let currDate = new Date();
    let year = currDate.getFullYear()
    return (
        <footer className="footer py-5 mont">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <p className="copyright-text text-center">
                            Copyright &copy; {year} - Verus World. All rights reserved
                        </p>
                    </div>
                    <p className="copyright-text text-center">Created with ♥ by <a rel="nofollow" href="https://github.com/Krico16">Krico16</a> </p>
                </div>
            </div>
        </footer>
    );
}

export default FooterSection;