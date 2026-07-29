---
title: 重建设置
sidebar_position: 6
---

## 重建设置

---

### 重建模版

![](/img/cn-img/模板.png)

>[!tip]模板功能用于快速复用自定义的重建参数配置，提升重建作业配置效率。

- 点击模板下拉框，可选择自定义模板或者系统内置模板。

- 点击模板右侧![](/img/cn-img/查看模板.png)图标，可查看模板所有参数设置。

- 点击模板右侧![](/img/cn-img/删除模板.png)图标，可删除该模板。

- 点击下方![](/img/cn-img/保存模板.png)，可将当前重建参数保存至自定义模版。

---

### 重建质量

![](/img/cn-img/重建质量.png)



<table>
<colgroup>
<col style="width: 10%" />
<col style="width: 30%" />
<col style="width: 30%" />
<col style="width: 30%" />
</colgroup>
<thead>
<tr class="header" style="height:70px;">
<th>重建质量</th>
<th>超高</th>
<th>高</th>
<th>中</th>
</tr>
</thead>
<tbody>
<tr class="odd" style="height:70px;">
<td>渲染区别</td>
<td>原图渲染</td>
<td><p>原图2倍间隔重采样渲染</p></td>
<td><p>原图4倍间隔重采样渲染</p></td>
</tr>
<tr class="even" style="height:80px;">
<td>使用说明</td>
<td>用于重建最高质量成果<br>重建耗时最长</td>
<td>日常通用<br>效果与重建耗时均衡</td>
<td>用于快速预览成果<br>重建耗时最短</td>
</tr>
</tbody>
</table>

---

### 感兴趣区域/分块

![](/img/cn-img/分块.png)

感兴趣区域指成果重建范围，软件默认为最大化范围输出成果。

若需要指定范围输出成果，可点击![](/img/cn-img/设置ROI.png)进入设置界面。

![](/img/cn-img/image85.png)

#### 设置感兴趣区域

- 智能：自动根据点云范围生成最小范围。

- 最大化：自动生成最大范围。
- 导入KML：将KML格式的范围线导入到当前工程。

- 手动编辑ROI：点击![](/img/cn-img/image86.png)出现ROI所有节点，鼠标左键按住![](/img/cn-img/image87.png)可拖动节点，鼠标右键点击![](/img/cn-img/image87.png)可删除节点，鼠标左键点击![](/img/cn-img/image88.png)可增加节点。
- 高度调节：可输入最小值、最大值调节重建的高度范围。

![](/img/cn-img/image89.png)

#### 设置分块

![](/img/cn-img/image90.png)

- 自动分块：根据当前设备的内存大小自动分块。

- 二维规则分块：不考虑重建区域的高度信息，仅在XY平面按指定的格网坐标系进行规则分块。可按需设置格网大小，分块坐标系，坐标原点，点击应用生效。

- 重建完整块：若分块正好位于ROI的边界，则分块大小会被ROI切割。开启后会严格按照设置的格网大小进行分块输出。

- 分块信息：注意单个块最大使用内存不能超过当前设备的最大可用内存，否则可能会导致重建失败。

- 三维规则分块：考虑重建区域的高度信息，在XYZ三个方向按照指定的格网和坐标系进行规则分块。

- 按内存分块：指定每个分块占用的最大内存进行自适应分块。