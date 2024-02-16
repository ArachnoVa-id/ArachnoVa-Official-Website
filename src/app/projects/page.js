import HeroProjects from "@/components/Projects/HeroProjects";
import PortoLustrumDTETI from "@/components/Projects/PortoLustrumDTETI";
import PortoKPUFT from "@/components/Projects/PortoKPUFT"
import PortoEzParenting from "@/components/Projects/PortoEzParenting";
import CTAProjects from "@/components/Projects/CTAProjects";

export const metadata = {
  title: "Our Projects | ArachnoVa",
};

export default function Page() {
  return (
    <>
      <main className="w-full flex flex-col justify-center items-center bg-transparent">
        <HeroProjects />
        <PortoEzParenting/>
        <PortoKPUFT/>
        <PortoLustrumDTETI />
        <CTAProjects/>
      </main>
    </>
  );
}
