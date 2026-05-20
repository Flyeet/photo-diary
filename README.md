# 龚仔的摄影日记

一个基于 Cloudinary 图床的动态相册网站，实时从 Cloudinary 加载相册和照片。

> **📷 致每一位爱记录的摄影小伙伴！**
>
> 本项目完全免费开源，只希望能帮助更多的摄影小伙伴拥有属于自己的摄影小窝。
> 因为热爱摄影的我，所以完成了此初版本，后续有更多idea会进行持续优化。
>
> 你们有好的建议也可以和我进行反馈哈。也欢迎大家进行二次开发创作。
>
> 因为热爱让我们相聚于此！
>
> 希望大家都找到属于自己的25号底片！

👉 [**在线演示**](https://gongting.fun) — 查看完整效果

---

## 功能特性

- 📷 **Cloudinary 图床** — 照片传上 Cloudinary，网站自动加载展示
- 🖼️ **专业图片查看器** — 点击照片全屏浏览，支持键盘 ← →、手机滑动手势
- 📱 **全端适配** — 电脑、平板、手机都能完美显示
- 🌙 **深色主题** — 丝滑动画 + iOS 风格毛玻璃效果
- 🔄 **自动同步** — 增删照片后网站实时更新，无需手动操作
- 🔒 **密钥安全** — API 密钥由 Netlify Functions 保护，不暴露前端
- ⚡ **懒加载 & 骨架屏** — 图片懒加载 + 加载时显示优雅占位动画
- 📑 **分页浏览** — 相册和照片都支持分页，体验流畅
- 🚀 **一键部署** — 点击按钮即可部署到 Netlify，无需写代码
- ✏️ **完全可配置** — 修改 `config.js` 即可自定义站点名称、标语、底部信息
- 🆓 **开源免费** — MIT 协议，自由使用、二次开发

---

## 技术栈介绍

本项目选用了三个免费且强大的工具，让摄影网站搭建变得简单：

### 🏗️ Eleventy（静态网站生成器）

**为什么选它？** 不像 React/Vue 那么重，Eleventy 只生成纯 HTML/CSS/JS 文件，不需要数据库，不需要服务器端渲染。

- 轻量、快速、灵活
- 使用 Nunjucks 模板语法，简单易懂
- 生成的网站可以直接部署到任何静态托管平台

### 🖼️ Cloudinary（图床 + CDN）

**为什么选它？** 免费版提供 25GB 存储空间和 25GB 月流量，对个人摄影网站完全够用。

- 自动图片优化和 CDN 加速，加载速度快
- 支持按文件夹分类，网站自动按文件夹生成相册
- 提供 API 接口，方便网站动态获取照片列表
- 上传照片后自动处理多种尺寸（缩略图、原图等）

### 🚀 Netlify（免费部署平台）

**为什么选它？** 一键部署、自动 HTTPS、全球 CDN，个人项目完全免费。

- 连接 GitHub 仓库，推送代码自动部署
- 免费提供 `*.netlify.app` 域名，也支持绑定自定义域名
- 内置 Serverless Functions，保护 API 密钥不暴露前端
- 每月 100GB 免费流量，个人网站很难用完

---

## 快速开始

### 💻 本地开发与自定义（有基础）

需要你电脑上装了 [Node.js](https://nodejs.org/)（建议 v16+）。

**第一步：克隆项目**

```bash
git clone https://github.com/gongting1023/photography-diary.git
cd photography-diary
```

**第二步：安装依赖**

```bash
npm install
```

**第三步：配置环境变量**

项目根目录有个 `.env.example` 文件，把它复制一份并重命名为 `.env`：

```bash
cp .env.example .env
```

用记事本打开 `.env`，填入你的 Cloudinary 密钥：

```env
CLOUDINARY_CLOUD_NAME=你的云名称
CLOUDINARY_API_KEY=你的API Key
CLOUDINARY_API_SECRET=你的API Secret
```

> 没有 Cloudinary 账号？去 [Cloudinary](https://cloudinary.com) 免费注册一个。

**第四步：自定义网站信息（可选）**

编辑根目录的 `config.js`，把名称、标题、底部信息改成你自己的：

```js
module.exports = {
  siteName: '你的摄影日记',
  siteTitle: '你的标语',
  siteDescription: '你的简介',
  footer: { html: '© 2026 你的名字' }
};
```

**第五步：构建静态文件**

```bash
npm run build
```

> 这一步会生成 `_site/` 目录，本地服务器需要它才能运行。

**第六步：启动开发服务器**

```bash
npm run dev
```

浏览器打开 http://localhost:1023 就能看到效果了。

> ⚠️ **注意**：首次加载相册时可能需要等待 10-30 秒，因为本地服务器需要从 Cloudinary API 拉取所有照片数据。这是正常的，Cloudinary 返回数据后页面会自动显示。

**构建生产版本**

```bash
npm run build
```

构建后的文件会输出到 `_site/` 目录，直接部署到 Netlify 或其他静态托管服务即可。

---

## Cloudinary 配置

1. 注册 [Cloudinary](https://cloudinary.com)
2. 上传照片到对应日期文件夹（如 `2026-01-01`）
3. 网站会自动按文件夹生成相册

---

## 项目结构

```
photography-diary/
├── config.js          # 网站配置（名称、标题、底部信息）
├── index.njk          # 首页模板
├── album.njk          # 相册详情页模板
├── manifest.njk       # PWA 清单（可安装到桌面）
├── _data/site.js      # 读取 config.js 供模板使用
├── netlify/functions/ # API 接口（保护密钥）
├── scripts/           # 本地开发与工具脚本
├── .env               # 环境变量（不上传）
├── .env.example       # 环境变量模板
└── netlify.toml       # Netlify 配置
```

---

## 自定义域名

1. Netlify 后台 → **Domain management** → **Add custom domain**
2. 在域名服务商（如阿里云）配置 DNS，添加 CNAME 记录指向 Netlify

---

## 许可证

MIT License

## 联系方式

- 抖音：[@龚仔仔仔仔](https://v.douyin.com/Hc74k9FgjPY/)
- 小红书：[@龚仔仔仔仔](https://xhslink.com/m/9WzBstwHLKF)
- Email：jogt@foxmail.com
- WeChat：GongzVirAug

---

*用镜头捕捉每一个值得珍藏的瞬间*