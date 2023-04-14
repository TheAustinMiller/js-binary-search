let binarySearch = function(arr, key) {
    let start = 0;
    let end = arr.length - 1;
    while (start <= end) {
        let mid = Math.floor((start + end)/2);
        if (arr[mid] == key) {
            return mid;
        } else if (arr[mid] < key) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }
    return -1;
} 

const arr = [1, 2, 4, 6, 8, 8, 10, 11, 12, 12, 12, 13];
let key = 11;
let element = binarySearch(arr, key);
console.log(element);
