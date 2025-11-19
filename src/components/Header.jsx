'use client'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="border-b">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">My Website</Link>
        {/* Desktop navigation */}
        <div className="hidden md:flex space-x-4">
          <Button variant="ghost" asChild>
            <Link href="/">Home</Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link href="/about">About</Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link href="/contact">Contact</Link>
          </Button>
        </div>
        {/* Mobile menu button */}
        <Button
          variant="ghost"
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {/* Simple hamburger icon using CSS */}
          <div className="flex flex-col space-y-1">
            <div className="w-6 h-0.5 bg-current"></div>
            <div className="w-6 h-0.5 bg-current"></div>
            <div className="w-6 h-0.5 bg-current"></div>
          </div>
        </Button>
      </nav>
      {/* Mobile navigation menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t px-4 py-4 flex flex-col space-y-2">
          <Button variant="ghost" asChild onClick={() => setIsOpen(false)}>
            <Link href="/">Home</Link>
          </Button>
          <Button variant="ghost" asChild onClick={() => setIsOpen(false)}>
            <Link href="/about">About</Link>
          </Button>
          <Button variant="ghost" asChild onClick={() => setIsOpen(false)}>
            <Link href="/contact">Contact</Link>
          </Button>
        </div>
      )}
    </header>
  )
}
