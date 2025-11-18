import Link from 'next/link';

export default function Navigation() {
  return (
    <nav className="hidden md:flex space-x-6">
      <Link href="/" className="text-gray-700 hover:text-blue-600">Home</Link>
      <Link href="/about" className="text-gray-700 hover:text-blue-600">About</Link>
      <Link href="/services" className="text-gray-700 hover:text-blue-600">Services</Link>
      <Link href="/portfolio" className="text-gray-700 hover:text-blue-600">Portfolio</Link>
      <Link href="/contact" className="text-gray-700 hover:text-blue-600">Contact</Link>
    </nav>
  );
}