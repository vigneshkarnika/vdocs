# numpy
### numpy is linear algebra library (fast - bindings to c)

```bash
conda install numpy
pip install numpy
```

numpy comes in two flavors
1. vectors(1d arrays)
2. matrices(1d or 2d)

```python
l=[1,2,3,4,5,6]
import numpy as np
narr=np.array(l)
narr

l2=[[1,2,3],[4,5,6],[7,8,9]]
narr2=np.array(l2)
narr2
```

Arange
```python
m1=np.arange(0,10)
m1
# with step size
m1=np.arange(0,10,0.5)
m1

np.zeros(3)
np.zeros((3,4))


np.ones(3)
np.ones((3,4))

# number of values between
m1=np.linspace(0,10,100)

# identity matrix
np.eye(8)

# random matrix
np.random.rand(3)
np.random.rand(3,3)

# standard normal distribution
np.random.randn(5)
np.random.randn(5,4)

np.random.randint(0,10,4)
np.random.randint(0,10,(3,4))

m1.shape
np.random.randint(0,10,12)
m1.reshape((3,4))


m1.min()
m1.max()

m1.argmax() # index location of max
m1.argmin() # index location of min

m1.dtype # datatype

from numpy.random import randint
```


```python
import numpy as np
m1=np.arange(0,10)
m2=m1[0:3]
m2[:]=4
```
this is make m1 also 
array([4, 4, 4, 3, 4, 5, 6, 7, 8, 9])- original array effected

should do other way

```
arr.copy()
```

```python
m1=np.array([[1,2,3],[4,5,6]])
m1[0] # row
m1[0][0] # element
m1[0,1] #element
m1[0:-1,1:-1]

m1>5 # boolean matrix
array[booleanarray] # returns only value places

arr[arr>5]
arr[arr<3]
```


### numpy operations


```python
arr*arr
arr-10
arr/arr
arr**2
np.sqrt(err)
np.max(arr)
np.min(arr)
np.sin(arr)
np.log(arr)
```




