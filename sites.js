/* ===========================================================
   只需要改这一个文件。

   分类格式：[分类名, 角标, [条目...]]
   条目格式：[名称, 网址, 说明]
             [名称, 网址, 说明, 'adult']  ← 第四项加 'adult'
                                            点击时会先弹年龄确认

   顺序即显示顺序。成人百科排第一位。

   用 var 不用 const：app.js 通篇是 ES5 写法。这里若用 const，
   老引擎直接解析失败，会被报成「sites.js 被拦截了」，把人往
   错误方向带。
   =========================================================== */

var SITE = {
  name: '数码导航',
  tagline: '装机、选型、跑分、刷机 —— 折腾硬件要开的那些站',
  deployedOn: '',
};

var GROUPS = [

['成人内容', '18+', [
  ['成人内容百科', 'https://chengrenbaike.com', '性知识与两性健康百科，仅限成年人', 'adult'],
]],

['装机与配件', '⌁', [
  ['PCPartPicker', 'https://pcpartpicker.com',      '配置单兼容性检查与比价'],
  ['中关村在线',   'https://www.zol.com.cn',        '国内硬件报价与导购'],
  ['太平洋电脑网', 'https://www.pconline.com.cn',   '产品库与评测'],
  ['Newegg',       'https://www.newegg.com',        '海外硬件电商'],
]],

['显卡与处理器', '▦', [
  ['TechPowerUp',   'https://www.techpowerup.com',       'GPU 数据库与 BIOS 收录'],
  ['CPU Benchmark', 'https://www.cpubenchmark.net',      'PassMark 处理器天梯'],
  ['GPU Benchmark', 'https://www.videocardbenchmark.net','PassMark 显卡天梯'],
  ['3DMark',        'https://www.3dmark.com',            '图形性能基准测试'],
]],

['手机与移动端', '▭', [
  ['GSMArena', 'https://www.gsmarena.com',  '全球手机参数库与评测'],
  ['安兔兔',   'https://www.antutu.com',    '性能跑分与排行'],
  ['酷安',     'https://www.coolapk.com',   '国内数码社区与应用'],
  ['DXOMARK',  'https://www.dxomark.com',   '影像与音频客观评分'],
]],

['跑分与检测', '◉', [
  ['UserBenchmark',    'https://www.userbenchmark.com', '整机各部件对比'],
  ['CrystalDiskMark',  'https://crystalmark.info/en/',  '硬盘读写速度测试'],
  ['Geekbench',        'https://www.geekbench.com',     '跨平台 CPU 与 GPU 跑分'],
  ['MemTest86',        'https://www.memtest86.com',     '内存稳定性检测'],
]],

['固件与系统', '⎔', [
  ['Ventoy',      'https://www.ventoy.net',   '一个 U 盘装多个系统镜像'],
  ['Rufus',       'https://rufus.ie',         '制作可启动 U 盘'],
  ['OpenWrt',     'https://openwrt.org',      '路由器开源固件'],
  ['LineageOS',   'https://lineageos.org',    '安卓第三方系统'],
  ['Arch Wiki',   'https://wiki.archlinux.org','Linux 配置查得最细的地方'],
]],

['存储与 NAS', '▤', [
  ['群晖 Synology', 'https://www.synology.cn', 'NAS 系统与机型'],
  ['威联通 QNAP',   'https://www.qnap.com.cn', 'NAS 与扩展方案'],
  ['TrueNAS',       'https://www.truenas.com', '开源存储系统'],
  ['Backblaze 硬盘报告', 'https://www.backblaze.com/cloud-storage/resources/hard-drive-test-data', '硬盘故障率实测数据'],
]],

['工具与驱动', '⚙', [
  ['CPU-Z',            'https://www.cpuid.com/softwares/cpu-z.html', '硬件信息查看'],
  ['CrystalDiskInfo',  'https://crystalmark.info/en/software/crystaldiskinfo/', '硬盘健康度与 SMART'],
  ['NVIDIA 驱动',      'https://www.nvidia.cn/geforce/drivers/',     '显卡驱动下载'],
  ['AMD 驱动',         'https://www.amd.com/zh-cn/support',          '显卡与芯片组驱动'],
]],

];
