---
title: Layers
sidebar_position: 1
---
## Layers

**Click** ![](/img/en-img/image116.png) **to collapse / expand layer contents. Click** ![](/img/en-img/image117.png) **to show / hide layer contents**

---

### Annotation Layer

![](/img/en-img/layer2.png)

![](/img/en-img/image118.png): Export all annotations of the current task. Select the desired format and coordinate system.

![](/img/en-img/image119.png): Delete all or a single annotation in the current task.

![](/img/en-img/image120.png): Create a folder. Annotations can be created inside the folder.

![](/img/en-img/image121.png): Zoom to this annotation.

![](/img/en-img/image122.png): Edit this annotation; add or move vertices.

![](/img/en-img/viewcamera.png): Show all images where this annotation is visible.

Click an annotation to view its detailed information on the right-hand panel. You can modify the annotation name and color.

> [!tip] Jump-to links
For more annotation-related operations:
[**Point Measurement**](../7.Mark&Measure/PointMeasure.md),
[**Line Measurement**](../7.Mark&Measure/LineMeasure.md),
[**Polygon Measurement**](../7.Mark&Measure/PolygonMeasure.md),
[**Volume Measurement**](../7.Mark&Measure/VolumeMeasure.md)

---

### Output Layers

![](/img/en-img/resultlayer.png)

Click different output layers. On the right-hand panel you can toggle visibility and adjust rendering modes for the selected output layer.

Orthoimagery and Digital Elevation Model can be displayed in overlay; 3D Model and 3D Point Cloud can be displayed in overlay.

#### DOM

Drag the opacity slider ![](/img/en-img/opacity.png) to adjust opacity.

#### DSM

Drag the legend slider ![](/img/en-img/drag.png) to adjust the elevation range. Only DSM data within this range will be displayed on the map.

#### 3D Model

When double-sided rendering is enabled, the back faces of model textures are visible; when disabled, back faces are hidden.

When wireframe mode is enabled, the 3D model structure is rendered as triangular mesh wireframe on the map.

#### 3D Point Cloud

With EDL rendering enabled, point-cloud display delivers enhanced stereo depth and feature outlining to improve 3D visual perception.

When height-based coloring is enabled, point-cloud colors map to elevation values for intuitive terrain undulation interpretation.

---

### Dataset

![](/img/en-img/dataset.png)

When photo display is enabled, the solved poses of registered photos are shown on the map.

You can visually assess aerial triangulation quality: continuity of strip stitching, flight-line offset and displacement, and consistency between solved camera poses and actual acquisition poses.

Drag the value-range slider ![](/img/en-img/images.png) to control the display size of photos on the map.