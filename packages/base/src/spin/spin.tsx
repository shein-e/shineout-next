import classNames from 'classnames';
import { SpinClasses, SpinProps } from './spin.type';
import Spins from './spins';
import { useConfig } from '../config';

const Spin = (props: SpinProps = {}) => {
  const {
    jssStyle,
    className,
    children,
    style,
    loading,
    name: nameProps,
    tip: tipProps,
    tipClassName,
    color: colorProps,
    mode: modeProps,
    ignoreConfig = false,
  } = props;

  const config = useConfig();

  const getSpinName = () => {
    if (ignoreConfig) return props.name;
    const { spin } = config;
    if (!spin) return;

    if (typeof spin === 'string') {
      return spin;
    }

    if (typeof spin === 'object') {
      const { name } = spin;
      return name;
    }

    return;
  };

  const getSpinTip = () => {
    if (ignoreConfig) return props.tip;
    const { spin } = config;
    if (!spin || typeof spin !== 'object') return;
    const { tip } = spin;
    return tip;
  };

  const getSpinColor = () => {
    if (ignoreConfig) return props.color;
    const { spin } = config;
    if (!spin || typeof spin !== 'object') return;
    const { color } = spin;
    return color;
  };

  const getSpinMode = () => {
    if (ignoreConfig) return props.mode;
    const { spin } = config;
    if (!spin || typeof spin !== 'object') return;
    const { mode } = spin;
    return mode;
  };

  const name = nameProps ?? getSpinName() ?? 'default';

  const tip = tipProps ?? getSpinTip();

  const color = colorProps ?? getSpinColor();

  const mode = modeProps ?? getSpinMode() ?? 'vertical';

  const spinStyle = jssStyle?.spin?.() || ({} as SpinClasses);

  const contentClass = classNames(className, spinStyle.content, {
    [spinStyle.vertical]: mode === 'vertical',
    [spinStyle.horizontal]: mode === 'horizontal',
  });

  const renderSpin = () => {
    const n = name as keyof typeof Spins;
    if (Spins[n]) {
      const Comp = Spins[n];
      return (
        <Comp {...props} color={color} style={style} className={!tip ? className : undefined} />
      );
    }

    return null;
  };

  const renderTip = () => {
    return (
      <div className={classNames(tipClassName, spinStyle.tip)} style={{ color }}>
        {typeof tip === 'string' ? <span>{tip}</span> : tip}
      </div>
    );
  };

  const renderContent = () => {
    if (tip) {
      return (
        <div className={contentClass}>
          {renderSpin()}
          {tip && renderTip()}
        </div>
      );
    }

    return renderSpin();
  };
  const renderContainer = () => {
    return (
      <div className={classNames(className, spinStyle.container)}>
        {children}
        {loading && <div className={spinStyle.loading}>{renderContent()}</div>}
      </div>
    );
  };

  if (children) {
    return renderContainer();
  }

  return renderContent();
};

export default Spin;
