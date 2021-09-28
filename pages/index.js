import React from 'react'
import Seo from '../components/seo'
import Body from '../components/body';

import { fetchAPI } from '../lib/api'
import Layout from '../components/layout';
import HomePage from '../components/homepage/header';
import BodyContent from '../components/homepage/body';

const Home = ({ homepage }) => {
  //console.log(homepage);
  return (
    <Layout>
      <Seo seo={homepage.seo} />
      <Body>
        <HomePage info={homepage.hero} />
        <BodyContent />
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