document.addEventListener("DOMContentLoaded", () => {
  const seatContainer = document.getElementById("seats");
  const selectedSeatsDisplay = document.getElementById("selectedSeats");
  const rows = ["A", "B", "C", "D", "E"]; // Seat rows
  let selectedSeats = [];

  // Generate Seats
  for (let row = 0; row < rows.length; row++) {
    for (let col = 1; col <= 5; col++) {
      const seat = document.createElement("div");
      seat.classList.add("seat");
      seat.dataset.seatNumber = rows[row] + col; // Assign seat number (A1, A2, etc.)

      if (Math.random() < 0.2) {
        seat.classList.add("sold");
      }

      seat.addEventListener("click", () => {
        if (!seat.classList.contains("sold")) {
          seat.classList.toggle("selected");

          let seatNum = seat.dataset.seatNumber;

          if (seat.classList.contains("selected")) {
            selectedSeats.push(seatNum);
          } else {
            selectedSeats = selectedSeats.filter((s) => s !== seatNum);
          }

          selectedSeatsDisplay.textContent =
            selectedSeats.length > 0 ? selectedSeats.join(", ") : "None";
        }
      });

      seatContainer.appendChild(seat);
    }
  }
});
