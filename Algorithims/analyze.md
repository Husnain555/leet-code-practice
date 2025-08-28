How to Analyze an Algorithm

Suppose we want to analyze a simple algorithm like a swap function:

function swap(a, b) {
let temp = a;
a = b;
b = temp;
return [a, b];
}


When analyzing an algorithm, we usually consider several factors:

1. Time Complexity

How many basic operations (assignments, comparisons, loops, etc.) the algorithm takes relative to the input size.

In this swap example, the algorithm performs 3 assignments, which is O(1) (constant time).

2. Space Complexity

How much extra memory the algorithm requires.

The swap function uses one temporary variable (temp), so extra space = O(1) (constant space).

3. CPU Usage / Power Consumption (optional in most theoretical analysis)

In practical systems, CPU cycles and power matter.

Since the swap has only a few instructions, its CPU usage is minimal.

4. Network Consumption

Only relevant if the algorithm involves communication across systems.

For this swap example, there is no network usage.

5. Register / Hardware Usage

On a very low level, compilers and processors may optimize the swap using registers instead of memory.

In theory, we usually don’t count this, but in systems programming or embedded systems, it can matter.