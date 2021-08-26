
# Pandas(PanelData): read,clean and perform feature engineering 
 Pandas is built on numpy for
 - fast analysis and data cleaning&preparation
 - python's version of R dataframes
 - has built in data visualizations

 - series is labelled index
 - dataframe is labelled index and column(matrix)

 ```bash
 conda install pandas
 pip install pandas
 ```

 ### Series
 - very similar to numpy infact built on top of numpy
 - difference is series can have access to labels 


 ```python
import numpy as np
import pandas as pd
l1=[1,2,3,4,5]
labels=["a","b","c","d","e"]
nparr=np.array(l1)
#d={"a":1,"b":2,"c":3,"d":4,"e":5}

ps=pd.Series(data=l1,index=labels)
#ps=pd.Series(l1,labels)
#ps=pd.Series(nparr,labels)
#ps=pd.Series(d)
#a    1
#b    2
#c    3
#d    4
#e    5
#dtype: int64


ps=pd.Series(data=labels)
ps['china']
ps[1]
# holds strings
# or you can even pass built in functions
pd.Series(data=[sum,print,len])
#dtype:object just to show flexibilty


#operations
s1={'ind':12,'usa':1}
s2:{'usa':13,'japan':23}
series1+series2

china     NaN
ind      24.0
usa       NaN
dtype: float64
# if no match found NaN

 ```
 ### Data frames
 (multiple series share same index)
 ![](@attachment/Clipboard_2021-04-08-16-53-27.png)
 we can give labels to rows and cols
 ```python
 
 d1=np.random.randn(5,4)
 df=pd.DataFrame(d1,['A','B','C','D','E'],['W','X','Y','Z'])

 ```

```python
df['W']

#A   -0.557522
#B    0.158122
#C   -0.182556
#D   -1.801877
#E    0.065387
#Name: W, dtype: float64


type(df['W'])
#pandas.core.series.Series


df['W']['D']
#-1.8018771959016069

# multiple cols
df[['W','X']]

```


#### Operations

Add column
```python
df['newcol']=df['W']+df['X']
```


```python
df.shape
#(5,4) - 5rows and 4cols= axis 0 is row and axis 1 is col 
df.drop('A',axis=0) 
df.drop(['A','B'],axis=0) 
df.drop('newcol',axis=1) 
# axis=1 means cols- default row axis=0
# this actually doesn't effect original data- to do so use inplace=true

df.drop('newcol',axis=1,inplace=True) 
# or reassignment

df=df.drop('A',axis=0) 

```

### Fetch rows as series
```py
df.loc[['B','C']]
df.loc[['B','C'],['W','X']]

df.loc['B']
#W        -0.557522
#X        -0.614180
#Y        -0.809050
#Z         1.680066
#newcol   -1.171702
#Name: A, dtype: float64
df.loc['B',['W','X']]
df.iloc[2,['W','X']] # by index
df.iloc[-1] # last row and all slice notation can be used
```



```py
d1=np.random.randn(5,4)
#array([[-0.74785066, -0.19287386, -0.8716272 , -0.02339459],
#       [ 0.68066298,  1.30681373, -1.09225175, -0.05550824],
#       [-0.64977752,  1.62540477, -1.48036883, -0.18075604],
#       [-0.05476361,  0.4170007 ,  0.89952652, -0.96212676],
#       [-0.15365616,  2.61802241,  0.82606176,  0.40855525]])

p1=pd.DataFrame(d1,['A','B','C','D','E'],['W','X','Y','Z']);

```

```py
df>1
df['w']>1

df[df['x']>0]
```


```py
booldf=df>1
df[booldf]
```


```py
df[df['X']>1]
```


```py
df.reset_index()
df.set_index()
```


### Multiple Conditions

```py
df[(df['x']>0) & (df['y']>0)]

df.describe()
df.info()
```


### Missing Data
- leave as missing
- remove missing data
- fill missing data



```py
nd=pd.DataFrame({'A':[1,2,3,np.nan,5],'B':[6,7,np.nan,np.nan,9],'C':[np.nan,12,13,np.nan,15]})
nd.isnull()
nd.dropna()
```




drop if atleast two non null values

```py
df.dropna(axis=1,thresh=2)
df.fillna("fill data")
```

