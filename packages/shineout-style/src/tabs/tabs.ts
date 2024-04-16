import Token from '@sheinx/theme';
import { TabsClasses } from '@sheinx/base';
import { JsStyles } from '../jss-style';

interface AfterOptions {
  top?: number | string;
  bottom?: number | string;
  left?: number | string;
  right?: number | string;
  width?: number | string;
  height?: number | string;
  background?: string;
}

const active = (options: AfterOptions) => {
  return {
    '& [data-soui-state="active"]$tab': {
      '&:after': {
        position: 'absolute',
        content: '""',
        left: 'auto',
        right: 'auto',
        top: 'auto',
        bottom: 'auto',
        height: 'auto',
        width: 'auto',
        ...options,
      },
    },
  };
};

const getHeaderPositionStyle = (
  position: 'top' | 'bottom' | 'left' | 'right',
  options: AfterOptions,
) => {
  return {
    [`&[data-soui-position^="${position}-"]`]: {
      '& $headerWrapper': {
        '&:after': options,
      },
    },
  };
};

const getCardStyle = () => {
  return {
    '&[data-soui-position^="left-"][data-soui-shape="card"]': {
      '& $tab,& $next,& $prev': {
        borderRadius: `${Token.tabsTabBorderRadius} 0 0 ${Token.tabsTabBorderRadius}`,
      },
      '& $hr': { right: 0, width: 1, height: '100%' },
      ...active({ top: 0, bottom: 0, right: -1, width: 1, background: '#FFFFFF' }),
    },
    '&[data-soui-position^="right-"][data-soui-shape="card"]': {
      '& $tab,& $next,& $prev': {
        borderRadius: `0 ${Token.tabsTabBorderRadius} ${Token.tabsTabBorderRadius} 0`,
      },
      '& $hr': { left: 0, width: 1, height: '100%' },
      ...active({ top: 0, bottom: 0, left: -1, width: 1, background: '#FFFFFF' }),
    },
    '&[data-soui-position^="top-"][data-soui-shape="card"]': {
      '& $tab,& $next,& $prev': {
        borderRadius: `${Token.tabsTabBorderRadius} ${Token.tabsTabBorderRadius} 0 0`,
      },
      '& $hr': { bottom: 0, height: 1, width: '100%' },
      ...active({ bottom: -1, left: 0, right: 0, height: 1, background: '#FFFFFF' }),
    },
    '&[data-soui-position^="bottom-"][data-soui-shape="card"]': {
      '& $tab,& $next,& $prev': {
        borderRadius: `0 0 ${Token.tabsTabBorderRadius} ${Token.tabsTabBorderRadius}`,
      },
      '& $hr': { top: 0, height: 1, width: '100%' },
      '& $cardHr': {
        '&:after': {
          top: 0,
          bottom: 'auto',
        },
      },
      ...active({ top: -1, left: 0, right: 0, height: 1, background: '#FFFFFF' }),
    },
  };
};

const getLineStyle = () => {
  return {
    '&[data-soui-position^="left-"][data-soui-shape="line"]': {
      '& $hr': { right: 0, width: 1, height: '100%' },
      ...active({ top: 0, bottom: 0, right: 0, width: 2 }),
      '& :not([data-soui-state="active"])$tab': {
        '&:after': {
          display: 'none',
        },
      },
    },
    '&[data-soui-position^="right-"][data-soui-shape="line"]': {
      '& $hr': { left: 0, width: 1, height: '100%' },
      ...active({ top: 0, bottom: 0, left: 0, width: 2 }),
      '& :not([data-soui-state="active"])$tab': {
        '&:after': {
          display: 'none',
        },
      },
    },
    '&[data-soui-position^="top-"][data-soui-shape="line"]': {
      '& $hr': { bottom: 0, height: 1, width: '100%' },
      ...active({ bottom: 0, left: 0, right: 0, height: 2 }),
    },
    '&[data-soui-position^="bottom-"][data-soui-shape="line"]': {
      '& $hr': { top: 0, height: 1, width: '100%' },
      ...active({ top: 0, left: 0, right: 0, height: 2 }),
      '& :not([data-soui-state="active"])$tab': {
        '&:after': {
          display: 'none',
        },
      },
    },
  };
};

