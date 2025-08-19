import { useState } from 'react';

interface ProductGalleryProps {
  images: Array<{
    src: string;
    alt: string;
  }>;
}

export default function ProductGallery({ images }: ProductGalleryProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const currentImage = images[currentImageIndex];

  return (
    <div className="flex flex-col lg:flex-row gap-4">
      {/* Thumbnails */}
      <div className="order-2 lg:order-1 flex lg:flex-col overflow-x-auto lg:overflow-visible gap-2 lg:gap-3 lg:w-20">
        {images.map((image, index) => (
          <img
            key={index}
            src={image.src}
            alt={image.alt}
            className={`thumbnail w-16 h-16 lg:w-20 lg:h-20 object-cover rounded-lg cursor-pointer border-2 shadow-sm flex-shrink-0 transition-colors ${
              index === currentImageIndex
                ? 'border-brand-purple'
                : 'border-transparent hover:border-brand-purple'
            }`}
            onClick={() => setCurrentImageIndex(index)}
          />
        ))}
      </div>

      {/* Main Image */}
      <div className="order-1 lg:order-2 flex-1">
        <div className="relative bg-gray-50 rounded-2xl overflow-hidden">
          <img
            src={currentImage.src}
            alt={currentImage.alt}
            className="w-full h-96 lg:h-[500px] object-cover hover:scale-105 transition-transform duration-300"
          />
          
          {/* Sale Badge */}
          <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
            20% OFF
          </div>
        </div>
      </div>
    </div>
  );
}
