import { useState } from "react";
import { X } from "lucide-react";
import outlet1 from "@/assets/outlet1.jpeg";
import outlet2 from "@/assets/outlet2.jpeg";
import outlet3 from "@/assets/outlet3.jpeg";
import outlet4 from "@/assets/outlet4.jpeg";
import outlet5 from "@/assets/outlet5.jpeg";
import outlet6 from "@/assets/outlet6.jpeg";
import outlet7 from "@/assets/outlet7.jpeg";
import outlet8 from "@/assets/outlet8.jpeg";
import outlet9 from "@/assets/outlet9.jpeg";
import outlet10 from "@/assets/outlet10.jpeg";
import outlet11 from "@/assets/outlet11.jpeg";
import outlet12 from "@/assets/outlet12.jpeg";
import outlet17 from "@/assets/outlet17.jpeg";
import outlet14 from "@/assets/outlet14.jpeg";
import outlet15 from "@/assets/outlet15.jpeg";
import outlet16 from "@/assets/outlet16.jpeg";

const galleryImages = [
   { src: outlet7, alt: "Grand Outlet Entrance", category: "outlet" },
   { src: outlet2, alt: "Chicago Delights Seating Area", category: "outlet" },
   { src: outlet8, alt: "Chicago Delights Storefront", category: "outlet" },
   { src: outlet10, alt: "Premium Interior", category: "interior" },
    { src: outlet9, alt: "Outlet Opening Celebration", category: "outlet" },
  { src: outlet1, alt: "Chicago Delights Outlet Interior", category: "outlet" },
{ src: outlet4, alt: "Cozy Dining Space", category: "outlet" },
  { src: outlet3, alt: "Chicago Delights Modern Interior", category: "outlet" },
   { src: outlet11, alt: "Customers Dining", category: "outlet" },
  { src: outlet12, alt: "Luxury Seating Area", category: "outlet" },
  { src: outlet5, alt: "Chicago Delights Night Exterior", category: "outlet" },
  { src: outlet6, alt: "Entrance & Waiting Area", category: "outlet" },
   { src: outlet16, alt: "Customers Dining", category: "outlet" },
    { src: outlet17, alt: "Customers Dining", category: "outlet" },
     { src: outlet14, alt: "Customers Dining", category: "outlet" },
      { src: outlet15, alt: "Customers Dining", category: "outlet" },
 
];


export function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="gallery" className="py-24 bg-card">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">Gallery</span>
          <h2 className="font-display text-4xl md:text-6xl text-foreground mt-4 mb-6">
            EXPERIENCE <span className="text-gradient-gold">CHICAGO DELIGHTS</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Take a peek inside our outlets and discover the quality that defines us.
          </p>
        </div>

        {/* Masonry Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="break-inside-avoid group cursor-pointer relative overflow-hidden rounded-xl"
              onClick={() => setSelectedImage(image.src)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-foreground font-medium">{image.alt}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-background/95 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-6 right-6 text-foreground hover:text-primary transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X size={32} />
          </button>
          <img
            src={selectedImage}
            alt="Gallery"
            className="max-w-full max-h-[90vh] object-contain rounded-xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}