import "./App.css";
import BookSchedule from "./components/bookScheduleSection/BookSchedule";
import BookSlot from "./components/bookSlot/BookSlot";
import Features from "./components/features/Features";
import TopNavbar from "./components/navbar/Navbar";
import TopCart from "./components/navbar/TopCart";
import Satisfaction from "./components/saticfaction/Satisfaction";
import TopConvienceSection from "./components/topConvenienceSection/TopConvienceSection";

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
    </div>
  );
}

export default App;
