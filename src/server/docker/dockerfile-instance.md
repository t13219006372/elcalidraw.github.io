---
title: 'Dockerfile实战'
description: 'Docker,docker，容器，服务器，Dockerfile实战'
date: 2024-04-23 10:52:00
icon: dockerfile
cover: https://w.wallhaven.cc/full/d6/wallhaven-d6qj2l.jpg
star: true
isOriginal: true
category:
  - Docker
tag:
  - Docker
order: 6
---

## 将项目代码打包成 docker 镜像

### 目录结构

```bash
  hello-gin
  |-- Dockerfile
  |-- main.go
```

### 项目源代码

`main.go` 代码如下:

```go
    package main

    import (
    	"fmt"
    	"github.com/gin-gonic/gin"
    	"net/http"
    )

    func main() {
    	app := gin.New()
    	app.GET("/", func(context *gin.Context) {
    		fmt.Println("hello gin")
    		context.JSON(http.StatusOK, "hello gin")
    	})

    	if err := app.Run(":8080"); err != nil {
    		panic(err)
    	}
    }

```

### 书写 Dockerfile 文件

```dockerfile
    # 设置基层镜像(golang环境镜像)
    FROM golang:1.16
    # 将main.go 添加到镜像的/app/目录
    ADD main.go /app/
    # 设置工作目录为镜像的/app/目录
    WORKDIR /app/
    # 初始化go mod 并且安装 gin依赖
    RUN go mod init hello-gin && go get -u github.com/gin-gonic/gin@v1.7.7
    # 运行入口文件main.go
    CMD go run main.go
    # 标记容器正在监听8080/tcp端口
    EXPOSE 8080/tcp
```

### 运行`go build`指令构建镜像

```bash
  go build -t hello-gin .
```

其中 `.` 指定构建上下文为当前目录

### 查看生成镜像

```bash
  docker images
  REPOSITORY                      TAG       IMAGE ID       CREATED          SIZE
  hello-gin                        latest    3f94931ad361   20 minutes ago   1GB
```

### 运行容器查看镜像是否制作成功

```bash
  docker run -itd --name hello-gin -p 8080:8080 hello-gin
```

```bash
  docker logs -f hello-gin
  - using env:   export GIN_MODE=release
  - using code:  gin.SetMode(gin.ReleaseMode)

  [GIN-debug] GET    /                         --> main.main.func1 (1 handlers)
  [GIN-debug] [WARNING] You trusted all proxies, this is NOT safe. We recommend you to set a value.
  Please check https://pkg.go.dev/github.com/gin-gonic/gin#readme-don-t-trust-all-proxies for details.
  [GIN-debug] Listening and serving HTTP on :8080
```
访问服务器8080端口，服务器控制台打印 hello gin , 并且会返回 “hello gin”。
