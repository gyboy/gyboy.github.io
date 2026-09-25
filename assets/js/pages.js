/* ============================================================
 * 站点目录数据 —— 首页的目录卡片由此数组自动渲染
 *
 * 添加新页面只需在 SITE_PAGES 中加一条记录：
 *   path  : 相对站点根目录的路径（指向该文件夹中的 index.html）
 *   icon  : 卡片上的 emoji 图标
 *   title : 页面名称 —— { zh: '中文', en: 'English' } 双语对象
 *   desc  : 一句话简介 —— 同样为 { zh, en } 双语对象
 *   tag   : 分类标签 —— { zh: '工具', en: 'Tool' }
 *
 * 详细步骤见仓库根目录 MAINTENANCE.md
 * ============================================================ */

var SITE_PAGES = [
  {
    path: "tools/pi-attenuator/",
    icon: "📡",
    title: { zh: "π/T 型衰减器计算器", en: "π/T Attenuator Calculator" },
    desc: {
      zh: "设计或分析 π 型 / T 型电阻衰减网络：由阻抗与衰减量计算电阻，或由三个电阻反算阻抗与衰减量，电路拓扑图实时标注数值。",
      en: "Design or analyze π / T resistive attenuators: resistors from impedance & attenuation, or the reverse — with a live annotated schematic."
    },
    tag: { zh: "工具", en: "Tool" },
  },
  {
    path: "tools/rf-power-voltage/",
    icon: "⚡",
    title: { zh: "RF 功率·电压换算", en: "RF Power ↔ Voltage" },
    desc: {
      zh: "正弦波 / 方波下 RF 功率与电压双向换算：W、dBm 与峰峰值、有效值、峰值、平均值，波形图实时标注电平。",
      en: "Two-way conversion between RF power (W, dBm) and peak-peak, RMS, peak and mean voltages for sine and square waves."
    },
    tag: { zh: "工具", en: "Tool" },
  },
  {
    path: "tools/crc/",
    icon: "🧮",
    title: { zh: "CRC 校验计算器", en: "CRC Calculator" },
    desc: {
      zh: "移植桌面版 CRC 计算器：99 种预设（CRC-3 ~ CRC-64）与全参数自定义，HEX / TEXT 双输入（Reverse Word / Data、GBK），输出 HEX / DEC / OCT / BIN 与位显示。",
      en: "Desktop CRC calculator ported to web: 99 presets (CRC-3 … CRC-64) with custom parameters, HEX / TEXT input (Reverse Word / Data, GBK), HEX / DEC / OCT / BIN results and bit view."
    },
    tag: { zh: "工具", en: "Tool" },
  },
  {
    path: "tools/phase-noise/",
    icon: "📉",
    title: { zh: "相位噪声分析", en: "Phase Noise Analysis" },
    desc: {
      zh: "导入频谱仪 CSV 相位噪声数据：多曲线对比、积分相位噪声与 RMS 抖动、Marker 与 Delta 测量、统计与导出。",
      en: "Analyze CSV phase-noise traces: multi-trace comparison, integrated PN & RMS jitter, markers with delta, statistics and export."
    },
    tag: { zh: "工具", en: "Tool" },
  },
  {
    path: "tools/voltage-divider/",
    icon: "🔻",
    title: { zh: "分压电阻计算器", en: "Voltage Divider Calculator" },
    desc: {
      zh: "DC-DC 反馈分压设计：由 V_REF 与目标 V_out 推荐最优 E96/E24 分压电阻组合，含实际输出误差与分压电流。",
      en: "DC-DC feedback divider: pick the best E96/E24 resistor pairs from V_REF and target V_out, with output error and divider current."
    },
    tag: { zh: "工具", en: "Tool" },
  },
];
