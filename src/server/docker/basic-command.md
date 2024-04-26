---
title: 'Docker基本命令'
description: 'Docker,docker，容器，服务器，Docker基本命令'
date: 2024-04-12 16:02:00
icon: basic-command
star: true
isOriginal: true
category:
  - Docker
tag:
  - Docker
order: 2
---

### 查看本地镜像列表

#### 语法

> docker images [options]

#### options

> -a，--all：查看所有镜像，包括默认隐藏的
> -q, --quite：返回镜像 id, 可以用批量删除镜像

### 查看容器列表

#### 语法

> docker ps [options]

#### options

> -a，--all：查看所有容器（默认只显示运行的容器）
> -n，--last int：查看最新创建的 n 个容器
> -l，--latest：查看最新创建的容器
> -q, --quite：返回容器 id, 可以用于批量停止，删除镜像

### 拉取容器镜像

#### 语法

> docker pull [options] NAME[:TAG|@DIGEST]

#### options

> -a，--all-tags：下载所有版本镜像
> -q，--quite：抑制冗长输出

### 从镜像创建并运行一个新的容器

#### 语法

> docker run [options] image [COMMAND][ARG...]

#### options

> -a, --attach list： 附加到标准输入、标准输出或标准错误
> --cpus int：cpu 数量
> -d，--detach：在后台运行容器，并打印容器 ID
> -i，--interactive：打开便准输入，即使没有附加
> -m，--memory bytes：内存限制
> --name string：设置容器名称
> -p，--publish list：将容器端口映射到主机-p 8080:80
> -q，--quiet：不输出 docker pull 信息
> -t，--tty：分配一个伪终端
> -v，--volume list：绑定挂载卷-v ./usr/local/nginx/conf/:/etc/nginx/conf/
> -m, --memory bytes 设置内存限制。（可以使用 M 为单位）
> --memory-swap bytes: 设置交换内存，默认等于 `--memory`。（可以使用 M 为单位）
> -c, --cpu-shares int: 设置容器cpu使用权重

### 停止运行中的容器

#### 语法

> docker stop [options] CONTAINER [CONTAINER...]

#### options

> -s，--signal string：发送信号到容器
> -t，--time：多少秒之后停止容器运行

### 启动停止中的容器

#### 语法

> docker start [options] CONTAINER [CONTAINER...]

#### options

> -a，--attach：附加便准输出和标准错误信号转发
> -i，--interactive：附加容器标准输入

### 删除退出的容器

#### 语法

> docker rm [options] CONTAINER [CONTAINER...]

#### options

> -f，--force：强制删除正在运行的容器
> -v，--volumes：删除与容器关联的匿名卷

### 返回低级别的 docker 信息

#### 语法

> docker inspect [options] NAME|ID [NAME|ID...]

#### options

> -s，--size：如果是容器则显示总文件的大小

### 在正在运行的容器中执行命令

#### 语法

> docker exec [options] CONTAINER COMMAND [ARG...]

#### options

> -d，--detach：后台模式，在后台运行命令
> -i，--interactive：保持标准输入打开
> -t，--tty：分配一个伪终端

### 删除本地容器镜像

#### 语法

> docker rmi [options] IMAGE [IMAGE...]

#### options

> -f，--force：强制删除

### 删除未使用的容器镜像

#### 语法

> docker image prune [options]

#### options

-f，--force：强制删除
-a，--all：删除所有未使用到的镜像
