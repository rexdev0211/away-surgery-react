import Head from 'next/head';
import '../styles/Breast.css';
import '../styles/Home.css';
import '../styles/Hair.css';
import '../styles/BrowLift.css';
import '../styles/Rhinoplasty.css';
import '../styles/Contact.css';
import '../styles/Buttlift.css';
import '../styles/caresol.css';
import '../styles/Footer.css';
import '../styles/Slider.css';
import '../styles/HairTest.css';
import '../styles/Main.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>

        <link id="u-theme-google-font" rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i|Open+Sans:300,300i,400,400i,600,600i,700,700i,800,800i" />
        <link id="u-page-google-font" rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Lato:100,100i,300,300i,400,400i,700,700i,900,900i|Poppins:100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i" />
        <script src="/js/jquery.js" defer=""></script>
        <script src="/js/custompage.js" defer=""></script>
      </Head>
      <Component {...pageProps} />

    </>
  )
}

export default MyApp

