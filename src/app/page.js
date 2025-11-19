import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

export default function Home() {
  return (
    <div className="space-y-8">
      <section className="text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to My Website</h1>
        <p className="text-xl text-muted-foreground mb-6">A basic Next.js site structure.</p>
        <Button size="lg">Get Started</Button>
      </section>
      
      <section className="grid md:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Feature 1</CardTitle>
            <CardDescription>Brief description of feature 1.</CardDescription>
          </CardHeader>
          <CardContent>
            <p>More details about this feature.</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Feature 2</CardTitle>
            <CardDescription>Brief description of feature 2.</CardDescription>
          </CardHeader>
          <CardContent>
            <p>More details about this feature.</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Feature 3</CardTitle>
            <CardDescription>Brief description of feature 3.</CardDescription>
          </CardHeader>
          <CardContent>
            <p>More details about this feature.</p>
          </CardContent>
        </Card>
      </section>
    </div>
  )
}