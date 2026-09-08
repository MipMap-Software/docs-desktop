---
title: Quick Reconstruction
sidebar_position: 1
---

## Quick Reconstruction

---

### 1. Data Preparation

Raw LiDAR data must be processed and exported using the manufacturer-supplied point-cloud processing software before use.

::: warning Required Data:

- **Colorized Point Cloud .las File**: The point cloud must contain timestamp fields that match timestamps in POS data.

- **Image Files**: Undistorted exported images or original fisheye images are both acceptable.

- **Camera POS File**: The POS file must include: timestamp, image name, X, Y, Z. Attitude angles (optional).

- **Coordinate System**: LAS point cloud and POS data must share the same coordinate system.
:::

---

### 2. Create New Project

Click New Project ![](/img/en-img/newproject.png), enter the project name, and select **LiDAR** as the task type.

![](/img/en-img/newproject3.png)

---

### 3. Import Data

:::tip Operation Steps:

1. Click Import LiDAR Data to open the import panel.

2. Click Import Point-Cloud Folder and select the folder containing LAS point-cloud files.

3. Click Import Image Folder and select the folder containing image files.

4. Click Edit Cameras and select camera parameters for your device model from the camera database.

5. Click Import POS File and import the solved camera POS file.

:::

![](/img/en-img/importlas.png)

![](/img/en-img/importlas2.png)

---

### 4. Select Products

Select a reconstruction template; or manually enable required 3D products formats and products coordinate system.

![](/img/en-img/3doutputs.png)

---

### 5. Start Reconstruction

Click Start Reconstruction ![](/img/en-img/star.png)