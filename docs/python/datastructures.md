# Data Structures:
- Data is some useful information stored in memory
- using data structures we can store data more efficiently (systematic way of arranging of data and accessing it)
- Algorithms(apps contain algorithms) are set of instructions that perform task/operation in finite amount of time

1. Linear DataStructures = stacks, queues, deques, linked list
2. Non Linear DataStructures= trees, heaps

### Linear Search Algorithm
```py
def linearsearch(A,key):
    position =0
    flag=False
    while position<len(A) and not flag:
        if A[position]==key:
            flag=True
        else:
            position=position+1
    return flag

x=[1,2,3,5,6,8]
print(linearsearch(x,15))
```

### Recursion:
- loops are used to execute repetitive tasks(while, for)
- recursion is a technique where function makes call to itself(factorial, Fibonacci, binary search)

#### Binary Search Algorithm
- In a nutshell, this search algorithm takes advantage of a collection of elements that is already sorted by ignoring half of the elements after just one comparison. 

1. Compare x with the middle element.
2. If x matches with the middle element, we return the mid index.
3. Else if x is greater than the mid element, then x can only lie in the right (greater) half subarray after the mid element. Then we apply the algorithm again for the right half.
4. Else if x is smaller, the target x must lie in the left (lower) half. So we apply the algorithm for the left half.

##### recursion
```py
def binary_search(arr, low, high, x):
 
    # Check base case
    if high >= low:
 
        mid = (high + low) // 2
 
        # If element is present at the middle itself
        if arr[mid] == x:
            return mid
 
        # If element is smaller than mid, then it can only
        # be present in left subarray
        elif arr[mid] > x:
            return binary_search(arr, low, mid - 1, x)
 
        # Else the element can only be present in right subarray
        else:
            return binary_search(arr, mid + 1, high, x)
 
    else:
        # Element is not present in the array
        return -1
 
# Test array
arr = [ 2, 3, 4, 10, 40 ]
x = 10
 
# Function call
result = binary_search(arr, 0, len(arr)-1, x)
 
if result != -1:
    print("Element is present at index", str(result))
else:
    print("Element is not present in array")
```

##### iterative
```py
def binary_search(arr, x):
    low = 0
    high = len(arr) - 1
    mid = 0
 
    while low <= high:
 
        mid = (high + low) // 2
 
        # If x is greater, ignore left half
        if arr[mid] < x:
            low = mid + 1
 
        # If x is smaller, ignore right half
        elif arr[mid] > x:
            high = mid - 1
 
        # means x is present at mid
        else:
            return mid
 
    # If we reach here, then the element was not present
    return -1
 
 
# Test array
arr = [ 2, 3, 4, 10, 40 ]
x = 10
 
# Function call
result = binary_search(arr, x)
 
if result != -1:
    print("Element is present at index", str(result))
else:
    print("Element is not present in array")
```