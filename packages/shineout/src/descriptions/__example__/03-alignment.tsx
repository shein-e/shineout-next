/**
 * cn - 标签文本对齐
 *    --
 * en - Label text alignment
 *    --
 */
import React from 'react';
import { Descriptions } from 'shineout';

const data = [
  {
    label: 'Name',
    value: 'Mai Mai',
  },
  {
    label: 'Residence',
    value: 'Beijing',
  },
  {
    label: 'Address',
    value: 'Yingdu Building',
  },
  {
    label: 'Hometown',
    value: 'Beijing',
  },
  {
    label: 'Mobile',
    value: '187-2323-9834',
  },
];

export default () => {
  return (
    <div>
      <Descriptions
        items={data}
        title='User Info'
        layout='horizontal'
        colon={` :`}
        style={{ marginBottom: '24px' }}
      />
      <Descriptions
        items={data}
        title='User Info'
        layout='horizontal'
        colon={` :`}
        labelStyle={{ textAlign: 'right' }}
        style={{ marginBottom: '24px' }}
      />
      <Descriptions items={data} title='User Info' layout='vertical' colon={` :`} />
    </div>
  );
};