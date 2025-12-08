import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'MindBoost Pro',
  description: 'MindBoost Pro combines AI-driven mental health support with productivity tools to enhance focus and well-being for small business owners.',
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold">MindBoost Pro</h1>
      <p className="mt-4 text-lg">MindBoost Pro combines AI-driven mental health support with productivity tools to enhance focus and well-being for small business owners.</p>
    </main>
  )
}
