// 此文件受脚本控制，修改后将自动同步 type.ts message.ts 的内容
// This file is script-controlled and any changes made will be automatically synchronized with the type.ts and message.ts files.

/**
 * 描述词典
 * 用于生成文本。
 * 描述词典变量名称为 组件名称 + TokenDescription。请勿修改变量命名，否则将导致 token 无法生成。
 */
const messageTokenDescription = { message: '全局提示', shadow: '阴影', bottom: '' };

/**
 * token 值映射表
 * 用于生成 token 的值，修改保存后将自动同步 type.ts message.ts 的内容。
 * 值映射表变量名称为 组件名称 + TokenValue。请勿修改变量命名，否则将导致 token 无法生成。
 * 该映射表将根据规则自动生成，并与公共 token 进行合并。若有相同 token，将覆盖公共 token。默认不包含公共 token，除非在映射表中添加覆盖。
 * 注意，该映射表的内容不与 messageRules 强关联，非 messageRules 规则内的 token 需手动增加或删减。
 */
const messageTokenValue = {};

const messageTokenExtraValue = {
  shadow: 'Shadow-3',
  border: { color: 'Neutral-border-1' },
  background: { color: 'Neutral-fill-1' },
  font: { color: 'Neutral-text-5' },
  margin: { bottom: 'Spacing-24' },
};

module.exports = {
  messageTokenValue,
  messageTokenExtraValue,
  messageTokenDescription,
};
