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
          title={"HMTI"}
          desc={`HMTI UGM berdiri sekitar bulan Juni tahun 2000. HMTI UGM pada mulanya merupakan Badan Semi Otonom (BSO) dibawah Keluarga Mahasiswa Teknik Mesin (KMTM) UGM. Hingga pada tahun 2003, kedudukan HMTI telah sejajar dengan KMTM sebagai keluarga/himpunan mahasiswa.`}
          srcDesktop={"/image/Projects/HMTIDesktop.png"}
          srcMobile={"/image/Projects/HMTIMobile.png"}
          link={"https://hmti.ft.ugm.ac.id/"}
        />
        <PortoTemplate
          type={1}
          title={"Legal Kreatif"}
          desc={`Berdiri sejak 2012, LegalKreatif telah membantu lebih dari 4000 pengusaha Indonesia untuk mendirikan perusahaan dan mengurus suluruh kebutuhan legalitas perusahaan. Membantu pengusaha mendirikan perusahaan berupa PT, CV maupun PMA.`}
          srcDesktop={"/image/Projects/LegalKreatifDesktop.png"}
          srcMobile={"/image/Projects/LegalKreatifMobile.png"}
          link={"https://www.legalkreatif.co.id/"}
        />
        <PortoTemplate
          type={2}
          title={"KMTETI"}
          desc={`KMTETI adalah organisasi resmi yang ada di Departemen Teknik Elektro dan Teknologi Informasi (DTETI). Salah satu semboyan yang dimiliki KMTETI adalah Profesionalisme Berbasis Kekeluargaan.`}
          srcDesktop={"/image/Projects/KMTETIDesktop.png"}
          srcMobile={"/image/Projects/KMTETIMobile.png"}
          link={"https://kmteti.ft.ugm.ac.id/"}
        />
        <PortoTemplate
          type={1}
          title={"Teknisiade"}
          desc={`Teknisiade adalah ajang tahunan yang diselenggarakan oleh Kementrian Olahraga, Apresiasi, dan Daya Kreasi Seni (OASE) BEM KMFT UGM. Acara ini menjadi sarana untuk mengekspresikan kreativitas olahraga dan apresiasi seni dengan mempertemukan mahasiswa dari berbagai jurusan di Fakultas Teknik.`}
          srcDesktop={"/image/Projects/TeknisiadeDesktop.png"}
          srcMobile={"/image/Projects/TeknisiadeMobile.png"}
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
        <PortoTemplate
          type={1}
          title={"EzParenting"}
          desc={` EzParenting adalah sebuah platform yang bertujuan untuk menemani
            perjalanan orang tua dalam mengoptimalkan perkembangan anak-anak
            mereka dari usia 0-5 tahun pertama kehidupan melalui pendidikan dan
            solusi praktis.`}
          srcDesktop={"/image/Projects/EzParenting.png"}
          srcMobile={"/image/Projects/EzParentingMobile.png"}
          link={"https://forked-fe-teknisiade.vercel.app/"}
        />
          <PortoKPUFT />
          <PortoLustrumDTETI />
          <CTAProjects />
      </main>
    </>
  );
}
