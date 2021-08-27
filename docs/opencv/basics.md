# basics
### Images: 2d representation of visible light spectrum
How computer stores:
- each pixel coordinate (x,y) contains 3 values ranging for intensities of 0 to 255(8bit) - RGB
- grayscale vs binary images(one channel ranging 0-255 vs 0/1)

### OpenCv
- launched in 1999, from intel initiative 
- written in C++

```python
import sys

import cv2
# Load an color image in grayscale
img = cv2.imread('/Users/vignesh/Desktop/Activity/basics/0a09bde70ae83309a25e7d0609246b70.jpg')
WINDOW_NAME = 'Image Input'
cv2.namedWindow(WINDOW_NAME, cv2.WINDOW_AUTOSIZE)
cv2.startWindowThread()

# Display an image
cv2.imshow(WINDOW_NAME,img)
key = cv2.waitKey(0) & 0xFF
if key == ord("q"):
    cv2.destroyAllWindows()
    cv2.waitKey(1)
    sys.exit()
```

```py
import sys
import cv2
img = cv2.imread('/Users/vignesh/Desktop/Activity/basics/0a09bde70ae83309a25e7d0609246b70.jpg')
cv2.imshow("inp",img)
cv2.waitKey()
cv2.destroyAllWindows()
sys.exit()
```

```py
import cv2
import sys;
print('Python %s on %s' % (sys.version, sys.platform))
img = cv2.imread('/Users/vignesh/Desktop/Activity/basics/0a09bde70ae83309a25e7d0609246b70.jpg')
print(img.shape)
print("height",img.shape[0])
print("width",img.shape[1])
cv2.imwrite("output.png",img)
cv2.imwrite("output.jpg",img)
```


### Converting to grayscale

```py

import sys
import cv2
img = cv2.imread('/Users/vignesh/Desktop/Activity/basics/0a09bde70ae83309a25e7d0609246b70.jpg')
print(img.shape)
grayImg=cv2.cvtColor(img,cv2.COLOR_BGR2GRAY)
cv2.imshow("inp",grayImg)
cv2.waitKey()
cv2.destroyAllWindows()
sys.exit()

```

```py
import sys
import cv2
img = cv2.imread('/Users/vignesh/Desktop/Activity/basics/0a09bde70ae83309a25e7d0609246b70.jpg',0)
print(img.shape)
cv2.imshow("inp",img)
cv2.waitKey()
cv2.destroyAllWindows()
sys.exit()
```

#### Color spaces
- RGB(additive color model)
- HSV(way humans perceive color - cylindrical mode. ColorValue,vibrancy and brightness/intensity- very helpful on color filtering. Red=165 to 15,green=45to75,blue=90 to 120)
- CMYK

Open CV uses BGR(The reason why the early developers at OpenCV chose BGR color format is probably that back then BGR color format was popular among camera manufacturers and software providers. E.g. in Windows, when specifying color value using COLORREF they use the BGR format 0x00bbggrr.)


```py
import sys
import cv2
img = cv2.imread('/Users/vignesh/Desktop/Activity/basics/0c45ce7d0271c5aeefa0d882a16ef18b.jpg')
print(img.shape)
#b,g,r=img[0,0]
# print(b,g,r)
# img=cv2.cvtColor(img,cv2.COLOR_BGR2RGB)
# print(b,g,r)
# limg=cv2.cvtColor(img,cv2.COLOR_RGB2GRAY)
# grayintensity=limg[0,0]
# print(grayintensity)

#
# img=cv2.cvtColor(img,cv2.COLOR_RGB2HSV)
# cv2.imshow("hue",img[:,:,0])
# cv2.imshow("sat",img[:,:,1])
# cv2.imshow("val",img[:,:,2])


B,G,R=cv2.split(img)
# cv2.imshow("b",img[:,:,0])
# cv2.imshow("g",img[:,:,1])
# cv2.imshow("r",img[:,:,2])
merged=cv2.merge([B,G,R+4])
cv2.imshow("b",B)
cv2.imshow("g",G)
cv2.imshow("r",R)
cv2.imshow("merged",merged)
cv2.imshow("org",img)
cv2.waitKey()
cv2.destroyAllWindows()
sys.exit()
```

```py
import sys
import numpy as np
import cv2
img = cv2.imread('/Users/vignesh/Desktop/Activity/basics/0c45ce7d0271c5aeefa0d882a16ef18b.jpg')
B,G,R=cv2.split(img)
zeros=np.zeros(img.shape[:2],dtype="uint8")
cv2.imshow("b",cv2.merge([zeros,zeros,B]))
cv2.imshow("g",cv2.merge([zeros,G,zeros]))
cv2.imshow("r",cv2.merge([R,zeros,zeros]))
cv2.imshow("org",img)
cv2.waitKey()
cv2.destroyAllWindows()
sys.exit()
```

#### Histograms
- great way to visualize individual color components

```py
import cv2
from matplotlib import  pyplot as plt
img = cv2.imread('/Users/vignesh/Desktop/Activity/basics/0c45ce7d0271c5aeefa0d882a16ef18b.jpg')
histogram=cv2.calcHist(images=[img],channels= [0],mask=None,histSize=[256],ranges=[0,256])
plt.hist(img.ravel(),256,[0,256])
plt.show()

color=('b','g','r')
for i,col in enumerate(color):
    histogram2 = cv2.calcHist(images=[img], channels=[i], mask=None, histSize=[256], ranges=[0, 256])
    plt.plot(histogram2, color=col)
    plt.xlim([0,256])

plt.show()
```

#### Drawing
```py
import cv2
from matplotlib import  pyplot as plt
img = cv2.imread('/Users/vignesh/Desktop/Activity/basics/0c45ce7d0271c5aeefa0d882a16ef18b.jpg')
img=cv2.cvtColor(img,cv2.COLOR_BGR2RGB)
plt.imshow(img)
plt.show()

```
##### line
```py
import numpy as np
import cv2
from matplotlib import  pyplot as plt
img = np.zeros((512,512,3),np.uint8)
#img = np.zeros((512,512),np.uint8) #grayscale

cv2.line(img,(0,0),(400,400),(255,0,0),5)
plt.imshow(img)
plt.show()
```
##### Rectangle
```py
import numpy as np
import cv2
from matplotlib import  pyplot as plt
img = np.zeros((512,512,3),np.uint8)
#img = np.zeros((512,512),np.uint8) #grayscale

cv2.rectangle(img,(10,10),(100,100),(255,0,0),5)
plt.imshow(img)
plt.show()

```

##### Circle
```py
import numpy as np
import cv2
from matplotlib import  pyplot as plt
img = np.zeros((512,512,3),np.uint8)
#img = np.zeros((512,512),np.uint8) #grayscale

cv2.circle(img,(255,255),100,(255,0,0),5)
plt.imshow(img)
plt.show()

```

##### Polylines
```py
import numpy as np
import cv2
from matplotlib import  pyplot as plt
img = np.zeros((512,512,3),np.uint8)
#img = np.zeros((512,512),np.uint8) #grayscale
pts=np.array([[10,50],[300,200],[90,200],[50,500]],np.int32)
pts.reshape((-1,1,2))
cv2.polylines(img,[pts],True,(255,0,0),5)
plt.imshow(img)
plt.show()

```

#### Text
```py
import numpy as np
import cv2
from matplotlib import  pyplot as plt
img = np.zeros((512,512,3),np.uint8)
cv2.putText(img,"Hello World",(100,100),cv2.FONT_HERSHEY_COMPLEX,2,(255,0,0),5)
plt.imshow(img)
plt.show()
```