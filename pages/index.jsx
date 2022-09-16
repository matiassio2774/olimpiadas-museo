import MainCarousel from "../components/Carousel";
import MainTitles from "../components/MainTitles";
import GuestsSection from "../components/GuestsSection";
import MobileApp from "../components/MobileApp";
import MainPuntos from "../components/MainPuntos";

export default function Home() {
  return (
    <div className='bg-slate-100 h-4/5'>
      <MainTitles />
      <MainCarousel />
      <GuestsSection />
      <MainPuntos />
      <MobileApp />
    </div>
  )
}
