/* ============================================================
 * 全站多语言（中文 / English）
 * ------------------------------------------------------------
 * - 语言保存在 localStorage（键名 gyboy-lang），首次访问跟随浏览器语言
 * - 静态文本：元素加 data-i18n="key"（纯文本）或
 *   data-i18n-html="key"（富文本，用于含 <code>/<sub>/<a> 的内容），
 *   按钮悬浮提示用 data-i18n-title="key"
 * - 浏览器标签页标题：<body data-i18n-doc="key">
 * - 页面动态文本：脚本里用 I18N.lang() 取语言、I18N.t(key) 取词条，
 *   并监听 'langchange' 事件重新渲染动态部分
 * - 切换按钮：#lang-toggle（文案 EN / 中），置于主题按钮旁
 * ============================================================ */

window.I18N_DICT = {
  /* ---------- 顶栏 / 页脚（全站通用） ---------- */
  'nav.back':      { zh: '← 返回首页', en: '← Back to Home' },
  'nav.theme':     { zh: '切换明暗主题', en: 'Toggle dark / light theme' },
  'nav.lang2en':   { zh: '切换到英文', en: 'Switch to English' },
  'nav.lang2zh':   { zh: '切换到中文', en: 'Switch to Chinese' },
  'footer.hosted': {
    zh: '由 <a href="https://pages.github.com/" target="_blank" rel="noopener">GitHub Pages</a> 托管',
    en: 'Hosted by <a href="https://pages.github.com/" target="_blank" rel="noopener">GitHub Pages</a>'
  },
  'footer.back':   { zh: '返回目录', en: 'Back to Catalog' },

  /* ---------- 首页 ---------- */
  'home.doc':        { zh: 'Gyboy 的小站 · 目录', en: "Gyboy's Site · Catalog" },
  'home.hero.title': { zh: '你好，这里是 Gyboy 👋', en: 'Hi, this is Gyboy 👋' },
  'home.hero.sub':   { zh: '我的个人目录站 —— 收录做过的各类小工具与页面，持续更新中。',
                       en: 'My personal catalog — a growing collection of small tools and pages.' },
  'home.section':    { zh: '目录', en: 'Catalog' },
  'home.empty':      { zh: '暂无页面 —— 在 /assets/js/pages.js 中添加一条记录即可。',
                       en: 'No pages yet — add an entry in /assets/js/pages.js.' },
  'home.cardGo':     { zh: '进入页面 →', en: 'Open →' },

  /* ---------- 404 ---------- */
  'e404.doc':  { zh: '404 · 页面不存在 · Gyboy 的小站', en: "404 · Not Found · Gyboy's Site" },
  'e404.title': { zh: '404 · 页面不存在', en: '404 · Page Not Found' },
  'e404.desc':  { zh: '你要找的页面可能被移动或删除了。', en: 'The page you are looking for may have been moved or deleted.' },
  'e404.go':    { zh: '← 返回首页', en: '← Back to Home' },

  /* ---------- 面板通用 ---------- */
  'panel.settings': { zh: '参数设置', en: 'Settings' },
  'panel.results':  { zh: '计算结果', en: 'Results' },
  'legend.known':   { zh: '输入值', en: 'Input' },
  'legend.comp':    { zh: '计算值', en: 'Computed' },
  'formula.summary':{ zh: '计算公式与说明', en: 'Formulas & notes' },
  'tips.title':     { zh: '小提示', en: 'Tips' },

  /* ---------- π / T 型衰减器计算器 ---------- */
  'att.doc':        { zh: 'π/T 型衰减器计算器 · Gyboy 的小站', en: "π/T Attenuator Calculator · Gyboy's Site" },
  'att.h1':         { zh: 'π / T 型衰减器计算器', en: 'π / T Attenuator Calculator' },
  'att.subtitle':   { zh: 'Attenuator Calculator —— π 型 / T 型电阻衰减网络的设计与反算：输入特性阻抗与衰减量计算电阻，或输入三个电阻反推端口阻抗与衰减量。电路拓扑图实时标注各位置数值。',
                      en: 'Attenuator Calculator — design or analyze π / T resistive networks: compute resistors from impedance and attenuation, or back out impedance and attenuation from three resistors. The schematic annotates every value in real time.' },
  'att.topoType':   { zh: '拓扑类型', en: 'Topology' },
  'att.topoPi':     { zh: 'π 型（Pi）', en: 'π (Pi)' },
  'att.topoT':      { zh: 'T 型（Tee）', en: 'T (Tee)' },
  'att.modeType':   { zh: '计算模式', en: 'Mode' },
  'att.modeDesign': { zh: '设计模式', en: 'Design' },
  'att.modeReverse':{ zh: '反算模式', en: 'Reverse' },
  'att.attn':       { zh: '衰减量 A', en: 'Attenuation A' },
  'att.unitDb':     { zh: '（dB）', en: ' (dB)' },
  'att.z0':         { zh: '特性阻抗 Z₀', en: 'Impedance Z₀' },
  'att.unitOhm':    { zh: '（Ω）', en: ' (Ω)' },
  'att.pinLabel':   { zh: '输入功率 P<sub>in</sub>', en: 'Input power P<sub>in</sub>' },
  'att.pinHint':    { zh: '（W，用于估算各电阻功耗）', en: ' (W, for dissipation estimates)' },
  'att.schemTitle': { zh: '电路拓扑', en: 'Schematic' },
  'att.svg.in':     { zh: '输入', en: 'Input' },
  'att.svg.out':    { zh: '输出', en: 'Output' },
  'att.svg.series1':{ zh: 'R₁ · 串联', en: 'R₁ · series' },
  'att.svg.series2':{ zh: 'R₂ · 串联', en: 'R₂ · series' },
  'att.svg.series3':{ zh: 'R₃ · 串联', en: 'R₃ · series' },
  'att.powerSub':   { zh: '功率换算', en: 'Power conversions' },
  'att.f1': { zh: '设计模式（对称网络，电压比 <code>a = 10^(A/20)</code>，A 为衰减量 dB）：',
              en: 'Design mode (symmetric network, voltage ratio <code>a = 10^(A/20)</code>, A in dB):' },
  'att.f2': { zh: 'π 型：<code>R₁ = R₃ = Z₀·(a+1)/(a−1)</code>（两端并联），<code>R₂ = Z₀·(a²−1)/(2a)</code>（串联）',
              en: 'π: <code>R₁ = R₃ = Z₀·(a+1)/(a−1)</code> (end shunts), <code>R₂ = Z₀·(a²−1)/(2a)</code> (series)' },
  'att.f3': { zh: 'T 型：<code>R₁ = R₃ = Z₀·(a−1)/(a+1)</code>（两端串联），<code>R₂ = 2Z₀·a/(a²−1)</code>（并联）',
              en: 'T: <code>R₁ = R₃ = Z₀·(a−1)/(a+1)</code> (end series arms), <code>R₂ = 2Z₀·a/(a²−1)</code> (shunt)' },
  'att.f4': { zh: '反算模式（ABCD 矩阵法，支持非对称网络）：', en: 'Reverse mode (ABCD matrix method, asymmetric networks supported):' },
  'att.f5': { zh: 'π 型：<code>A = 1+R₂/R₃，B = R₂，C = 1/R₁+1/R₃+R₂/(R₁R₃)，D = 1+R₂/R₁</code>',
              en: 'π: <code>A = 1+R₂/R₃, B = R₂, C = 1/R₁+1/R₃+R₂/(R₁R₃), D = 1+R₂/R₁</code>' },
  'att.f6': { zh: 'T 型：<code>A = 1+R₁/R₂，B = R₁+R₃+R₁R₃/R₂，C = 1/R₂，D = 1+R₃/R₂</code>',
              en: 'T: <code>A = 1+R₁/R₂, B = R₁+R₃+R₁R₃/R₂, C = 1/R₂, D = 1+R₃/R₂</code>' },
  'att.f7': { zh: '<code>Z_in = √(AB/CD)</code>，<code>Z_out = √(DB/AC)</code>，<code>衰减 = 20·lg(√(AD)+√(BC))</code>',
              en: '<code>Z_in = √(AB/CD)</code>, <code>Z_out = √(DB/AC)</code>, <code>loss = 20·lg(√(AD)+√(BC))</code>' },
  'att.f8': { zh: '网络不对称时 Z_in 与 Z_out 不相等，衰减按两端影像阻抗匹配端接定义；对称时两者同为 Z₀。',
              en: 'For asymmetric networks Z_in ≠ Z_out, and attenuation is defined with image-matched terminations; symmetric networks give Z_in = Z_out = Z₀.' },
  'att.f9': { zh: '功耗估算：以源内阻 Z_in、负载 Z_out 端接（影像匹配），节点电压法解出各电阻的电压电流，再按输入功率 P<sub>in</sub> 缩放。',
              en: 'Dissipation: terminated by Z_in source and Z_out load (image-matched), solved by node-voltage analysis and scaled to the input power P<sub>in</sub>.' },
  'att.f10':{ zh: '标称值取与计算值最接近的 E24（±5%）与 E96（±1%）系列电阻。',
              en: 'The nearest E24 (±5%) and E96 (±1%) standard values are listed below each result.' },
  'att.t1': { zh: 'π 型与 T 型互为对偶：衰减量较小时 π 型的并联臂阻值极大、T 型的串联臂阻值极小，可按手头现成的阻值选择更容易实现的拓扑。',
              en: 'π and T are duals: at low attenuation the π shunt arms become very large while the T series arms become very small — pick whichever matches resistors you have.' },
  'att.t2': { zh: '衰减量大时约八成的功率消耗在 R₁ 上，选型时重点关注它的额定功率。',
              en: 'At high attenuation about 80% of the power burns in R₁ — pay close attention to its power rating.' },
  'att.t3': { zh: '反算模式下若三个电阻不对称，两端的影像阻抗不相等，衰减按影像匹配端接定义。',
              en: 'In reverse mode, asymmetric resistor sets give unequal image impedances; attenuation assumes image-matched terminations.' },
  'att.t4': { zh: '射频场景建议使用 1% 精度金属膜电阻，并尽量选小封装以降低寄生电感。',
              en: 'For RF work prefer 1% metal-film resistors in small packages to reduce parasitic inductance.' },

  /* ---------- RF 功率 · 电压换算 ---------- */
  'rf.doc':      { zh: 'RF 功率·电压换算 · Gyboy 的小站', en: "RF Power ↔ Voltage · Gyboy's Site" },
  'rf.h1':       { zh: 'RF 功率 · 电压换算', en: 'RF Power ↔ Voltage Converter' },
  'rf.subtitle': { zh: 'RF Power Converter —— 在正弦波与方波（双极性）下进行功率与电压的双向换算：W / dBm 与峰峰值、有效值、峰值、整流平均值互算，波形图实时标注电平。',
                   en: 'RF Power Converter — two-way conversion between power (W / dBm) and peak-peak, RMS, peak and rectified-mean voltages for sine and bipolar square waves, with a live annotated waveform.' },
  'rf.waveType': { zh: '波形', en: 'Waveform' },
  'rf.sine':     { zh: '正弦波', en: 'Sine' },
  'rf.square':   { zh: '方波', en: 'Square' },
  'rf.modeType': { zh: '计算模式', en: 'Mode' },
  'rf.modePV':   { zh: '功率 → 电压', en: 'Power → Voltage' },
  'rf.modeVP':   { zh: '电压 → 功率', en: 'Voltage → Power' },
  'rf.pLabel':   { zh: '功率 P', en: 'Power P' },
  'rf.vLabel':   { zh: '电压 V', en: 'Voltage V' },
  'rf.z0':       { zh: '阻抗 Z₀', en: 'Impedance Z₀' },
  'rf.waveTitle':{ zh: '波形图', en: 'Waveform' },
  'rf.powerSub': { zh: '功率 / 分贝换算', en: 'Power & dB forms' },
  'rf.f1': { zh: '正弦波：Vₚ = Vpp/2，<code>Vrms = Vₚ/√2</code>，<code>Vavg = 2Vₚ/π</code>（全波整流平均值）',
             en: 'Sine: Vₚ = Vpp/2, <code>Vrms = Vₚ/√2</code>, <code>Vavg = 2Vₚ/π</code> (full-wave rectified mean)' },
  'rf.f2': { zh: '方波（双极性 ±Vₚ、占空比 50%）：Vₚ = Vpp/2，<code>Vrms = Vavg = Vₚ</code>',
             en: 'Square (bipolar ±Vₚ, 50% duty): Vₚ = Vpp/2, <code>Vrms = Vavg = Vₚ</code>' },
  'rf.f3': { zh: '平均功率：<code>P = Vrms²/Z₀</code>；<code>dBm = 10·lg(P/1mW)</code>，<code>dBW = 10·lg(P/1W)</code>',
             en: 'Mean power: <code>P = Vrms²/Z₀</code>; <code>dBm = 10·lg(P/1mW)</code>, <code>dBW = 10·lg(P/1W)</code>' },
  'rf.f4': { zh: '电压分贝：<code>dBV = 20·lg(Vrms/1V)</code>，<code>dBµV = 20·lg(Vrms/1µV)</code>',
             en: 'Voltage dB: <code>dBV = 20·lg(Vrms/1V)</code>, <code>dBµV = 20·lg(Vrms/1µV)</code>' },
  'rf.f5': { zh: '反算：按波形关系将输入电压还原为 Vrms（如正弦 Vrms = Vpp/(2√2)），再由 P = Vrms²/Z₀ 求功率。',
             en: 'Reverse: convert the entered voltage to Vrms via the waveform relations (e.g. sine Vrms = Vpp/(2√2)), then P = Vrms²/Z₀.' },
  'rf.f6': { zh: '速查：50 Ω 系统中 0 dBm ≈ 223.6 mVrms ≈ 632.5 mVpp（正弦）。',
             en: 'Handy: in a 50 Ω system, 0 dBm ≈ 223.6 mVrms ≈ 632.5 mVpp (sine).' },
  'rf.t1': { zh: '功率计与频谱仪读数通常是 dBm；示波器读到的是电压，需已知阻抗与波形才能换算成功率。',
             en: 'Power meters and spectrum analyzers read dBm; oscilloscopes read voltage — impedance and waveform are needed to convert to power.' },
  'rf.t2': { zh: '相同峰峰值时，双极性方波的有效值是正弦波的 √2 倍，功率大 3.01 dB。',
             en: 'At equal Vpp, a bipolar square wave has √2 times the RMS of a sine — 3.01 dB more power.' },
  'rf.t3': { zh: '示波器高阻探头（1 MΩ）下不能套用 50 Ω 公式，请把 Z₀ 改为实际等效阻抗。',
             en: "Don't apply 50 Ω formulas to high-impedance scope probes (1 MΩ) — set Z₀ to the actual equivalent impedance." },

  /* ---------- CRC 计算工具 ---------- */
  'crc.doc':      { zh: 'CRC 计算工具 · Gyboy 的小站', en: "CRC Calculator · Gyboy's Site" },
  'crc.h1':       { zh: 'CRC 校验计算器', en: 'CRC Calculator' },
  'crc.subtitle': { zh: 'CRC Calculator —— 支持 CRC-4 ~ CRC-32 共 22 种常用预设模型与全参数自定义：输入 Hex 或 ASCII 数据，实时计算校验值（Hex / Bin / 传输字节序列）。',
                    en: 'CRC Calculator — 22 common preset models (CRC-4 … CRC-32) plus fully custom parameters; enter Hex or ASCII data and get the checksum in Hex, Bin and wire byte order in real time.' },
  'crc.inputMode':{ zh: '输入格式', en: 'Input format' },
  'crc.hex':      { zh: '十六进制', en: 'Hex' },
  'crc.ascii':    { zh: 'ASCII 文本', en: 'ASCII text' },
  'crc.dataLabel':{ zh: '输入数据', en: 'Data' },
  'crc.hexHint':  { zh: '（十六进制字节，可用空格 / 逗号 / 换行分隔，也可连续书写，例：31 32 33 34）',
                    en: ' (hex bytes, separated by spaces / commas / newlines or written contiguously, e.g. 31 32 33 34)' },
  'crc.asciiHint':{ zh: '（按字符逐字节计算，例：123456789）', en: ' (one byte per character, e.g. 123456789)' },
  'crc.model':    { zh: '算法模型', en: 'Model' },
  'crc.custom':   { zh: '自定义', en: 'Custom' },
  'crc.customGrp':{ zh: '模型参数（选预设时只读，选择"自定义"后可编辑）', en: 'Model parameters (read-only for presets; editable in Custom mode)' },
  'crc.width':    { zh: '宽度 WIDTH', en: 'Width WIDTH' },
  'crc.poly':     { zh: '多项式 POLY', en: 'Polynomial POLY' },
  'crc.init':     { zh: '初始值 INIT', en: 'Initial value INIT' },
  'crc.xorout':   { zh: '结果异或 XOROUT', en: 'XOR-out XOROUT' },
  'crc.refin':    { zh: '输入反转 REFIN', en: 'Reflect-in REFIN' },
  'crc.refout':   { zh: '输出反转 REFOUT', en: 'Reflect-out REFOUT' },
  'crc.result':   { zh: '校验结果', en: 'Checksum' },
  'crc.bin':      { zh: '二进制', en: 'Binary' },
  'crc.wire':     { zh: '传输字节序列（低位在前）', en: 'Wire byte order (LSB first)' },
  'crc.wireNote': { zh: '高位在左、低位在右；实际发送时请注意高低位字节顺序。',
                    en: 'MSB on the left, LSB on the right; double-check the byte order when transmitting.' },
  'crc.bytes':    { zh: '输入字节数', en: 'Input bytes' },
  'crc.modelIntro':{ zh: '当前模型参数', en: 'Current model parameters' },
  'crc.hexUpper': { zh: '校验值（大写 Hex）', en: 'Checksum (uppercase Hex)' },
  'crc.err.hex':  { zh: '十六进制输入无效：请检查是否包含非十六进制字符，或奇数个连续字符。',
                    en: 'Invalid hex input: check for non-hex characters or an odd number of contiguous digits.' },
  'crc.err.empty':{ zh: '请输入待计算的数据。', en: 'Please enter some data.' },
  'crc.err.params': { zh: '自定义参数无效：POLY / INIT / XOROUT 需为合法十六进制，且不超过所选位宽。',
                     en: 'Invalid custom parameters: POLY / INIT / XOROUT must be valid hex within the selected width.' },
  'crc.f1': { zh: 'CRC（循环冗余校验）将数据视为一个大多项式，除以生成多项式 POLY，余数即校验值。',
              en: 'CRC (cyclic redundancy check) treats the data as one long polynomial, divides it by the generator POLY, and the remainder is the checksum.' },
  'crc.f2': { zh: '<code>POLY</code>：生成多项式系数的十六进制简写（省略最高位），例 0x1021 表示 x¹⁶+x¹²+x⁵+1。',
              en: '<code>POLY</code>: hex shorthand of the generator coefficients (top bit omitted), e.g. 0x1021 = x¹⁶+x¹²+x⁵+1.' },
  'crc.f3': { zh: '<code>INIT</code>：计算前寄存器的预置值；<code>XOROUT</code>：结果输出前异或的值。',
              en: '<code>INIT</code>: register preload before computing; <code>XOROUT</code>: value XOR-ed into the final result.' },
  'crc.f4': { zh: '<code>REFIN</code>：每个输入字节是否按位反转（低位先进）；<code>REFOUT</code>：输出寄存器是否整体反转。',
              en: '<code>REFIN</code>: reflect each input byte (LSB first); <code>REFOUT</code>: reflect the final register.' },
  'crc.f5': { zh: '本工具采用逐位通用算法，宽度 1 ~ 32 任意配置，与查表实现结果一致。',
              en: 'This tool uses a generic bitwise algorithm for any width from 1 to 32, matching table-driven implementations.' },
  'crc.t1': { zh: '标准测试向量："123456789" 的 CRC-32 = CBF43926、CRC-16/MODBUS = 4B37、CRC-16/CCITT-FALSE = 29B1，可用它验证配置。',
              en: 'Standard check value: "123456789" gives CRC-32 = CBF43926, CRC-16/MODBUS = 4B37, CRC-16/CCITT-FALSE = 29B1 — use it to validate a setup.' },
  'crc.t2': { zh: '复制网页上的十六进制数据时注意首尾可能混入不可见字符，先粘贴到文本编辑器检查。',
              en: 'Watch for invisible characters at the ends when copying hex data from web pages; paste into a text editor first.' },
  'crc.t3': { zh: 'Modbus / DNP 等协议按低字节在前发送校验值，"传输字节序列"一栏已按此顺序给出。',
              en: 'Protocols like Modbus / DNP send the checksum low byte first — the "wire byte order" field follows that convention.' },

  /* ---------- 相位噪声分析 ---------- */
  'pn.doc':       { zh: '相位噪声分析 · Gyboy 的小站', en: "Phase Noise Analysis · Gyboy's Site" },
  'pn.h1':        { zh: '相位噪声分析', en: 'Phase Noise Analysis' },
  'pn.subtitle':  { zh: 'Phase Noise Analyzer —— 导入频谱仪 / 相位噪声仪导出的 CSV 数据：多曲线对比、积分相位噪声与 RMS 抖动、Marker 与 Delta 测量、统计与导出。',
                    en: 'Phase Noise Analyzer — import CSV traces from spectrum / phase-noise analyzers: multi-trace comparison, integrated PN & RMS jitter, markers with delta readout, statistics and CSV export.' },
  'pn.curves':    { zh: '条曲线', en: ' traces' },
  'pn.visible':   { zh: '条可见', en: ' visible' },
  'pn.markers':   { zh: '个标记', en: ' markers' },
  'pn.import':    { zh: '📂 导入 CSV', en: '📂 Import CSV' },
  'pn.exportCompare': { zh: '⬇ 导出对比', en: '⬇ Export traces' },
  'pn.exportMarkers': { zh: '📋 导出标记', en: '📋 Export markers' },
  'pn.clearAll':  { zh: '清空全部', en: 'Clear all' },
  'pn.datasets':  { zh: '数据集', en: 'Traces' },
  'pn.dropzone':  { zh: '📄 点击或拖拽上传 CSV', en: '📄 Click or drop CSV files here' },
  'pn.noData':    { zh: '暂无数据', en: 'No data yet' },
  'pn.points':    { zh: '点', en: ' pts' },
  'pn.setTarget': { zh: '设为目标曲线（积分与标记将绑定到此曲线）', en: 'Set as target trace (integration and markers bind to it)' },
  'pn.logX':      { zh: '对数 X', en: 'Log X' },
  'pn.normalize': { zh: '归一化', en: 'Normalize' },
  'pn.showLabels':{ zh: '显示标签', en: 'Labels' },
  'pn.autoscale': { zh: '🔄 自适应', en: '🔄 Autoscale' },
  'pn.cursor':    { zh: '光标', en: 'Cursor' },
  'pn.tools':     { zh: '工具', en: 'Tools' },
  'pn.target':    { zh: '🎯 目标曲线', en: '🎯 Target trace' },
  'pn.noTarget':  { zh: '未选择 — 请点击数据集', en: 'None — click a trace in the list' },
  'pn.integral':  { zh: '📐 积分计算', en: '📐 Integration' },
  'pn.centerK':   { zh: '中心 (kHz)', en: 'Center (kHz)' },
  'pn.bwK':       { zh: '带宽 (kHz)', en: 'Span (kHz)' },
  'pn.calc':      { zh: '计算', en: 'Compute' },
  'pn.clear':     { zh: '清除', en: 'Clear' },
  'pn.allCurves': { zh: '全曲线', en: 'All traces' },
  'pn.integralLabel': { zh: '积分相位噪声', en: 'Integrated phase noise' },
  'pn.rmsJitter': { zh: 'RMS 抖动', en: 'RMS jitter' },
  'pn.markerOps': { zh: '📍 标记操作', en: '📍 Markers' },
  'pn.freqHz':    { zh: '频率 (Hz)', en: 'Frequency (Hz)' },
  'pn.add':       { zh: '添加', en: 'Add' },
  'pn.clear2':    { zh: '清空', en: 'Clear' },
  'pn.peak':      { zh: '🔍 峰值', en: '🔍 Peak' },
  'pn.valley':    { zh: '🔍 谷值', en: '🔍 Valley' },
  'pn.displaySec':{ zh: '⚙ 显示', en: '⚙ Display' },
  'pn.showGrid':  { zh: '显示网格', en: 'Show grid' },
  'pn.showLegend':{ zh: '显示图例', en: 'Show legend' },
  'pn.dataPanel': { zh: '📊 数据面板', en: '📊 Data panel' },
  'pn.toggleHint':{ zh: '点击折叠/展开', en: 'Click to collapse / expand' },
  'pn.tabMarkers':{ zh: 'Marker 表格', en: 'Marker table' },
  'pn.tabStats':  { zh: '统计信息', en: 'Statistics' },
  'pn.tabDelta':  { zh: 'Delta 测量', en: 'Delta measurement' },
  'pn.tabHist':   { zh: '积分历史', en: 'Integration history' },
  'pn.tblIdx':    { zh: '#', en: '#' },
  'pn.tblDataset':{ zh: '数据集', en: 'Trace' },
  'pn.tblFreq':   { zh: '频率', en: 'Frequency' },
  'pn.tblPN':     { zh: 'PN (dBc/Hz)', en: 'PN (dBc/Hz)' },
  'pn.tblOps':    { zh: '操作', en: 'Actions' },
  'pn.tblCurve':  { zh: '曲线', en: 'Trace' },
  'pn.tblIntegral':{ zh: '积分 dBc', en: 'Int. dBc' },
  'pn.tblRms':    { zh: 'RMS °', en: 'RMS °' },
  'pn.tblTime':   { zh: '时间', en: 'Time' },
  'pn.tblRange':  { zh: '范围', en: 'Range' },
  'pn.tblMin':    { zh: 'Min (dBc/Hz)', en: 'Min (dBc/Hz)' },
  'pn.tblAtFreq': { zh: '@ 频率', en: '@ Freq' },
  'pn.tblMax':    { zh: 'Max (dBc/Hz)', en: 'Max (dBc/Hz)' },
  'pn.tblAvg':    { zh: 'Avg (dBc/Hz)', en: 'Avg (dBc/Hz)' },
  'pn.tblPts':    { zh: '点数', en: 'Points' },
  'pn.tblSpan':   { zh: '频率范围', en: 'Freq range' },
  'pn.tblDf':     { zh: 'Δ 频率', en: 'Δ Freq' },
  'pn.tblDpn':    { zh: 'Δ PN (dB)', en: 'Δ PN (dB)' },
  'pn.ref':       { zh: '参考', en: 'Reference' },
  'pn.clearRef':  { zh: '清除参考', en: 'Clear reference' },
  'pn.noMarkers': { zh: '暂无标记。点击曲线、输入频率或按 M 键添加。Marker 绑定到当前目标曲线。',
                    en: 'No markers yet. Click a trace, type a frequency or press M. Markers bind to the current target trace.' },
  'pn.noDelta':   { zh: '在 Marker 表格中点击 Δ 按钮选择参考标记，差值将自动计算。',
                    en: 'Click the Δ button in the marker table to pick a reference marker; deltas compute automatically.' },
  'pn.rename':    { zh: '重命名曲线:', en: 'Rename trace:' },
  'pn.msg.deleteCurve': { zh: '删除此曲线？', en: 'Delete this trace?' },
  'pn.plotTitle': { zh: '相位噪声曲线', en: 'Phase noise traces' },
  'pn.noHist':    { zh: '暂无积分记录。执行积分计算后自动记录在此。',
                    en: 'No integration records yet. Results are logged here automatically.' },
  'pn.axisFreq':  { zh: '频率偏移 (Hz)', en: 'Offset frequency (Hz)' },
  'pn.axisL':     { zh: 'L(f) (dBc/Hz)', en: 'L(f) (dBc/Hz)' },
  'pn.axisDelta': { zh: '相对 ΔL(f) (dB)', en: 'Relative ΔL(f) (dB)' },
  'pn.plotEmpty': { zh: '导入 CSV 文件开始分析<br>支持拖拽、点击上传',
                    en: 'Import a CSV file to start<br>Drag & drop or click to upload' },
  'pn.deleted':   { zh: '（已删除）', en: '(deleted)' },
  'pn.msg.selectTarget': { zh: '请先在左侧面板选择目标曲线', en: 'Pick a target trace in the Traces panel first' },
  'pn.msg.invalidFreq':  { zh: '请输入有效频率 (Hz)', en: 'Enter a valid frequency (Hz)' },
  'pn.msg.invalidIntegral': { zh: '请输入有效的中心频率与带宽', en: 'Enter a valid center frequency and span' },
  'pn.msg.invalidRange': { zh: '积分区间无效', en: 'Invalid integration range' },
  'pn.msg.maxMarkers':   { zh: '最多 20 个标记', en: 'Up to 20 markers' },
  'pn.msg.dupMarker':    { zh: '该点已存在标记', en: 'A marker already exists at this point' },
  'pn.msg.noVisible':    { zh: '没有可见曲线', en: 'No visible traces' },
  'pn.msg.noMarkersExp': { zh: '无标记可导出', en: 'No markers to export' },
  'pn.msg.noDataExport': { zh: '无数据', en: 'No data' },
  'pn.msg.confirmClear': { zh: '确认清空所有数据？此操作不可撤销。', en: 'Clear all data? This cannot be undone.' },
  'pn.msg.parseFail':    { zh: '解析失败', en: 'Failed to parse' },
  'pn.msg.badFreqFmt':   { zh: '请输入有效频率 (如 1000, 1.2k, 2.5M)', en: 'Enter a valid frequency (e.g. 1000, 1.2k, 2.5M)' },
  'pn.msg.integralErr':  { zh: '积分错误', en: 'Integration error' },
  'pn.msg.needIntegral': { zh: '请先执行一次积分计算或输入有效参数', en: 'Run an integration first or enter valid parameters' },
  'pn.t1': { zh: '支持 Keysight E5052 / N9010 等仪器导出的 CSV：自动识别元数据行与 DATA 数据段，无需手工清理。',
             en: 'Works with CSV exports from Keysight E5052 / N9010 and similar instruments — metadata rows and DATA sections are detected automatically.' },
  'pn.t2': { zh: '积分结果为单边带积分相位噪声：∫L(f)df（线性功率）折算 dBc，RMS 抖动 = √(2×积分功率)，单位 rad 或 °。',
             en: 'Integration yields single-sideband integrated PN: ∫L(f)df in dBc, and RMS jitter = √(2 × integrated power) in rad or degrees.' },
  'pn.t3': { zh: '键盘快捷键：M 加标记、I 积分、R 自适应、Delete 删最后标记、1~5 快捷带宽。',
             en: 'Keyboard shortcuts: M add marker, I integrate, R autoscale, Delete remove last marker, 1–5 quick spans.' }
};

