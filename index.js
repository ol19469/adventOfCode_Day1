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
  let similar = [];
  for (let i = 0; i < sortedA.length; i++) {
    let count = 0;
    for (let j = 0; j < sortedB.length; j++) {
      if (sortedA[i] === sortedB[j]) {
        count++;
      }
    }
    similar.push(sortedA[i] * count);
  }
  let sum = 0;
  for (let s = 0; s < similar.length; s++) {
    sum += similar[s];
  }
  console.log(similar);

  document.getElementById("arrayA").textContent = a.join(", ");
  document.getElementById("arrayB").textContent = b.join(", ");
  document.getElementById("sortedA").textContent = sortedA.join(", ");
  document.getElementById("sortedB").textContent = sortedB.join(", ");
  document.getElementById("distance").textContent = distance; // Added distance display
  document.getElementById("score").textContent = sum;
}
