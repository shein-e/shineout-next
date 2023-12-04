import React, { useState } from 'react';
import { KeygenResult } from '@sheinx/hooks';
import { SelectClasses } from '@sheinx/shineout-style';
import { BaseListProps } from './select.type';
import { VirtualScrollList } from '../virtual-scroll';
import ListOption from './list-option';

const List = <DataItem, Value>(props: BaseListProps<DataItem, Value>) => {
  const {
    jssStyle,
    data,
    height,
    size,
    optionWidth,
    header,
    keygen,
    datum,
    multiple,
    // groupKey,
    itemsInView = 10,
    lineHeight: lineHeightProp,
    loading,
    controlType,
    hideCreateOption,
    renderItem: renderItemProp = (d) => d as React.ReactNode,
    closePop,
  } = props;

  const style = {
    width: optionWidth,
    height,
  };
  const styles = jssStyle?.select?.() as SelectClasses;
  const [hoverIndex, setHoverIndex] = useState(hideCreateOption ? -1 : 0);

  const getLineHeight = () => {
    if (lineHeightProp) return lineHeightProp;
    if (size === 'small') return 26;
    if (size === 'default') return 34;
    if (size === 'large') return 42;
    return 34;
  };

  const handleHover = (index: number, force?: boolean) => {
    if ((controlType === 'mouse' || force) && hoverIndex !== index) {
      setHoverIndex(index);
    }
  };

  const lineHeight = getLineHeight();

  const renderLoading = () => {
    return <div>loading</div>;
  };

  const renderHeader = () => {
    return <div>header</div>;
  };

  const renderItem = (item: DataItem, index: number, key: KeygenResult) => {
    return (
      <React.Fragment key={key}>
        <ListOption
          datum={datum}
          closePop={closePop}
          jssStyle={jssStyle}
          index={index}
          data={item}
          multiple={multiple}
          onHover={handleHover}
          renderItem={renderItemProp}
        ></ListOption>
      </React.Fragment>
    );
  };

  // const renderGroupTitle = (d) => {
  //   const title = d[groupKey];
  //   return (
  //     <div className={styles.optionGroupTitle} title={title}>
  //       {title}
  //     </div>
  //   );
  // };

  const renderList = () => {
    if (loading) return renderLoading();

    return (
      <VirtualScrollList
        data={data}
        keygen={keygen}
        tag={'ul'}
        tagClassName={styles.virtualList}
        height={height}
        lineHeight={lineHeight}
        rowsInView={itemsInView}
        renderItem={renderItem}
      ></VirtualScrollList>
    );
  };

  return (
    <div className={styles.list} style={style}>
      {header && renderHeader()}
      {renderList()}
    </div>
  );
};

export default List;
