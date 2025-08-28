How to Frequently Analyze an Algorithm

Let’s say we have a function that calculates the sum of elements using a loop:

function sum(arr, n) {
let a = 0;
for (let i = 0; i < n; i++) {
a += arr[i];
}
return a;
}

Time Complexity

We analyze the steps:

a = 0 → executes 1 time

i = 0 → executes 1 time

i < n → checked n + 1 times (extra 1 when loop ends)

i++ → executes n times

a += arr[i] → executes n times

So total operations ≈ 3n + 3 → which simplifies to:

𝑇(𝑛) =𝑂=(𝑛)
T(n)=O(n)

 Time Complexity = O(n)

Space Complexity

Variables used:

a → 1 variable

i → 1 variable

n (function input, not extra memory)

arr (input array, not counted as extra space)

👉 Extra memory = constant

𝑆(𝑛)= 𝑂(1)
S(n)=O(1)

 Space Complexity = O(1)