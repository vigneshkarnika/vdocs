
# Python Intro

#### comments

#for comments
"""hola
this is comment
"""

```python
2*3
2-3
2/3
2%3
2+3
print("my name is {}".format("vignesh"))
print("{greet} my name is {name}".format(name="vignesh",greet="hola"))
```

### strings

```bash
>>> s="vignesh"
>>> s
'vignesh'
>>> s[0]
'v'
>>> s[1]
'i'
>>> s[0:]
'vignesh'
>>> s[1:]
'ignesh'
>>> s[:0]
''
>>> s[:]
'vignesh'
>>> s[:-1]
'vignes'
>>> s[3:-1]
'nes'
s.upper()
s.lower()
>>> s="my name is vignesh"
>>> s.split()
['my', 'name', 'is', 'vignesh']
>>> s.split(",")
['my name is vignesh']
>>> s="my name is vignesh,tes"
>>> s.split(",")
['my name is vignesh', 'tes']
```

### arrays

```bash

>>> a=["a","b"]
>>> a
['a', 'b']
>>> a.append("c")
>>> a
['a', 'b', 'c']
>>> a.remove("c")
>>> a
['a', 'b']
>>> a.reverse()
>>> a
['b', 'a']
>>> a[1]
'a'
>>> a
['b', 'a', 'z', 'x']
>>> del a[0]
>>> a.remove(a[2])
>>> a
['a', 'z', 'x']
>>> a
['a', 'z', 'x']
>>> a[0:]
['a', 'z', 'x']
>>> a[0:-1]
['a', 'z']
>>> a[1:-1]
['z']
>>> a[:-1]
['a', 'z']
>>> a[:]
['a', 'z', 'x']
>>> a.append(["x","d","f"])
>>> a
['a', 'z', 'x', ['x', 'd', 'f']]
>>> a[3]
['x', 'd', 'f']
>>> a[3][0]
'x'
>>> li=[1,2,3,4]
>>> li.pop()
4
>>> li.pop(0)
1
>>> li=[1,2,3,4]
>>> li.pop(0)
1
>>> x=2
>>> x in li
True
```

### dictonaries

```bash
>>> mydict
{'india': 'ruppee', 'usa': 'dollar', 'dubai': 'dinar'}
>>> mydict["canada"]="canadian dollar"
>>> mydict
{'india': 'ruppee', 'usa': 'dollar', 'dubai': 'dinar', 'canada': 'canadian dollar'}
>>> del mydict['india']
>>> mydict
{'usa': 'dollar', 'dubai': 'dinar', 'canada': 'canadian dollar'}
>>> d
{'name': 'vignesh', 'age': '28', 'color': 'blue'}
>>> d.keys()
dict_keys(['name', 'age', 'color'])
>>> list(d.keys())
['name', 'age', 'color']
>>> list(d.values())
['vignesh', '28', 'blue']
>>> list(d.items())
[('name', 'vignesh'), ('age', '28'), ('color', 'blue')]
```

### tuples immutable

```bash
>>> mylist=[1,2,3,4,5]
>>> mylist
[1, 2, 3, 4, 5]
>>> mylist[0]
1
>>> mylist[0]=3
>>> mylist
[3, 2, 3, 4, 5]
>>> mytuple=(1,2,3,4,5)
>>> mytuple[0]
1
>>> mytuple[0]=9
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
TypeError: 'tuple' object does not support item assignment


>>> li=[(1,2),(2,3),(3,4)]
>>> for x in li:
...     print(x)
...
(1, 2)
(2, 3)
(3, 4)
>>> for (a,b) in li:
...     print(a)
...
1 2 3
```

### sets no duplicates

```bash
>>> myset={1,1,1,1,1,12,2,4,5,6}
>>> myset
{1, 2, 4, 5, 6, 12}
>>> myset.add(1)
>>> myset
{1, 2, 4, 5, 6, 12}
>>> mylist
[3, 2, 3, 4, 5]
>>> set(mylist)
{2, 3, 4, 5}
```

### comparsions

```bash
>>> 1>2
False
>>> 2==2
True
>>> 1<2
True
>>> 1>1
False
>>> 1>=1
True
1<2 and 2<1 or
```

