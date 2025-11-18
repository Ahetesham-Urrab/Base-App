import Navigation from './navigation';

export default function Header() {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container-max flex justify-between items-center py-4">
        <h1 className="text-2xl font-bold text-gray-800">MySite</h1>
        <Navigation />
      </div>
    </header>
  );
}