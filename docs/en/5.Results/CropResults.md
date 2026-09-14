---
title: Crop Results
sidebar_position: 4
---

## Crop Results

After reconstruction completes, you can edit products and crop unwanted portions.



::: warning Usage Notes

- Cropping is not supported for products from visible-light projects reconstructed without POS or local coordinate-system data.

- Cropping modifies output files. Once applied, this change is <strong style="color:#d92121">irreversible</strong>. Proceed with caution or back up your products beforehand.

- Cropping only applies to three formats: dom_tiles, model-b3dm, and model-gs-sog-tile.

- To crop products in other formats, perform cropping first and then export the full extent.

:::


![](/img/en-img/crop.png)

::: tip Operation Steps

1. Select the output format to crop: 2D / 3D / GS.

2. Click Crop to confirm modification.

3. Draw the cropping boundary over the output. Left-click to add vertices; double-click the left mouse button to finish drawing.

4. After drawing, click the confirm icon ![](/img/en-img/confirm.png).

:::

**Other Operations**

- After drawing, you can adjust the boundary polygon. Left-click ![](/img/en-img/add.png) to add vertices, right-click ![](/img/en-img/deletepoint.png) to remove vertices, or hold the left mouse button to drag vertices.

- Click ![](/img/en-img/cancel.png) to abort the cropping operation.