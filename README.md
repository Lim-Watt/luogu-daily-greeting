# Luogu daily greeting

自动 Luogu 私信，工作流默认每天早上 5 点自动启动。

## 使用说明

### Fork 本仓库

[Fork](https://github.com/Lim-Watt/luogu-daily-greeting/fork) 本仓库到个人用户下。

### 设置 COOKIE

打开[洛谷](https://www.luogu.com.cn)，右击，选择检查，上方选择应用程序，左侧找到 Cookie，点击下方的 `https://www.luogu.com.cn`，找到 `_uid` 和 `__client_id`，记下来。
![img](https://user-images.githubusercontent.com/99001676/223611417-aba0e538-845e-436e-89b4-fdb4767ceaf7.png)

在 New Action Secret 页面（`https://github.com/<username>/luogu-daily-greeting/settings/secrets/actions/new`），添加一个名为 `COOKIE` 的 Secret，内容为 `__client_id=<your __client_id>;_uid=<your _uid>;`。

### 设置消息对象和内容

在 New Action Secret 页面，添加一个名为 `DATA` 的 Secret，内容为 `"{\"user\":<someone's _uid>,\"content\":\"<消息内容>\"}"`。如 `"{\"user\":1100136,\"content\":\"你好。\"}"`。消息内容中有特殊字符的要转义。

### 启动工作流

在 Action 页（`https://github.com/<username>/luogu-daily-greeting/actions`）点击绿色圆角矩形方框。此时每日 5 点到 6 点左右即会自动发送消息。

![img](https://user-images.githubusercontent.com/99001676/224011586-dd93b1c0-471a-45df-8734-d13c83ae5167.png)

