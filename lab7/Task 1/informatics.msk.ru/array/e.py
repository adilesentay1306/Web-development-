n = int(input())
nums = list(map(int, input().split()))

found = False
for i in range(1, n):
    if nums[i] > 0 and nums[i-1] > 0:
        found = True
        break
    if nums[i] < 0 and nums[i-1] < 0:
        found = True
        break

print("YES" if found else "NO")