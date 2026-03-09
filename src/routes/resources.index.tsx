import { createFileRoute } from '@tanstack/react-router'
import { ResourceHero } from '@/components/sections/resources/ResourceHero'
import { ResourceList } from '@/components/sections/resources/ResourceList'

export const Route = createFileRoute('/resources/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <main>
      <ResourceHero />
      <ResourceList />
    </main>
  )
}