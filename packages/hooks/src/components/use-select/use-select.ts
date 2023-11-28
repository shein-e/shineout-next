// import { getKey } from '../../utils';
// import { KeygenResult } from '../../common/type';
import { useInputAble } from '../../common/use-input-able';
import { useListSelect } from '../../common/use-list-select';
import useSelectGroup from './use-select-group';
import { BaseSelectProps } from './use-select.type';

const useSelect = <DataItem, Value>(props: BaseSelectProps<DataItem, Value>) => {
  const {
    data,
    control,
    defaultValue,
    beforeChange,
    format,
    disabled,
    multiple,
    prediction,
    groupBy,
    value: valueProp,
    onChange: onChangeProp,
  } = props;

  const { value, onChange } = useInputAble({
    value: valueProp,
    control,
    defaultValue,
    beforeChange,
    onChange: onChangeProp,
  });
  const {} = useSelectGroup({ data, groupBy });

  const datum = useListSelect({
    data,
    format,
    value,
    multiple,
    disabled,
    onChange,
    prediction,
  });

  return {
    value,
    datum,
  };
};

export default useSelect;
