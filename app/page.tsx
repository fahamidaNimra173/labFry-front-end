
import Banner from "./components/Banner";
import BenefitCards from "./components/BenefitCard";
import FAQSection from "./components/FAQ";
import ServicesCards from "./components/Services";
import TestimonialSection from "./components/Testimonial";

export default function Home() {
  return (
    <div>
      <Banner></Banner>
      <BenefitCards></BenefitCards>
      <ServicesCards></ServicesCards>
      <TestimonialSection></TestimonialSection>
      <FAQSection></FAQSection>
    </div>

  );
}
