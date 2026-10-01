# 八股台

一个无需服务器的个人面试八股文背诵平台。题库保存在浏览器本地，支持目录和题目的增删改查、拖拽排序、Markdown 答案、熟练度标记以及 JSON 备份。

## 本地运行

```bash
npm install
npm run dev
```

## 构建

```bash
npm run build
npm run preview
```

## 部署到 GitHub Pages

将项目推送到 GitHub 仓库的 `main` 分支，在仓库 Settings > Pages 中将 Source 设为 **GitHub Actions**。之后每次推送都会自动构建并部署。

题库只保存在当前浏览器。换设备前请使用页面右上角的“导出备份”，在新设备中使用“导入”恢复。
