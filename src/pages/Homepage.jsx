import Hero from "../components/Hero";
import NoticeSection from "../components/NoticeSection";
import SEOPage from "../components/SEOPage";
import ScrollingNotice from "../components/ScrollingNotice";
import Statistics from "../components/Statistics";
import Teachers from "../components/Teachers";
import Testimonial from "../components/Testimonial";
import { useSEOInfo } from "../seo/useSeoInfo";

export default function Homepage() {
  const getSeoInfo = useSEOInfo();

  return (
    <>
      {/* seo start */}
      <SEOPage title={`${getSeoInfo && getSeoInfo?.schoolInfo?.name_en} - ${getSeoInfo && getSeoInfo?.schoolInfo?.name_bn}`} />
      {/* seo end */}

      <ScrollingNotice />
      <Hero />
      <NoticeSection />
      <Statistics />
      <Teachers />
      <Testimonial />
    </>
  );
}
