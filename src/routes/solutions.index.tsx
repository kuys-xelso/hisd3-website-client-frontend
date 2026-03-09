import { createFileRoute } from '@tanstack/react-router'
import { SolutionsList } from '@/components/sections/solutions/SolutionsList'

export const Route = createFileRoute('/solutions/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <>
      <SolutionsList />
    </>
  )
}
