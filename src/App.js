import './App.css';

function App() {
  return (
    <div className="app">
      <header className="header">
        <h1>Little Lemon</h1>

        <nav className="nav">
          <a href="#home">Home</a>
          <a href="#menu">Menu</a>
          <a href="#about">About</a>
          <a href="#reservations">Reservations</a>
        </nav>
      </header>

      <main>
        <section className="hero" id="home">
          <div>
            <h2>Little Lemon</h2>
            <h3>Chicago</h3>
            <p>
              We are a family owned Mediterranean restaurant, focused on
              traditional recipes served with a modern twist.
            </p>
            <button>Reserve a Table</button>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;