(function () {
  var KEY = 'gyboy-lang';
  var lang = localStorage.getItem(KEY);
  if (lang !== 'zh' && lang !== 'en') {
    lang = (navigator.language || '').toLowerCase().indexOf('zh') === 0 ? 'zh' : 'en';
  }

  function t(key) {
    var e = window.I18N_DICT[key];
    if (!e) return key;
    return e[lang] != null ? e[lang] : e.zh;
  }

  function apply() {
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      el.textContent = t(el.getAttribute('data-i18n'));
    });
    document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
      el.innerHTML = t(el.getAttribute('data-i18n-html'));
    });
    document.querySelectorAll('[data-i18n-title]').forEach(function (el) {
      var s = t(el.getAttribute('data-i18n-title'));
      el.setAttribute('title', s);
      el.setAttribute('aria-label', s);
    });
    var docKey = document.body.getAttribute('data-i18n-doc');
    if (docKey) document.title = t(docKey);
    document.documentElement.setAttribute('lang', lang === 'zh' ? 'zh-CN' : 'en');
    refreshBtn();
  }

  function refreshBtn() {
    var btn = document.getElementById('lang-toggle');
    if (!btn) return;
    btn.textContent = lang === 'zh' ? 'EN' : '中';
    var s = t(lang === 'zh' ? 'nav.lang2en' : 'nav.lang2zh');
    btn.setAttribute('title', s);
    btn.setAttribute('aria-label', s);
  }

  function setLang(l) {
    lang = l;
    localStorage.setItem(KEY, l);
    apply();
    /* 通知各页面重渲染动态文本（卡片标签、图上标注、错误提示等） */
    document.dispatchEvent(new CustomEvent('langchange', { detail: { lang: l } }));
  }

  apply();
  var btn = document.getElementById('lang-toggle');
  if (btn) btn.addEventListener('click', function () { setLang(lang === 'zh' ? 'en' : 'zh'); });

  window.I18N = {
    lang: function () { return lang; },
    t: t,
    setLang: setLang,
    apply: apply
  };
})();
