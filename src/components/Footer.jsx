import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { Facebook, Twitter, Instagram, Github } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="border-t mt-8 bg-muted/50">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">My Website</h3>
            <p className="text-sm text-muted-foreground">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil beatae pariatur voluptas qui ut quos architecto placeat laboriosam excepturi consequuntur inventore provident delectus aspernatur, molestiae sunt a odio dicta quasi.
            </p>
            
          </div>
          
          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-medium">Quick Links</h4>
            <div className="flex flex-col space-y-2">
              <Button variant="ghost" size="sm" className="justify-start p-0 h-auto" asChild>
                <Link href="/">Home</Link>
              </Button>
              <Button variant="ghost" size="sm" className="justify-start p-0 h-auto" asChild>
                <Link href="/about">About</Link>
              </Button>
              <Button variant="ghost" size="sm" className="justify-start p-0 h-auto" asChild>
                <Link href="/contact">Contact</Link>
              </Button>
              <Button variant="ghost" size="sm" className="justify-start p-0 h-auto" asChild>
                <Link href="/services">Services</Link>
              </Button>
            </div>
          </div>
          
          {/* Legal Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-medium">Legal</h4>
            <div className="flex flex-col space-y-2">
              <Button variant="ghost" size="sm" className="justify-start p-0 h-auto" asChild>
                <Link href="/privacy">Privacy Policy</Link>
              </Button>
              <Button variant="ghost" size="sm" className="justify-start p-0 h-auto" asChild>
                <Link href="/terms">Terms of Service</Link>
              </Button>
              <Button variant="ghost" size="sm" className="justify-start p-0 h-auto" asChild>
                <Link href="/cookies">Cookie Policy</Link>
              </Button>
              <Button variant="ghost" size="sm" className="justify-start p-0 h-auto" asChild>
                <Link href="/accessibility">Accessibility</Link>
              </Button>
            </div>
          </div>
          
          {/* Social Media */}
          <div className="space-y-4">
            <h4 className="text-sm font-medium">Follow Us</h4>
            <div className="flex space-x-2">
              <Button variant="outline" size="icon" asChild>
                <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                  <Facebook className="h-4 w-4" />
                  <span className="sr-only">Facebook</span>
                </Link>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                  <Twitter className="h-4 w-4" />
                  <span className="sr-only">Twitter</span>
                </Link>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                  <Instagram className="h-4 w-4" />
                  <span className="sr-only">Instagram</span>
                </Link>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4" />
                  <span className="sr-only">GitHub</span>
                </Link>
              </Button>
            </div>
          </div>
        </div>
        
        <Separator className="mt-6 mb-4" />
        <div className="text-center text-sm text-muted-foreground">
          <p>&copy; 2023 My Website. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}