const getDashStyle = () => {
  return {
    '&[data-soui-position^="left-"][data-soui-shape="dash"]': {
      ...active({ top: `calc(50% - 12px)`, width: 2, height: 24, right: 0 }),
    },
    '&[data-soui-position^="right-"][data-soui-shape="dash"]': {
      ...active({ top: `calc(50% - 12px)`, width: 2, height: 24, left: 0 }),
    },
    '&[data-soui-position^="top-"][data-soui-shape="dash"]': {
      ...active({ bottom: 0, left: `calc(50% - 12px)`, width: 24, height: 2 }),
    },
    '&[data-soui-position^="bottom-"][data-soui-shape="dash"]': {
      ...active({ top: 0, left: `calc(50% - 12px)`, width: 24, height: 2 }),
    },
  };
};

const getFillStyle = () => {
  return {
    '&[data-soui-shape="fill"]': {
      '& $tab': {
        '&[data-soui-state="active"]': {
          '& $fillInner': {
            background: '#FFFFFF',
            color: Token.tabsActiveFontColor,
          },
        },

        '&:not([data-soui-state="active"]):not([data-soui-state="disabled"]):hover $fillInner': {
          // background: Token.tabsHoverBackgroundColor,
          background: Token.tabsExtraFillHoverBackgroundColor,
        },
        '&:not([data-soui-state="active"]):not([data-soui-state="disabled"]):active $fillInner': {
          background: Token.tabsClickBackgroundColor,
        },

        '&:before': {
          content: '""',
          position: 'absolute',
          left: 0,
          top: 'calc(50% - 7px)',
          width: 1,
          height: 14,
          background: 'transparent',
          transition: 'background .15s ease-out',
        },
      },
      '& $tab:not([data-soui-state="active"]):not(:hover) + $tab:not([data-soui-state="active"]):not(:hover)':
        {
          '&:before': {
            background: Token.tabsSplitBorderColor,
          },
        },
    },
  };
};

const getButtonStyle = () => {
  return {
    '&[data-soui-shape="button"]': {},
  };
};

const getHeaderStyle = () => {
  return {
    ...getHeaderPositionStyle('top', { top: 'auto', bottom: 0, right: 0, left: 0, height: 1 }),
    ...getHeaderPositionStyle('bottom', { top: 0, bottom: 'auto', right: 0, left: 0, height: 1 }),
    ...getHeaderPositionStyle('left', { top: 0, bottom: 0, right: 0, left: 'auto', width: 1 }),
    ...getHeaderPositionStyle('right', { top: 0, bottom: 0, right: 'auto', left: 0, width: 1 }),

    '&[data-soui-shape="fill"] $header': {
      '& $tab': {
        background: Token.tabsBackgroundColor,
        // padding: `${Token.tabsFillPaddingY} ${Token.tabsFillPaddingX}`,
        padding: `${Token.tabsFillPaddingY} 0`,
      },
      '& $tab:first-child': {
        borderRadius: `${Token.tabsTabBorderRadius} 0 0 ${Token.tabsTabBorderRadius}`,
        paddingLeft: Token.tabsFillPaddingX,
      },
      '& $tab:last-child': {
        borderRadius: `0 ${Token.tabsTabBorderRadius} ${Token.tabsTabBorderRadius} 0`,
        paddingRight: Token.tabsFillPaddingX,
      },
    },

    '&[data-soui-shape="dash"],&[data-soui-shape="fill"]': {
      '&:after': {
        display: 'none',
      },
    },
  };
};

