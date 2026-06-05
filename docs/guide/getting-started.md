# 养龙虾完全指南

> 从零开始，手把手教你配置自己的 OpenClaw Agent 🦞

---

## 📚 目录

1. [什么是 OpenClaw？](#什么是-openclaw)
2. [安装 OpenClaw](#安装-openclaw)
3. [配置大模型 API](#配置大模型-api)
4. [创建你的第一个 Agent](#创建你的第一个-agent)
5. [配置聊天机器人（飞书/微信）](#配置聊天机器人)
6. [进阶技巧](#进阶技巧)
7. [常见问题](#常见问题)

---

## 什么是 OpenClaw？

**OpenClaw** 是一个开源的 AI Agent 框架，让你能快速搭建自己的智能助手。

### 核心能力

- 🛠️ **工具调用**：Agent 可以执行命令、读写文件、调用 API
- 💬 **多平台接入**：支持飞书、微信、Telegram、Discord 等
- 🧠 **大模型接入**：OpenAI、Claude、GLM、MiniMax 等
- 📝 **技能系统**：通过 Skill 扩展能力（相当于插件）
- 🔄 **工作流**：多 Agent 协作、定时任务、消息路由

### 典型应用场景

| 场景 | 示例 |
|------|------|
| 个人助手 | 每日提醒、邮件摘要、日程管理 |
| 团队协作 | 飞书机器人、自动回复、知识库问答 |
| 开发辅助 | 代码审查、自动部署、监控告警 |
| 内容创作 | 文章生成、翻译、配图 |

---

## 安装 OpenClaw

### 系统要求

| 项目 | 最低配置 | 推荐配置 |
|------|----------|----------|
| 操作系统 | Windows 10 / macOS 12 / Ubuntu 20.04 | Windows 11 / macOS 14 / Ubuntu 22.04 |
| CPU | 2 核 | 4 核+ |
| 内存 | 4GB | 8GB+ |
| 硬盘 | 5GB 可用空间 | 10GB+ |
| Node.js | v18+ | v20+ |
| Python | v3.9+ | v3.11+ |

### Windows 安装步骤

#### 1. 安装依赖环境

**安装 Node.js（v20+）**

1. 访问 https://nodejs.org/
2. 下载 LTS 版本（推荐 v20.x）
3. 运行安装包，勾选 "Automatically install necessary tools"

验证安装：
```powershell
node --version
npm --version
```

**安装 Git**

1. 访问 https://git-scm.com/
2. 下载 Windows 版
3. 安装时选择 "Use Git from the command line and also from 3rd-party software"

验证安装：
```powershell
git --version
```

**安装 Python（可选，部分 Skill 需要）**

1. 访问 https://www.python.org/
2. 下载 Python 3.11+
3. 安装时勾选 "Add Python to PATH"

验证安装：
```powershell
python --version
```

#### 2. 下载 OpenClaw

**方式一：使用 Scoop（推荐）**

```powershell
# 安装 Scoop
Set-ExecutionPolicy RemoteSigned -Scope CurrentUser
irm get.scoop.sh | iex

# 安装 OpenClaw
scoop install openclaw

# 验证安装
openclaw --version
```

**方式二：手动安装**

1. 访问 https://github.com/openclaw/openclaw/releases
2. 下载最新版的 Windows 安装包（`OpenClaw-Setup.exe`）
3. 右键 → 以管理员身份运行
4. 按提示完成安装

#### 3. 初始化配置

```powershell
# 启动 OpenClaw
openclaw gateway start

# 检查状态
openclaw gateway status
```

看到类似输出说明启动成功：
```
✓ Gateway is running
  PID: 12345
  API: http://localhost:3030
  Web UI: `http://localhost:3030/control`
```

#### 4. 访问控制台

打开浏览器，访问：`http://localhost:3030/control`

你会看到 OpenClaw 的 Web 控制台，后面大部分操作都在这里完成。

---

### macOS 安装步骤

#### 1. 安装 Homebrew（如果没有）

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

#### 2. 安装 Node.js 和 Git

```bash
brew install node git
```

#### 3. 安装 OpenClaw

```bash
# 使用 npm 全局安装
npm install -g openclaw

# 或者使用 Homebrew
brew install openclaw/tap/openclaw
```

#### 4. 启动服务

```bash
openclaw gateway start
openclaw gateway status
```

---

### Linux（Ubuntu/Debian）安装步骤

#### 1. 安装依赖

```bash
sudo apt update
sudo apt install -y nodejs npm git python3
```

#### 2. 安装 Node.js v20+（如果 apt 版本太旧）

```bash
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt install -y nodejs
```

#### 3. 安装 OpenClaw

```bash
npm install -g openclaw
```

#### 4. 启动服务

```bash
openclaw gateway start
openclaw gateway status
```

---

## 配置大模型 API

OpenClaw 本身不包含大模型，需要配置外部 API。

### 支持的模型提供商

| 提供商 | 推荐模型 | 获取 API Key |
|--------|----------|--------------|
| OpenAI | GPT-4o, GPT-4 Turbo | https://platform.openai.com/api-keys |
| Anthropic | Claude 3.5 Sonnet | https://console.anthropic.com/ |
| Google | Gemini 1.5 Pro | https://ai.google.dev/ |
| 智谱 GLM | GLM-4 | https://open.bigmodel.cn/ |
| MiniMax | abab6.5s | https://api.minimax.chat/ |
| 自定义 | 任意兼容 OpenAI 接口的服务 | - |

### 配置步骤（以智谱 GLM 为例）

1. **获取 API Key**

   访问 https://open.bigmodel.cn/ → 注册登录 → 进入「访问管理」→ 新建 API Key

2. **在 OpenClaw 中配置**

   打开控制台的 **「设置」→「模型配置」**，填写：

   ```json
   {
     "provider": "zhipu",
     "apiKey": "your-api-key-here",
     "model": "glm-4",
     "baseURL": "https://open.bigmodel.cn/api/paas/v4/chat/completions"
   }
   ```

3. **测试连接**

   在控制台「聊天」页面，输入：
   ```
   你好，请介绍一下你自己
   ```

   如果看到正常回复，说明配置成功 ✅

### 多模型配置（可选）

你可以配置多个模型，不同 Agent 使用不同的模型：

```json
{
  "models": [
    {
      "name": "glm-4",
      "provider": "zhipu",
      "apiKey": "key1",
      "model": "glm-4"
    },
    {
      "name": "gpt-4o",
      "provider": "openai",
      "apiKey": "key2",
      "model": "gpt-4o"
    }
  ]
}
```

---

## 创建你的第一个 Agent

Agent 是 OpenClaw 的核心概念，可以理解为「一个专属的 AI 助手」。

### 方式一：通过 Web 控制台创建（推荐）

1. 打开 `http://localhost:3030/control`
2. 进入 **「Agent」→「新建 Agent」**
3. 填写基本信息：

   | 字段 | 说明 | 示例 |
   |------|------|------|
   | 名称 | Agent 的名字 | `my-first-agent` |
   | 显示名 | 对外展示的名字 | `我的第一个助手` |
   | 模型 | 使用的 LLM | `glm-4` |
   | 系统提示词 | Agent 的性格和职责 | 见下方模板 |

4. **系统提示词模板（复制粘贴即可）**

   ```markdown
   # 角色定义
   你是一个通用 AI 助手，名叫「小爪」。

   ## 能力
   - 回答各类知识性问题
   - 帮助用户写作、翻译、总结
   - 执行简单的工作流任务

   ## 风格
   - 友好、简洁
   - 中文优先
   - 不确定时明确说「不清楚」，不要编造
   ```

5. 点击 **「创建」**，等待几秒即可看到新 Agent

### 方式二：通过命令行创建

```bash
# 创建一个基础 Agent
openclaw agent create my-agent \
  --display-name "我的助手" \
  --model glm-4 \
  --system-prompt "你是一个友好的 AI 助手"

# 查看所有 Agent
openclaw agent list

# 启动 Agent
openclaw agent start my-agent
```

### 测试你的 Agent

在控制台「聊天」页面，选择刚创建的 Agent，发送消息测试：

```
你好！你能帮我做什么？
```

---

## 配置聊天机器人

让你的 Agent 接入飞书、微信等平台，随时随地和他对话。

### 飞书机器人配置

#### 1. 创建飞书应用

1. 访问 https://open.feishu.cn/app ，点击「创建企业自建应用」
2. 填写应用名称（如「我的 OpenClaw 助手」）
3. 进入「凭证与基础信息」，记下 **App ID** 和 **App Secret**

#### 2. 配置机器人能力

在「添加应用能力」中，开启：
- ✅ 机器人
- ✅ 网页
- ✅ 消息与群组

#### 3. 配置事件订阅

在「事件订阅」→「请求网址」中填写：

```
https://your-server-ip:3030/webhook/feishu
```

> **注意**：需要先把 OpenClaw 部署到公网可访问的服务器，或者用内网穿透工具（如 ngrok）

#### 4. 在 OpenClaw 中配置

打开 `config.json`（控制台 → 设置 → 高级 → 编辑配置文件），添加：

```json
{
  "channels": {
    "feishu": {
      "appId": "cli_xxxxxxxxxxxxxxxx",
      "appSecret": "your_app_secret",
      "verificationToken": "your_verification_token",
      "encryptKey": "your_encrypt_key"
    }
  }
}
```

#### 5. 重启 OpenClaw

```bash
openclaw gateway restart
```

#### 6. 测试

在飞书搜索你的应用 → 添加 → 发送消息，看到 Agent 回复说明配置成功 ✅

---

### 微信接入（个人微信，非公众号）

> ⚠️ **风险提示**：使用第三方协议登录微信有封号风险，请谨慎使用。

OpenClaw 支持通过 `wechaty` 接入个人微信：

1. **安装依赖**

   ```bash
   npm install -g wechaty
   ```

2. **配置**

   在 `config.json` 中添加：

   ```json
   {
     "channels": {
       "wechat": {
         "protocol": "wechaty",
         "puppet": "wechaty-puppet-wechat4u"
       }
     }
   }
   ```

3. **启动**

   ```bash
   openclaw gateway restart
   ```

   扫码登录即可。

---

## 进阶技巧

### 1. 安装 Skill（技能包）

Skill 是 OpenClaw 的插件系统，安装后 Agent 可以获得新能力。

**查找 Skill**

访问 OpenClaw Skill 市场（或社区维护的列表），选择你需要的 Skill。

**安装 Skill**

```bash
# 方式一：通过 SkillHub（推荐）
skillhub install <skill-name>

# 方式二：手动安装
openclaw skill install <skill-url-or-path>
```

**常用 Skill 推荐**

| Skill 名称 | 功能 | 安装命令 |
|------------|------|-----------|
| `openai-whisper` | 语音转文字 | `skillhub install openai-whisper` |
| `pdf` | PDF 读写 | `skillhub install pdf` |
| `docx` | Word 文档生成 | `skillhub install docx` |
| `online-search` | 联网搜索 | `skillhub install online-search` |

**为 Agent 启用 Skill**

在控制台 → Agent 设置 → 「已安装技能」中，把需要的 Skill 添加到当前 Agent。

---

### 2. 配置定时任务（Cron）

让 Agent 定期执行任务，比如每日提醒、周报生成等。

**示例：每天早上 9 点发送日报提醒**

在控制台 → 「定时任务」→ 「新建任务」，填写：

```json
{
  "name": "每日日报提醒",
  "schedule": {
    "kind": "cron",
    "expr": "0 9 * * *",
    "tz": "Asia/Shanghai"
  },
  "payload": {
    "kind": "agentTurn",
    "message": "提醒用户：该写今天的工作日报了！"
  },
  "sessionTarget": "isolated"
}
```

---

### 3. 多 Agent 协作

你可以创建多个 Agent，让它们互相调用，完成复杂任务。

**示例：代码审查工作流**

- **Agent A（接收需求）** → 调用 → **Agent B（生成代码）** → 调用 → **Agent C（代码审查）**

配置方法：在一个 Agent 的 Skill 里调用另一个 Agent 的 API。

---

### 4. 自定义 Skill 开发

如果现有 Skill 不能满足需求，可以自己写。

**Skill 基本结构**

```
my-skill/
├── SKILL.md          # Skill 描述和使用说明
├── scripts/          # 可执行脚本
│   └── main.py
└── config.json       # 配置模板
```

**SKILL.md 示例**

```markdown
# My Skill

## 触发条件
当用户提到「查询天气」时触发。

## 使用方法
1. 安装依赖：`pip install requests`
2. 在 Agent 设置中启用本 Skill
3. 发送：「今天北京天气怎么样？」

## 参数配置
- `api_key`：天气 API 的密钥
```

---

## 常见问题

### Q1：安装后 `openclaw` 命令找不到？

**原因**：环境变量未正确配置。

**解决**：
- Windows：重启 PowerShell / 重新打开终端
- macOS/Linux：运行 `source ~/.bashrc` 或 `source ~/.zshrc`

如果还不行，手动把安装路径加到 PATH：
```bash
# 查找 openclaw 安装位置
which openclaw
# 或者
npm root -g
```

---

### Q2：启动时报错 `PORT 3030 ALREADY IN USE`？

**原因**：3030 端口被占用。

**解决**：
```bash
# 查看哪个进程占用了 3030
# Windows:
netstat -ano | findstr :3030

# macOS/Linux:
lsof -i :3030

# 杀掉进程后重新启动
openclaw gateway restart
```

或者修改 OpenClaw 的监听端口（编辑配置文件中的 `gateway.port`）。

---

### Q3：大模型 API 调用报错 `401 Unauthorized`？

**原因**：API Key 错误或者过期。

**解决**：
1. 检查 `config.json` 中的 `apiKey` 是否填写正确（注意前后不要有空格）
2. 去模型提供商控制台，确认 API Key 状态是否正常
3. 如果使用的是代理，检查 `baseURL` 是否填写正确

---

### Q4：Agent 回复很慢 / 超时？

**原因**：网络问题或者模型响应慢。

**解决**：
1. 检查本地网络是否能访问模型 API（用 `curl` 测试）
2. 换成响应更快的模型（如 GLM-4-Flash）
3. 在配置中增加超时时间：
   ```json
   {
     "modelTimeout": 60000
   }
   ```

---

### Q5：如何备份我的配置和数据？

**备份命令**：

```bash
# 备份整个 workspace
openclaw workspace backup

# 或者手动复制
cp -r ~/.openclaw/workspace ~/openclaw-backup/
```

**恢复命令**：

```bash
openclaw workspace restore <backup-file>
```

---

### Q6：飞书机器人收不到消息？

**排查步骤**：

1. 检查事件订阅的 Webhook URL 是否正确（必须公网可访问）
2. 检查 `config.json` 中的 App ID / App Secret 是否正确
3. 在飞书开放平台 → 事件订阅 → 查看「事件发送记录」，确认是否有发送失败
4. 查看 OpenClaw 日志：
   ```bash
   openclaw gateway logs
   ```

---

## 下一步

恭喜！你已经掌握了 OpenClaw 的基本使用 🎉

**推荐阅读**：
- [进阶配置](/guide/advanced) — 深入定制你的 Agent
- [Skill 开发指南](/community/showcase) — 编写自己的 Skill
- [社区案例](/community/showcase) — 看看别人用 OpenClaw 做了什么

**加入社区**：
- GitHub：https://github.com/hyde1930/openclaw-guide
- 微信：AM_Lab红房子人工智能社团
- 邮箱：luhui6556@fckyy.org.cn

---

*文档版本：2026-06-05 | 作者：陆辉 | 反馈：提 Issue 或发邮件*
