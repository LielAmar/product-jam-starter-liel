"use client";

import Image from "next/image";
import { useState } from "react";

const RandomImage = () => {
  const images = ["/liel.jpeg", "/huji.png", "/bezalel.png"]

  const [imageSrc, setImageSrc] = useState(0);

  return <div>
      <Image
        src={ images[imageSrc] }
        alt="Picutre"
        width={320}
        height={320}
        priority
        onClick={ () => setImageSrc(imageSrc == 2 ? 0 : imageSrc + 1) }
      />
    </div>
}

export default RandomImage;