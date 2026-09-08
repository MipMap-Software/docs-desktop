---
title: Edit POS
sidebar_position: 4
---

## Edit POS

![](/img/en-img/pos.png)

The software automatically parses pose information embedded in imported photos. If pose information cannot be parsed from photos, you can manually import a POS file.

![](/img/en-img/pos2.png) 

---

### Import POS File

Select the POS file for import. Select the corresponding attitude angle convention from the attitude-angle dropdown, and assign each column header to name, position XYZ, and attitude angles via dropdown menus.

![](/img/en-img/importpos.png)

---

### Select Coordinate System

Click the coordinate-system selector to pick the coordinate system and vertical datum matching the POS data; you may search by keyword. Import a PRJ file if POS uses a custom coordinate system.

<div style="display:flex;">

<img src="/img/en-img/system.png" style="width:50%;">

<img src="/img/en-img/system2.png" style="width:50%;">

</div>

---

### Other Options

![](/img/en-img/posaccuracy.png)

- Pos Accuracy: Set the accuracy level for current POS data. It is recommended to select according to your actual capture device. Higher accuracy assigns greater weight to POS data during aerial triangulation adjustment.
- Height Offset: Enter a height offset value. All elevation values in the current POS dataset will be offset globally by this value.
- Export POS: Export current POS information to a specified folder in CSV format.
- Clear POS: Erase POS data for all photos in the current project.