import Banner from "./components/banner/Banner"
import Blogs from "./components/blog/Blogs"
import Footer from "./components/footer/Footer"
import Hero from "./components/hero/Hero"
import Navbar from "./components/navbar/Navbar"



function App() {
 

  return (
    <>
    <Navbar/>
    <Hero/>
    <Banner/>
    <Banner reverse={true}/>
    <Blogs/>
    <Footer/>
    </>
  )
}

export default App
