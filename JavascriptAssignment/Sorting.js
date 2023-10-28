function bubbleSortDescending(arr) {
    const len = arr.length;
  
    for (let i = 0; i < len - 1; i++) {
      for (let j = 0; j < len - 1 - i; j++) {
        if (arr[j] < arr[j + 1]) {
          // Swap arr[j] and arr[j+1]
          const temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
        }
      }
    }
  }
  
  const input = prompt("Enter an array of numbers (comma-separated):");
  const inputArray = input.split(',').map(item => parseInt(item, 10));
  
  console.log("Original Array:", inputArray);
  
  bubbleSortDescending(inputArray);
  
  console.log("Sorted Array (Descending):", inputArray);
  