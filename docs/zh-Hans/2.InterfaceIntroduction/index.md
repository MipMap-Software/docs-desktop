> [!tip] 软件主界面如下，可点击各功能区域跳转至对应的功能说明。

<div class="hotspot-img">
  <img src="/img/cn-img/主界面.png" alt="主界面介绍" />


 <a class="hotspot"
     style="left:48.6%; top:1.5%; width:31.2%; height:4%;"
     href="./Settings#许可版本"
     data-tip="许可版本"></a>

  <a class="hotspot"
     style="left:80.58%; top:1.4%; width:7.18%; height:4%;"
     href="./Settings#云空间"
     data-tip="云空间"></a>

<a class="hotspot"
   style="left:88.00%; top:1.4%; width:2.83%; height:4%;"
   href="./Settings#设置"
   data-tip="设置"></a>

<a class="hotspot"
   style="left:90.83%; top:1.4%; width:2.83%; height:4%;"
   href="./Settings#帮助中心"
   data-tip="帮助中心"></a>

<a class="hotspot"
   style="left:93.66%; top:1.4%; width:2.83%; height:4%;"
   href="./Settings#任务列表"
   data-tip="任务列表"></a>

<a class="hotspot"
   style="left:96.50%; top:1.4%; width:2.83%; height:4%;"
   href="./Settings#个人中心"
   data-tip="个人中心"></a>


<a class="hotspot"
     style="left:9.08%; top:10.7%; width:20.92%; height:4.25%;"
     href="./ProjectRelated#项目搜索"
     data-tip="项目搜索"></a>

  <a class="hotspot"
     style="left:30.92%; top:10.7%; width:10.83%; height:4.25%;"
     href="./ProjectRelated#项目过滤"
     data-tip="项目过滤"></a>

  <a class="hotspot"
     style="left:47.58%; top:10.7%; width:9.33%; height:4.25%;"
     href="./ProjectRelated#项目排序"
     data-tip="项目排序"></a>

  <a class="hotspot"
     style="left:62.7%; top:10.7%; width:8.7%; height:4.25%;"
     href="./ProjectRelated#项目显示"
     data-tip="项目显示"></a>

  <a class="hotspot"
     style="left:72.58%; top:10.7%; width:4.50%; height:4.25%;"
     href="./ProjectRelated#项目多选"
     data-tip="项目多选"></a>

  <a class="hotspot"
     style="left:77.00%; top:10.7%; width:4.25%; height:4.25%;"
     href="./ProjectRelated#项目导入"
     data-tip="项目导入"></a>

  <a class="hotspot"
     style="left:82.6%; top:10.7%; width:4.3%; height:4.25%;"
     href="./ProjectRelated#刷新项目"
     data-tip="刷新项目"></a>

  <a class="hotspot"
     style="left:88.2%; top:10.7%; width:9.2%; height:4.25%;"
     href="./ProjectRelated#新建项目"
     data-tip="新建项目"></a>

  <a class="hotspot"
    style="left:26.3%; top:42.5%; width:10.5%; height:17%;"
    href="./ProjectRelated#项目选项"
    data-tip="项目选项"></a>

  <a class="hotspot"
    style="left:26.3%; top:59.5%; width:10.5%; height:4%;"
    href="../8.Cloud/ProjectUpload"
    data-tip="上传至云端"></a>

  <a class="hotspot"
    style="left:26.3%; top:63.5%; width:10.5%; height:4%;"
    href="../8.Cloud/ProjectDownload"
    data-tip="下载到本地"></a>

  <a class="hotspot"
    style="left:92.3%; top:86%; width:5.8%; height:8.2%;"
    href="./CloudUpload&Download#传输列表"
    data-tip="传输列表"></a>

<a class="hotspot"
 style="left:3%; top:18%; width:5.4%; height:4%;"
 href="./CloudUpload&Download#端云同步状态说明"
 data-tip="端云同步状态说明"></a>
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