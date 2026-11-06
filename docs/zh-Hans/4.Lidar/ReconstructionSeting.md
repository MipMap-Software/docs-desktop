---
title: 重建设置
sidebar_position: 6
---

## 重建设置

---

### 重建模版

![](/img/cn-img/激光重建模板.png)

>[!tip]模板功能用于快速复用自定义的重建参数配置，提升重建作业配置效率。

- 点击模板下拉框，可选择自定义模板或者系统内置模板。

- 点击模板右侧![](/img/cn-img/查看模板.png)图标，可查看模板所有参数设置。

- 点击模板右侧![](/img/cn-img/删除模板.png)图标，可删除该模板。

- 点击下方![](/img/cn-img/保存模板.png)，可将当前重建选项保存至自定义模版。

---

### AI遮罩

![](/img/cn-img/AI遮罩.png)

点击 AI 遮罩下拉菜单，选择遮罩类型，以获得更好的重建效果。

- **人物** ：适用于图像中存在人物遮挡的数据，可识别画面中的人物，并消除高斯泼溅模型成果里的人物伪影。
- **水域** ：适用于包含大片水域且位置信息有效的数据，自动识别水面，对点云和纹理模型进行填充与平滑处理。

---

### 重建质量

![](/img/cn-img/重建质量2.png)

<table>
<colgroup>
<col style="width: 10%" />
<col style="width: 30%" />
<col style="width: 30%" />
</colgroup>
<thead>
<tr class="header" style="height:70px;">
<th>重建质量</th>
<th>超高</th>
<th>高</th>
</tr>
</thead>
<tbody>
<tr class="odd" style="height:70px;">
<td>渲染区别</td>
<td>原图渲染</td>
<td><p>原图2倍间隔重采样渲染</p></td>
</tr>
<tr class="even" style="height:80px;">
<td>使用说明</td>
<td>用于重建最高质量成果<br>重建耗时最长</td>
<td>日常通用<br>效果与重建耗时均衡</td>
</tr>
</tbody>
</table>
