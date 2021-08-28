# imageprocessing 
### Image Manipulation 
##### Transformations
- geometric distortions enacted upon an image
1. Affine(scaling,rotation,translations == parallelism of lines are maintained)
2. Non-Affine(Also called projective transform/ homography=parallelism not preserved= presevers collinearity(all points on line remain same) and incidence)
###### Translation
$$
\left(\begin{array}{cc}
1 & 0 & Tx\\
0 & 1 & Ty
\end{array}\right)
$$
Tx=x axis horizontal
Ty= yaxis vertical
**cv2.wrapAffine**

