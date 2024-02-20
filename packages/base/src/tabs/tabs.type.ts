// import React from 'react';
import { CommonType } from '../common/type';
import { ButtonClasses } from '../button/button.type';
import { BaseTabsProps, TabsShapeType } from '@sheinx/hooks';

export interface TabsClasses {
  tabs: string;
  tab: string;
  panel: string;
  panelWrapper: string;
  headerWrapper: string;
  headerScroll: string;
  header: string;
  hr: string;
  button: string;
  line: string;
  lineInner: string;
  fillInner: string;
  iconInner: string;
  autoFill: string;
  bordered: string;
  card: string;
  dash: string;
  cardHr: string;
  active: string;
  disabled: string;
  show: string;

  prev: string;
  next: string;
  extra: string;

  collapsible: string;
  collapsed: string;
}

export type TabsAlignType = 'left' | 'right' | 'bottom' | 'vertical-left' | 'vertical-right';
export type TabsPositionType =
  | 'top-left'
  | 'top-right'
  | 'bottom-left'
  | 'bottom-right'
  | 'left-top'
  | 'left-bottom'
  | 'right-top'
  | 'right-bottom';

export interface TabsProps extends BaseTabsProps, Pick<CommonType, 'className' | 'style'> {
  jssStyle: {
    tabs: () => TabsClasses;
    button: () => ButtonClasses;
  };
  /**
   * @en Whether to enable lazy loading
   * @cn 是否开启懒加载
   * @default true
   */
  lazy?: boolean;
  /**
   * @en If shape is not null, the style properties such as background, border will lose effect
   * @cn Shape 不为空时，background 等颜色参数将会无效
   * @default 'card'
   */
  shape?: TabsShapeType;
  /**
   * @en Child element, must be a Panel element
   * @cn 子元素,必须为 Panel 元素
   */
  children?: React.ReactNode;
  /**
   * @deprecated 即将弃用，请使用 position 替代
   * - align="left" => position="top-left"
   * - align="right" => position="top-right"
   * - align="bottom" => position="bottom-left"
   * - align="vertical-left" => position="left-top"
   * - align="vertical-right" => position="right-top"
   */
  align?: TabsAlignType;

  /**
   * @deprecated 即将弃用，请使用 extra 替代
   */
  tabBarExtraContent?: React.ReactNode;

  /**
   * @deprecated 即将弃用，请使用 splitColor 替代
   */
  border?: string;
  /**
   * @en Extra content
   * @cn 额外内容
   */
  extra?: React.ReactNode;
  /**
   * @en Split line color
   * @cn 分割线颜色
   */
  splitColor?: string;
  /**
   * @en Whether to hide the split line
   * @cn 是否隐藏分割线
   */
  hideSplit?: boolean;
  /**
   * @en Whether can be collapsed
   * @cn 是否可折叠
   */
  collapsible?: boolean;
  /**
   * @en Default collapse state, effective when collapsible is set to true
   * @cn 默认折叠状态,当 collapsible 设置为 true 时生效
   */
  defaultCollapsed?: boolean;
  /**
   * @en Auto fill the panel
   * @cn 自动填充内容区域
   */
  autoFill?: boolean;
  /**
   * @en Switch tabs will scroll to Tabs
   * @cn 切换 tab 将自动滚动到 Tabs
   */
  switchToTop?: boolean;
  /**
   * @en Sticky header
   * @cn 开启头部附着
   */
  sticky?: boolean;
  /**
   * @en The position of the tab
   * @cn 选项卡位置
   */
  position?: TabsPositionType;

  /**
   * @deprecated 即将弃用，请使用 activeBackground 替代
   */
  background?: string;
  /**
   * @en Active background color
   * @cn 选中标签背景色
   */
  activeBackground?: string;
  /**
   * @en Inactive background color
   * @cn 未选中标签背景色
   */
  inactiveBackground?: string;
  /**
   * @en Style in tab bar
   * @cn tab bar 的样式对象
   */
  tabBarStyle?: React.CSSProperties;
  /**
   * @en Change callback
   * @cn 标签选中时触发回调事件
   */
  onChange?: (key: string | number) => void;
}
