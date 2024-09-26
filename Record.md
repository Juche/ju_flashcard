# Tauri 开发问题记录

## 问题一: `cargo tauri dev` 报错

错误: `tauri 该版本的 %1 与你运行的 Windows 版本不兼容`
解决方案: [开发环境预先准备](https://tauri.app/zh-cn/v1/guides/getting-started/prerequisites)


## 问题二: `cargo tauri build` 报错

错误: `JSX element implicitly has type 'any' because no interface 'JSX.IntrinsicElements' exists`

解决方案: tsconfig.json 添加以下配置

```json
{
  "compilerOptions": {
    "jsx": "preserve",
    "jsxImportSource": "vue"
  }
}
```
