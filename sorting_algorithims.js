//
// Bubble Sort:
//     Repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order.
//
//     Selection Sort:
//     Divides the list into a sorted and an unsorted part, repeatedly finding the minimum (or maximum) element from the unsorted part and moving it to the sorted part.
//
//     Insertion Sort:
//     Builds the final sorted array one item at a time, taking elements from the input data and inserting them into their correct position in the already sorted part.
//
//     Merge Sort:
//     A divide-and-conquer algorithm that recursively divides the list into halves, sorts each half, and then merges the sorted halves.
//
//     Quick Sort:
//     Another divide-and-conquer algorithm that picks an element as a pivot and partitions the array around the picked pivot.

function quickSort(num) {
    if (num.length < 2) {
        return num
    }
    let pivot = num[num.length - 1]
    let left = []
    let right = []
    let zero = []
for(let i = 0; i < num.length-1; i++) {
    if (num[i] <= 0 ){
        zero.push(num[i])
    }
    else if (num[i] < pivot) {
left.push(num[i])
    }else{
        right.push(num[i])
    }

}
 return [...quickSort(left),pivot, ...quickSort(right),...quickSort(zero)]
}
const num = [11,0,0,0,0,0,0,0, 22, 3, 4, 5,6,5,4,3]
const result = quickSort(num)
console.log(result)



//     Heap Sort:
//     A comparison-based algorithm that uses a binary heap data structure to sort elements.
//     Non-Comparison-Based Sorting Algorithms: These algorithms do not rely on comparing elements, often leveraging specific properties of the data.
//
//     Counting Sort:
//     Effective for sorting integers within a specific range by counting the occurrences of each distinct element and then using these counts to determine the positions in the sorted output.
//
//     Radix Sort:
//     Sorts integers by processing individual digits, typically from least significant to most significant (or vice-versa).
//
// Bucket Sort:
//     Distributes elements into a number of "buckets" or bins, sorts each bucket individually (often using another sorting algorithm), and then concatenates the sorted buckets.