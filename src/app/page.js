import MenAccordion from "@/components/MenAccordion";
import WomenAccordion from "@/components/WomenAccordion";

export default function Home() {
  return (
    <div className="mx-auto max-w-[1240px] flex flex-col gap-4 p-8">
      <h2 className="text-2xl font-bold">1. Women Accordion</h2>
      <WomenAccordion />
      <h2 className="text-2xl font-bold">2. Men Accordion</h2>
      <MenAccordion />
    </div>
  );
}
