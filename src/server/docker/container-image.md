---
title: 'Docker容器镜像操作'
description: 'Docker,docker，容器，服务器，Docker容器镜像操作命令'
date: 2024-04-12 16:40:00
icon: basic-command
star: true
isOriginal: true
category:
  - Docker
tag:
  - Docker
order: 3
---

### 查看本地容器镜像

本地容器镜像一般保存在 **/var/lib/docker** 中

### 搜索 Docker Hub 容器镜像

#### 语法

> docker search [options] TERM

#### options

> --limit：搜索结果最大数量限制

### 根据改变后的容器创建一个新镜像

#### 语法

> docker commit [options] CONTAINER [REPOSITORY[:TAG]]

#### options

> -a，--author string：作者
> -m，--message string：提交信息

### 将镜像打包成 tar 包

#### 语法

> docker save [options] IMAGE [IMAGE...]

#### options

> -o，--output string：文件输出路径

#### 注意事项

若保存使用的是 image id，将不会保存 REPOSITORY 和 TAG 信息

### 将 tar 包导入成镜像

#### 语法

> docker load [options]

#### options

-i，--input string： 导入文件路径
-q，--quiet：不显示导入信息

#### 注意事项

如果在使用 docker save 时，使用的是 image id，那么导出的 tar 包将不会保存 REPOSITORY 和 TAG 信息。在 docker load 之后需要使用 docker tag 命令进行重新设置。

### 将容器打包成 tar 包

#### 语法

> docker export [options] CONTAINER

#### options

> -o，--output string：文件输出路径

### 将使用 docker export 导出的 tar 包还原成镜像

#### 语法

> docker import [options] FILE|URL [REPOSITORY[:TAG]]

#### options

-m, --message string：设置导入信息

### 修改 TAG 信息

#### 语法

> docker tag SOURCE_IMAGE[:TAG] TARHET_IMAGE[:TAG]

#### options

-m, --message string：设置导入信息
