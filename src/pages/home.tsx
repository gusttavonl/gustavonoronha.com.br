import DefaultLayout from '@/components/Layouts/DefaultLayout'
import HomeComponent from '@/components/pages/home'

export default function Home(): JSX.Element {
  return (
    <DefaultLayout>
      <HomeComponent />
    </DefaultLayout>
  )
}
