import Gallery from '../Gallery'

export default function GalleryExample() {
  const images = Array(8).fill('placeholder')

  return (
    <div className="p-8">
      <Gallery images={images} title="Training in Action" />
    </div>
  )
}
