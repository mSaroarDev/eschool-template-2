import Hero from "../components/Hero";
import NoticeSection from "../components/NoticeSection";
import ScrollingNotice from "../components/ScrollingNotice";
import Statistics from "../components/Statistics";
import Teachers from "../components/Teachers";
import Testimonial from "../components/Testimonial";

export default function Homepage() {
  return (
    <>
      <ScrollingNotice />
      <Hero />
      <NoticeSection />
      <Statistics />
      <Teachers />
      <Testimonial />
    </>
  );
}
