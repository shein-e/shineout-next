/**
 * cn - 点击加载
 *    -- 通过使用 footer 属性，可实现加载更多功能
 * en - Load more
 *    -- Through use the footer attribute, you can load more functions.
 */
import React, { useState, useEffect } from 'react';
import { List, Button, TYPE } from 'shineout';
import { user } from '@sheinx/mock';

interface ListItem {
  id: number;
  time: string;
  start: string;
  height: number;
  salary: number;
  office: string;
  country: string;
  office5: string;
  position: string;
  lastName: string;
  firstName: string;
}
type ListProps = TYPE.List.Props<ListItem, ListItem>;
type ListRenderItem = ListProps['renderItem'];

const style: React.CSSProperties = {
  padding: 16,
  display: 'flex',
  lineHeight: '22px',
  alignItems: 'center',
  justifyContent: 'center',
};

const App: React.FC = () => {
  const [current, setCurrent] = useState(1);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<ListItem[]>([]);

  const fetchData = (c: number) => {
    setLoading(true);
    user.fetch
      .get('List', { current: c, pageSize: 5, sorter: {}, username: '' })
      .then((_data: { data: ListItem[] }) => {
        setData([...data, ..._data.data]);
        setCurrent(c);
        setLoading(false);
      });
  };

  const onClick = () => {
    if (loading) return;

    fetchData(current + 1);
  };

  const renderItem: ListRenderItem = (rowData) => (
    <div style={{ display: 'flex', alignItems: 'center', width: '100%', fontSize: '14px' }}>
      <svg
        width='40'
        height='40'
        viewBox='0 0 40 40'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M0 20C0 8.95431 8.95431 0 20 0C31.0457 0 40 8.95431 40 20C40 31.0457 31.0457 40 20 40C8.95431 40 0 31.0457 0 20Z'
          fill='#E8EBF0'
        />
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M19.8301 21.0204C22.46 21.0204 24.592 18.8884 24.592 16.2585C24.592 13.6286 22.46 11.4966 19.8301 11.4966C17.2002 11.4966 15.0682 13.6286 15.0682 16.2585C15.0682 18.8884 17.2002 21.0204 19.8301 21.0204ZM16.7628 22.7211C13.9482 22.7211 11.6665 25.0028 11.6665 27.8174C11.6665 28.1963 11.9737 28.5034 12.3525 28.5034H27.6471C28.026 28.5034 28.3332 28.1963 28.3332 27.8174C28.3332 25.0028 26.0515 22.7211 23.2369 22.7211H16.7628Z'
          fill='#B3B7C1'
        />
      </svg>
      <div style={{ flex: 1, minWidth: 0, margin: '0 12px' }}>
        <div style={{ fontWeight: 'bold' }}>List Title</div>
        <div>{rowData.position}</div>
      </div>
      <div>
        <Button type='primary' mode='text'>
          Preview
        </Button>
        <Button type='primary' mode='text'>
          Edit
        </Button>
        <Button type='primary' mode='text'>
          Delete
        </Button>
      </div>
    </div>
  );

  const renderFooter = () => (
    <div style={style}>
      <Button size='small' loading={loading} onClick={onClick} type='primary'>
        load more
      </Button>
    </div>
  );

  useEffect(() => {
    fetchData(1);
  }, []);

  return <List keygen='id' data={data} bordered renderItem={renderItem} footer={renderFooter} />;
};

export default App;
