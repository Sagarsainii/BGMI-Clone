// Number of rows for the pyramid
const rows = 5;
// Loop through each row
for (let i = 1; i <= rows; i++) {
  // Print spaces
  let spaces = " ".repeat(rows - i);
  // Print stars: 2*i - 1 ensures odd count per row (1, 3, 5, ...)
  let stars = "*".repeat(2 * i - 1);
  // Combine spaces and stars, then print
  console.log(spaces+stars);
}