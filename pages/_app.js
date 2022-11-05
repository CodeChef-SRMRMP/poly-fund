import "../styles/globals.css"
import Header from "../components/Header"
import Footer from "../components/Footer"
import Landing from "../components/Landing"

function MyApp({ Component, pageProps }) {
  return (
    <div className="flex flex-col ">
      <Header />
      <Component {...pageProps} />
<<<<<<< HEAD
      {/* `<Footer />` */}
    </div>
=======
      <Landing />
      <Footer />
    </>
>>>>>>> ccf30eee045c2a26bf564960b976777bfad6664f
  )
}

export default MyApp
