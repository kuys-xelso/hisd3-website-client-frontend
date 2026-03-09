import { Outlet, createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/solutions')({
  component: SolutionsLayout,
})

function SolutionsLayout() {
  return <Outlet />
}