const tabsStyle: JsStyles<keyof TabsClasses> = {
  tabs: {
    // 水平模式
    '&[data-soui-position^="top-"],&[data-soui-position^="bottom-"]': {
      display: 'flex',
      flexDirection: 'column',
      '& $panel': {
        width: '100%',
      },
    },

    // 垂直模式
    '&[data-soui-position^="left-"],&[data-soui-position^="right-"]': {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'flex-start',

      '& $panel': {
        width: 'auto',
        height: '100%',
      },
    },
  },
  panelWrapper: {
    width: 'auto',
    height: 'auto',
    // overflow: 'hidden',
    transition: 'all .2s ease-out',
  },
  panel: {
    display: 'none',
  },
  autoFill: {
    height: '100%',
    '& $panelWrapper': {
      flex: 1,
      minHeight: '0'
    },
    '& $panel': {
      overflow: 'auto',
      height: '100%',
    },
  },
  tab: {
    position: 'relative',
    display: 'inline-block',
    boxSizing: 'border-box',
    cursor: 'pointer',
    lineHeight: Token.lineHeightDynamic,
    fontSize: Token.tabsTabFontSize,

    '&[data-soui-state="active"]': {
      '&:after': {
        background: Token.tabsActiveFontColor,
      },
    },
  },
  hr: {
    position: 'absolute',
    background: Token.tabsBorderColor,
  },
  cardHr: {
    // aflter
    '&:after': {
      position: 'absolute',
      content: '""',
      bottom: 0,
      left: 0,
      width: '100%',
      height: 1,
      zIndex: -1,
      background: Token.tabsBorderColor,
    },
  },
  headerWrapper: {
    display: 'flex',
    overflow: 'hidden',
    position: 'relative',
    '&[data-soui-position^="top-"],&[data-soui-position^="bottom-"]': {
      alignItems: 'center',
      '& $tab + $tab': {
        marginLeft: Token.tabsNearlyMargin,
      },
      '&[data-soui-shape="fill"],&[data-soui-shape="button"]': {
        '& $tab + $tab': {
          margin: 0,
        },
      },
      '& $header': {
        width: '100%',
        alignItems: 'center',
      },
      '& $next,& $prev': {
        lineHeight: 0,
        padding: `${Token.tabsActionHorizontalPaddingY} ${Token.tabsActionHorizontalPaddingX}`,
      },
      '& $headerScroll': { display: 'inline-flex' },
      '&[data-soui-position^="top-left"]': {
        '& $headerScroll': { justifyContent: 'flex-start' },
      },
      '&[data-soui-position^="bottom-left"]': {
        '& $headerScroll': { justifyContent: 'flex-start' },
      },
      '&[data-soui-position^="top-right"]': {
        '& $headerScroll': { justifyContent: 'flex-end' },
      },
      '&[data-soui-position^="bottom-right"]': {
        '& $headerScroll': { justifyContent: 'flex-end' },
      },
    },

    '&[data-soui-position^="left-"],&[data-soui-position^="right-"]': {
      flexDirection: 'column',
      '& $tab': {
        display: 'block',
      },
      '& $tab + $tab': {
        marginTop: Token.tabsNearlyMargin,
      },
      '& $next,& $prev': {
        padding: `${Token.tabsActionVerticalPaddingY} ${Token.tabsActionVerticalPaddingX}`,
        '&:after': {
          display: 'none',
        },
      },
      '& $next': {
        marginLeft: 0,
        marginTop: Token.tabsNearlyMargin,
        '& svg': {
          transform: 'rotate(90deg)',
        },
      },
      '& $prev': {
        marginRight: 0,
        marginBottom: Token.tabsNearlyMargin,
        '& svg': {
          transform: 'rotate(90deg)',
        },
      },
      '& $header': {
        height: '100%',
      },
    },

    '&[data-soui-position^="bottom-right"],&[data-soui-position^="top-right"]': {
      '& $header': { display: 'block', textAlign: 'right' },
      '& $headerScroll': { display: 'inline-block' },
    },
    '&[data-soui-position="left-top"],&[data-soui-position="right-top"]': {
      '& $header': { alignItems: 'flex-start' },
    },
    '&[data-soui-position="left-bottom"],&[data-soui-position="right-bottom"]': {
      '& $header': { alignItems: 'flex-start' },
    },

    '&[data-soui-shape="card"] $prev, &[data-soui-shape="card"] $next': {
      background: '#FFFFFF',
      border: `1px solid ${Token.tabsBorderColor}`,

      '&[data-soui-state="disabled"]': {
        background: Token.tabsBackgroundColor,
      },
      '&:not([data-soui-state="disabled"]):hover': {
        background: Token.tabsHoverBackgroundColor,
      },
      '&:not([data-soui-state="disabled"]):hover:active': {
        background: Token.tabsClickBackgroundColor,
      },
    },
    '&[data-soui-shape="line"] $prev, &[data-soui-shape="line"] $next': {
      '&:not([data-soui-state="disabled"]):hover': {
        '& $iconInner': {
          background: Token.tabsHoverBackgroundColor,
        },
      },
      '&:not([data-soui-state="disabled"]):hover:active': {
        '& $iconInner': {
          background: Token.tabsClickBackgroundColor,
        },
      },
    },
    // fill 同 line
    '&[data-soui-shape="fill"] $prev,&[data-soui-shape="fill"] $next': {
      '&:not([data-soui-state="disabled"]):hover': {
        '& $iconInner': {
          background: Token.tabsHoverBackgroundColor,
        },
      },
      '&:not([data-soui-state="disabled"]):hover:active': {
        '& $iconInner': {
          background: Token.tabsClickBackgroundColor,
        },
      },
    },
    // button 同 line
    '&[data-soui-shape="button"] $prev,&[data-soui-shape="button"] $next': {
      '&:not([data-soui-state="disabled"]):hover': {
        '& $iconInner': {
          background: Token.tabsHoverBackgroundColor,
        },
      },
      '&:not([data-soui-state="disabled"]):hover:active': {
        '& $iconInner': {
          background: Token.tabsClickBackgroundColor,
        },
      },
    },
    '&[data-soui-shape="dash"] $prev,&[data-soui-shape="dash"] $next': {
      '&:not([data-soui-state="disabled"]):hover': {
        '& $iconInner': {
          background: Token.tabsHoverBackgroundColor,
        },
      },
      '&:not([data-soui-state="disabled"]):hover:active': {
        '& $iconInner': {
          background: Token.tabsClickBackgroundColor,
        },
      },
    },

    '& $prev,& $next': {
      cursor: 'pointer',
      position: 'relative',
      boxSizing: 'border-box',

      '&[data-soui-state="disabled"]': {
        cursor: 'not-allowed',
        '& svg': {
          fill: Token.tabsDisabledFontColor,
        },
      },
      '& svg': {
        width: 14,
      },
    },
    ...getCardStyle(),
    ...getLineStyle(),
    ...getDashStyle(),
    ...getFillStyle(),
    ...getButtonStyle(),
    ...getHeaderStyle(),
  },
  headerScroll: {
    transition: 'all .15s ease-out',
  },
  header: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    '$headerWrapper[data-soui-shape="card"] &': {
      '& $tab': {
        position: 'relative',
        border: `1px solid ${Token.tabsBorderColor}`,
        padding: `${Token.tabsTabPaddingY} ${Token.tabsTabPaddingX}`,
        background: Token.tabsBackgroundColor,

        '&[data-soui-state="active"]': {
          color: Token.tabsActiveFontColor,
          background: Token.tabsActiveBackgroundColor,
          fontWeight: 'bold',
        },

        '&[data-soui-state="disabled"]': {
          color: Token.tabsDisabledFontColor,
          cursor: 'not-allowed',
        },

        '&:not([data-soui-state="active"]):not([data-soui-state="disabled"]):hover': {
          background: Token.tabsHoverBackgroundColor,
        },
        '&:not([data-soui-state="active"]):not([data-soui-state="disabled"]):active': {
          background: Token.tabsClickBackgroundColor,
        },
      },
    },
    '$headerWrapper[data-soui-shape="line"] &': {
      '& $tab': {
        position: 'relative',
        padding: `${Token.tabsLinePaddingY} ${Token.tabsLinePaddingX}`,
        // background: '#FFF',

        '&[data-soui-state="active"]': {
          color: Token.tabsActiveFontColor,
          background: Token.tabsActiveBackgroundColor,
          fontWeight: 'bold',
        },

        '&[data-soui-state="disabled"]': {
          color: Token.tabsDisabledFontColor,
          cursor: 'not-allowed',
        },
        '&:not([data-soui-state="active"])': {
          '&:after': {
            position: 'absolute',
            content: '""',
            bottom: 0,
            left: 0,
            width: '100%',
            height: 1,
            background: Token.tabsBorderColor,
          },
        },

        '&:not([data-soui-state="active"]):not([data-soui-state="disabled"]):hover $lineInner': {
          background: Token.tabsHoverBackgroundColor,
        },
        '&:not([data-soui-state="active"]):not([data-soui-state="disabled"]):active $lineInner': {
          background: Token.tabsClickBackgroundColor,
        },
      },
    },
    '$headerWrapper[data-soui-shape="dash"] &': {
      '& $tab': {
        padding: `${Token.tabsLinePaddingY} ${Token.tabsLinePaddingX}`,
        '&[data-soui-state="active"]': {
          color: Token.tabsActiveFontColor,
          background: Token.tabsActiveBackgroundColor,
          fontWeight: 'bold',
        },

        '&:not([data-soui-state="active"]):not([data-soui-state="disabled"]):hover $lineInner': {
          background: Token.tabsHoverBackgroundColor,
        },
        '&:not([data-soui-state="active"]):not([data-soui-state="disabled"]):active  $lineInner': {
          background: Token.tabsClickBackgroundColor,
        },

        '&[data-soui-state="disabled"]': {
          color: Token.tabsDisabledFontColor,
          cursor: 'not-allowed',
        },
      },
    },
    '$headerWrapper[data-soui-shape="fill"] &': {
      '& $tab': {
        '&[data-soui-state="active"]': {
          fontWeight: 'bold',
        },

        '&[data-soui-state="disabled"]': {
          color: Token.tabsDisabledFontColor,
          cursor: 'not-allowed',
        },
      },
    },
    '$headerWrapper[data-soui-shape="button"] &': {
      '& $tab': {
        '&[data-soui-state="disabled"]': {
          cursor: 'not-allowed',
        },
      },
    },
  },
  button: {},
  line: {},
  lineInner: {
    // transition: 'all .2s',
    borderRadius: Token.tabsTabBorderRadius,
    padding: `${Token.tabsLineInnerPaddingY} ${Token.tabsLineInnerPaddingX}`,
  },
  fillInner: {
    // transition: 'all .2s',
    borderRadius: Token.tabsTabBorderRadius,
    padding: `${Token.tabsFillInnerPaddingY} ${Token.tabsFillInnerPaddingX}`,
  },
  iconInner: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '50%',
    width: 22,
    height: 22,
  },
  bordered: {},
  card: {},
  dash: {},
  active: {},
  disabled: {},
  show: {
    display: 'block',
  },

  prev: {
    textAlign: 'center',
    color: Token.tabsArrowFontColor,
    lineHeight: Token.lineHeightDynamic,
  },
  next: {
    textAlign: 'center',
    color: Token.tabsArrowFontColor,
    lineHeight: Token.lineHeightDynamic,
  },
  extra: {},
  collapsible: {
    padding: `${Token.tabsActionHorizontalPaddingY} ${Token.tabsActionHorizontalPaddingX}`,
    marginRight: Token.tabsNearlyMargin,
    cursor: 'pointer',
    borderLeft: `1px solid transparent`,
    borderRight: `1px solid transparent`,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    color: Token.tabsArrowFontColor,
    '& svg': {
      width: 14,
      textAlign: 'center',
      transform: 'rotate(-90deg)',
      transition: 'transform .2s',
    },
    // after
    '&:after': {
      position: 'absolute',
      content: '""',
      left: 3,
      top: 3,
      width: 22,
      height: 22,
      background: 'transparent',
      borderRadius: '50%',
      zIndex: -1,
    },
    '&:hover': {
      '&:after': {
        background: Token.tabsHoverBackgroundColor,
      },
    },
  },
  collapsed: {
    '& $collapsible': {
      '& svg': {
        transform: 'rotate(-180deg)',
      },
    },
  },
  sticky: {},
};

export default tabsStyle;
