import { LocationSection } from '@/components/sections/about/LocationSection'
import { ContactFormSection } from '@/components/sections/contact/ContactFormSection'
import { ContactHero } from '@/components/sections/contact/ContactHero'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/contactUs')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <>
      <ContactHero />
      <ContactFormSection />
      <LocationSection />
    </>
  )
}
