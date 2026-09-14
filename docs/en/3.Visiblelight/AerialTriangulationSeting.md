---
title: Set GCP
sidebar_position: 5
---
## Set GCP

---

### Start Aerial Triangulation

Select Aerial Triangulation from the template and click to start aerial triangulation.

![](/img/en-img/at.png)

---

### Verify Aerial Triangulation

After aerial triangulation completes, click the camera icon in the upper-right corner to display camera poses.

![](/img/en-img/at2.png)


> [!warning] Verification Checklist:
>- Camera Pose: Verify whether camera position and orientation match the actual acquisition status.
>- Point Cloud: Check whether the point cloud has layering artifacts and is uniform without gaps.


Proceed to Set GCP if aerial triangulation quality is acceptable.

---

### Import GCP

After aerial triangulation finishes, click Set GCP ![](/img/en-img/setgcp.png)

![](/img/en-img/setgcp2.png)


On the GCP panel, click Import GCP ![](/img/en-img/importgcp.png)

Select the GCP file for import. Choose the actual coordinate system and vertical datum for GCP, and specify column headers for "Name, X, Y, Z".


![](/img/en-img/importgcp2.png)

---

### Point Measurement


![](/img/en-img/setgcp3.png)

#### 1. Select GCP

Left-click an ID in the lower GCP list to select a ground control point.

:::tip GCP Types:

- Control Point: Participates in aerial triangulation optimization to control output accuracy.
- Check Point: Does not participate in aerial triangulation optimization; used to validate output accuracy.
- Disabled: This point takes no effect.
:::


#### 2. Select Image

Left-click an image in the right-hand image list to perform point measurement on it.

Images marked with icon ![](/img/en-img/image76.png) in the upper-right corner may contain GCP.

#### 3. Point Measurement Operations

The selected image appears in the central viewport. Use the mouse wheel to zoom in/out, and hold the left mouse button to pan the image.

Locate the GCP on the image and left-click to finish measuring the point.

Switch to other images and repeat point measurement. Measure each GCP on no fewer than 4 images. Images should ideally come from different flight strips / viewpoints and avoid image edges. Around 10 measured images are recommended to ensure sufficient overlap and intersection strength.

If icon ![](/img/en-img/image77.png) predicts the GCP location on the current image, click ![](/img/en-img/accept.png) for quick point measurement.

![](/img/en-img/image79.png)![](/img/en-img/image80.png) switch images, and ![](/img/en-img/image81.png) clears measured points for the current image.

**Other Operations:**
- Export Tie Points Markers: Export current point-measurement data as a JSON file.
- Import Tie Points Markers: Import point-measurement JSON file into the current project.
- Import Control Points: Remove all GCP from the current project.
- Clear Ground Control Points: Delete the selected GCP.

---

### Aerial Triangulation Optimization


![](/img/en-img/posconstraint.png)


Start aerial triangulation optimization once point measurement is finished.

> [!warning] Constrain with Image Geoposition:
Enable this only when POS and GCP share the same coordinate system and vertical datum. When enabled, POS data and GCP jointly participate in aerial triangulation optimization.

After optimization completes, inspect reprojection error as well as X, Y, Z residuals. Proceed to reconstruction when all errors meet project acceptance criteria.

![](/img/en-img/setgcp4.png)