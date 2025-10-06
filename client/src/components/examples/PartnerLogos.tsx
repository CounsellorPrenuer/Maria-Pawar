import PartnerLogos from '../PartnerLogos'

export default function PartnerLogosExample() {
  const logos = Array(8).fill('placeholder')

  return (
    <div className="p-8">
      <PartnerLogos logos={logos} />
    </div>
  )
}
