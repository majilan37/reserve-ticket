import {useEffect} from 'react'
import Aos from "aos";
import 'aos/dist/aos.css'
import Banner from "./components/Banner";
import DownloadApp from "./components/DownloadApp";
import Footer from "./components/Footer";
import Header from "./components/Header";
import LastSection from "./components/LastSection";
import SecondMain from "./components/SecondMain";
import WhyWe from "./components/WhyWe";


function App() {
  useEffect(() => {
    Aos.init({duration: 2000});
  }, [])
  return (
    <div className="flex flex-col ">
      <Header />
      <Banner />
      <main className='flex flex-col my-12 mx-auto'>
        <WhyWe />
        <SecondMain />
      </main>
      <DownloadApp />
      <LastSection />
      <Footer />
    </div>
  );
}

export default App;
