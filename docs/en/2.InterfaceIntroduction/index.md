> [!tip] The main interface of the software is shown below. Click each functional area to jump to the corresponding function description.

<div class="hotspot-img">
  <img src="/img/en-img/interface.png" alt="主界面介绍" />

<a class="hotspot"
style="left:39.5%; top:1.5%; width:41.2%; height:4%;"
href="./Settings#license-version"
data-tip="License Version"></a>
<a class="hotspot"
style="left:81.2%; top:1.4%; width:6.8%; height:4%;"
href="./Settings#cloud"
data-tip="Cloud"></a>
<a class="hotspot"
style="left:88.00%; top:1.4%; width:2.83%; height:4%;"
href="./Settings#settings-1"
data-tip="Settings"></a>
<a class="hotspot"
style="left:90.83%; top:1.4%; width:2.83%; height:4%;"
href="./Settings#help-center"
data-tip="Help Center"></a>
<a class="hotspot"
style="left:93.66%; top:1.4%; width:2.83%; height:4%;"
href="./Settings#task-list"
data-tip="Task List"></a>
<a class="hotspot"
style="left:96.50%; top:1.4%; width:2.83%; height:4%;"
href="./Settings#personal-center"
data-tip="Personal Center"></a>
<a class="hotspot"
style="left:9.5%; top:10.2%; width:20%; height:4.25%;"
href="./ProjectRelated#project-search"
data-tip="Project Search"></a>
<a class="hotspot"
style="left:30.3%; top:10.2%; width:10.6%; height:4.25%;"
href="./ProjectRelated#project-filter"
data-tip="Project Filter"></a>
<a class="hotspot"
style="left:47%; top:10.2%; width:9.1%; height:4.25%;"
href="./ProjectRelated#project-sorting"
data-tip="Project Sorting"></a>
<a class="hotspot"
style="left:62.4%; top:10.2%; width:8.3%; height:4.25%;"
href="./ProjectRelated#project-display"
data-tip="Project Display"></a>
<a class="hotspot"
style="left:71.8%; top:10.2%; width:4.2%; height:4.25%;"
href="./ProjectRelated#multi-select-for-projects"
data-tip="Multi-select for Projects"></a>
<a class="hotspot"
style="left:75.8%; top:10.2%; width:4.25%; height:4.25%;"
href="./ProjectRelated#import-project"
data-tip="Import Project"></a>
<a class="hotspot"
style="left:81.2%; top:10.2%; width:4.3%; height:4.25%;"
href="./ProjectRelated#refresh-projects"
data-tip="Refresh Projects"></a>
<a class="hotspot"
style="left:86.6%; top:10.2%; width:10.7%; height:4.25%;"
href="./ProjectRelated#new-project"
data-tip="New Project"></a>
<a class="hotspot"
style="left:16.8%; top:40.5%; width:14.2%; height:16%;"
href="./ProjectRelated#project-options"
data-tip="Project Options"></a>
<a class="hotspot"
style="left:16.8%; top:56.4%; width:14.2%; height:4%;"
href="../8.Cloud/ProjectUpload"
data-tip="Upload to Cloud"></a>
<a class="hotspot"
style="left:16.8%; top:60.3%; width:14.2%; height:4%;"
href="../8.Cloud/ProjectDownload"
data-tip="Download to Local"></a>
<a class="hotspot"
style="left:92.5%; top:86%; width:5.8%; height:8.2%;"
href="./CloudUpload&Download#transfer-list"
data-tip="Transfer List"></a>
<a class="hotspot"
style="left:3.2%; top:17%; width:5.2%; height:3.8%;"
href="./CloudUpload&Download#cloud-sync-status-description"
data-tip="Cloud Synchronization Status Description"></a>
</div>

<style>
.hotspot-img { position: relative; display: inline-block; max-width: 100%; }
.hotspot-img img { display: block; width: 100%; height: auto; }
.hotspot {
  position: absolute;
  display: block;
  cursor: pointer;
  border: 2px solid #106feb;
  border-radius: 4px;
  background: rgba(64, 158, 255, 0.06);
  transition: all 0.15s ease;
  text-decoration: none;
}
.hotspot:hover {
  border-color: #409eff;
  border-style: solid;
  background: rgba(64, 158, 255, 0.22);
  box-shadow: 0 0 0 2px rgba(64, 158, 255, 0.25);
}
.hotspot::after {
  content: attr(data-tip);
  position: absolute;
  left: 50%;
  bottom: 100%;
  transform: translate(-50%, -6px);
  background: rgba(0, 0, 0, 0.78);
  color: #fff;
  font-size: 12px;
  line-height: 1;
  padding: 5px 8px;
  border-radius: 4px;
  white-space: nowrap;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.15s ease;
}
.hotspot:hover::after { opacity: 1; }
</style>