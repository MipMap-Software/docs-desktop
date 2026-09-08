---
title: 3D Products
sidebar_position: 8
---

## 3D Products

Click the icon ![](/img/cn-img/image92.png) to enable 3D Products.

![](/img/en-img/3d.png)

---

### Textured Model

![](/img/en-img/model.png)

- When Textured Model export is enabled, B3DM and OSGB formats are exported by default.
- Click the dropdown box to select desired products formats.
- Water Surface Flattening: When enabled, water surfaces will be flattened and optimized. This function only takes effect when photos contain geolocation information.
- Model Simplification Ratio: Drag the slider to set the model simplification ratio. A lower ratio reduces model details and file size.
- Remove Floating Artifacts: When enabled, floating artifacts in the model will be removed during products.

---

### Point Cloud

![](/img/en-img/pointcloud.png)

- When point cloud export is enabled, PNTS and LAS formats are exported by default.
- Click the dropdown box to select desired products formats.


---

### Gaussian Splatting

![](/img/en-img/gs.png)

- When Gaussian Splatting is enabled, SOGTiles, PLY and SOG formats are exported by default.
- Max Gaussian Points: Defaults to Auto. You can customize the Gaussian point count to control the size of Gaussian productss.
- People Removal: When enabled, the influence of people in frames on Gaussian productss can be eliminated.
- Click the dropdown box to select desired products formats.
> [!tip] A Gaussian PLY with one million points is approximately 90 MB. Adjust the Gaussian point count as needed.

---

### Products Coordinate System

Select the coordinate system and vertical datum for 3D productss; you may search by keyword. For a custom coordinate system for 3D productss, import a PRJ file.

<div style="display:flex;">

<img src="/img/en-img/system.png" style="width:50%;">

<img src="/img/en-img/system2.png" style="width:50%;">

</div>
