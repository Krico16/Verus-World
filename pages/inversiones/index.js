import Body from "../../components/body";
import FooterSection from "../../components/Footer/FooterSection";
import PageHeader from "../../components/Header/PageHeader";
import Layout from "../../components/layout";

const index = () => {
    return (
        <Layout>
        <Body>
          <PageHeader />
          <FooterSection />
        </Body>
      </Layout>
      );
}

export default index;