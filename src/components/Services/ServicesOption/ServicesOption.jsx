"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  Table,
  TableHeader,
  TableBody,
  TableColumn,
  TableRow,
  TableCell,
} from "@nextui-org/react";
import ServicesOptionButton from "./ServicesOptionButton";
import Image from "next/image";
import { IoMdArrowRoundBack } from "react-icons/io";

const ServicesOption = () => {
  useEffect(() => {
    AOS.init({
      duration: 1500,
    });
  }, []);
  return (
    <section
      className="relative w-full lg:min-h-screen flex flex-col justify-center items-center bg-white-MainPage
                 lg:pt-[5.208vw] lg:pb-[6.25vw]"
    >
      <div
        className="relative flex flex-col justify-center items-center text-black
                   lg:gap-[3.125vw]"
      >
        <div
          data-aos="fade-down"
          className="flex flex-col justify-center items-center
                     lg:gap-[0.417vw]"
        >
          <div
            className="text-[#001118] font-SourceSansProBold leading-[125%]
                       lg:text-[2.083vw]"
          >
            Choose Your Services
          </div>
          <div
            className="text-[#4E5F66] text-center leading-[150%] font-SourceSansProSemibold
                       lg:text-[1.042vw] lg:w-[43.229vw]"
          >
            Kami menawarkan berbagai pilihan paket dengan fitur dan harga yang
            berbeda sehingga dapat menemukan solusi yang tepat untuk Anda.
          </div>
        </div>
        <div
          data-aos="fade-up"
          className="flex bg-[#FAFDFF] border-[#E2E8F0] overflow-hidden
                     lg:border-[0.156vw]  lg:rounded-[1.042vw] lg:shadow-[0_0.573vw_1.042vw_-0.521vw_rgba(0,0,0,0.25)]"
        >
          <div
            className="flex flex-col border-[#E2E8F0]
                       lg:border-r-[0.052vw] lg:w-[18.75vw]"
          >
            <div
              className="flex flex-col justify-center items-start border-[#E2E8F0]
                         lg:border-b-[0.052vw] lg:h-[11.719vw] lg:p-[1.667vw]  lg:gap-[0.625vw]"
            >
              <div
                className="font-SourceSansProBold text-neutral-g leading-[125%]
                           lg:text-[1.25vw]"
              >
                Spesifikasi Layanan
              </div>
              <div
                className="font-SourceSansProSemibold text-neutral-e leading-[133.333%]
                           lg:text-[0.781vw]"
              >
                Pilih Paket yang Sesuai untuk Kebutuhan Anda
              </div>
            </div>
            <div
              className="flex flex-col justify-center border-[#E2E8F0]
                         lg:p-[1.667vw] lg:border-b-[0.052vw] lg:h-[6.406vw]"
            >
              <div
                className="font-InterBold text-transparent bg-clip-text bg-gradient-to-r from-[#0893D4] via-[#44C4D9] to-[#159E8D]
                           lg:text-[1.25vw]"
              >
                Harga
              </div>
            </div>
            <div
              className="flex flex-col justify-center border-[#E2E8F0] font-InterSemibold
                         lg:p-[1.667vw] lg:border-b-[0.052vw] lg:h-[4.167vw] lg:text-[0.938vw]"
            >
              Pages
            </div>
            <div
              className="flex flex-col justify-center border-[#E2E8F0] font-InterSemibold
                         lg:p-[1.667vw] lg:border-b-[0.052vw] lg:h-[4.167vw] lg:text-[0.938vw]"
            >
              Jumlah Section
            </div>
            <div
              className="flex flex-col justify-center border-[#E2E8F0] font-InterSemibold
                         lg:p-[1.667vw] lg:border-b-[0.052vw] lg:h-[4.167vw] lg:text-[0.938vw]"
            >
              Estimasi Waktu
            </div>
            <div
              className="flex flex-col justify-center border-[#E2E8F0] font-InterSemibold
                         lg:p-[1.667vw] lg:border-b-[0.052vw] lg:h-[4.167vw] lg:text-[0.938vw]"
            >
              Konfigurasi Admin
            </div>
            <div
              className="flex flex-col justify-center border-[#E2E8F0] font-InterSemibold
                         lg:p-[1.667vw] lg:border-b-[0.052vw] lg:h-[4.167vw] lg:text-[0.938vw]"
            >
              Kustomisasi
            </div>
            <div
              className="flex flex-col justify-center border-[#E2E8F0] font-InterSemibold
                         lg:p-[1.667vw] lg:border-b-[0.052vw] lg:h-[4.167vw] lg:text-[0.938vw]"
            >
              Extension
            </div>
          </div>
          <div
            className="flex flex-col border-[#E2E8F0] relative
                       lg:border-r-[0.052vw] lg:w-[18.75vw]"
          >
            <div
              className="flex flex-col items-center border-[#E2E8F0] relative
                         lg:border-b-[0.052vw] lg:h-[11.719vw] lg:p-[1.458vw] lg:gap-[1.458vw]"
            >
              <div className="w-full h-full relative">
                <div
                  className="flex flex-col justify-center items-center relative
                           "
                >
                  <div
                    className="font-SourceSansProBold text-center text-neutral-g
                               lg:text-[1.458vww]"
                  >
                    Landing Page
                  </div>
                  <div
                    className="font-SourceSansProSemibold text-center text-neutral-e leading-[125%]
                               lg:text-[0.729vw]"
                  >
                    Lorem ipsum dolor sit amet consectetur. Vulputate viverra
                    sociis amet ullamcorper sed odio nulla sem.
                  </div>
                </div>
                <div className="absolute bottom-0">
                  <ServicesOptionButton href="https://wa.me/6281809252706" />
                </div>
              </div>
            </div>
            <div
              className="flex flex-col justify-center items-center border-[#E2E8F0]
                         lg:p-[1.667vw] lg:border-b-[0.052vw] lg:h-[6.406vw]"
            >
              <div
                className="font-InterBold text-transparent bg-clip-text bg-gradient-to-r from-[#0893D4] via-[#44C4D9] to-[#159E8D]
                           lg:text-[1.458vw]"
              >
                Rp 475.000
              </div>
            </div>
            <div
              className="flex flex-col justify-center items-center border-[#E2E8F0] font-InterSemibold
                         lg:p-[1.667vw] lg:border-b-[0.052vw] lg:h-[4.167vw] lg:text-[0.938vw]"
            >
              1-2 Pages
            </div>
            <div
              className="flex flex-col justify-center items-center border-[#E2E8F0] font-InterSemibold
                         lg:p-[1.667vw] lg:border-b-[0.052vw] lg:h-[4.167vw] lg:text-[0.938vw]"
            >
              {" "}
              4-12
            </div>
            <div
              className="flex flex-col justify-center items-center border-[#E2E8F0] font-InterSemibold
                         lg:p-[1.667vw] lg:border-b-[0.052vw] lg:h-[4.167vw] lg:text-[0.938vw]"
            >
              {" "}
              3-7 Hari
            </div>
            <div
              className="flex flex-col justify-center items-center border-[#E2E8F0] font-InterSemibold
                         lg:p-[1.667vw] lg:border-b-[0.052vw] lg:h-[4.167vw] lg:text-[0.938vw]"
            >
              <Image
                src="/image/OurServices/red-cross.svg"
                alt=""
                draggable="false"
                style={{ width: "1.51vw", height: "auto" }}
                width="28"
                height="28"
              />
            </div>
            <div
              className="flex flex-col justify-center items-center border-[#E2E8F0] font-InterSemibold
                         lg:p-[1.667vw] lg:border-b-[0.052vw] lg:h-[4.167vw] lg:text-[0.938vw]"
            >
              <div>Desain unik</div>
              <div>Layout template</div>
            </div>
            <div
              className="flex flex-col justify-center items-center border-[#E2E8F0] font-InterSemibold
                         lg:p-[1.667vw] lg:border-b-[0.052vw] lg:h-[4.167vw] lg:text-[0.938vw]"
            >
              +25K untuk tiap section
            </div>
          </div>
          <div
            className="flex flex-col border-[#E2E8F0] relative
                       lg:border-r-[0.052vw] lg:w-[18.75vw]"
          >
            <div
              className="flex flex-col items-center border-[#E2E8F0] relative
                         lg:border-b-[0.052vw] lg:h-[11.719vw] lg:p-[1.458vw] lg:gap-[1.458vw]"
            >
              <div className="w-full h-full relative">
                <div
                  className="flex flex-col justify-center items-center relative
                           "
                >
                  <div
                    className="font-SourceSansProBold text-center text-neutral-g
                               lg:text-[1.458vww]"
                  >
                    ComPro
                  </div>
                  <div
                    className="font-SourceSansProSemibold text-center text-neutral-e leading-[125%]
                               lg:text-[0.729vw]"
                  >
                    Lorem ipsum dolor sit amet consectetur. Vulputate viverra
                    sociis amet ullamcorper sed odio nulla sem.
                  </div>
                </div>
                <div className="absolute bottom-0">
                  <ServicesOptionButton href="https://wa.me/6281809252706" />
                </div>
              </div>
            </div>
            <div
              className="flex flex-col justify-center items-center border-[#E2E8F0]
                         lg:p-[1.667vw] lg:border-b-[0.052vw] lg:h-[6.406vw]"
            >
              <div
                className="flex flex-col justify-center items-center font-InterBold text-transparent bg-clip-text bg-gradient-to-r from-[#0893D4] via-[#44C4D9] to-[#159E8D]
                           lg:text-[1.458vw]"
              >
                <div
                  className="font-InterSemibold text-neutral-d
                             lg:text-[0.729vw]"
                >
                  Start from
                </div>
                Rp 1.100.000
                <div
                  className="font-InterSemibold text-neutral-d
                             lg:text-[0.729vw] lg:h-[1.823vw]"
                >
                  Harga tergantung jumlah page
                </div>
              </div>
            </div>
            <div
              className="flex flex-col justify-center items-center border-[#E2E8F0] font-InterSemibold
                         lg:p-[1.667vw] lg:border-b-[0.052vw] lg:h-[4.167vw] lg:text-[0.938vw]"
            >
              4-8 Pages
            </div>
            <div
              className="flex flex-col justify-center items-center border-[#E2E8F0] font-InterSemibold
                         lg:p-[1.667vw] lg:border-b-[0.052vw] lg:h-[4.167vw] lg:text-[0.938vw]"
            >
              {" "}
              20-35
            </div>
            <div
              className="flex flex-col justify-center items-center border-[#E2E8F0] font-InterSemibold
                         lg:p-[1.667vw] lg:border-b-[0.052vw] lg:h-[4.167vw] lg:text-[0.938vw]"
            >
              {" "}
              14-28 Hari
            </div>
            <div
              className="flex flex-col justify-center items-center border-[#E2E8F0] font-InterSemibold
                         lg:p-[1.667vw] lg:border-b-[0.052vw] lg:h-[4.167vw] lg:text-[0.938vw]"
            >
              <Image
                src="/image/OurServices/green-check.svg"
                alt=""
                draggable="false"
                style={{ width: "1.667vw", height: "auto" }}
                width="36"
                height="36"
              />
            </div>
            <div
              className="flex flex-col justify-center items-center border-[#E2E8F0] font-InterSemibold
                         lg:p-[1.667vw] lg:border-b-[0.052vw] lg:h-[4.167vw] lg:text-[0.938vw]"
            >
              <div>Desain unik</div>
              <div>Layout opsional</div>
            </div>
            <div
              className="flex flex-col justify-center items-center border-[#E2E8F0] font-InterSemibold
                         lg:p-[1.667vw] lg:border-b-[0.052vw] lg:h-[4.167vw] lg:text-[0.938vw]"
            >
              +90K untuk tiap section
            </div>
          </div>
          <div
            className="flex flex-col border-[#E2E8F0] relative
                       lg:border-r-[0.052vw] lg:w-[18.75vw]"
          >
            <div
              className="flex flex-col items-center border-[#E2E8F0] relative
                         lg:border-b-[0.052vw] lg:h-[11.719vw] lg:p-[1.458vw] lg:gap-[1.458vw]"
            >
              <div className="w-full h-full relative">
                <div
                  className="flex flex-col justify-center items-center relative
                           "
                >
                  <div
                    className="font-SourceSansProBold text-center text-neutral-g
                               lg:text-[1.458vww]"
                  >
                    Custom
                  </div>
                  <div
                    className="font-SourceSansProSemibold text-center text-neutral-e leading-[125%]
                               lg:text-[0.729vw]"
                  >
                    Lorem ipsum dolor sit amet consectetur. Vulputate viverra
                    sociis amet ullamcorper sed odio nulla sem.
                  </div>
                </div>
                <div className="absolute bottom-0">
                  <ServicesOptionButton href="https://wa.me/6281809252706" />
                </div>
              </div>
            </div>
            <div
              className="flex flex-col justify-center items-center border-[#E2E8F0]
                         lg:p-[1.667vw] lg:border-b-[0.052vw] lg:h-[6.406vw]"
            >
              <div
                className="font-InterBold text-transparent bg-clip-text bg-gradient-to-r from-[#0893D4] via-[#44C4D9] to-[#159E8D]
                           lg:text-[1.458vw]"
              >
                Custom
              </div>
            </div>
            <div
              className="flex flex-col justify-center items-center border-[#E2E8F0] font-InterSemibold
                         lg:p-[1.667vw] lg:border-b-[0.052vw] lg:h-[4.167vw] lg:text-[0.938vw]"
            >
              Unlimited
              <div
                className="text-neutral-d
                           lg:text-[0.833vw]"
              >
                Menyesuaikan Kebutuhan
              </div>
            </div>
            <div
              className="flex flex-col justify-center items-center border-[#E2E8F0] font-InterSemibold
                         lg:p-[1.667vw] lg:border-b-[0.052vw] lg:h-[4.167vw] lg:text-[0.938vw]"
            >
              Unlimited
              <div
                className="text-neutral-d
                           lg:text-[0.833vw]"
              >
                Menyesuaikan Kebutuhan
              </div>
            </div>
            <div
              className="flex flex-col justify-center items-center border-[#E2E8F0] font-InterSemibold
                         lg:p-[1.667vw] lg:border-b-[0.052vw] lg:h-[4.167vw] lg:text-[0.938vw]"
            ></div>
            <div
              className="flex flex-col justify-center items-center border-[#E2E8F0] font-InterSemibold
                         lg:p-[1.667vw] lg:border-b-[0.052vw] lg:h-[4.167vw] lg:text-[0.938vw]"
            ></div>
            <div
              className="flex flex-col justify-center items-center border-[#E2E8F0] font-InterSemibold
                         lg:p-[1.667vw] lg:border-b-[0.052vw] lg:h-[4.167vw] lg:text-[0.938vw]"
            >
              Desain dan Layout Unik
            </div>
            <div
              className="flex flex-col justify-center items-center border-[#E2E8F0] font-InterSemibold
                         lg:p-[1.667vw] lg:border-b-[0.052vw] lg:h-[4.167vw] lg:text-[0.938vw]"
            ></div>
          </div>
        </div>
        <a
          href="https://wa.me/6281809252706"
          data-aos="fade-up"
          className="group flex justify-center items-center text-transparent bg-clip-text bg-gradient-to-r from-[#0893D4] hover:from-[#159E8D] via-[#44C4D9] hover:via-[#0893D4] to-[#159E8D] hover:to-[#44C4D9] *:transition-all duration-[5000] ease-in-out
                     lg:w-[8.75vw] lg:h-[2.396vw] lg:gap-[0.417vw]"
        >
          <p
            className="font-InterSemibold
                       lg:text-[0.833vw] lg:group-hover:text-[0.9163vw]"
          >
            Talk With Us{" "}
          </p>
          <IoMdArrowRoundBack
            className="text-[#24AAA7] group-hover:text-[#20d2ed] group-hover:scale-[-110%] scale-x-[-100%]
                       lg:text-[1.25vw] lg:group-hover:text-[1.375vw]"
          />
        </a>
      </div>
      <div
        className="absolute bottom-0 w-full bg-gradient-to-r from-[#F1F5F9] via-[#CBD5E1] to-[#F1F5F9]
                   lg:h-[0.052vw]"
      ></div>
    </section>
  );
};

export default ServicesOption;
