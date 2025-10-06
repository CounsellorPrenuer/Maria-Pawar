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
          >
            <div className="w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
              <span className="text-muted-foreground text-sm">Image {index + 1}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
