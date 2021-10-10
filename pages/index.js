import React from 'react'
import Seo from '../components/seo'
import Body from '../components/body';

import { fetchAPI } from '../lib/api'
import Layout from '../components/layout';
import HomePage from '../components/homepage/header';
import BodyContent from '../components/homepage/body';
import Footer from '../components/homepage/footer';

const Home = ({ homepage }) => {
  return (
    <Layout>
      <Seo seo={homepage.seo} />
      <Body>
        <HomePage info={homepage.hero} meta={homepage.seo} buttons={homepage.HomePage} />
        <BodyContent />
        <Footer content={homepage.hero} />
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


/**
 * Inicio
 *  ✓  Bienvenida
 *  ✓  Mision
 *  ✓  Vision
 *  ✓  Objetivos
 *  ✘  Politicas
 *  ✘  Invitacion
 * 
 * Inversiones
 *  ✘  Informacón
 *  ✘  Requisitos
 *  ✘  Servicios
 *  ✘  Caja de Ahorro
 *  ✘  Fondo de retiro
 *  ✘  Rendimiento sobre interes compuesto
 *  ✘  Financiamiento universitario
 *  ✘  Educación
 * 
 * Paginas adicionales
 *  ✘  Acerca de
 *  ✘  Terminos y condiciones
 *  
 * 
 * Restaurante (publicidad)
 *  Logo
 *  Concepto
 *  Galería
 * 
 * ✓✘
 */