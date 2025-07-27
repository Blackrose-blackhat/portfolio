import { FloatingNavbar } from "@/components/floating-navbar"
import { MainContent } from "@/components/main-content"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <FloatingNavbar />
      <MainContent />
    </div>
  )
}
