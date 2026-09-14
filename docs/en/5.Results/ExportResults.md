---
title: Export Results
sidebar_position: 5
---

## Export Results

---

### Full Export

Export products for the full extent of the current view. If products have been cropped, the cropped version will be exported.

:::tip Operation Steps

1. Select the output type to export: 2D / 3D / GS.

2. Click Export and select Full Export.

3. Click Browse and specify the target folder for exported products.

4. Select the output formats to export.

5. Click Export. The output folder will open automatically upon completion.
:::


![](/img/en-img/export2.png)

![](/img/en-img/exportresults.png)


**Other Operations**

- **Change Coordinate System**: Click Coordinate System on the export panel to select a target output coordinate system. Local coordinate systems cannot be changed.

- **Merge Results**: Check Merge products when exporting 3D products to combine 3D data into a single model file. Larger scenes consume more runtime memory. Merging is not available for B3DM and OSGB formats.

---

### Area Export

Draw a boundary over products to crop and export data within the selected area. This does not modify project source products.

:::tip Operation Steps

1. Select the output format to export: 2D / 3D / GS.

2. Click Export and select Area Export.

3. Draw the export boundary on the output. Left-click to add vertices; double-click the left mouse button to finish drawing.

4. After drawing, click the confirm icon ![](/img/cn-img/对.png).

5. Click Browse and specify the target folder for exported products.

6. Select the output formats to export.

7. Click Export. The output folder will open automatically upon completion.
:::

![](/img/en-img/areaexport.png)

![](/img/en-img/areaexport2.png)

**Other Operations**

- After drawing, adjust the boundary polygon: left-click ![](/img/cn-img/添加节点.png) to add vertices, right-click ![](/img/cn-img/删除节点.png) to remove vertices, or hold the left mouse button to drag vertices.

- Click ![](/img/cn-img/取消.png) to abort the export operation.

- **Change Coordinate System**: Click Coordinate System on the export panel to select a target output coordinate system. Local coordinate systems cannot be changed.

- **Merge products**: Check Merge products when exporting 3D products to combine 3D data into a single model file. Larger scenes consume more runtime memory. Merging is not available for B3DM and OSGB formats.

---

### Aerial Triangulation Export

:::tip Operation Steps

1. Click AT to switch to the AT output panel.

2. Click Export.

3. Click Browse and specify the target folder for exported products.

4. Select the aerial-triangulation output formats to export.

5. Click Export. The output folder will open automatically upon completion.
:::


![](/img/en-img/atexport.png)


![](/img/en-img/atexport2.png)

**Other Operations**

- **Images Undistortion**: Check Undistort Images to export undistorted aerial-triangulation files together with corresponding undistorted images.