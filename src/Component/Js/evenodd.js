function printEvenAndOddNumbers(start, end) {
    let evenNumbers = [];
    let oddNumbers = [];
    let evenSum = 0;
    let oddSum = 0;

    for (let i = start; i <= end; i++) {
        if (i % 2 === 0) {
            evenNumbers.push(i);
            evenSum += i;
        } else {
            oddNumbers.push(i);
            oddSum += i;
        }
    }

    console.log("Even Numbers:", evenNumbers.join(", "));
    console.log("Total Even Numbers:", evenNumbers.length);
    console.log("Sum of Even Numbers:", evenSum);
    console.log("----------------------------------");
    console.log("Odd Numbers:", oddNumbers.join(", "));
    console.log("Total Odd Numbers:", oddNumbers.length);
    console.log("Sum of Odd Numbers:", oddSum);
}
printEvenAndOddNumbers(1, 50);