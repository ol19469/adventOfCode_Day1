function processInput() {
  let inputText = document.getElementById("inputBox").value.trim();
  let lines = inputText.split("\n"); // Split input by lines

  console.log(lines.length);
  let a = [];
  let b = [];

  lines.forEach((line) => {
    let numbers = line.trim().split(/\s+/).map(Number);
    if (numbers.length === 2) {
      a.push(numbers[0]); // First number goes to A
      b.push(numbers[1]); // Second number goes to B
    }
  });
  let sortedA = [...a].sort((x, y) => x - y);
  let sortedB = [...b].sort((x, y) => x - y);
  console.log(sortedA);
  console.log(sortedB);
  let distance = 0;
  let distances = [];
  for (let i = 0; i < sortedA.length; i++) {
    let num = sortedA[i] - sortedB[i];
    if (num < 0) {
      num = num * -1;
    }
    distances.push(num);
    distance += num;
  }

  document.getElementById("arrayA").textContent = a.join(", ");
  document.getElementById("arrayB").textContent = b.join(", ");
  document.getElementById("sortedA").textContent = sortedA.join(", ");
  document.getElementById("sortedB").textContent = sortedB.join(", ");
  document.getElementById("distance").textContent = distance; // Added missing distance display
}
