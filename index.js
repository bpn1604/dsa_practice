

//Longest Substring without repetition
let str = "ababc"

let maxL = 0
let start =0
let map = new Map()
for (let end = 0;end<str.length;end++) {
    if(map.has(str[end])) {
        start = Math.max(start, map.get(str[end])+1)
    }
    map.set(str[end],end)
    maxL = Math.max(maxL , end - start + 1)
    
}
console.log(maxL)


1. Arrays & Strings

    Two Sum → Given an array, find two numbers that add up to a target.
        let Input = [-1, 0, 1, 2, -1, -4]
let res =[]
Input.sort()
for (let i=0;i<Input.length-2;i++) {
    if(i>0 && Input[i-1] == Input[i]) continue
    let left = i+1
    let right = Input.length-1
    
    
    while(left < right){
    let sum = Input[i] + Input[left] + Input[right]
    
    if(sum === 0) {
        while(left < right && Input[left] === Input[left+1]) left++
        while(left<right && Input[right] === Input[right-1]) right--
        res.push([Input[i],Input[left],Input[right]])
        left++
        right--
    }else if( sum < 0) {
        left ++
    }else {
        right--
    }
    }
}
console.log(res)
        
    Three Sum → Find unique triplets in an array that sum to zero.
    Longest Substring Without Repeating Characters → Find the length of the longest substring without repeating characters.
    Next Permutation → Implement the next lexicographical permutation of an array.
    Product of Array Except Self → Return an array where each element is the product of all other elements without using division.
    Sort Colors → Given an array with 0s, 1s, and 2s, sort it in-place.
    Longest Palindromic Substring → Find the longest palindromic substring in a string.

2. Linked List

    Reverse a Linked List → Reverse a singly linked list iteratively and recursively.
    Detect Cycle in a Linked List → Find if a cycle exists using Floyd’s cycle detection.
    Merge Two Sorted Linked Lists → Merge two sorted linked lists into one.
    Remove Nth Node from End → Remove the Nth node from the end of the list.
    Add Two Numbers (Linked List Representation) → Given two numbers represented as linked lists, add them.
    Flatten a Multilevel Linked List → Flatten a linked list where each node can have a child pointer.
    Sort a Linked List in O(n log n) → Sort a linked list using merge sort.

3. Stacks & Queues

    Valid Parentheses → Check if a string with ()[]{} is valid.
    Next Greater Element → Find the next greater element for each element in an array.
    Min Stack → Implement a stack that supports retrieving the minimum element in constant time.
    LRU Cache → Implement an LRU (Least Recently Used) cache using a doubly linked list and a hashmap.
    Implement Queue using Stacks → Use two stacks to implement a queue.

4. Recursion & Backtracking

    Generate Parentheses → Given n, generate all valid combinations of n pairs of parentheses.
    Word Search → Given a 2D board and a word, check if the word exists in the board.
    Sudoku Solver → Solve a given Sudoku puzzle using backtracking.
    Combination Sum → Find all unique combinations in an array where numbers sum up to a target.
    N-Queens Problem → Place N queens on an N × N chessboard such that no two queens attack each other.

5. Trees & Graphs

    Binary Tree Level Order Traversal → Print each level of a binary tree.
    Lowest Common Ancestor of a BST → Find the lowest common ancestor of two nodes in a BST.
    Diameter of a Binary Tree → Find the longest path between two nodes in a binary tree.
    Path Sum II → Find all root-to-leaf paths where the sum of values equals a given number.
    Clone a Graph → Given a reference to a node in an undirected graph, return a deep copy of the graph.
    Course Schedule (Topological Sorting) → Given a list of prerequisites, determine if all courses can be finished.

6. Sorting & Searching

    Search in Rotated Sorted Array → Find an element in a rotated sorted array in O(log n).
    Find Peak Element → Find a peak element in an array where an element is greater than its neighbors.
    Kth Largest Element in an Array → Find the kth largest element using QuickSelect.
    Median of Two Sorted Arrays → Find the median of two sorted arrays in O(log n).
    Find First and Last Position of Element in Sorted Array → Binary search to find the range of a target element.

7. Dynamic Programming

    Climbing Stairs → Given n steps, find the number of ways to reach the top.
    House Robber → Find the maximum amount of money that can be robbed without robbing two adjacent houses.
    Longest Common Subsequence → Find the longest common subsequence of two strings.
    0/1 Knapsack → Given weights and values, maximize the value without exceeding weight capacity.
    Word Break → Given a dictionary and a string, determine if the string can be segmented into valid words.

8. Greedy Algorithms

    Jump Game → Determine if you can reach the last index in an array.
    Gas Station → Find the starting gas station to complete a circular trip.
    Interval Scheduling → Find the maximum number of non-overlapping intervals.
    Huffman Encoding → Construct Huffman encoding for data compression.
    Fractional Knapsack → Given weights and values, determine the max value with a weight constraint.

9. Bit Manipulation

    Single Number → Find the number that appears once in an array while others appear twice.
    Power of Two → Check if a number is a power of two.
    Counting Bits → Count the number of 1s in the binary representation of numbers from 0 to n.
    Bitwise AND of Range → Find the bitwise AND of all numbers in a given range.
    Reverse Bits → Reverse the bits of a given 32-bit unsigned integer.
