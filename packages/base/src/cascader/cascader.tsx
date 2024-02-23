import React, { useState, useRef, useEffect } from 'react';
import classNames from 'classnames';
import {
  util,
  usePersistFn,
  usePopup,
  useCascader,
  useFilter,
  KeygenResult,
  UnMatchedData,
  ObjectKey,
  usePrevious,
} from '@sheinx/hooks';
import { AbsoluteList } from '../absolute-list';
import useInnerTitle from '../common/use-inner-title';
import AnimationList from '../animation-list';
import { CascaderClasses } from '@sheinx/shineout-style';
import { CascaderProps } from './cascader.type';
import CascaderList from './list';
import CascaderFilterList from './filter-list';
import Result from '../select/result';
import Icons from '../icons';

const Cascader = <DataItem, Value extends KeygenResult[]>(
  props: CascaderProps<DataItem, Value>,
) => {
  const {
    jssStyle,
    style,
    width,
    height,
    className,
    size,
    maxLength,
    defaultValue,
    wideMatch,
    unmatch = true,
    value: valueProp,
    data = [],
    keygen,
    childrenKey = 'children' as ObjectKey<DataItem>,
    border = true,
    open: openProp,
    mode,
    innerTitle,
    multiple,
    disabled,
    clearable,
    underline,
    trim,
    loading,
    loader,
    final,
    expandTrigger,
    finalDismiss,
    renderItem: renderItemProp = (d) => d as React.ReactNode,
    renderResult: renderResultProp,
    placeholder,
    focusSelected = true,
    compressedClassName,
    resultClassName,
    renderUnmatched,
    renderOptionList,
    showArrow = true,
    compressed,
    compressedBound,
    position: positionProp = 'bottom-left',
    absolute,
    zIndex,
    onFocus,
    onBlur,
    onChange: onChangeProp,
    onFilter: onFilterProp,
    onCollapse: onCollapseProp,
  } = props;
  const styles = jssStyle?.cascader?.() as CascaderClasses;
  const rootStyle: React.CSSProperties = {
    ...style,
    width,
  };
  const [focused, setFocused] = useState(false);
  const [enter] = useState(false);
  const [path, setPath] = useState<KeygenResult[]>([]);
  const isPreventBlur = useRef(false);
  const blurEvent = useRef<(() => void) | null>();
  const inputRef = useRef<HTMLInputElement>();
  const isFirstRender = useRef(true);
  const prevData = usePrevious(data);

  const {
    filterText,
    inputText,
    filterData,
    firstMatchNode,
    setInputText,
    setFilterText,
    filterFunc,
    onFilter,
    onResetFilter,
  } = useFilter({
    treeData: data,
    keygen,
    childrenKey,
    firstMatch: true,
    onFilter: onFilterProp,
    showHitDescendants: true,
    onAdvancedFilter: false,
  });

  const { datum, value, onChange } = useCascader({
    data,
    control: 'value' in props,
    keygen,
    unmatch,
    disabled,
    mode,
    defaultValue,
    childrenKey,
    value: valueProp,
    onChange: onChangeProp,
  });

  const onCollapse = usePersistFn((collapse: boolean) => {
    onCollapseProp?.(collapse);

    if (isPreventBlur.current) {
      isPreventBlur.current = false;
      return;
    }

    if (blurEvent.current && !collapse) {
      blurEvent.current();
      blurEvent.current = null;
    }
  });

  const { open, position, targetRef, popupRef, openPop, closePop } = usePopup({
    open: openProp,
    onCollapse: onCollapse,
    disabled: false,
    trigger: 'click',
    position: positionProp as any,
  });

  const rootClass = classNames(
    className,
    styles?.wrapper,
    disabled === true && styles?.wrapperDisabled,
    !!open && styles?.wrapperFocus,
    focused && styles?.wrapperFocus && disabled !== true,
    innerTitle && styles?.wrapperInnerTitle,
    size === 'small' && styles?.wrapperSmall,
    size === 'large' && styles?.wrapperLarge,
    status === 'error' && styles?.wrapperError,
    clearable && styles?.clearable,
    !border && styles?.wrapperNoBorder,
    !!underline && styles?.wrapperUnderline,
    {
      [styles?.multiple]: multiple,
    },
  );

  const getRenderItem = (data: DataItem, active?: boolean, id?: Value[0]) => {
    return typeof renderItemProp === 'function'
      ? renderItemProp(data, active, id)
      : (data[renderItemProp] as React.ReactNode);
  };

  const getFinal = () => {
    return expandTrigger === 'hover-only' || !!final;
  };

  const shouldFinal = getFinal();

  const renderItem = getRenderItem;

  const getRenderResult = (
    data: DataItem,
    index?: number,
    nodes?: (DataItem | UnMatchedData)[],
  ) => {
    if (!renderResultProp) return renderItem(data);
    return typeof renderResultProp === 'function'
      ? renderResultProp(data, nodes as DataItem[])
      : (data[renderResultProp] as React.ReactNode);
  };

  // 点击结果框的处理方法
  const handleResultClick = usePersistFn(() => {
    if (disabled === true) return;
    if (!open) {
      openPop();
      inputRef.current?.focus();
    } else {
      closePop();
      inputRef.current?.blur();
    }
  });

  const handleFilter = (text: string) => {
    onFilter?.(trim ? text.trim() : text);
  };

  // path change
  const handlePathChange = (
    id: KeygenResult,
    item: DataItem | null,
    nextPath: Value,
    fromClick?: boolean,
  ) => {
    if (fromClick && item && childrenKey) {
      let leaf = !item[childrenKey] || (item[childrenKey] as DataItem[]).length === 0;
      if (loader && typeof loader === 'function' && item[childrenKey] === undefined) {
        leaf = false;
      }
      if (finalDismiss && leaf) closePop();
    }

    setPath([...nextPath, id]);
  };

  const updatePath = () => {
    if (!filterText || !firstMatchNode) {
      setPath([]);
      return;
    }
    const key = util.getKey(keygen, firstMatchNode);
    const current = datum.getPath(key) || { path: [] };
    setPath([...current.path, key]);
  };

  const updatePathByValue = () => {
    if (mode !== undefined) return;
    if (!value || !value.length) {
      setPath([]);
      return;
    }

    const lastValue = value[value.length - 1];
    const lastData = datum.getDataByValues(lastValue);

    if (lastData === null || util.isUnMatchedData(lastData)) {
      return;
    }

    try {
      let { path } = datum.getPath(lastValue) || {};
      path = path || [];
      handlePathChange(lastValue, null, path as Value);
    } catch (e) {
      console.error(e);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    // 回车或下箭头可打开下拉列表
    if (e.keyCode === 13 || e.code === 'Enter') {
      if (!open) {
        handleResultClick();
        return;
      }
    }

    // tab 可关闭下拉列表
    if (e.keyCode === 9 || e.code === 'Tab') {
      onBlur?.(e);
      if (open) closePop();
      return;
    }
  };

  const handleChange = (item: Value) => {
    onChange?.(item);
  };

  const handleClear = (e: React.MouseEvent) => {
    e.stopPropagation();
    setPath([]);

    if (mode !== undefined) {
      datum.setValue([]);
    }
    handleChange([] as unknown as Value);
    if (open) closePop();
  };

  const getDataByValues = (values?: Value) => {
    const nextValues = values
      ?.filter((v) => !util.isEmpty(v))
      .reduce((acc, val) => acc.concat(val as any), []);

    if (!nextValues) return [];
    return datum.getDataByValues(nextValues);
  };

  const checkUnMatched = (item: any) => {
    return util.isUnMatchedData(item);
  };

  const handleFocus: React.FocusEventHandler<HTMLDivElement> = usePersistFn((e: any) => {
    setFocused(true);
    onFocus?.(e);
  });

  const handleBlur: React.FocusEventHandler<HTMLDivElement> = usePersistFn((e: any) => {
    setFocused(false);
    onBlur?.(e);
  });

  // innerTitle 模式
  const renderInnerTitle = useInnerTitle({
    open: open || !!value,
    size,
    jssStyle,
    innerTitle,
  });

  const renderClearable = () => {
    return (
      <span className={styles.clearIcon} onClick={handleClear}>
        {Icons.PcCloseCircleFill}
      </span>
    );
  };

  const renderIcon = () => {
    let isEmpty;
    if (mode !== undefined) {
      isEmpty = !value || (Array.isArray(value) && value.length === 0);
    } else {
      isEmpty = util.isEmpty(value);
    }

    if ((clearable && !isEmpty && open) || (clearable && !isEmpty && enter && disabled !== true)) {
      return renderClearable();
    }
    if (!mode !== undefined && !showArrow) return null;
    const defaultIcon = compressed ? Icons.More : Icons.ArrowDown;
    return (
      <span
        className={classNames(styles.arrowIcon, open && !compressed && styles.arrowIconOpen)}
        onClick={handleResultClick}
      >
        {defaultIcon}
      </span>
    );
  };

  const renderResult = () => {
    const result = (
      <div className={classNames(styles?.result)}>
        <Result<DataItem, Value>
          trim={trim}
          jssStyle={jssStyle}
          size={size}
          value={value}
          closeable={false}
          data={data}
          focus={open}
          keygen={keygen}
          disabled={disabled}
          maxLength={maxLength}
          compressed={compressed}
          compressedBound={compressedBound}
          compressedClassName={compressedClassName}
          multiple={true}
          placeholder={placeholder}
          renderItem={renderItem as any}
          childrenKey={childrenKey}
          renderResult={getRenderResult}
          resultClassName={resultClassName}
          renderUnmatched={renderUnmatched}
          allowOnFilter={'onFilter' in props || 'onAdvancedFilter' in props}
          focusSelected={focusSelected}
          inputText={inputText}
          filterText={filterText}
          setInputText={setInputText}
          onFilter={handleFilter}
          onRef={inputRef}
          onResetFilter={onResetFilter}
          checkUnMatched={checkUnMatched}
          getDataByValues={getDataByValues as any}
        ></Result>
      </div>
    );

    return (
      <div
        ref={targetRef}
        className={classNames(
          styles?.resultWrapper,
          styles?.wrapperPaddingBox,
          styles?.wrapperInnerTitleTop,
          styles?.wrapperInnerTitleBottom,
        )}
        onClick={handleResultClick}
      >
        {renderInnerTitle(result)}
      </div>
    );
  };

  const renderList = () => {
    let tempData: any = filterData;
    const isMultiple = multiple === true || mode !== undefined;
    let cascaderList: React.ReactNode[] = [
      <CascaderList
        jssStyle={jssStyle}
        datum={datum}
        renderItem={renderItem as any}
        keygen={keygen}
        loader={loader}
        onPathChange={handlePathChange}
        onChange={handleChange}
        multiple={isMultiple}
        expandTrigger={expandTrigger}
        childrenKey={childrenKey}
        shouldFinal={shouldFinal}
        key='root'
        data={tempData}
        id={path[0]}
        parentId=''
        path={[] as unknown as Value}
      />,
    ];
    const childs = path.map((p, i) => {
      tempData =
        tempData &&
        tempData instanceof Array &&
        tempData.find((d) => {
          const nid = datum.getKey(d, path[i - 1]);
          return nid === p;
        });
      if (tempData && tempData[childrenKey] && (tempData[childrenKey] as DataItem[]).length > 0) {
        tempData = tempData[childrenKey];
        return (
          <CascaderList<DataItem, Value>
            datum={datum}
            jssStyle={jssStyle}
            renderItem={renderItem as any}
            keygen={keygen}
            loader={loader}
            onPathChange={handlePathChange}
            onChange={handleChange}
            multiple={isMultiple}
            expandTrigger={expandTrigger}
            childrenKey={childrenKey}
            shouldFinal={shouldFinal}
            key={p}
            data={tempData}
            id={path[i + 1]}
            parentId={path[i]}
            path={path.slice(0, i + 1) as Value}
          />
        );
      }
      return null;
    });

    if (childs) {
      cascaderList = cascaderList.concat(childs);
    }

    const listStyle = data && data.length === 0 ? { height: 'auto', width: '100%' } : { height };
    return (
      <div className={classNames(styles.listContent)} style={listStyle}>
        {cascaderList}
      </div>
    );
  };

  const renderNormalList = () => {
    if (!open && isFirstRender.current) {
      return null;
    }
    isFirstRender.current = false;
    const list = renderList();
    return renderOptionList ? renderOptionList(list, { loading: !!loading }) : list;
  };

  const renderFilterList = () => {
    const listStyle = data && data.length === 0 ? { height: 'auto', width: '100%' } : { height };
    return (
      <div className={classNames(styles.listContent)} style={listStyle}>
        <CascaderFilterList
          jssStyle={jssStyle}
          data={filterData!}
          datum={datum}
          wideMatch={wideMatch}
          filterFunc={filterFunc}
          renderItem={renderItem}
          childrenKey={childrenKey}
          shouldFinal={shouldFinal}
          onChange={handleChange}
          setInputText={setInputText}
          setFilterText={setFilterText}
          onPathChange={handlePathChange}
        ></CascaderFilterList>
      </div>
    );
  };

  const renderPanel = () => {
    if (!filterText || (filterText && mode !== undefined) || (data && data.length === 0)) {
      return renderNormalList();
    }
    return renderFilterList();
  };

  useEffect(() => {
    if (!prevData) return;
    if (prevData !== data) {
      datum.setData(data);
    }
  }, [data]);

  useEffect(() => {
    if (!value) return;
    datum.setValue(value);
    updatePathByValue();
  }, [value]);

  useEffect(() => {
    if (filterText !== undefined) {
      updatePath();
    }
  }, [filterText]);

  useEffect(() => {
    updatePathByValue();
    if (mode !== undefined && loader && [0, 1, 2].includes(mode)) {
      console.error(
        new Error(`The mode ${mode} is not supported when loader setted. Only 3 or 4 can be set.`),
      );
    }
  }, []);

  return (
    <div
      tabIndex={disabled === true ? -1 : 0}
      data-soui-type={'input'}
      className={rootClass}
      style={rootStyle}
      onBlur={handleBlur}
      onFocus={handleFocus}
      onKeyDown={handleKeyDown}
    >
      {renderResult()}
      {renderIcon()}
      <AbsoluteList
        adjust
        focus={open}
        fixedWidth
        absolute={absolute}
        zIndex={zIndex}
        position={position}
        popupGap={4}
        popupEl={popupRef.current}
        parentElement={targetRef.current}
      >
        <AnimationList
          onRef={popupRef}
          show={open}
          className={classNames(styles?.pickerWrapper)}
          display={'block'}
          type='scale-y'
          duration={'fast'}
        >
          {renderPanel()}
        </AnimationList>
      </AbsoluteList>
    </div>
  );
};
export default Cascader;