---
title: Overlay
sidebar_position: 3
---

## Overlay

![](/img/en-img/overlay.png)

>[!tip] Import overlays to superimpose vector data onto 2D and 3D products for feature visualization and spatial analysis.

---

### Import Overlay

Click ![](/img/en-img/image127.png) to select the overlay file, choose the overlay coordinate system, then click OK to add it to the current task.

Vector file formats including dwg, dxf, shp and GeoJSON are supported.

![](/img/en-img/uploadoverlay.png)

If the coordinate system of the overlay is unknown, use corresponding-point calibration to georeference it.

:::tip Operation Steps
1. Select Corresponding-Point Calibration and click ![](/img/en-img/mapcalibration.png) to open the calibration panel.

2. Select either orthoimagery or 3D model as the working surface in the bottom-right corner.
3. Left-click to pick a corresponding point on the left-side vector view, then click the identical location on the right-side products view.
4. Approximately 4 well-distributed corresponding points across the vector map are recommended.
5. Click Confirm after calibration is finished.
:::

![](/img/en-img/calibration.png)

---

### Overlay Analysis

![](/img/en-img/overlay2.png)

- After successful import, overlays can be viewed over 2D or 3D products.

- Click an overlay to modify its name, layer visibility, color and line width in the right-hand panel.

- Enable Ground Snapping to snap overlay heights automatically to the terrain surface. Disable it to set an arbitrary elevation offset for the overlay.

- Click ![](/img/en-img/delete.png) to delete all or a single overlay in the current task.