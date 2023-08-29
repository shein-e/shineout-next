import { cssvar } from '../utils/css-var';

export interface Token {
  name: string;
  type: string;
  value: string;
  describe: string;
}

export type TokenKeys = keyof typeof Tokens;

const Tokens = {
  'Brand-1': {
    type: 'color',
    name: '山药品牌色-1',
    value: '#E9F5FE',
    describe: '浅色背景',
  },
  'Brand-2': {
    type: 'color',
    name: '山药品牌色-2',
    value: '#BDE2FF',
    describe: '聚焦',
  },
  'Brand-10': {
    type: 'color',
    name: '山药品牌色-10',
    value: '#001D61',
    describe: '-10',
  },
  'Brand-3': {
    type: 'color',
    name: '山药品牌色-3',
    value: '#94CDFF',
    describe: '禁用',
  },
  'Brand-4': {
    type: 'color',
    name: '山药品牌色-4',
    value: '#6BB5FF',
    describe: '-4',
  },
  'Brand-5': {
    type: 'color',
    name: '山药品牌色-5',
    value: '#429AFF',
    describe: '悬浮',
  },
  'Brand-6': {
    type: 'color',
    name: '山药品牌色-6',
    value: '#197AFA',
    describe: '常规',
  },
  'Brand-7': {
    type: 'color',
    name: '山药品牌色-7',
    value: '#0B5BD4',
    describe: '点击',
  },
  'Brand-8': {
    type: 'color',
    name: '山药品牌色-8',
    value: '#0040AD',
    describe: '-8',
  },
  'Brand-9': {
    type: 'color',
    name: '山药品牌色-9',
    value: '#002D87',
    describe: '-9',
  },
  'Cyan-1': {
    type: 'color',
    name: '青色-1',
    value: '#E3FEFA',
    describe: '浅色背景',
  },
  'Cyan-10': {
    type: 'color',
    name: '青色-10',
    value: '#051F24',
    describe: '-10',
  },
  'Cyan-2': {
    type: 'color',
    name: '青色-2',
    value: '#ADF2E9',
    describe: '聚焦',
  },
  'Cyan-3': {
    type: 'color',
    name: '青色-3',
    value: '#7DE3D9',
    describe: '禁用',
  },
  'Cyan-4': {
    type: 'color',
    name: '青色-4',
    value: '#54D4CC',
    describe: '-4',
  },
  'Cyan-5': {
    type: 'color',
    name: '青色-5',
    value: '#34C6C1',
    describe: '悬浮',
  },
  'Cyan-6': {
    type: 'color',
    name: '青色-6',
    value: '#1DB8B9',
    describe: '常规',
  },
  'Cyan-7': {
    type: 'color',
    name: '青色-7',
    value: '#158B90',
    describe: '点击',
  },
  'Cyan-8': {
    type: 'color',
    name: '青色-8',
    value: '#0D6169',
    describe: '-8',
  },
  'Cyan-9': {
    type: 'color',
    name: '青色-9',
    value: '#093D45',
    describe: '-9',
  },
  'Danger-1': {
    type: 'color',
    name: '危险色-1',
    value: '#FFEDED',
    describe: '浅色背景',
  },
  'Danger-10': {
    type: 'color',
    name: '危险色-10',
    value: '#46080D',
    describe: '-10',
  },
  'Danger-2': {
    type: 'color',
    name: '危险色-2',
    value: '#FFD7CF',
    describe: '聚焦',
  },
  'Danger-3': {
    type: 'color',
    name: '危险色-3',
    value: '#FFBBB1',
    describe: '禁用',
  },
  'Danger-4': {
    type: 'color',
    name: '危险色-4',
    value: '#FF9C91',
    describe: '-4',
  },
  'Danger-5': {
    type: 'color',
    name: '危险色-5',
    value: '#FF7A71',
    describe: '悬浮',
  },
  'Danger-6': {
    type: 'color',
    name: '危险色-6',
    value: '#FF4D50',
    describe: '常规',
  },
  'Danger-7': {
    type: 'color',
    name: '危险色-7',
    value: '#CC3D3A',
    describe: '点击',
  },
  'Danger-8': {
    type: 'color',
    name: '危险色-8',
    value: '#A62B29',
    describe: '-8',
  },
  'Danger-9': {
    type: 'color',
    name: '危险色-9',
    value: '#801B1C',
    describe: '-9',
  },
  'Indigo-1': {
    type: 'color',
    name: '靛蓝色-1',
    value: '#EEF2FE',
    describe: '浅色背景',
  },
  'Indigo-10': {
    type: 'color',
    name: '靛蓝色-10',
    value: '#170F69',
    describe: '-10',
  },
  'Indigo-2': {
    type: 'color',
    name: '靛蓝色-2',
    value: '#D7DDFF',
    describe: '聚焦',
  },
  'Indigo-3': {
    type: 'color',
    name: '靛蓝色-3',
    value: '#ABB4FB',
    describe: '禁用',
  },
  'Indigo-4': {
    type: 'color',
    name: '靛蓝色-4',
    value: '#848FF9',
    describe: '-4',
  },
  'Indigo-5': {
    type: 'color',
    name: '靛蓝色-5',
    value: '#6972F6',
    describe: '悬浮',
  },
  'Indigo-6': {
    type: 'color',
    name: '靛蓝色-6',
    value: '#4446F7',
    describe: '常规',
  },
  'Indigo-7': {
    type: 'color',
    name: '靛蓝色-7',
    value: '#3431CD',
    describe: '点击',
  },
  'Indigo-8': {
    type: 'color',
    name: '靛蓝色-8',
    value: '#2822A6',
    describe: '-8',
  },
  'Indigo-9': {
    type: 'color',
    name: '靛蓝色-9',
    value: '#1E1782',
    describe: '-9',
  },
  'Lemon-1': {
    type: 'color',
    name: '柠檬黄色-1',
    value: '#FEFFE8',
    describe: '浅色背景',
  },
  'Lemon-10': {
    type: 'color',
    name: '柠檬黄色-10',
    value: '#5D4813',
    describe: '-10',
  },
  'Lemon-2': {
    type: 'color',
    name: '柠檬黄色-2',
    value: '#FFFFC0',
    describe: '聚焦',
  },
  'Lemon-3': {
    type: 'color',
    name: '柠檬黄色-3',
    value: '#FEFB9D',
    describe: '禁用',
  },
  'Lemon-4': {
    type: 'color',
    name: '柠檬黄色-4',
    value: '#FDF57D',
    describe: '-4',
  },
  'Lemon-5': {
    type: 'color',
    name: '柠檬黄色-5',
    value: '#FCED61',
    describe: '悬浮',
  },
  'Lemon-6': {
    type: 'color',
    name: '柠檬黄色-6',
    value: '#F5DC4D',
    describe: '常规',
  },
  'Lemon-7': {
    type: 'color',
    name: '柠檬黄色-7',
    value: '#CEB23C',
    describe: '点击',
  },
  'Lemon-8': {
    type: 'color',
    name: '柠檬黄色-8',
    value: '#A88C2D',
    describe: '-8',
  },
  'Lemon-9': {
    type: 'color',
    name: '柠檬黄色-9',
    value: '#826920',
    describe: '-9',
  },
  'Magenta-1': {
    type: 'color',
    name: '洋红色-1',
    value: '#FCF1F6',
    describe: '浅色背景',
  },
  'Magenta-10': {
    type: 'color',
    name: '洋红色-10',
    value: '#4B0C37',
    describe: '-10',
  },
  'Magenta-2': {
    type: 'color',
    name: '洋红色-2',
    value: '#F8D8E6',
    describe: '聚焦',
  },
  'Magenta-3': {
    type: 'color',
    name: '洋红色-3',
    value: '#F3B1D0',
    describe: '禁用',
  },
  'Magenta-4': {
    type: 'color',
    name: '洋红色-4',
    value: '#EF8BBE',
    describe: '-4',
  },
  'Magenta-5': {
    type: 'color',
    name: '洋红色-5',
    value: '#E564A8',
    describe: '悬浮',
  },
  'Magenta-6': {
    type: 'color',
    name: '洋红色-6',
    value: '#D84293',
    describe: '常规',
  },
  'Magenta-7': {
    type: 'color',
    name: '洋红色-7',
    value: '#B4317D',
    describe: '点击',
  },
  'Magenta-8': {
    type: 'color',
    name: '洋红色-8',
    value: '#912266',
    describe: '-8',
  },
  'Magenta-9': {
    type: 'color',
    name: '洋红色-9',
    value: '#6E164E',
    describe: '-9',
  },
  'Neon-1': {
    type: 'color',
    name: '荧光绿色-1',
    value: '#FDFFE8',
    describe: '浅色背景',
  },
  'Neon-10': {
    type: 'color',
    name: '荧光绿色-10',
    value: '#2B3F0D',
    describe: '-10',
  },
  'Neon-2': {
    type: 'color',
    name: '荧光绿色-2',
    value: '#F6FFC0',
    describe: '聚焦',
  },
  'Neon-3': {
    type: 'color',
    name: '荧光绿色-3',
    value: '#EEFE9D',
    describe: '禁用',
  },
  'Neon-4': {
    type: 'color',
    name: '荧光绿色-4',
    value: '#D9F177',
    describe: '-4',
  },
  'Neon-5': {
    type: 'color',
    name: '荧光绿色-5',
    value: '#C3E559',
    describe: '悬浮',
  },
  'Neon-6': {
    type: 'color',
    name: '荧光绿色-6',
    value: '#ACD746',
    describe: '常规',
  },
  'Neon-7': {
    type: 'color',
    name: '荧光绿色-7',
    value: '#88B236',
    describe: '点击',
  },
  'Neon-8': {
    type: 'color',
    name: '荧光绿色-8',
    value: '#668B28',
    describe: '-8',
  },
  'Neon-9': {
    type: 'color',
    name: '荧光绿色-9',
    value: '#48651A',
    describe: '-9',
  },
  'Neutral-1': {
    type: 'color',
    name: '中性色-1',
    value: '#000000',
    describe: '浅色背景',
  },
  'Neutral-10': {
    type: 'color',
    name: '中性色-10',
    value: '#020B18',
    describe: '-10',
  },
  'Neutral-2': {
    type: 'color',
    name: '中性色-2',
    value: '#F4F5F8',
    describe: '聚焦',
  },
  'Neutral-3': {
    type: 'color',
    name: '中性色-3',
    value: '#E8EBF0',
    describe: '禁用',
  },
  'Neutral-4': {
    type: 'color',
    name: '中性色-4',
    value: '#CCCFD7',
    describe: '-4',
  },
  'Neutral-5': {
    type: 'color',
    name: '中性色-5',
    value: '#B3B7C1',
    describe: '悬浮',
  },
  'Neutral-6': {
    type: 'color',
    name: '中性色-6',
    value: '#999DA8',
    describe: '常规',
  },
  'Neutral-7': {
    type: 'color',
    name: '中性色-7',
    value: '#666C7C',
    describe: '点击',
  },
  'Neutral-8': {
    type: 'color',
    name: '中性色-8',
    value: '#333E59',
    describe: '-8',
  },
  'Neutral-9': {
    type: 'color',
    name: '中性色-9',
    value: '#141737',
    describe: '-9',
  },
  'Orange-1': {
    type: 'color',
    name: '橘黄色-1',
    value: '#FEFBE3',
    describe: '浅色背景',
  },
  'Orange-10': {
    type: 'color',
    name: '橘黄色-10',
    value: '#552F0B',
    describe: '-10',
  },
  'Orange-2': {
    type: 'color',
    name: '橘黄色-2',
    value: '#FDF0B3',
    describe: '聚焦',
  },
  'Orange-3': {
    type: 'color',
    name: '橘黄色-3',
    value: '#FDE38A',
    describe: '禁用',
  },
  'Orange-4': {
    type: 'color',
    name: '橘黄色-4',
    value: '#FCD365',
    describe: '悬浮',
  },
  'Orange-5': {
    type: 'color',
    name: '橘黄色-5',
    value: '#FCC045',
    describe: '悬浮',
  },
  'Orange-6': {
    type: 'color',
    name: '橘黄色-6',
    value: '#F7A72D',
    describe: '常规',
  },
  'Orange-7': {
    type: 'color',
    name: '橘黄色-7',
    value: '#CC8021',
    describe: '点击',
  },
  'Orange-8': {
    type: 'color',
    name: '橘黄色-8',
    value: '#A26019',
    describe: '-8',
  },
  'Orange-9': {
    type: 'color',
    name: '橘黄色-9',
    value: '#7B4612',
    describe: '-9',
  },
  'Purple-1': {
    type: 'color',
    name: '紫色-1',
    value: '#F8EEFE',
    describe: '浅色背景',
  },
  'Purple-10': {
    type: 'color',
    name: '紫色-10',
    value: '#150530',
    describe: '-10',
  },
  'Purple-2': {
    type: 'color',
    name: '紫色-2',
    value: '#EDD6FE',
    describe: '聚焦',
  },
  'Purple-3': {
    type: 'color',
    name: '紫色-3',
    value: '#CFA3F3',
    describe: '禁用',
  },
  'Purple-4': {
    type: 'color',
    name: '紫色-4',
    value: '#AD72E4',
    describe: '-4',
  },
  'Purple-5': {
    type: 'color',
    name: '紫色-5',
    value: '#8B48D5',
    describe: '悬浮',
  },
  'Purple-6': {
    type: 'color',
    name: '紫色-6',
    value: '#6C23C6',
    describe: '常规',
  },
  'Purple-7': {
    type: 'color',
    name: '紫色-7',
    value: '#4E159E',
    describe: '点击',
  },
  'Purple-8': {
    type: 'color',
    name: '紫色-8',
    value: '#360C77',
    describe: '-8',
  },
  'Purple-9': {
    type: 'color',
    name: '紫色-9',
    value: '#220652',
    describe: '-9',
  },
  'Success-1': {
    type: 'color',
    name: '成功色-1',
    value: '#F1FAEB',
    describe: '浅色背景',
  },
  'Success-10': {
    type: 'color',
    name: '成功色-10',
    value: '#173307',
    describe: '-10',
  },
  'Success-3': {
    type: 'color',
    name: '成功色-3',
    value: '#C2E999',
    describe: '禁用',
  },
  'Success-4': {
    type: 'color',
    name: '成功色-4',
    value: '#A5DC74',
    describe: '-4',
  },
  'Success-5': {
    type: 'color',
    name: '成功色-5',
    value: '#90D959',
    describe: '悬浮',
  },
  'Success-6': {
    type: 'color',
    name: '成功色-6',
    value: '#74D13D',
    describe: '常规',
  },
  'Success-7': {
    type: 'color',
    name: '成功色-7',
    value: '#62B237',
    describe: '点击',
  },
  'Success-8': {
    type: 'color',
    name: '成功色-8',
    value: '#4F992B',
    describe: '-8',
  },
  'Success-9': {
    type: 'color',
    name: '成功色-9',
    value: '#377319',
    describe: '-9',
  },
  'Tangerine-1': {
    type: 'color',
    name: '橘红色-1',
    value: '#FFF0E5',
    describe: '浅色背景',
  },
  'Tangerine-10': {
    type: 'color',
    name: '橘红色-10',
    value: '#56130A',
    describe: '-10',
  },
  'Tangerine-2': {
    type: 'color',
    name: '橘红色-2',
    value: '#FED4B9',
    describe: '聚焦',
  },
  'Tangerine-3': {
    type: 'color',
    name: '橘红色-3',
    value: '#FDB58F',
    describe: '禁用',
  },
  'Tangerine-4': {
    type: 'color',
    name: '橘红色-4',
    value: '#FD9568',
    describe: '-4',
  },
  'Tangerine-5': {
    type: 'color',
    name: '橘红色-5',
    value: '#FD7445',
    describe: '悬浮',
  },
  'Tangerine-6': {
    type: 'color',
    name: '橘红色-6',
    value: '#F75229',
    describe: '常规',
  },
  'Tangerine-7': {
    type: 'color',
    name: '橘红色-7',
    value: '#CD3A1D',
    describe: '点击',
  },
  'Tangerine-8': {
    type: 'color',
    name: '橘红色-8',
    value: '#A22614',
    describe: '-8',
  },
  'Tangerine-9': {
    type: 'color',
    name: '橘红色-9',
    value: '#7B1B0E',
    describe: '-9',
  },
  'Warning-1': {
    type: 'color',
    name: '警告色-1',
    value: '#FFF6EB',
    describe: '浅色背景',
  },
  'Warning-10': {
    type: 'color',
    name: '警告色-10',
    value: '#562409',
    describe: '-10',
  },
  'Warning-2': {
    type: 'color',
    name: '警告色-2',
    value: '#FDE5B5',
    describe: '聚焦',
  },
  'Warning-3': {
    type: 'color',
    name: '警告色-3',
    value: '#FDD18B',
    describe: '禁用',
  },
  'Warning-4': {
    type: 'color',
    name: '警告色-4',
    value: '#FDBB66',
    describe: '-4',
  },
  'Warning-5': {
    type: 'color',
    name: '警告色-5',
    value: '#FDA344',
    describe: '悬浮',
  },
  'Warning-6': {
    type: 'color',
    name: '警告色-6',
    value: '#F7862A',
    describe: '常规',
  },
  'Warning-7': {
    type: 'color',
    name: '警告色-7',
    value: '#CC641F',
    describe: '点击',
  },
  'Warning-8': {
    type: 'color',
    name: '警告色-8',
    value: '#A24916',
    describe: '-8',
  },
  'Warning-9': {
    type: 'color',
    name: '警告色-9',
    value: '#7B3410',
    describe: '-9',
  },
  'Neutral-text-5': {
    type: 'color',
    name: '文字色',
    value: '#141737',
    describe: '主要/正文文字',
  },
  'Neutral-text-4': {
    type: 'color',
    name: '文字色',
    value: '#666C7C',
    describe: '次要文字',
  },
  'Neutral-text-3': {
    type: 'color',
    name: '文字色',
    value: '#999DA8',
    describe: '禁用文字',
  },
  'Neutral-text-2': {
    type: 'color',
    name: '文字色',
    value: '#B3B7C1',
    describe: '占位符文字',
  },
  'Neutral-text-1': {
    type: 'color',
    name: '文字色',
    value: '#FFFFFF',
    describe: '纯白文字',
  },
  'Neutral-border-2': {
    type: 'color',
    name: '边框色',
    value: '#CCCFD7',
    describe: '默认/禁用边框',
  },
  'Neutral-border-1': {
    type: 'color',
    name: '边框色',
    value: '#E8EBF0',
    describe: '分割线',
  },
  'Neutral-fill-5': {
    type: 'color',
    name: '填充色',
    value: '#B3B7C1',
    describe: '点击',
  },
  'Neutral-fill-4': {
    type: 'color',
    name: '填充色',
    value: '#CCCFD7',
    describe: '悬浮',
  },
  'Neutral-fill-3': {
    type: 'color',
    name: '填充色',
    value: '#E8EBF0',
    describe: '常规',
  },
  'Neutral-fill-2': {
    type: 'color',
    name: '填充色',
    value: '#F4F5F8',
    describe: '禁用/表头/底层背景',
  },
  'Neutral-fill-1': {
    type: 'color',
    name: '填充色',
    value: '#FFFFFF',
    describe: '白色背景',
  },
  '12/regular': {
    type: 'string',
    name: '12/regular',
    value: '12px',
    describe: '提示、标签、辅助文案',
  },
  medium: {
    type: 'string',
    name: '12',
    value: '12px',
    describe: '提示、标签、辅助文案',
  },
  '14/regular': {
    type: 'string',
    name: '14/regular',
    value: '14px',
    describe: '正文内容',
  },
  '14/medium': {
    type: 'string',
    name: '14/medium',
    value: '14px',
    describe: '正文内容突出显示',
  },
  '16/regular': {
    type: 'string',
    name: '16/regular',
    value: '16px',
    describe: '标题-小',
  },
  '16/medium': {
    type: 'string',
    name: '16/medium',
    value: '16px',
    describe: '标题-小',
  },
  '18/regular': {
    type: 'string',
    name: '18/regular',
    value: '18px',
    describe: '标题-中',
  },
  '18/medium': {
    type: 'string',
    name: '18/medium',
    value: '18px',
    describe: '标题-中',
  },
  '24/regular': {
    type: 'string',
    name: '24/regular',
    value: '24px',
    describe: '标题-大',
  },
  '24/medium': {
    type: 'string',
    name: '24/medium',
    value: '24px',
    describe: '标题-大',
  },
  '32/regular': {
    type: 'string',
    name: '32/regular',
    value: '32px',
    describe: '运营数据-小',
  },
  '32/medium': {
    type: 'string',
    name: '32/medium',
    value: '32px',
    describe: '运营数据-小',
  },
  '36/regular': {
    type: 'string',
    name: '36/regular',
    value: '36px',
    describe: '运营数据-中',
  },
  '36/medium': {
    type: 'string',
    name: '36/medium',
    value: '36px',
    describe: '运营数据-中',
  },
  '48/regular': {
    type: 'string',
    name: '48/regular',
    value: '48px',
    describe: '运营数据-大',
  },
  '48/medium': {
    type: 'string',
    name: '48/medium',
    value: '48px',
    describe: '运营数据-大',
  },
  'Padding-1': {
    type: 'string',
    name: '1/padding',
    value: '1px',
    describe: '1 内边距',
  },
  'Padding-2': {
    type: 'string',
    name: '2/padding',
    value: '2px',
    describe: '2 内边距',
  },
  'Padding-3': {
    type: 'string',
    name: '3/padding',
    value: '3px',
    describe: '3 内边距',
  },
  'Padding-4': {
    type: 'string',
    name: '4/padding',
    value: '4px',
    describe: '4 内边距',
  },
  'Padding-5': {
    type: 'string',
    name: '5/padding',
    value: '5px',
    describe: '5 内边距',
  },
  'Padding-6': {
    type: 'string',
    name: '6/padding',
    value: '6px',
    describe: '6 内边距',
  },
  'Padding-7': {
    type: 'string',
    name: '7/padding',
    value: '7px',
    describe: '7 内边距',
  },
  'Padding-8': {
    type: 'string',
    name: '8/padding',
    value: '8px',
    describe: '8 内边距',
  },
  'Padding-9': {
    type: 'string',
    name: '9/padding',
    value: '9px',
    describe: '9 内边距',
  },
  'Padding-10': {
    type: 'string',
    name: '10/padding',
    value: '10px',
    describe: '10 内边距',
  },
  'Padding-11': {
    type: 'string',
    name: '11/padding',
    value: '11px',
    describe: '11 内边距',
  },
  'Padding-12': {
    type: 'string',
    name: '12/padding',
    value: '12px',
    describe: '12 内边距',
  },
  'Padding-13': {
    type: 'string',
    name: '13/padding',
    value: '13px',
    describe: '13 内边距',
  },
  'Padding-14': {
    type: 'string',
    name: '14/padding',
    value: '14px',
    describe: '14 内边距',
  },
  'Padding-15': {
    type: 'string',
    name: '15/padding',
    value: '15px',
    describe: '15 内边距',
  },
  'Padding-16': {
    type: 'string',
    name: '16/padding',
    value: '16px',
    describe: '16 内边距',
  },
  'Padding-17': {
    type: 'string',
    name: '17/padding',
    value: '17px',
    describe: '17 内边距',
  },
  'Padding-18': {
    type: 'string',
    name: '18/padding',
    value: '18px',
    describe: '18 内边距',
  },
  'Padding-19': {
    type: 'string',
    name: '19/padding',
    value: '19px',
    describe: '19 内边距',
  },
  'Padding-20': {
    type: 'string',
    name: '20/padding',
    value: '20px',
    describe: '20 内边距',
  },
  'Padding-21': {
    type: 'string',
    name: '21/padding',
    value: '21px',
    describe: '21 内边距',
  },
  'Padding-22': {
    type: 'string',
    name: '22/padding',
    value: '22px',
    describe: '22 内边距',
  },
  'Padding-23': {
    type: 'string',
    name: '23/padding',
    value: '23px',
    describe: '23 内边距',
  },
  'Padding-24': {
    type: 'string',
    name: '24/padding',
    value: '24px',
    describe: '24 内边距',
  },
  'Margin-4': {
    type: 'string',
    name: '4/margin',
    value: '4px',
    describe: '4 外边距',
  },
  'Margin-8': {
    type: 'string',
    name: '8/margin',
    value: '8px',
    describe: '8 外边距',
  },
  'Margin-12': {
    type: 'string',
    name: '12/margin',
    value: '12px',
    describe: '12 外边距',
  },
  'Margin-16': {
    type: 'string',
    name: '16/margin',
    value: '16px',
    describe: '16 外边距',
  },
  'Margin-24': {
    type: 'string',
    name: '24/margin',
    value: '24px',
    describe: '24 外边距',
  },
  'Margin-32': {
    type: 'string',
    name: '32/margin',
    value: '32px',
    describe: '32 外边距',
  },
  'Radius-0': {
    type: 'string',
    name: '0/radius',
    value: '0px',
    describe: '直角',
  },
  'Radius-2': {
    type: 'string',
    name: '2/radius',
    value: '2px',
    describe: '2 圆角',
  },
  'Radius-3': {
    type: 'string',
    name: '3/radius',
    value: '3px',
    describe: '3 圆角',
  },
  'Radius-4': {
    type: 'string',
    name: '4/radius',
    value: '4px',
    describe: '4 圆角',
  },
  'Radius-8': {
    type: 'string',
    name: '8/radius',
    value: '8px',
    describe: '8 圆角',
  },
  'Radius-12': {
    type: 'string',
    name: '12/radius',
    value: '12px',
    describe: '12 圆角',
  },
  'Radius-1000': {
    type: 'string',
    name: '1000/radius',
    value: '1000px',
    describe: '1000 大圆角',
  },
  'Radius-50%': {
    type: 'string',
    name: '50%/radius',
    value: '50%',
    describe: '50% 全圆角',
  },
  'Shadow-1': {
    type: 'string',
    name: '基础阴影',
    value:
      '0px 2px 4px -1px rgba(2, 11, 24, 0.12),0px 4px 5px 0px rgba(2, 11, 24, 0.08),0px 1px 10px 0px rgba(2, 11, 24, 0.05)',
    describe: '表格拖拽、树组件拖拽',
  },
  'Shadow-2': {
    type: 'string',
    name: '中阴影',
    value:
      '0px 5px 5px -3px rgba(2, 11, 24, 0.1),0px 8px 10px 1px rgba(2, 11, 24, 0.06),0px 3px 14px 2px rgba(2, 11, 24, 0.05)',
    describe: '所有下拉组件使用，下拉菜单、气泡确认框、选择器',
  },
  'Shadow-3': {
    type: 'string',
    name: '重阴影',
    value:
      '0px 8px 10px -5px rgba(2, 11, 24, 0.08),0px 16px 24px 2px rgba(2, 11, 24, 0.04),0px 6px 30px 5px rgba(2, 11, 24, 0.05)',
    describe: '所有下拉组件使用，下拉菜单、气泡确认框、选择器',
  },
  'Line-height-dynamic': {
    type: 'string',
    name: '动态行高',
    value: 'calc( 1em + 8px )',
    describe: '根据当前的字体大小 + 8px',
  },
  'Border-1': {
    type: 'string',
    name: '常规边框',
    value: '1px',
    describe: '常规边框宽度',
  },
  'Border-2': {
    type: 'string',
    name: '较粗边框',
    value: '2px',
    describe: '较粗边框宽度',
  },
  'Border-3': {
    type: 'string',
    name: '粗边框',
    value: '3px',
    describe: '较粗边框宽度',
  },
  Transparent: {
    type: 'string',
    name: '透明色',
    value: 'transparent',
    describe: '较粗边框宽度',
  },
  'Mask-fill-1': {
    type: 'string',
    name: '遮罩填充色',
    value: 'rgba(2, 11, 24, 0.3)',
    describe: '用于遮罩层的带透明度背景色',
  },
  Size: {
    type: 'string',
    name: '尺寸基数',
    value: '2',
    describe: '尺寸基数，以乘积形式生成所有尺寸，比如：Size * 4px = 8px',
  },
};

// eslint-disable-next-line @typescript-eslint/ban-types
export const tokenToVars = <T extends {}>(
  componentToken: T,
  tokens?: { [key: string]: Token },
): T => {
  const token: {
    [key in keyof T]?: string;
  } = {};
  const TOKEN = tokens || Tokens;
  const SIZE = TOKEN['Size'].value;

  Object.keys(componentToken).forEach((key) => {
    const Key = key as keyof T & string;
    const tokenKey = componentToken[Key] as string;
    token[Key] = cssvar(tokenKey, TOKEN[tokenKey]?.value || tokenKey, SIZE);
  });

  return token as T;
};

export default Tokens;
