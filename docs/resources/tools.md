# 资源分享

> 精选 OpenClaw 相关工具、Skill 插件、配置文件和学习资源 🦞

---

## 🛠️ OpenClaw 官方工具

| 工具名 | 描述 | 链接 |
|--------|------|------|
| **OpenClaw CLI** | 官方命令行工具，管理 Gateway、Agent、Skill | [GitHub](https://github.com/openclaw/openclaw) |
| **SkillHub** | 官方插件市场，一键安装各种 Skill | [官网](https://skillhub.openclaw.io) |
| **Web Console** | 可视化 Web 控制台，零代码配置 Agent | 本地安装后访问 `http://localhost:3030/control` |

---

## 🔌 热门 Skill 推荐

Skill 是 OpenClaw 的插件系统，安装后 Agent 可以获得新能力。

### 官方 Skill

| Skill 名 | 功能 | 安装命令 |
|----------|------|----------|
| `online-search` | 联网搜索，让 Agent 能查最新信息 | `skillhub install online-search` |
| `pdf` | PDF 读写、解析、生成 | `skillhub install pdf` |
| `docx` | Word 文档生成和编辑 | `skillhub install docx` |
| `xlsx` | Excel 表格处理 | `skillhub install xlsx` |
| `openai-whisper` | 语音转文字（支持多语言） | `skillhub install openai-whisper` |
| `tts` | 文字转语音 | `skillhub install tts` |
| `browser` | 浏览器自动化（截图、点击、填表） | `skillhub install browser` |

### 社区热门 Skill

| Skill 名 | 功能 | 来源 |
|----------|------|------|
| **deep-research-pro** | 多源深度研究，自动生成调研报告 | [GitHub](https://github.com/openclaw-community/deep-research-pro) |
| **video-script-gen** | 短视频口播脚本生成 | [GitHub](https://github.com/openclaw-community/video-script-gen) |
| **humanizer-zh** | 去除 AI 生成痕迹，让文本更自然 | [GitHub](https://github.com/openclaw-community/humanizer-zh) |
| **multi-search-engine** | 17 个搜索引擎聚合查询 | [GitHub](https://github.com/openclaw-community/multi-search-engine) |
| **figma** | Figma 设计文件管理和导出 | [GitHub](https://github.com/openclaw-community/figma) |

---

## 🤖 AI Agent 开源项目

除了 OpenClaw，这些开源项目也值得学习：

| 项目 | 描述 | Stars | 链接 |
|------|------|-------|------|
| **AutoGPT** | 最早的自主 AI Agent 之一 | ⭐ 170k+ | [GitHub](https://github.com/Significant-Gravitas/AutoGPT) |
| **LangChain** | LLM 应用开发框架 | ⭐ 100k+ | [GitHub](https://github.com/langchain-ai/langchain) |
| **CrewAI** | 多 Agent 协作框架 | ⭐ 30k+ | [GitHub](https://github.com/joaomdmoura/crewAI) |
| **Dify** | LLM 应用开发平台（可视化） | ⭐ 80k+ | [GitHub](https://github.com/langgenius/dify) |
| **n8n** | 工作流自动化（支持 AI 节点） | ⭐ 60k+ | [GitHub](https://github.com/n8n-io/n8n) |
| **Claude Code** | Anthropic 官方 CLI 工具 | ⭐ 10k+ | [GitHub](https://github.com/anthropics/claude-code) |

---

## 📚 学习资源

### 官方文档

- [OpenClaw 官方文档](https://docs.openclaw.io) - 最权威的使用指南
- [Skill 开发指南](https://docs.openclaw.io/skill-development) - 编写自己的 Skill
- [API 参考](https://docs.openclaw.io/api) - 完整的 API 文档

### 社区教程

| 教程 | 作者 | 难度 |
|------|------|------|
| [OpenClaw 入门到精通](https://github.com/openclaw-community/tutorials) | 社区 | ⭐ 入门 |
| [Skill 开发实战](https://github.com/openclaw-community/skill-dev-guide) | 社区 | ⭐⭐ 进阶 |
| [多 Agent 协作架构](https://github.com/openclaw-community/multi-agent-patterns) | 社区 | ⭐⭐⭐ 高级 |

### 视频教程

- [B站：OpenClaw 系列教程](https://search.bilibili.com/all?keyword=openclaw) - 中文视频教程
- [YouTube: OpenClaw Official](https://www.youtube.com/@openclaw) - 官方英文教程

---

## 🎨 配置文件模板

### 基础配置模板

```json
{
  "gateway": {
    "port": 3030,
    "host": "0.0.0.0"
  },
  "models": [
    {
      "name": "glm-4",
      "provider": "zhipu",
      "apiKey": "your-api-key",
      "model": "glm-4",
      "baseURL": "https://open.bigmodel.cn/api/paas/v4/chat/completions"
    }
  ],
  "defaultModel": "glm-4"
}
```

### 飞书机器人配置模板

```json
{
  "channels": {
    "feishu": {
      "appId": "cli_xxxxxxxxxxxxxxxx",
      "appSecret": "your-app-secret",
      "verificationToken": "your-verification-token",
      "encryptKey": "your-encrypt-key"
    }
  }
}
```

### 多模型配置模板

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
    },
    {
      "name": "claude-3-5",
      "provider": "anthropic",
      "apiKey": "key3",
      "model": "claude-3-5-sonnet-20241022"
    }
  ]
}
```

---

## 📝 实用脚本

### 一键启动脚本（Windows）

```powershell
# start-openclaw.ps1
Write-Host "🦞 启动 OpenClaw..." -ForegroundColor Cyan
openclaw gateway start
Start-Sleep 2
openclaw gateway status
Write-Host "✅ OpenClaw 已启动！访问 http://localhost:3030/control" -ForegroundColor Green
```

### 一键启动脚本（macOS/Linux）

```bash
#!/bin/bash
# start-openclaw.sh
echo "🦞 启动 OpenClaw..."
openclaw gateway start
sleep 2
openclaw gateway status
echo "✅ OpenClaw 已启动！访问 http://localhost:3030/control"
```

### 备份脚本

```bash
#!/bin/bash
# backup-openclaw.sh
BACKUP_DIR="$HOME/openclaw-backups"
DATE=$(date +%Y%m%d_%H%M%S)
mkdir -p "$BACKUP_DIR"
tar -czf "$BACKUP_DIR/openclaw-backup-$DATE.tar.gz" ~/.openclaw/
echo "✅ 备份完成: $BACKUP_DIR/openclaw-backup-$DATE.tar.gz"
```

---

## 🔗 相关链接

- [OpenClaw GitHub](https://github.com/openclaw/openclaw)
- [OpenClaw Discord 社区](https://discord.gg/openclaw)
- [OpenClaw 官方 Twitter](https://twitter.com/openclaw)
- [AMlab 红房子社区](https://github.com/hyde1930/openclaw-guide)

---

## 💡 贡献资源

如果你有好的 Skill、配置模板或教程，欢迎分享！

**提交方式：**
1. 在 [GitHub 仓库](https://github.com/hyde1930/openclaw-guide) 提 Issue
2. 或发邮件到 luhui6556@fckyy.org.cn

---

*最后更新：2026-06-05 | 维护者：陆辉*
