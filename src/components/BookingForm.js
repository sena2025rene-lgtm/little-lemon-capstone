import { useState } from "react";

function BookingForm() {
  const [date, setDate] = useState("");
  const [guests, setGuests] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!date) {
      alert("Please select a date");
      return;
    }

    window.location.href = "/confirmed";
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="res-date">Choose date</label>
        <input
          type="date"
          id="res-date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="res-time">Choose time</label>
        <select id="res-time">
          <option>17:00</option>
          <option>18:00</option>
          <option>19:00</option>
          <option>20:00</option>
        </select>
      </div>

      <div>
        <label htmlFor="guests">Number of guests</label>

        <input
          type="number"
          id="guests"
          min="1"
          max="10"
          value={guests}
          onChange={(e) => setGuests(Number(e.target.value))}
        />

        {guests > 10 && (
          <p>Please enter 10 guests or fewer.</p>
        )}
      </div>

      <div>
        <label htmlFor="occasion">Occasion</label>
        <select id="occasion">
          <option>Birthday</option>
          <option>Anniversary</option>
        </select>
      </div>

      <button type="submit">
        Make Your Reservation
      </button>
    </form>
  );
}

export default BookingForm;