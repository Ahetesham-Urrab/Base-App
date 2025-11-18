import { Github, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container-max text-center">
        <p>&copy; 2023 MySite. All rights reserved.</p>
        <div className="flex justify-center space-x-4 mt-4">
          <a href="#" className="hover:text-blue-400"><Github size={24} /></a>
          <a href="#" className="hover:text-blue-400"><Twitter size={24} /></a>
        </div>
      </div>
    </footer>
  );
}