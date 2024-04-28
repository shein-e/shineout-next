import React, { useState, useRef, useEffect } from 'react';
import classNames from 'classnames';
import { util, addResizeObserver, UnMatchedData, KeygenResult } from '@sheinx/hooks';
import { ResultProps } from './result.type';
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
    convertBr,
    onRef,
    onFilter,
    onInputBlur,
    onClearCreatedData,
    getDataByValues,
    checkUnMatched,
    onRemove,
    onResultItemClick,
    data,
  } = props;
  const value = (
    [null, undefined, ''].includes(valueProp as any) ? [] : multiple ? valueProp : [valueProp]
  ) as Value;

  const [more, setMore] = useState(-1);
  const [shouldResetMore, setShouldResetMore] = useState(false);

  const resultRef = useRef<HTMLDivElement>(null);
  const prevMore = useRef(more);
  const showInput = allowOnFilter;
  const mounted = useRef(false);

  const styles = props.classes;
  const rootClass = classNames(
    styles.resultTextWrapper,
    compressed && styles.compressedWrapper,
    multiple && styles.multipleResultWrapper,
    multiple && compressed && styles.multipleCompressedWrapper,
  );

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

  const empty = isEmptyResult();

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
    let placeholder2 = empty ? placeholder : '';
    if (!multiple && valueProp && valueProp !== 0) {
      const result = getDataByValues(value);
      // 获取合法的 content
      const content = renderResultContent(result[0]);
      if (typeof content === 'string') {
        placeholder2 = content;
      }
    }
    return (
      <React.Fragment key='input'>
        <Input
          isEmpty={empty}
          classes={props.classes}
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
          placeholder={placeholder2}
        ></Input>
      </React.Fragment>
    );
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
        if (key === undefined) key = index;
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
        closable={closeable && 'only'}
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

  const renderNbsp = () => {
    return (
      <React.Fragment key='space'>
        <div className={styles.space}>&nbsp;</div>
      </React.Fragment>
    );
  };

  const renderPlaceholder = () => {
    if (showInput) {
      return renderInput();
    }
    if (!placeholder) return renderNbsp();

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
      classes={props.classes}
      jssStyle={props.jssStyle}
      data={result}
      size={size}
      more={moreNumber}
      compressed={compressed}
      compressedClassName={compressedClassName}
      showNum={moreNumber}
    ></More>
  );

  const renderResult = () => {
    if (empty) {
      return renderPlaceholder();
    }
    let result = [];
    if (multiple) {
      result.push(compressed ? renderMultipleResultMore : renderMultipleResult());
      if (showInput) {
        result.push(renderInput());
      } else if (result.length === 0) {
        result.push(renderNbsp());
      }
    } else {
      result.push(renderSingleResult());
      if (showInput) {
        if (focus) {
          result = [renderInput()];
        } else {
          result.push(renderInput());
        }
      }
    }
    return result;
  };

  const handleResetMore = () => {
    if (!compressed) return;
    if (isCompressedBound()) return;
    setMore(-1);
    setShouldResetMore(true);
  };

  useEffect(() => {
    if (!focus && mounted.current) {
      props.setInputText('');
      setTimeout(() => {
        onFilter?.('', 'blur');
      }, 400);
    }
    mounted.current = true;
  }, [focus]);

  useEffect(() => {
    handleResetMore();
  }, [valueProp, data]);

  useEffect(() => {
    if (
      shouldResetMore &&
      more === -1 &&
      compressed &&
      resultRef.current &&
      (props.value || [].length)
    ) {
      const tagClassName = `.${styles.tag.split(' ')[0]}`;
      if (shouldResetMore && isArray(value) && (value || []).length) {
        const newMore = getResetMore(
          showInput,
          resultRef.current,
          resultRef.current.querySelectorAll(tagClassName),
        );
        prevMore.current = newMore;
        setMore(newMore);
        setShouldResetMore(false);
      } else {
        setShouldResetMore(false);
      }
    } else {
      setShouldResetMore(false);
    }
  }, [shouldResetMore]);

  useEffect(() => {
    if (!resultRef.current) return;
    if (!compressed) return;
    if (isCompressedBound()) return;

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
