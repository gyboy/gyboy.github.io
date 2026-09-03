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
      zh: "CRC-4 ~ CRC-32 共 22 种预设模型与全参数自定义：Hex / ASCII 输入，实时输出 Hex、二进制与传输字节序列。",
      en: "22 preset CRC models (CRC-4 … CRC-32) with fully custom parameters: Hex / ASCII input, live Hex, binary and wire byte order output."
    },
    tag: { zh: "工具", en: "Tool" },
  },
];
