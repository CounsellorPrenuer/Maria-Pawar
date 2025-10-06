import ContactForm from '../ContactForm'

export default function ContactFormExample() {
  return (
    <div className="p-8 bg-gradient-to-br from-background to-primary/5 max-w-2xl">
      <ContactForm onSubmit={(data) => console.log('Contact form submitted:', data)} />
    </div>
  )
}
