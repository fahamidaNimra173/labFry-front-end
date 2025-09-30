import Image from "next/image";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import BenefitCards from "./components/BenefitCard";

export default function Home() {
  return (
    <div>
      <Banner></Banner>
      <BenefitCards></BenefitCards>
    </div>

  );
}
