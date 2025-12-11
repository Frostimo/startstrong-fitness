// Very small helper for workouts.html

function buildPlan(goal, days) {
  const basePatterns = {
    2: ["Full body", "Full body"],
    3: ["Full body", "Lower body", "Upper body"],
    4: ["Upper body", "Lower body", "Upper body", "Lower body"],
    5: ["Upper", "Lower", "Full body", "Upper", "Lower"],
    6: ["Upper", "Lower", "Upper", "Lower", "Full body", "Optional / cardio"]
  };

  const labels = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const pattern = basePatterns[days] || basePatterns[3];

  return pattern.map((type, i) => {
    const dayName = labels[i] || `Day ${i + 1}`;
    return `<div class="plan-day">
      <strong>${dayName} – ${type}</strong>
      <div>Goal: ${goal}</div>
    </div>`;
  }).join("");
}

document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("makePlanBtn");
  const output = document.getElementById("planOutput");
  if (!btn || !output) return;

  function update() {
    const goalText = document.getElementById("goalSelect").value;
    let days = parseInt(document.getElementById("daysInput").value, 10);
    if (isNaN(days)) days = 3;
    days = Math.min(Math.max(days, 2), 6);
    output.innerHTML = buildPlan(goalText, days);
  }

  btn.addEventListener("click", update);
  update();
});