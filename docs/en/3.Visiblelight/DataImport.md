---
title: Data Import
sidebar_position: 2
---

## Data Import

---

### Import Images / Videos

![](/img/en-img/imgimport.png)

**Import Images:**

Select images to import into the current task.

**Import Folder:**

Select a specified folder to import all images inside it into the current task.

**Import Video:**

Select a video file to import into the current task.

![](/img/en-img/video.png)

- Add Video: Select additional video files to add to the frame-extraction list.
- Start & End: Set the start and end time for frame extraction as required.
- Time Interval: Configure the frame-extraction time interval according to camera movement speed during capture. The default value is 1 second. Reduce the interval if extracted frames have insufficient overlap.
- Automatic pose extraction: When enabled, extracted frames will automatically match POS information from the SRT file sharing the same video filename. (SRT refers to DJI drone subtitle files)
- Uniform Interval: After configuration, all videos in the current list will extract frames using the configured time interval.

---

### Delete Photos

> [!tip] Delete redundant photos that are not required for reconstruction.


**List-based Deletion:**

![](/img/en-img/deleteimg.png)

1. Delete photos from the corresponding camera group.

2. Delete all photos in the task.

**Box-selection Deletion:**

![](/img/en-img/deleteimg2.png)

- Click icon ![](/img/en-img/image65.png) to draw a selection polygon on the map preview for photo deletion. Deleted photos will not participate in reconstruction.
- Left-click on the map or click ![](/img/en-img/image66.png) to create new vertices. Double-click the left mouse button to finish drawing. Right-click a vertex to remove it; hold down the left mouse button to drag vertices.

- Click ![](/img/en-img/image67.png) to delete photos inside the drawn area. Click ![](/img/en-img/image68.png) to delete photos outside the drawn area. Click ![](/img/en-img/image69.png) to cancel the current operation.