---
title: View Reports
sidebar_position: 7
---

## View Reports



![](/img/en-img/viewreports.png)

Click View Reports to access the reconstruction report and annotation report for the current task.

Switch reports via the top-left selector. Click ![](/img/cn-img/image151.png) in the top-right corner to download the report in PDF format.

---

### Reconstruction Report

#### Task Overview

Records task name, task type, data acquisition time, number of images, task start-end time, total elapsed time, aerial-triangulation elapsed time and reconstruction elapsed time.

Attached figure: task thumbnail.

![](/img/en-img/report.png)

#### Survey Area Overview & Coverage

Records number of images, flight altitude, number of tie points, ground sampling distance, survey area extent, and reprojection error.

:::tip Reprojection Error
- Smaller reprojection error indicates more accurate camera poses and better aerial-triangulation precision as well as output quality.

- Typical value is around 1 pixel. Values greater than 2 pixel suggest checking for mistakes during data import.
:::

Attached figure: thumbnail of overlap-coverage distribution map

![](/img/en-img/report2.png)

#### Camera Calibration

Records camera count, total image count, registered images, unregistered images, registration rate, and calibration data table of distortion parameters for each camera.

:::tip Unregistered Images
- Images for which camera poses cannot be solved during aerial triangulation.

- A large number of unregistered images lowers the registration rate and may cause gaps in final outputs.
:::

Attached figure: camera residual distribution map

![](/img/en-img/report3.png)

#### Image Positions

Records the root-mean-square error between image positions solved by aerial triangulation and original positions provided by POS files.

:::tip Image Position Error
This error only reflects the deviation between triangulated image positions and POS-derived positions, and does not represent absolute real-world accuracy.
:::

Attached figure: image-position error distribution map

![](/img/en-img/report4.png)

#### Ground Control Point Accuracy

Error table for control points and check points; aggregated values are root-mean-square errors.

:::tip Ground Control Point Accuracy
- Control points are used for absolute orientation in aerial triangulation; smaller errors mean higher precision.

- Check points are used to validate aerial-triangulation precision; smaller errors mean higher precision.
:::

![](/img/en-img/report5.png)

#### Reconstruction Quality Report

Operating Environment: Records hardware specifications including CPU, GPU, memory; software version and SDK version.

Reconstruction Parameters: Records reconstruction quality, tile count, coordinate systems for 2D and 3D outputs, and types of exported outputs.

Attached figure: DSM Digital Surface Model

![](/img/en-img/report6.png)

---

### Annotation Report

#### Task Overview

Records task name, task type, data acquisition time, and reconstruction completion time.

Attached figure: task thumbnail.

![](/img/en-img/report7.png)

#### Annotation List & Annotation Details

The annotation list is a summary table of all annotations. Annotation Details breaks down full information for each annotation with corresponding thumbnails on the right panel.

![](/img/en-img/report8.png)