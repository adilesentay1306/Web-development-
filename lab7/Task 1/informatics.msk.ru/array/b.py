n = int(input())
nums = []
for i in range(n):
    nums.append(int(input()))
    
for i in range(0, n, 2):
    print(nums[i], end=" ") # pyright: ignore[reportUndefinedVariable]