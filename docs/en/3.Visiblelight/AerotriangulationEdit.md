---
title: Aerotriangulation Edit
sidebar_position: 5
---

## Aerotriangulation Edit

>[!tip] This function is used to eliminate aerial photos and matching points with aerotriangulation matching errors, preventing erroneous data from affecting the accuracy and final results of 3D reconstruction.


1 . After importing the photos, click **Start AT** to  initiate aerial triangulation.

![](/img/en-img/at.png)

2 . Once aerial triangulation finishes, click the icon ![](/img/en-img/editatlogo.png)to open the aerotriangulation editing panel.

![](/img/en-img/editat.png)

3 . If the blue camera frustums appear too large or too small, hover your mouse over the icon ![](/img/en-img/camsize.png)to adjust the camera display size. You may enter a value directly or scroll the mouse wheel to get a suitable view.

![](/img/en-img/size.png)



4 . Left-click to select cameras or connection points with matching errors. The selected cameras and their corresponding connection points will turn red. 
Press the **Delete** key on the keyboard to remove the selected faulty cameras and matching point data.

::: tip 
Images with aerial triangulation matching errors refer to images for which valid camera poses consistent with the actual flight trajectory cannot be solved during aerial triangulation.

In the software, they are visualized as blue camera frustums that deviate substantially from the overall acquisition path, with incorrect poses and abnormal angles. These images fail to establish proper overlap and adjacency with neighboring images.

**Example：**

![](/img/en-img/atedit.png)
:::


5 . After cleanup, press **ESC** to exit the aerotriangulation editor. A confirmation dialog will appear:
- **Apply** : Save deletions and exit
- **Don't apply** : Discard deletions and exit
- **Cancel** : Stay in the editor

![](/img/en-img/editcamtip.png)
