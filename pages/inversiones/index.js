import Body from "../../components/body";
import InvestBody from "../../components/Body/inversiones/InvestBody";
import FooterSection from "../../components/Footer/FooterSection";
import PageHeader from "../../components/Header/PageHeader";
import Layout from "../../components/layout";
import Seo from "../../components/seo";

const index = () => {
  return (
    <Layout>
      <Seo />
      <Body>
        <PageHeader />
        <InvestBody />
        <FooterSection />
      </Body>
    </Layout>
  );
}

export default index;