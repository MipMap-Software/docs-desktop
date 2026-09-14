---
title: Data Import
sidebar_position: 2
---

## Data Import

![](/img/en-img/importlas3.png)

---

### Import Single-Station LiDAR Data

Click Import LiDAR Data to open the LiDAR data import dialog box.

![](/img/en-img/importlidar.png)

#### 1. Import Point Cloud

- Import Point Cloud: Select point-cloud files to import into the current task.

- Import Folder: Select a target folder to import all point-cloud files inside it into the current task.

#### 2. Import Images

- Import Images: Select image files to import into the current task.

- Import Folder: Select a target folder to import all images inside it into the current task.

![](/img/en-img/camandpos.png)

#### 3. Edit Cameras

Click Edit Cameras. Select camera parameters for your device model from the database, or import an OPT file.

#### 4. Import POS

Click Import POS File and import the solved camera POS file for this station.

#### 5. Add High-Resolution Supplementary Photos

Skip this step if no supplementary-photos data is available.

If supplementary-photos data is collected, click ![](/img/en-img/addimg.png) to import images or videos from high-resolution supplementary photos for this station.

---

### Import Multi-Station LiDAR Data

After importing all data for one flight session, click Import LiDAR Data again and repeat the import workflow.

![](/img/en-img/importlidar2.png)

Import LiDAR data for all flight sessions sequentially.

---

### Import Aerial Supplementary Photos

After LiDAR data import is finished, click ![](/img/en-img/addimg2.png) to import images or videos from aerial supplementary capture.

![](/img/en-img/importairimg.png)

---

### Import Preset Data

Click ![](/img/en-img/presetdata.png) and select an MPL file for one-click bulk data import.

> [!tip] Use this quick-import function if your device vendor’s processing software supports MPL file export.

---

### Delete Images and Point Clouds

Delete redundant images or point-cloud data that are not required for reconstruction.

#### List-based Deletion

![](/img/en-img/deleteimg3.png)

Click the delete icon on the right side of each data entry to remove items.

#### Box-selection Deletion

![](/img/en-img/deleteimg2.png)

- Click icon ![](/img/en-img/image65.png) to draw a selection polygon on the map preview for photo deletion. Deleted photos will not participate in reconstruction.
- Left-click on the map or click ![](/img/en-img/image66.png) to create new vertices. Double-click the left mouse button to finish drawing. Right-click a vertex to remove it; hold down the left mouse button to drag vertices.

- Click ![](/img/en-img/image67.png) to delete photos inside the drawn area. Click ![](/img/en-img/image68.png) to delete photos outside the drawn area. Click ![](/img/en-img/image69.png) to cancel the current operation.