/**
 * cn - 尺寸大小
 *    -- 设置 `size` 属性改变输入框组件的尺寸大小。内置三种尺寸：small、default、large
 * en - Size
 *    -- Set the size property to change the size of the input box component. There are three built-in sizes available: small, default, and large.
 */

import React from 'react';
import { Select } from 'shineout';

const data = ['red', 'orange', 'yellow', 'green', 'cyan', 'blue', 'violet'];

export default () => {
  return (
    <div style={{ display: 'flex', gap: 24, alignItems: 'center' }}>
      <Select width={240} size='small' placeholder='Select Color' data={data} keygen />
      <Select width={240} placeholder='Select Color' data={data} keygen renderItem={(d) => d} />
      <Select width={240} placeholder='Select Color' size='large' data={data} keygen />
    </div>
  );
};
