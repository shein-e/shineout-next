/**
 * cn - 基本用法
 *    --
 * en - Basic
 *    --
 */
import React, { useState } from 'react';
import { Tree } from '@sheinx/base';
import { useTreeStyle, useCheckboxStyle } from '@sheinx/shineout-style';

export default () => {
  const treeStyle = useTreeStyle();
  const checkboxStyle = useCheckboxStyle();

  const data1 = [
    {
      id: '1',
      name: 'node 1',
      children: [
        {
          id: '1-1',
          name: 'node 1-1',
          children: [
            {
              id: '1-1-1',
              name: 'node 1-1-1',
              children: [
                { id: '1-1-1-1', name: 'node 1-1-1-1' },
                { id: '1-1-1-2', name: 'node 1-1-1-2' },
              ],
            },
            { id: '1-1-2', name: 'node 1-1-2' },
          ],
        },
        { id: '1-2', name: 'node 1-2' },
      ],
    },
    {
      id: '2',
      name: 'node 2',
      children: [
        { id: '2-1', name: 'node 2-1' },
        { id: '2-2', name: 'node 2-2' },
      ],
    },
    { id: '3', name: 'node 3', children: [{ id: '3-1', name: 'node 3-1' }] },
    { id: '4', name: 'node 4', children: [{ id: '4-1', name: 'node 4-1' }] },
    { id: '5', name: 'node 5', children: [{ id: '5-1', name: 'node 5-1' }] },
  ];

  const data2 = [
    { id: '3', name: 'node 3', children: [{ id: '3-1', name: 'node 3-1' }] },
    { id: '4', name: 'node 4', children: [{ id: '4-1', name: 'node 4-1' }] },
    { id: '5', name: 'node 5', children: [{ id: '5-1', name: 'node 5-1' }] },
  ];

  const [data, setData] = useState(data1);
  // const [value, setValue] = useState([]);
  // const handleChange = () => {};

  const handleClick = () => {
    setData(data2);
  };
  // const handleChange = () => {};
  return (
    <div>
      <button type='button' onClick={handleClick}>
        change data
      </button>
      <Tree
        // value={value}
        // onChange={handleChange}
        jssStyle={{ tree: treeStyle, checkbox: checkboxStyle }}
        parentClickExpand
        data={data}
        renderItem='name'
      ></Tree>
    </div>
  );
};
