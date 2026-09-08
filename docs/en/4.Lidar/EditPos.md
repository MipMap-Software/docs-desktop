---
title: Edit POS
sidebar_position: 4
---

## Edit POS

![](/img/en-img/editpos.png)

Click the POS icon to open the Edit POS panel.

![](/img/en-img/importpos2.png) 

---

### Import POS File

Select the POS file for import. Select the corresponding attitude angle convention from the attitude-angle dropdown, and assign each column header to name, position XYZ, and attitude angles via dropdown menus.


![](/img/en-img/importpos3.png) 

---

### Select Coordinate System

Click the coordinate-system selector and choose the coordinate system used during point-cloud computation; you may search by keyword. Import a PRJ file if POS uses a custom coordinate system.

> [!warning] The POS coordinate system must match the coordinate system of the LAS point cloud.

<div style="display:flex;">

<img src="/img/en-img/system.png" style="width:50%;">

<img src="/img/en-img/system2.png" style="width:50%;">

</div>

---


### Other Options

![](/img/en-img/posaccuracy.png)

> [!tip] LiDAR POS data defaults to high precision and generally requires no modification.

- Coordinate Accuracy: Set the accuracy level for current POS data. It is recommended to select according to your actual capture device. Higher accuracy assigns greater weight to POS data during aerial triangulation adjustment.
- Height Offset: Enter a height offset value. All elevation values in the current POS dataset will be offset globally by this value.
- Export POS: Export current POS information to a specified folder in CSV format.
- Clear POS: Erase POS data for all photos in the current project.