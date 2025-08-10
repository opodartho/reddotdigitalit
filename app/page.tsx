import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="flex gap-4 pt-4 pl-2">
      <Button variant="roundedRedOutline">Contact Us</Button>
      <Button variant="curvedRedOutline">View More</Button>
    </div>
  );
}
