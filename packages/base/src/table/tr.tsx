import React from 'react';
import { util } from '@sheinx/hooks';
import type { TableFormatColumn } from '@sheinx/hooks';
import classNames from 'classnames';
import { TableProps } from './table.type';
import { TbodyProps } from './tbody.type';
import Icons from '../icons';

interface TrProps extends Pick<TableProps<any, any>, 'jssStyle' | 'rowClassName'> {
  row: {
    data: any[];
    colSpan: number;
    rowSpan: number;
  }[];
  rowIndex: number;
  columns: TableFormatColumn<any>[];
  isScrollX: boolean;
  colgroup: (number | undefined)[];
  rawData: any;
  expanded: boolean;
  expandCol: TbodyProps['expandHideCol'] | undefined;
  rowClickExpand: boolean;
  handleExpandClick: (col: TableFormatColumn<any>, data: any, index: number) => void;
}

const Tr = (props: TrProps) => {
  const tableClasses = props.jssStyle?.table?.();
  const getTdStyle = (column: TableFormatColumn<any>, colSpan: number) => {
    const index = column.index;
    if (!props.isScrollX) return;
    if (column.fixed === 'left') {
      const left = props.colgroup.slice(0, index).reduce((a, b) => (a || 0) + (b || 0), 0);
      return {
        ...column.style,
        left: left,
      } as React.CSSProperties;
    }
    if (column.fixed === 'right') {
      const right = props.colgroup
        .slice(index + 1 + colSpan)
        .reduce((a, b) => (a || 0) + (b || 0), 0);
      return {
        ...column.style,
        right: right,
      } as React.CSSProperties;
    }
    return column.style;
  };

  const renderContent = (col: TrProps['columns'][number], data: any, index: number) => {
    if (col.type === 'expand' || col.type === 'row-expand') {
      return (
        <div className={tableClasses?.expandIcon}>
          {props.expanded ? Icons.Expand : Icons.OdecShrink}
        </div>
      );
    }
    return util.render(col.render as any, data, index);
  };

  const renderTds = (cols: TrProps['columns'], data: TrProps['row']) => {
    const tds: React.ReactNode[] = [];
    let skip = 0;
    const lastRowIndex = data.length - 1;
    for (let i = 0; i < cols.length; i++) {
      if (skip > 0) {
        skip--;
        continue;
      }
      const col = cols[i];
      if (col.render && data[i]) {
        const last = cols[i + (data[i].colSpan || 1) - 1] || {};

        const td = (
          <td
            key={col.key}
            colSpan={data[i].colSpan}
            rowSpan={data[i].rowSpan}
            className={classNames(
              col.className,
              col.fixed === 'left' && tableClasses?.cellFixedLeft,
              col.fixed === 'right' && tableClasses?.cellFixedRight,
              (col.lastFixed || col.firstFixed || last.lastFixed) && tableClasses?.cellFixedLast,
              lastRowIndex === i && tableClasses?.cellIgnoreBorder,
            )}
            style={getTdStyle(col, data[i].colSpan)}
          >
            {renderContent(col, data[i].data, col.index)}
          </td>
        );
        tds.push(td);
        if (data[i].colSpan) skip = data[i].colSpan - 1;
      }
    }
    return tds;
  };

  const renderExpand = () => {
    if (!props.expanded) return null;
    const expandCol = props.expandCol;
    if (expandCol && typeof expandCol.render === 'function') {
      const renderFunc = expandCol.render(props.rawData, props.rowIndex);
      if (typeof renderFunc === 'function') {
        return (
          <tr>
            <td
              className={tableClasses?.cellIgnoreBorder}
              colSpan={props.columns.length}
              style={{ padding: 0 }}
            >
              {renderFunc()}
            </td>
          </tr>
        );
      }
    }
  };

  return (
    <>
      <tr
        className={props?.rowClassName?.(props.rawData, props.rowIndex)}
        onClick={() => {
          if (props.rowClickExpand) {
            props.handleExpandClick(
              props.expandCol as TableFormatColumn<any>,
              props.rawData,
              props.rowIndex,
            );
          }
        }}
      >
        {renderTds(props.columns, props.row)}
      </tr>
      {renderExpand()}
    </>
  );
};

export default Tr;
