let count = 0;
const countEl = document.getElementById("count-el");
const entries = document.getElementById("entries");

function increment() {
  count += 1;
  countEl.textContent = count;
}

function save() {
  let prevEntries = count + "-";
  entries.textContent += prevEntries;
  count = 0;
  countEl.textContent = 0;
}
