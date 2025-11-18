import { Button } from '@/components/ui/button';

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-blue-500 to-purple-600 text-white section-padding">
      <div className="container-max text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to MySite</h1>
        <p className="text-xl mb-8">Build amazing websites with ease.</p>
        <Button>Get Started</Button>
      </div>
    </section>
  );
}c