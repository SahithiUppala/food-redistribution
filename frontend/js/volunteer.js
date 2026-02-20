async function loadPickups() {

  try {

    const res = await fetch(
      "http://localhost:5000/volunteer/pickups"
    );

    const data = await res.json();

    if (!Array.isArray(data)) {
      alert("Error loading pickups");
      return;
    }

    if (data.length === 0) {
      document.getElementById("pickupList")
        .innerHTML =
        "<p>No assigned pickups</p>";
      return;
    }

    const html = data.map(d => `
      <div class="card">
        <h3>${d.foodType}</h3>
        <p>Qty: ${d.quantity}</p>
        <p>Status: ${d.status}</p>
      </div>
    `).join("");

    document.getElementById("pickupList")
      .innerHTML = html;

  } catch (err) {

    console.error(err);
    alert("Error loading pickups");
  }
}
