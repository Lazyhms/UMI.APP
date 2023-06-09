import RemoteSelect, { RemoteOption } from '@/components/Select';
import { useRef } from 'react';

const TableList: React.FC<unknown> = () => {

  const childRef = useRef<RemoteOption>(null);

  return (
    <RemoteSelect
      mode='multiple'
      options={[
        {
          label: "请选择",
          value: undefined
        }
      ]}
      ref={childRef}
      remote={{
        url: '/api/dorpDown/roles',
        pageSize: 10,
        responseInterceptors: (e: any) => {
          e.data.data = e.data.data.map((m: any) => {
            return {
              ...m,
              label1: m.label,
            }
          });
          return e;
        }
      }}
      onSelect={(e) => {
        const item = childRef.current?.options?.find((f: any) => f.value === e);
        console.log(item);
      }}
    ></RemoteSelect>
  );
};

export default TableList;
