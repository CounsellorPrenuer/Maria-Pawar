interface GalleryProps {
  images: string[];
  title: string;
}

export default function Gallery({ images, title }: GalleryProps) {
  return (
    <div>
      <h2 className="font-serif text-3xl font-bold text-center mb-12">{title}</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((image, index) => (
          <div
            key={index}
            className="aspect-square rounded-xl overflow-hidden hover:scale-105 transition-transform duration-300"
            data-testid={`gallery-image-${index}`}
          >
            <img 
              src={image} 
              alt={`Training in action ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
