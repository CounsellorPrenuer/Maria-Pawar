import { useState } from 'react'
import BookingModal from '../BookingModal'
import { Button } from '@/components/ui/button'

export default function BookingModalExample() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="p-8">
      <Button onClick={() => setIsOpen(true)}>Open Booking Modal</Button>
      <BookingModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        packageInfo={{
          category: "8-9 STUDENTS",
          package: "Discover plus+",
          price: "₹ 15,000"
        }}
        onSubmit={(details) => {
          console.log('Booking details:', details)
          setIsOpen(false)
        }}
      />
    </div>
  )
}
