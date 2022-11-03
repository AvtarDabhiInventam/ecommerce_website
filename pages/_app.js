import Layout from '../layout/Layout'
import 'bootstrap/dist/css/bootstrap.css';
import '../styles/globals.scss'
import '../styles/common.scss'
import '../icons/css/fontawesome.all.min.css'
import '../icons/css/icomoon.css'


function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
