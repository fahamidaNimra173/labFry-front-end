
import Banner from "./components/Banner";
import BenefitCards from "./components/BenefitCard";
import ServicesCards from "./components/Services";
import TestimonialSection from "./components/Testimonial";

export default function Home() {
  return (
    <div>
      <Banner></Banner>
      <BenefitCards></BenefitCards>
      <ServicesCards></ServicesCards>
      <TestimonialSection></TestimonialSection>
    </div>

  );
}
