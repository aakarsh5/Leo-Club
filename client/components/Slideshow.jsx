import Image from "next/image";
import { useEffect, useState } from "react";

const images = [
  "/Front1.jpg",
  "/Front2.jpg",
  "/Front3.jpg",
  "/Front4.jpg",
  "/Front5.jpg",
  "/Front6.jpg",
];

export default function Slideshow() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="mx-auto rounded-3xl overflow-hidden z-10 shadow-2xl animate-float"
      style={{ position: "relative", width: "550px", height: "550px" }}
    >
      <Image
        key={images[currentIndex]}
        src={`${images[currentIndex]}?height=550&width=550`}
        fill
        alt="Leo Club members in action"
        className="object-cover rounded-3xl shadow-2xl"
        priority
      />
    </div>
  );
}
