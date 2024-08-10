import TemplatePage from "@/components/Templates/TemplatePage";

export const metadata = {
  title: "Our Templates | ArachnoVa",
};

export default function Page() {
  return (
    <>
      <main className="w-full flex flex-col min-h-screen justify-center items-center bg-transparent">
        <TemplatePage />
      </main>
    </>
  );
}
