import "../styles/globals.css"
import Header from "../components/Header"
import Footer from "../components/Footer"
import Landing from "../components/Landing"

function MyApp({ Component, pageProps }) {
  return (
    <div className="flex flex-col ">
      <Header />
      <Component {...pageProps} />
      <Landing />
      <Footer />
    </div>
  )
}

export default MyApp
