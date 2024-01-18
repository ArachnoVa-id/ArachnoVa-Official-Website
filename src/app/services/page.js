import ServicesCustomWeb from "@/components/Services/ServicesCustom/ServicesCustom";
import ServicesHero from "@/components/Services/ServicesHero/ServicesHero.jsx";
import ServicesLandingPage from "@/components/Services/ServicesLandingPage/ServicesLandingPage";
import ServicesProfiling from "@/components/Services/ServicesProfiling/ServicesProfiling";

export const metadata = {
  title: "Our Services | ArachnoVa",
};

export default function Page() {
  return (
    <>
      <main className="w-full flex flex-col justify-center items-center bg-transparent">
        <ServicesHero />
        <ServicesLandingPage />
        <ServicesProfiling />
        <ServicesCustomWeb />
      </main>
    </>
  );
}
