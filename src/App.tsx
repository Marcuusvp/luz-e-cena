import Banner from "./components/Banner"
import Header from "./components/Header"
import MovieSection from "./components/MovieSection"
import Newsletter from "./components/Newsletter"

function App () {
  return (
    <>
      <Header/>
      <Banner src="./BannerDesktop.png" alt="Banner"/>
      <MovieSection />
      <Banner src="./Combo.png" alt="Combo"/>
      <Newsletter />
    </>
  )

}

export default App
