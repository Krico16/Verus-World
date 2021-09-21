import React from 'react'
import Seo from '../components/seo'
import Body from '../components/body';
import Footer from '../components/footer'

import { fetchAPI } from '../lib/api'
import Layout from '../components/layout';
import Header from '../components/header';
import Content from '../components/content';

const Home = ({ homepage }) => {
  return (
    <Layout>
      <Seo seo={homepage.seo} />
      <Body> 
        <Header image={homepage.seo.shareImage}/>
        <Content />
        <Footer />
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