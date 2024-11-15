# Tauri 开发记录

## 需求清单

- [ ] 交互模式
  - [ ] 顺序抽卡模式
  - [ ] 随机抽卡模式
  - [ ] 动画模式选择
- [ ] 视图要素
  - [ ] 侧边配置菜单栏
    - [ ] 所有可选配置项
  - [ ] 文件列表
    - [ ] 文件列表模式
    - [ ] 文件预览模式
    - [ ] 随机/顺序切换
  - [x] 左/右/随机切换按钮
  - [x] **卡片切换交互**
  - [x] 资源简单排序
  - [ ] 资源根据命名规则拓展排序
  - [-] 顺序模式
  - [ ] 循环模式
  - [ ] 随机模式
  - [ ] 自动播放
  - [x] 分页指示
- [ ] 闪卡资源
  - [x] 选择卡片 & 音频资源目录
  - [ ] 图片 & 音频命名规则
  - [-] 或者按规定资源目录 & 文件命名规则处理资源
- [ ] 优化体验
  - [ ] 初始化引导页
  - [x] 将快捷操作按钮放在底部状态栏
    - [x] 全屏/窗口大小切换按钮/最小化按钮/关闭按钮
    - [x] 设置按钮 => 大! `line-md:cog-loop`
    - [x] 声音按钮 `line-md:volume-high`
    - [x] 随机模式 `line-md:`/顺序模式 `line-md:`/循环模式 `line-md:round-360`/自动播放 `line-md:`
  - [ ] **状态栏按钮快捷操作逻辑**
    - [x] 在空侧添加状态栏布局切换按钮
    - [ ] **优化状态栏样式**
    - [ ] **自动播放逻辑**
  - [ ] 配置菜单栏放在右侧弹出
  - [ ] 缓存状态
  - [ ] 视图美化
  - [ ] 版本升级

**制定完整的时间和练习计划**
大致的时间规划

    <!--
    :freeMode="true"
    :initialSlide="3"
    mySwiper.slideTo(i.getAttribute("data-hash") - 1);
    -->

### 配置项

```
effect: fade / cube / coverflow / flip / cards / creative
```

## Tauri 开发问题

### 问题一: `cargo tauri dev` 报错

错误: `tauri 该版本的 %1 与你运行的 Windows 版本不兼容`
解决方案: [开发环境预先准备](https://tauri.app/zh-cn/v1/guides/getting-started/prerequisites)


### 问题二: `cargo tauri build` 报错

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
