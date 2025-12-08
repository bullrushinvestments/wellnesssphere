import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'WellnessSphere',
  description: 'WellnessSphere is an integrated platform that combines mental health apps with personalized AI-driven wellness recommendations for small businesses and online shoppers. Users receive tailored advice based on their activity data to improve overall well-being.',
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold">WellnessSphere</h1>
      <p className="mt-4 text-lg">WellnessSphere is an integrated platform that combines mental health apps with personalized AI-driven wellness recommendations for small businesses and online shoppers. Users receive tailored advice based on their activity data to improve overall well-being.</p>
    </main>
  )
}
