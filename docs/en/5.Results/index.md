# Results

> [!tip] The Results module supports visual inspection, vector overlay, scale and ground-plane calibration, boundary cropping, result export, and report preview & download for all reconstruction outputs, including orthoimagery, DSM, 3D mesh models, point clouds and Gaussian Splatting.


### 📑 Layers
 **[Layers](./Layers.md)**  
-  Manage annotation layers and output layers, toggle visibility, adjust rendering styles, and view dataset camera poses.

---

### 🖥️ Display Controls  
 **[Display Controls](./DisplayControls.md)**  
-  Switch output types, adjust view parameters, configure camera FOV, skybox, collision detection and GS first-person walk navigation.

---

### 🗺️ Overlay  
 **[Overlay](./Overlay.md)**  
-  Import vector files in SHP, DWG, DXF and GeoJSON formats for spatial overlay analysis.

---

### 📐 Calibrate
 **[Calibrate](./Calibrate.md)**  
-  Scale the model to real dimensions and define the ground reference plane. This function is only available for datasets without POS position information.

---

### ✂️ Crop Results
 **[Crop Results](./CropResults.md)**  
-  Draw polygon boundaries to crop reconstruction outputs, remove unwanted areas and retain only the target region to streamline data.

---

### 📤 Export Results
 **[Export Results](./ExportResults.md)**  
-  Supports full-extent export, area-based export and aerial triangulation export. The output coordinate system can be customized, and 3D models can be merged.
-  If any output format was missed during reconstruction, you can use this export function to supplement outputs without re-running reconstruction.
---

### 📂 View Products
 **[View Products](./ViewProducts.md)**  
-  Open the local directory of reconstruction outputs, browse 2D, 3D, Gaussian Splatting, point cloud, AT products, log files and thumbnails.

---

### 📄 View Reports
 **[View Reports](./ViewReports.md)**  
-  Preview and download PDF reconstruction reports and annotation reports, including error statistics, camera calibration, GCP precision and task overview.