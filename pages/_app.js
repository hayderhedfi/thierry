import styles from '../styles/Home.module.css';
import '../styles/globals.css'
import '../styles/tooltip.css'
import { Header } from '../components/Header';
import { Provider } from '../utils/context';
import { Footer } from '../components/Footer';


function MyApp({ Component, pageProps }) {
  return (
    <Provider >
      <div className={styles.myHome}>
        <Header />
        <Component {...pageProps} />
      </div>
      <div className='gradient-purple flex justify-center relative z-20'>
        <Footer />
      </div>
    </Provider>
  );
}

export default MyApp
