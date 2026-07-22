---
title: 二维成果
sidebar_position: 7
---

## 二维成果

点击图标![](../../img/cn-img/image92.png)，开启二维成果DSM与DOM输出。

![](../../img/cn-img/image91.png)

点击![](../../img/cn-img/image93.png)，可对成果进行自定义操作

- 生成金字塔：开启后，生成影像金字塔，用于快速显示不同尺度的影像。

- 分幅输出：开启后，可输入最大边长（单位为像素数)，DOM将按最大边长进行分幅输出。

- 分辨率：默认为自动。可点击自定义GSD，可输入指定的分辨率。设置过小的GSD时，实际成图的GSD会被限制在固定值。

> [!warning] 注意事项
> - 若导入的照片不包含位置信息，则无法开启二维成果输出。
> - 若导入的照片采集视角不是垂直下视，需同时开启二维、三维成果。通过三维网格模型进行垂直下视投影，生成DSM与DOM。

---

### 成果坐标系

可选择二维成果的坐标系与高程系，可通过关键字搜索。若二维成果为自定义坐标系，则需导入prj文件。

<div style="display:flex;">

<img src="../../img/cn-img/image60.png" style="width:50%;">

<img src="../../img/cn-img/image61.png" style="width:50%;">

</div>
