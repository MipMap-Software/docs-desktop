---
title: Edit Cameras
sidebar_position: 3
---

## Edit Cameras

![](/img/en-img/camera2.png)

The software automatically parses the file structure and metadata of imported photos. Photos are grouped into different cameras according to embedded camera parameters such as focal length, sensor size, intrinsic parameters, and distortion coefficients.

If camera parameters cannot be parsed from photos or the parsed parameters are incorrect, select the correct camera model and fill in focal length, principal point, and distortion parameters.

> [!tip] It is recommended to select camera parameters for your device model from the database.

![](/img/en-img/editcamera2.png)

---

### Fixed Parameters

- Not Fixed: All camera parameters participate in iterative optimization during aerial triangulation.
- Fix Intrinsics: Lock focal length F and principal point Cx/Cy; only distortion parameters are optimized.
- Fix Distortion: Lock all distortion coefficients K1/K2/K3/P1/P2; only basic intrinsic parameters F/Cx/Cy are optimized.
- Fix All: All camera parameters are fully locked and excluded from optimization.

---

### Import OPT File

Import an OPT file containing camera parameters. Camera parameters will be automatically recognized and populated.

---

### Mask Editor

When persistent obstructions such as people, brackets, gimbals, camera bodies or lens hoods appear at identical positions across captured images, you can draw masks. During reconstruction, pixels within red-colored mask areas will be skipped, completely eliminating interference caused by fixed obstructions in modeling.

:::tip Operation Steps
1. Select the brush tool, hold the left mouse button and paint red over the image to fully cover all areas to be masked.

2. Use the eraser tool to remove undesired painted regions.

3. Click Apply Mask after drawing is completed.

:::

![](/img/en-img/mask.png)




**Other Operations**

- Rectangle: Click Rectangle, hold the left mouse button and drag to draw a rectangular mask.
- Circle: Click Circle, hold the left mouse button and drag to draw a circular mask.
- Undo: Revert the latest drawing action; keyboard shortcut `Ctrl+Z`.
- Redo: Restore the state before undo; keyboard shortcut `Ctrl+Y`.
- Clear: Erase all masks drawn on the current image.
- Reference Base Image: Expand the photo list and select an image for mask editing.
- Layer Control: Toggle visibility of base image and mask overlay.
- Import Mask: Import an exported Mask PNG or custom-drawn mask file. Only pure-black pixels with RGB (0,0,0) will be recognized as masked regions.
- Save As: Export the drawn mask as a Mask PNG file for later import.

---

### Get from Database

![](/img/en-img/cameradatabase.png) 

- Pick corresponding camera parameters from the camera list. Selection is unavailable if your camera model is not present in the database.
- Import Camera Database: Import camera data from an exported MCR file.
- Search Camera: Enter camera model keywords to look-up camera parameters.
- Export Database: Export the current database as an MCR file to a specified path.
- Mask Preview: If masks are stored for the selected camera, click Mask Preview to inspect them.

---

### Save to Camera Database

Save the currently-edited camera model, parameters and masks into the local camera database for reuse in future projects.

>[!warning] If you edit a built-in software camera entry, rename it before saving to the camera database.

---

### Merge Cameras

Merge multiple flight sessions captured by the same physical camera with identical parameters. Hold `Shift` and left-click entries in the left-side list to select multiple items for merging.

![](/img/en-img/maregecamera.png)