import "./App.css";
import Benefits from "./components/benefits/Benefits";
import BookSchedule from "./components/bookScheduleSection/BookSchedule";
import BookSlot from "./components/bookSlot/BookSlot";
import Features from "./components/features/Features";
import TopNavbar from "./components/navbar/Navbar";
import TopCart from "./components/navbar/TopCart";
import Satisfaction from "./components/saticfaction/Satisfaction";
import TopConvienceSection from "./components/topConvenienceSection/TopConvienceSection";
import WhatsappBtn from "./components/what'sappBtn/WhatsappBtn";

function App() {
  return (
    <div>
      <TopCart />
      <TopNavbar />
      <TopConvienceSection />
      <BookSchedule />
      <Features />
      <BookSlot />
      <Satisfaction />
      <Benefits />
      <WhatsappBtn />
    </div>
  );
}

export default App;
