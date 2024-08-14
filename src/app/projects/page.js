import HeroProjects from "@/components/Projects/HeroProjects";
import PortoLustrumDTETI from "@/components/Projects/PortoLustrumDTETI";
import PortoKPUFT from "@/components/Projects/PortoKPUFT";
import PortoEzParenting from "@/components/Projects/PortoEzParenting";
import CTAProjects from "@/components/Projects/CTAProjects";
import PortoTemplate from "@/components/Projects/PortoTemplate";

export const metadata = {
  title: "Our Projects | ArachnoVa",
};

export default function Page() {
  return (
    <>
      <main className="w-full flex flex-col justify-center items-center bg-transparent">
        <HeroProjects />
        {/* <PortoTemplate
          type={1}
          title={"PKM Recaping"}
          desc={`Recipe Collection for Pet with Integrated Guidance: Buku resep pakan anjing yang terintegrasi media audio visual dan kalkulator nutrisi sebagai implementasi teknologi digital. Menyediakan produk buku resep pakan hewan 3 in 1 yang pertama di Indonesia yang mencakup buku fisik, kalkulator nutrisi, dan video tutorial.`}
          srcDesktop={"/image/Projects/PKM_RecapingDesktop.png"}
          srcMobile={"/image/Projects/PKM_RecapingMobile.png"}
          link={"https://recaping.id/"}
        /> */}
        <PortoTemplate
          type={2}
          title={"PKM Recaping"}
          desc={`Recipe Collection for Pet with Integrated Guidance: Buku resep pakan anjing yang terintegrasi media audio visual dan kalkulator nutrisi sebagai implementasi teknologi digital. Menyediakan produk buku resep pakan hewan 3 in 1 yang pertama di Indonesia yang mencakup buku fisik, kalkulator nutrisi, dan video tutorial.`}
          srcDesktop={"/image/Projects/PKM_RecapingDesktop.png"}
          srcMobile={"/image/Projects/PKM_RecapingMobile.png"}
          link={"https://recaping.id/"}
        />
          <PortoEzParenting />
          <PortoKPUFT />
          <PortoLustrumDTETI />
          <CTAProjects />
      </main>
    </>
  );
}
