import Body from "../../components/body";
import Info from "../../components/Body/about/Info";
import FooterSection from "../../components/Footer/FooterSection";
import PageHeader from "../../components/Header/PageHeader";
import Layout from "../../components/layout";
import Seo from "../../components/seo";

const index = ({ data }) => {
    const sections = []
    var i = 0;

    for (const val in data.data) {
        if (Object.hasOwnProperty.call(data.data, val)) {
            const element = data.data[val];
            sections.push(<Info info={element} key={i} />)
            i++;
        }
    }


    return (
        <Layout>
            <Seo />
            <Body>
                <PageHeader />
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
                <FooterSection />
            </Body >
        </Layout >
    );
}

export async function getStaticProps() {
    const url = 'http://localhost:3000/api/hello'
    const res = await fetch(url)
    const data = await res.json();

    return {
        props: { data }
    }
}


export default index;

/*

*/