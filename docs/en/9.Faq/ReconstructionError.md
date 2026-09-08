---
title: Reconstruction Errors
sidebar_position: 3
---

## Reconstruction Errors

:::tip Solutions
Reconstruction errors are usually caused by input-data issues, PC runtime environment or configuration problems. When an error occurs, first verify whether imported data is correct, check for interception by antivirus software, and confirm that your PC configuration meets reconstruction requirements.
:::

If none of the above causes apply, click ![](/img/en-img/support.png) Open the ticket submission interface and click ![](/img/en-img/sumbit.png) to automatically package logs and submit the ticket.


![](/img/en-img/currenterror.png)

---

### Photo Reading Error

![](/img/en-img/photoerror.png)

:::tip Solutions

- Check whether image files have been moved and verify that images can be opened normally.

- Special characters (such as superscript symbols) are not supported in image file paths or filenames.

- Reading directly from memory cards is unstable and slow. It is recommended to copy images to a local disk before reconstruction.

- Corrupted source images may trigger image-reading errors.

- Four-band imagery is currently unsupported by the software.
:::

---

### Aerial-Triangulation Registration Failure

![](/img/en-img/aterror.png)

Cause: Insufficient number of images or insufficient overlap, resulting in too few feature points.

:::tip Solutions
Reconstruction requires more than 10 multi-view images. A 70%-80% overlap ratio is recommended.
:::

---

### Insufficient Nadir Images for 2D Output Generation

![](/img/en-img/2derror.png)


Causes:
- Images are not captured in nadir view, while only 2D output is enabled.
- Layered point-cloud generation: insufficient capture overlap.
- Sparse point cloud: Sparse point-cloud results are expected for low-texture areas (water surfaces, solid-color surfaces, smooth reflective surfaces).

:::tip Solutions
Enable both 2D and 3D output generation. Generate DSM and DOM via nadir projection from the 3D mesh model.
:::