"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import CardContents from "./CardContents";

export default function Slider() {
  const data = {
    title: ["Lustrum DTETI XII", "KPU FT","EzParenting","PKM Recaping"],
    description: [
      "Lustrum DTETI merupakan rangkaian acara besar perayaan ulang tahun Departemen Teknik Elektro dan Teknologi Informasi UGM yang ke-60 lebih tepatnya perayaan lustrum yang ke-12. Acara ini dimeriahkan menjadi 3 sub acara besar yaitu Tetipendence, Enforian dan Troposfer dengan semua kegiatan dinaungi oleh bagian dari DTETI FT UGM.",
      "Komisi Pemilihan Umum Fakultas Teknik UGM adalah website yang dirancang untuk melakukan pelaksanaan pemilihan ketua umum Badan Eksekutif Mahasiswa (BEM KMFT) untuk periode 2024-2025. Website memiliki fitur untuk melakukan voting dan live count saat pemilihan berlangsung.",
      "EzParenting adalah sebuah platform yang bertujuan untuk menemani perjalanan orang tua dalam mengoptimalkan perkembangan anak-anak mereka dari usia 0-5 tahun pertama kehidupan melalui pendidikan dan solusi praktis. Platform ini menyediakan informasi dan saran yang membantu orang tua dalam mendidik dan merawat anak.",
      "Recipe Collection for Pet with Integrated Guidance: Buku resep pakan anjing yang terintegrasi media audio visual dan kalkulator nutrisi sebagai implementasi teknologi digital. Menyediakan produk buku resep pakan hewan 3 in 1 yang pertama di Indonesia yang mencakup buku fisik, kalkulator nutrisi, dan video tutorial."
    ],
    image: ["/image/Projects/LustrumDTETIDesktop.svg", "/image/OurProducts/KPUFTHero.svg","image/Projects/EzParenting.svg","/image/Projects/PKM_RecapingDesktop.png"],
    imageMobile : ["/image/Projects/LustrumDTETIMobile.svg", "/image/Projects/KPUFTMobile.svg","image/Projects/EzParentingMobile.svg","/image/Projects/PKM_RecapingMobile.png"]
  };

  return (
    <Swiper height={720} spaceBetween={40} slidesPerView={1} loop={true}>
      {data.title.map(function (item, index) {
        return (
          <SwiperSlide key={index}>
            <CardContents
              title={data.title[index]}
              description={data.description[index]}
              image={data.image[index]}
              imageMobile={data.imageMobile[index]}
            />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
