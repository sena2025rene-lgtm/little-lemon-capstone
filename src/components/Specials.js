function Specials() {
  return (
    <section className="specials" id="menu">
      <div className="specials-header">
        <h2>This Week's Specials</h2>
        <button>Online Menu</button>
      </div>

      <div className="cards">
        <article className="card">
          <h3>Greek Salad</h3>
          <p className="price">$12.99</p>
          <p>
            Fresh lettuce, peppers, olives, and feta cheese, dressed with
            olive oil and herbs.
          </p>
        </article>

        <article className="card">
          <h3>Bruschetta</h3>
          <p className="price">$5.99</p>
          <p>
            Grilled bread topped with tomatoes, garlic, basil, and olive oil.
          </p>
        </article>

        <article className="card">
          <h3>Lemon Dessert</h3>
          <p className="price">$5.00</p>
          <p>
            A sweet and fresh dessert made with lemon and love.
          </p>
        </article>
      </div>
    </section>
  );
}

export default Specials;