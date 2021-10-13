import React from 'react'
import Layout from '../components/layout';
import Seo from '../components/seo'
import Body from '../components/body';

import { fetchAPI } from '../lib/api'

import PageHeader from '../components/Header/PageHeader';
import PageContent from '../components/Body/PageContent';
import BottomSection from '../components/Body/BottomSection';
import FooterSection from '../components/Footer/FooterSection';

const Home = ({ homepage }) => {
  return (
    <Layout>
      <Seo seo={homepage.seo} />
      <Body>
        <PageHeader />
        <PageContent />
        <FooterSection />
      </Body>
    </Layout>
  );
};

export async function getStaticProps() {
  const [homepage] = await Promise.all([
    fetchAPI('/homepage')
  ]);

  return {
    props: { homepage },
    revalidate: 1
  }
}

export default Home;
