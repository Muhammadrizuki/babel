import Destination from "./components/Destination"
import Hero from "./components/Hero"
import Info from "./components/Info"
import Maps from "./components/Maps"
import Navbar from "./components/Navbar"
import Pack from "./components/Pack"
import Product from "./components/Product"

function App() {

  return (
    <>
      <div>
        <Navbar />
        <Hero />
        <Destination />
        <Info />
        <Product />
        <Maps />
        <Pack />
      </div>
    </>
  )
}

export default App
