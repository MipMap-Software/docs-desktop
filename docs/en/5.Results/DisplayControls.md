---
title: Display Controls
sidebar_position: 2
---

## Display Controls

![](/img/en-img/displaycontrols.png)

![](/img/en-img/map.png): Toggle between street map / satellite map.


![](/img/en-img/at3.png): View aerial-triangulation point-cloud outputs.

![](/img/en-img/2d2.png): View DOM and DSM outputs.

![](/img/en-img/3d2.png): View 3D model and 3D point-cloud outputs.

![](/img/en-img/gs3.png): View Gaussian-Splatting outputs.

![](/img/en-img/cam.png): Quickly capture and save a screenshot of the current output view.

![](/img/en-img/reset.png): Reset to default viewpoint.

![](/img/en-img/zoom.png): Zoom in / zoom out the map.

---

### AT / 3D Output Viewing

![](/img/en-img/image136.png): Show top-down view of the model.

![](/img/en-img/image137.png): Show side view of the model.

![](/img/en-img/capture.png): Capture the current output view as the project thumbnail.

![](/img/en-img/saveview.png): Save the current output view as the default viewpoint. Reset will return to this viewpoint.

---

### GS Output Viewing

![](/img/en-img/gsdisplaycontrols.png)


#### Camera Pose

When photo display is enabled, the solved poses of registered photos are shown on the map.

![](/img/en-img/camsize2.png)

If the blue camera frustums appear too large or too small, hover your mouse over the icon to adjust the camera display size. You may enter a value directly or scroll the mouse wheel to get a suitable view.

#### FOV

Click to show the field-of-view slider; drag the slider to adjust the field of view.

![](/img/en-img/fov2.png)

#### Skybox

![](/img/en-img/image142.png): Click to enable sky-box display.

#### Collision

![](/img/en-img/collision.png): Click the icon to show collision.

#### GS Walk

![](/img/en-img/walk.png): Gaussian Walk for first-person model navigation.

When you click the Walk icon for the first time, collision voxels need to be generated first.

![](/img/en-img/walk2.png)

- **Scene type**: Select a scene type based on the current asset type.

- **Voxel size**: enter an appropriate voxel size.A smaller size delivers finer results but takes longer; use a larger size for large outdoor scenes.

- **Spawn point**: The generation position defaults to the current view. Click the icon ![](/img/en-img/spawnpoint.png) then right-click the mouse to select the starting point.

Click Generate to start the process.

![](/img/en-img/gswalk.png)

- **Height**: Drag the slider to set the eye height above the ground.
- **Show collision**: Toggle for collision visualization. When enabled, collision voxels are displayed to diagnose issues such as clipping through walls, ground penetration and terrain stuck errors.
- **Regenerate**: Rebuild collision voxels and recalculate ground collision bodies for the current scene.
- **Respawn**: Reset the first-person view to the starting viewpoint.
- **Exit walk**: Exit walk mode and return to the standard free camera view. The Esc key is also a shortcut for this operation.

#### Controls

![](/img/en-img/image143.png): Click the icon to show operation instructions.

<table>
<colgroup>
<col style="width: 10%" />
<col style="width: 30%" />
<col style="width: 30%" />
</colgroup>
<thead>
<tr class="header" style="height:50px;">
<th>Operation</th>
<th>Free Camera </th>
<th>GS Walk </th>
</tr>
</thead>
<tbody>
<tr class="odd" style="height:50px;">
<td>W/S/A/D</td>
<td>W: Move forward, S: Move backward, A: Move left, D: Move right</td>
<td>W: Move forward, S: Move backward, A: Move left, D: Move right</td>
</tr>
<tr class="even" style="height:50px;">
<td>Q/E</td>
<td>Up / Down</td>
<td>—</td>
</tr>
<tr class="odd" style="height:50px;">
<td>Ctrl</td>
<td>Slow Down</td>
<td>Slow down walking</td>
</tr>
<tr class="even" style="height:50px;">
<td>Shift</td>
<td>Speed Up</td>
<td>Speed up walking</td>
</tr>
<tr class="odd" style="height:50px;">
<td>Space</td>
<td>—</td>
<td>Jump</td>
</tr>
<tr class="even" style="height:50px;">
<td>Single-click the left mouse button</td>
<td>Look toward target / Fly to target (depends on click mode)</td>
<td>Walk to the clicked position</td>
</tr>
<tr class="odd" style="height:50px;">
<td>Double-click the left mouse button</td>
<td>Toggle click mode (Look / Fly)</td>
<td>—</td>
</tr>
<tr class="even" style="height:50px;">
<td>Mouse drag</td>
<td>Drag to view</td>
<td>Drag to look around</td>
</tr>
<tr class="odd" style="height:50px;">
<td>Right mouse drag</td>
<td>Rotate View</td>
<td>—</td>
</tr>
<tr class="even" style="height:50px;">
<td>Mouse wheel</td>
<td>Zoom / Pan</td>
<td>—</td>
</tr>
<tr class="odd" style="height:50px;">
<td>Esc</td>
<td>—</td>
<td>Exit walk mode</td>
</tr>
</tbody>
</table>
