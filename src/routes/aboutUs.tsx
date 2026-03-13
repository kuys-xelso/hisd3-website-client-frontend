import { AboutHero } from '@/components/sections/about/AboutHero'
import { Principle } from '@/components/sections/about/Principle'
import { Team } from '@/components/sections/about/Team'
import { Gallery } from '@/components/sections/about/Gallery'
import { LocationSection } from '@/components/sections/about/LocationSection'
import { AboutAction } from '@/components/sections/about/AboutAction'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/aboutUs')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <>
      <AboutHero />
      <Principle />
      <Team />
      <LocationSection />
      <Gallery />
      <AboutAction />
    </>
  )
}
