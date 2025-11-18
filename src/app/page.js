// app/page.js

// This is a simple React functional component that serves as your home page.
export default function Home() {
  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center', 
      minHeight: '100vh', 
      textAlign: 'center' 
    }}>
      <h1>Hello, Home Page</h1>
      <p>This is your new home page. Start building here!</p>
    </div>
  );
}