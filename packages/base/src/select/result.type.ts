import { UnMatchedData } from '@sheinx/hooks';
import { SelectProps, DatumType } from './select.type';

export type ResultType<Value> = UnMatchedData | Value;

export interface ResultProps<DataItem, Value>
  extends Pick<
    SelectProps<DataItem, Value>,
    | 'jssStyle'
    | 'size'
    | 'multiple'
    | 'trim'
    | 'placeholder'
    | 'innerTitle'
    | 'keygen'
    | 'data'
    | 'value'
    | 'noCache'
    | 'compressed'
    | 'compressedBound'
    | 'compressedClassName'
    | 'disabled'
    | 'prediction'
    | 'resultClassName'
    | 'renderItem'
    | 'renderUnmatched'
    | 'focusSelected'
    | 'onCreate'
    // | 'onFilter'
  > {
  datum: DatumType<DataItem, Value>;
  focus: boolean;
  resultRef: React.MutableRefObject<{ resetInput: () => void }>;
  renderResult: (data: DataItem, index?: number) => React.ReactNode;
  inputText?: string;
  filterText?: string;
  onRef: React.MutableRefObject<HTMLInputElement | undefined>;
  allowOnFilter: boolean;
  onFilter?: (text: string) => void;
  onInputBlur: (text?: string) => void;
  onResetFilter: () => void;
  onClearCreatedData: () => void;
}
