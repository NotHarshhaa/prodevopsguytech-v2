export default function LearningPathsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-background/80 overflow-x-hidden">
      {children}
    </main>
  )
} 