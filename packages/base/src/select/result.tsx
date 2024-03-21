import React, { useState, useRef, useEffect } from 'react';
import classNames from 'classnames';
import { util, addResizeObserver, UnMatchedData, KeygenResult } from '@sheinx/hooks';
import { ResultProps } from './result.type';
import { SelectClasses } from './select.type';
import Input from './result-input';
import { getResetMore } from './result-more';
import More from './result-more';
import Tag from '../tag';

const { isObject, isEmpty, isNumber, getKey, isUnMatchedData, isFunc, isArray } = util;

const Result = <DataItem, Value>(props: ResultProps<DataItem, Value>) => {
  const {
    jssStyle,
    multiple,
    size,
    value: valueProp,
    focus,
    keygen,
    disabled,
    trim,
    closeable = true,
    separator,
    maxLength,
    placeholder,
    filterText,
    inputText,
    compressed,
    compressedBound,
    compressedClassName,
    renderUnmatched,
    renderResult: renderResultProp,
    renderResultContent: renderResultContentProp,
    allowOnFilter,
    setInputText,
    convertBr,
    onRef,
    onFilter,
    onInputBlur,
    onClearCreatedData,
    // crud
    getDataByValues,
    checkUnMatched,
    onRemove,
    onResultItemClick,
  } = props;
  const value = (multiple ? valueProp : [valueProp]) as Value;

  const [more, setMore] = useState(-1);

  const resultRef = useRef<HTMLDivElement>(null);
  const shouldResetMore = useRef(false);
  const prevMore = useRef(more);
  const showInput = allowOnFilter && focus;
  const mounted = useRef(false);

  const styles = jssStyle?.select?.() as SelectClasses;
  const rootClass = classNames(
    styles.resultTextWrapper,
    compressed && styles.compressedWrapper,
    multiple && styles.multipleResultWrapper,
    multiple && compressed && styles.multipleCompressedWrapper,
  );

  const isCompressedBound = () => {
    return compressedBound && isNumber(compressedBound) && compressedBound >= 1;
  };

  const getCompressedBound = () => {
    if (isCompressedBound()) {
      return compressedBound;
    }
    return more;
  };

  const handleResultItemClick = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    item: DataItem,
  ) => {
    onResultItemClick?.(e, item);
  };

  const renderInput = () => {
    return (
      <React.Fragment key='input'>
        <Input
          jssStyle={jssStyle}
          style={{ width: 12 }}
          value={filterText}
          trim={trim}
          focus={focus}
          multiple={multiple}
          maxLength={maxLength}
          values={value}
          onRef={onRef}
          inputText={inputText}
          onChange={onFilter!}
          convertBr={convertBr}
          onInputBlur={onInputBlur}
          onClearCreatedData={onClearCreatedData!}
        ></Input>
      </React.Fragment>
    );
  };

  const renderResultContent = (
    data: DataItem | UnMatchedData,
    index?: number,
    nodes?: (DataItem | UnMatchedData)[],
  ) => {
    if (checkUnMatched(data)) {
      const _data = data as UnMatchedData;
      if (isFunc(renderUnmatched)) return renderUnmatched(_data.value);
      return isObject(_data.value)
        ? renderResultProp(_data.value as DataItem, index, nodes)
        : _data.value;
    }
    return renderResultProp(data as DataItem, index, nodes);
  };

  const renderResultItem = (
    item: DataItem | UnMatchedData,
    index: number,
    nodes?: (DataItem | UnMatchedData)[],
  ): React.ReactNode => {
    let key: KeygenResult;
    if (isUnMatchedData(item)) {
      if (isFunc(keygen)) {
        key = keygen(item.value, index);
      } else {
        key = item.value;
      }
    } else {
      key = getKey(keygen, item as DataItem, index);
    }
    const handleClose = () => {
      onRemove?.(item, key, index);
    };
    let isDisabled;
    if (util.isFunc(disabled)) {
      isDisabled = disabled(item as DataItem);
    } else {
      isDisabled = disabled;
    }
    let resultClassName;
    if (util.isFunc(props.resultClassName)) {
      resultClassName = props.resultClassName(key as DataItem);
    } else {
      resultClassName = props.resultClassName;
    }

    const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      handleResultItemClick(e, item as DataItem);
    };

    const content = renderResultContent(item, index, nodes);

    if (!content) return null;

    if (renderResultContentProp) {
      return renderResultContentProp({
        key,
        size,
        disabled: isDisabled,
        className: classNames(styles.tag, styles.hideTag, resultClassName),
        children: content,
        onClick: handleClick,
        ...util.getDataAttribute({ type: disabled === true ? 'dark' : undefined }),
      });
    }

    return (
      <Tag
        key={key}
        disabled={isDisabled}
        size={size}
        style={{ opacity: more === index ? 0 : 1 }}
        className={classNames(styles.tag, resultClassName)}
        closable='only'
        onClose={closeable && handleClose}
        onClick={handleClick}
        jssStyle={jssStyle as any}
        inlineStyle={true}
        {...util.getDataAttribute({ type: disabled === true ? 'dark' : undefined })}
      >
        {content}
      </Tag>
    );
  };

  const isEmptyResult = () => {
    if (!value) return true;

    if (isArray(value) && value.length <= 0) return true;
    const values = getDataByValues(value);
    const hasValue =
      values.findIndex((item, index) => {
        const cur = renderResultContent(item, index, values);
        return !isEmpty(cur);
      }) >= 0;

    return !hasValue;
  };

  const showPlaceholder = placeholder && isEmptyResult();

  const renderNbsp = () => {
    return (
      <React.Fragment key='space'>
        <div className={styles.space}>&nbsp;</div>
      </React.Fragment>
    );
  };

  const renderPlaceholder = () => {
    if (focus && showInput && showPlaceholder) {
      return renderInput();
    }

    return (
      <span className={classNames(styles.placeholder, styles.ellipsis)}>
        <span>{placeholder}</span>
      </span>
    );
  };

  const renderSingleResult = () => {
    if (isEmptyResult()) return renderNbsp();
    const result = getDataByValues(value);
    const content = renderResultContent(result[0]);

    return (
      <span key='single' className={styles.ellipsis}>
        {content}
      </span>
    );
  };

  const renderMultipleResult = () => {
    if (isEmptyResult()) return renderNbsp();
    // [TODO] separator 处理逻辑后续交给 hooks 处理，此处临时处理
    let nextValue = value;
    if (separator && util.isString(valueProp)) {
      nextValue = valueProp.split(separator) as Value;
    }
    const values = getDataByValues(nextValue);
    const result = values.map((v, i) => {
      if (renderResultContentProp && i !== values.length - 1) {
        return [
          renderResultItem(v, i, values),
          <span key={`separator-${i}`} className={classNames(styles.tag, styles.hideTag)}>
            /
          </span>,
        ];
      }
      return renderResultItem(v, i, values);
    });
    return result;
  };

  const result = renderMultipleResult() as React.ReactNode[];
  const moreNumber = getCompressedBound();
  const renderMultipleResultMore = (
    <More
      keygen={keygen}
      key='more'
      jssStyle={jssStyle}
      data={result}
      size={size}
      more={moreNumber}
      compressed={compressed}
      compressedClassName={compressedClassName}
      showNum={moreNumber}
    ></More>
  );

  const renderResult = () => {
    let result = [];
    if (multiple) {
      result.push(compressed ? renderMultipleResultMore : renderMultipleResult());
      if (showInput) {
        result.push(renderInput());
      } else if (result.length === 0) {
        result.push(renderNbsp());
      }
    } else {
      if (showInput) {
        result = [renderInput()];
      } else {
        result.push(renderSingleResult());
      }
    }

    return showPlaceholder ? renderPlaceholder() : result;
  };

  const handleResetMore = () => {
    if (!compressed) return;
    shouldResetMore.current = true;
  };

  useEffect(() => {
    if (!multiple && showInput && valueProp) {
      const result = getDataByValues(value);
      // 获取合法的 content
      const content = renderResultContent(result[0]);
      // 仅在打开拉框时，将输入框的值设置为合法的选中的值
      if (focus && !isEmpty(content)) {
        setInputText(content as string);
      }
    }
    if (!focus && mounted.current) {
      onFilter?.('', 'blur');
    }
    mounted.current = true;
  }, [focus]);

  useEffect(() => {
    if (!focus) return;
    if (!resultRef.current) return;
    if (!compressed) return;
    if (isCompressedBound()) return;
    handleResetMore();
  }, [valueProp, focus]);

  useEffect(() => {
    if (!compressed) return;
    if (!resultRef.current) return;
    if (more === -1) {
      const tagClassName = `.${styles.tag.split(' ')[0]}`;
      if (shouldResetMore.current && isArray(value) && (value || []).length) {
        shouldResetMore.current = false;
        const newMore = getResetMore(
          showInput,
          resultRef.current,
          resultRef.current.querySelectorAll(tagClassName),
        );

        // 下次触发折叠逻辑的时候，将多余的 tag 隐藏，避免视图闪断
        if (newMore !== prevMore.current && prevMore.current === -1 && newMore > prevMore.current) {
          const tags = resultRef.current.querySelectorAll(tagClassName);
          tags.forEach((tag, index) => {
            if (index >= newMore) tag.setAttribute('style', 'opacity: 0');
          });
        }
        prevMore.current = newMore;
        setMore(newMore);
      }
    }
  }, [valueProp, more]);

  useEffect(() => {
    if (!resultRef.current) return;

    const cancelObserver = addResizeObserver(resultRef.current, handleResetMore, {
      direction: 'x',
    });

    return () => {
      cancelObserver();
    };
  }, []);

  return (
    <div ref={resultRef} className={rootClass}>
      {renderResult()}
    </div>
  );
};

export default Result;
