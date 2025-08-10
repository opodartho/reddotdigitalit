import { Button } from "@/components/ui/button";
import  {TabButtons } from "@/components/ui/TabButtons";

export default function Home() {
  return (
    <main><h1 className="text-center font-bold py-7">Who We Are</h1>
    <p className="text-center"> Our cutting-edge Modular Data Center solutions enable to protect mission-critical data</p>
    <TabButtons />
    <div>
      <Button className="px-10">Read More </Button>
    </div>
    </main>
  )
}