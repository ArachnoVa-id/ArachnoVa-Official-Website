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
        <PortoTemplate
          type={2}
          title={"KMTETI"}
          desc={`KMTETI adalah organisasi resmi yang ada di Departemen Teknik Elektro dan Teknologi Informasi (DTETI). Salah satu semboyan yang dimiliki KMTETI adalah Profesionalisme Berbasis Kekeluargaan.`}
          srcDesktop={"/image/Projects/KMTETIDesktop.png"}
          srcMobile={"/image/Projects/KMTETIMobile.svg"}
          link={"https://kmteti.ft.ugm.ac.id/"}
        />
        <PortoTemplate
          type={1}
          title={"Teknisiade"}
          desc={`Teknisiade adalah ajang tahunan yang diselenggarakan oleh Kementrian Olahraga, Apresiasi, dan Daya Kreasi Seni (OASE) BEM KMFT UGM. Acara ini menjadi sarana untuk mengekspresikan kreativitas olahraga dan apresiasi seni dengan mempertemukan mahasiswa dari berbagai jurusan di Fakultas Teknik.`}
          srcDesktop={"/image/Projects/TeknisiadeDesktop.png"}
          srcMobile={"/image/Projects/TeknisiadeMobile.svg"}
          link={"https://forked-fe-teknisiade.vercel.app/"}
        />
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
