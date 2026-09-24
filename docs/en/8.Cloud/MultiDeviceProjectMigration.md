---
title: Multi-device Project Migration
sidebar_position: 4
---

## Multi-device Project Migration

> [!tip] Two cross-device migration methods are supported:
Cloud upload & download, and local export & import, enabling full project migration between different devices.

---

### Cloud Project Upload and Download

Online migration, **network required**. Projects are migrated via cloud storage. Refer to [**Upload to Cloud**](./ProjectUpload) and [**Download to Local**](./ProjectDownload) for procedures.

> [!tip] Steps:
>1. **Upload the project to cloud** on Device A.
>2. Log in with the **same account** on Device B, then **download the cloud project to local**.

![](/img/en-img/uploadtocloud.png)

![](/img/en-img/downloadtolocal.png)

>[!warning] If your network speed is slow, local export and import is recommended.

---

### Local Project Export and Import

Network-independent. Works with or without internet. Cross-device migration is achieved by copying the `.mprj` project package file.

> [!tip] Steps:
>1. On Device A, click **Export Project** in the project menu to generate the `.mprj` project package.
>2. Copy the exported `.mprj` project package to the local disk of Device B.
>3. On Device B, click **Import Project** on the main interface and select the `.mprj` package to finish import.

![](/img/en-img/exportmprj.png)

![](/img/en-img/importmprj.png)

>[!warning] Do not import the project package directly from USB flash drives or external hard drives. Copy the file to your local hard drive before import.