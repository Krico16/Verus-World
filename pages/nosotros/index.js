import Body from "../../components/body";
import FooterSection from "../../components/Footer/FooterSection";
import PageHeader from "../../components/Header/PageHeader";
import Layout from "../../components/layout";

const index = () => {
    return (
        <Layout>
            <Body>
                <PageHeader />
                <div>
                    <h1>Acá irá informacion sobre nosotros</h1>
                    <h4>Mision</h4>
                    <h4>Vision</h4>
                    <h4>Objetivos</h4>
                    <h4>Politicas</h4>
                </div>
                <FooterSection />

            </Body>
        </Layout>
    );
}

export default index;
