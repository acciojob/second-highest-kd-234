//your JS code here. If required.
function secondHighest(arr) {
			//Write your code here
			if(arr.length <= 1) return -Infinity;
	let largest = -Infinity;
let secondLargest = null;
	for (let i = 0; i < arr.length; i++) {
    let num = parseInt(arr[i]);
		if (num > largest) {
    secondLargest = largest;
    largest = num;
} else if (num < largest && (secondLargest === null || num > secondLargest)) {
    secondLargest = num;
}
		return secondLargest;