### conditionals

```bash
>>> if 1>2 :
...     print("one is greater than 2")
... else :
...     print("nope")
...
nope



>>> if 1>2 :
...     print("one is greater than 2")
... elif 4>3:
...     print("4 is greater than 3")
... else:
...     print("nothing")
...
4 is greater than 3
```

### loops

```bash
>>> mylist
[3, 2, 3, 4, 5]
>>> for l in mylist :
...     print(l)
...
3
2
3
4
5



>>> i=4
>>> while i>1:
...     i=i-1
...     print(i)
...
3
2
1

>>> for x in range(0,6):
...     print(x)
...
0
1
2
3
4
5

>>> mlist=list(range(0,7))
>>> mlist
[0, 1, 2, 3, 4, 5, 6]
```

### list compensation

```bash
>>> mylist=[1,2,3,4,5]
>>> mylist
[1, 2, 3, 4, 5]
>>> for item in mylist:
...     mylist2.append(item**2)
...
>>> mylist2
[1, 4, 9, 16, 25]


>>> mylist2
[1, 4, 9, 16, 25]
>>> mylist
[1, 2, 3, 4, 5]
>>> mylist3=[x**2 for x in mylist]
>>> mylist3
[1, 4, 9, 16, 25]
```

### functions

```bash
>>> def add(a,b=3):
...   return a+b
...
>>> add(3,2)
5
>>> add(3)
6

#keyword arguments:
def func(a, b=5, c=10): print('a is', a, 'and b is', b, 'and c is',
c)
```

### Maps

```bash
>>> def squareofnumber(num):
...     return num*num
...
>>> squareofnumber(2)
4
>>> squareofnumber(5)
25
>>> mylist
[1, 2, 3, 4, 5]
>>> list(map(squareofnumber,mylist))
[1, 4, 9, 16, 25]
```

### lambda functions

```bash
>>> def mul(a,b):
...     return a*b
...
>>> mul(2,3)
6
>>> mul(5,3)
15
>>> mylam=lambda a,b:a*b
>>> mylam(4,5)
20
>>> mylist
[1, 2, 3, 4, 5]
>>> list(map(lambda a:a*4,mylist))
[4, 8, 12, 16, 20]
```

### filter

takes boolean function as input function

```bash
>>> mylist
[1, 2, 3, 4, 5]
>>> list(filter(lambda a:a%2,mylist))
[1, 3, 5]
```

### varargs and keyword varargs

```bash
>>> def add(*x):
...     b=0
...     for a in x:
...         b=b+a
...     return b
...
>>> add(1,2,3)
6
>>> add(1,2,3,4,5,7,8)
30

>>> def nparams(**keyargs):
...     for x in keyargs:
...         print(x)
...         print(keyargs[x])
...
>>> nparams()
>>> nparams(name="vignesh",age=26,role="admin")
name
vignesh
age
26
role
admin
```

### simple system args

```python
import sys
for x in sys.argv:
    print(x)
print (sys.argv[1])
```

### named sys args

```python
import argparse, sys
parser=argparse.ArgumentParser()
parser.add_argument('--region','-r', help='Region of AWS Instances')
args=parser.parse_args()
print(args.region)
```

### commandline input

```python
name=input("what is your name?")
print("i got it "+name)
```

### modules

test.py as module

```python
def add(a,b):
    return a+b
__version__=0.1
if __name__ == "__main__":
    print("this executed directly")
else:
    print("this executed as module")
```

```python
import test
print(test.add(2,3))
print(test.__version__)
```

```python
from test import add,__version__ as Ver
print(add(2,3))
print(Ver)
```

### Classes

```python
class Person:
    def __init__(self):
        print("this is constructor")
    def getName(self):
        return "vignesh"


p=Person()
print(p.getName())


def __init__(self,name):
    self.name=name
```

### Inheritance

```python
class Person:
    def __init__(self):
        pass
    def getName(self):
        return "vignesh"

class Student(Person):
    def getRoll(self):
        return 899


s=Student()
print(s.getRoll())
print(s.getName())
```

### Exception Handling

```python
try:
    print(0/0)
except ZeroDivisionError:
    print("exception zero division")
except:
    print("exception")
```

