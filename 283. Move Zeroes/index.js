// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.
//
// Note that you must do this in-place without making a copy of the array.

function moveZeroes(nums) {
    let right = 0
    let left = 0
    while (right < nums.length) {
    if (nums[right] !== 0) {
        [nums[left], nums[right]] = [nums[left], nums[right]]
        left++
    }
    right++
    }

}
let  nums = [0,1,0,3,12]

const result = moveZeroes(nums)
console.log(result)