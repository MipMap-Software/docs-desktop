---
title: Volume Measurement
sidebar_position: 4
---

## Volume Measurement

![](/img/en-img/volume.png)

---

### Operation Steps
- Click Volume Measurement, draw a polygon on outputs, click Calculate Volume, select different reference surfaces as required to perform volume measurement.
- Left-click to add vertices, right-click to undo the last vertex, and double-click the left mouse button to finish polygon drawing and complete measurement. Press ESC to exit measurement mode.
- Click Calculate Volume. Measurement data of the polygon and volume will be displayed on the left panel: Planar Area, Spatial Area, Planar Perimeter, Spatial Perimeter, Minimum Height, Maximum Height, Height Difference, Cut Volume, Fill Volume, Total Volume, and Volume Difference.
- You can modify the name and color of the volume annotation.

---

### Measurement Definitions
- Cut Volume: Volume of the area inside the drawn polygon that lies above the reference surface.
- Fill Volume: Volume of the area inside the drawn polygon that lies below the reference surface.
- Total Volume = Cut Volume + Fill Volume
- Volume Difference = Cut Volume − Fill Volume

---
### Reference Surface Descriptions
- Triangulated Fitted Surface: An irregular curved surface automatically generated following the original terrain undulations within the drawn polygon.
- Plane Fitted Surface: A smooth inclined plane fitted to the overall terrain slope within the drawn polygon, simplifying undulating terrain into a single inclined plane.
- Average Horizontal Plane: A horizontal reference surface generated from the average height of all points within the drawn polygon.
- Highest / Lowest-Point Horizontal Plane: A horizontal reference surface set at the height of the highest / lowest vertex within the drawn polygon.
- Custom Horizontal Plane: Manually input a specified height value to define a horizontal reference surface at any height.