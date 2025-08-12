<<<<<<< HEAD
import React from "react";
import { Landing } from "@/components/home/Landing";

const Home = () => <Landing />;

export default Home;
=======
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="flex gap-4 pt-4 pl-2">
      <Button variant="roundedRedOutline">Contact Us</Button>
      <Button variant="curvedRedOutline">Explore All Services →</Button>
      <Button variant="curvedRedOutline">View More</Button>
      <Button variant="default">Let's work with us</Button>
      <Button variant="default">Read More</Button>
      <Button variant="default">Read More →</Button>
      <Button variant="curvedRedOutline">View All</Button>
      <Button variant="default">Get Started →</Button>
    </div>
  );
}
>>>>>>> 58f2107 (Added red outline and curved button variants)
