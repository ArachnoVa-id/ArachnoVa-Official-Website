import ServicesHero from "@/components/Services/ServicesHero/ServicesHero.jsx";

export const metadata = {
  title: "Our Services | ArachnoVa",
};

export default function Page() {
  return (
    <>
      <main className="w-full flex flex-col justify-center items-center bg-transparent">
        <ServicesHero />
      </main>
    </>
  );
}
