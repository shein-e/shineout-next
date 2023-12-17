import React, { useRef, useEffect } from 'react';
import { SelectClasses } from '@sheinx/shineout-style';
import { ResultInputProps } from './result-input.type';
import { Input } from '../date-picker/result';

const ResultInput = (props: ResultInputProps) => {
  const {
    jssStyle,
    value,
    values,
    inputText,
    focus,
    multiple,
    onRef,
    onChange,
    onBindInput,
    onInputBlur,
    onResetFilter,
    onClearCreatedData,
  } = props;
  const styles = jssStyle?.select?.() as SelectClasses;
  const mirrorRef = useRef<HTMLSpanElement>(null);
  const inputRef = useRef<HTMLInputElement>();

  const bindInputRef = (ref: HTMLInputElement) => {
    inputRef.current = ref;
  };
  const handleBlur = (e: React.FocusEvent) => {
    if (e.target.value === value) {
      onClearCreatedData();
      return;
    }
    onInputBlur?.(inputText);
  };

  // 设置 input 宽度
  useEffect(() => {
    if (!multiple) return;
    if (!mirrorRef.current) return;
    const input = inputRef.current as HTMLInputElement;
    input.style.width = `${mirrorRef.current.offsetWidth}px`;
  }, [inputText, focus, value]);

  // 选中结果后，聚焦并全选 input
  useEffect(() => {
    if (!inputRef.current || !multiple) return;
    inputRef.current.focus();
    inputRef.current.select();
  }, [value, values]);

  // 聚焦时重置 filter
  useEffect(() => {
    onResetFilter();

    if (!focus) return;
    if (inputRef.current) {
      inputRef.current.focus();
      inputRef.current.select();
    }
  }, [focus]);

  // 注册 input ref
  useEffect(() => {
    if (!inputRef.current) return;
    onRef.current = inputRef.current;
    onBindInput?.(inputRef.current);
  }, []);

  return (
    <React.Fragment>
      <Input
        onRef={bindInputRef}
        style={{ width: multiple ? 12 : '100%' }}
        value={value}
        onChange={onChange}
        onBlur={handleBlur}
      ></Input>
      <span className={styles.inputMirror} ref={mirrorRef}>
        {inputText || value}
      </span>
    </React.Fragment>
  );
};

export default ResultInput;
