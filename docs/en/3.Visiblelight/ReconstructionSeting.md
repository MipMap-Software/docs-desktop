---
title: Reconstruction Settings
sidebar_position: 6
---

## Reconstruction Settings

---

### Reconstruction Templates

![](/img/en-img/temp.png)

>[!tip] Templates allow quick reuse of custom reconstruction parameter configurations to improve workflow efficiency.

- Click the template dropdown to select custom templates or built-in system templates.

- Click the ![](/img/en-img/viewtemplate.png) icon beside the template to view all its parameter settings.

- Click the ![](/img/en-img/deletetemplate.png) icon beside the template to delete it.

- Click ![](/img/en-img/savetemp.png) below to save current reconstruction parameters as a custom template.

---

### Reconstruction Quality

![](/img/en-img/quality.png)



<table>
<colgroup>
<col style="width: 10%" />
<col style="width: 30%" />
<col style="width: 30%" />
<col style="width: 30%" />
</colgroup>
<thead>
<tr class="header" style="height:70px;">
<th>Reconstruction Quality</th>
<th>Ultra-High</th>
<th>High</th>
<th>Medium</th>
</tr>
</thead>
<tbody>
<tr class="odd" style="height:70px;">
<td>Rendering Difference</td>
<td>Original-image Rendering</td>
<td><p>Rendering with 2× interval resampling from original images</p></td>
<td><p>Rendering with 4× interval resampling from original images</p></td>
</tr>
<tr class="even" style="height:80px;">
<td>Usage Notes</td>
<td>For highest-quality outputs , longest reconstruction time</td>
<td>General-purpose daily use , balanced quality and reconstruction time</td>
<td>For quick preview outputs , shortest reconstruction time</td>
</tr>
</tbody>
</table>

---

### Region of Interest / Tiling

![](/img/en-img/roi.png)

The Region of Interest (ROI) defines the reconstruction extent. By default, the software outputs results over the maximum possible extent.

To output results within a custom extent, click ![](/img/en-img/setroi.png) to open the configuration panel.

![](/img/en-img/region.png)

#### Configure Region of Interest

- Smart: Automatically generates the minimal bounding extent based on point-cloud coverage.

- Maximize: Automatically generates the maximum possible extent.
- Import KML: Import KML-format boundary polygons into the current project.

- Manually Edit ROI: Click ![](/img/en-img/image86.png) to display all ROI vertices. Hold left-mouse button on ![](/img/en-img/image87.png) to drag vertices; right-click ![](/img/en-img/image87.png) to delete vertices; left-click ![](/img/en-img/image88.png) to add vertices.
- Height Adjustment: Enter minimum and maximum values to constrain the vertical reconstruction range.

![](/img/en-img/region2.png)

#### Configure Tiling

![](/img/en-img/tile.png)

- Auto: Automatically divides tiles according to available device memory.

- 2D Regular: Height information is ignored; regular tiling is performed on the XY plane using the specified grid coordinate system. Set grid size, tiling coordinate system and origin as needed, then click Apply to take effect.

- Preserve Full Tiles: Tiles intersecting ROI boundaries are normally clipped by the ROI. When enabled, tiles are exported strictly at the configured grid size.

- Tiling Information: Note that the peak memory consumption of a single tile must not exceed the device’s available memory; otherwise reconstruction may fail.

- 3D Regular: Height information is considered; regular tiling is performed along X, Y and Z axes using the specified grid and coordinate system.

- Memory Blocking: Adaptive tiling driven by the maximum memory limit defined per tile.