def solution(nums):
    m = len(nums) // 2
    nums = set(nums)
    return len(nums) if len(nums) <= m else m