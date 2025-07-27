"use client"

import { useCallback } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"

const RESUME_PATH = "/resume.pdf"
const RESUME_NAME = "Musharaf_Parwej_Resume.pdf"

export function DownloadResumeButton() {
  const handleDownload = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()

    const a = document.createElement("a")
    a.href = RESUME_PATH
    a.download = RESUME_NAME
    document.body.appendChild(a)
    a.click()
    a.remove()
  }, [])

  return (
    <Button asChild className="w-full sm:w-auto hover:scale-105 transition-all duration-200 h-10 sm:h-11 text-sm sm:text-base">
      <Link href={RESUME_PATH} onClick={handleDownload}>
        <Download className="h-4 w-4 mr-2" />
        Download Resume
      </Link>
    </Button>
  )
}
