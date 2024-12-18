import { BaseField } from './common.model';

export interface SelectField extends BaseField {
  type: 'select';
  selectOptions: { label: string; value: string }[];
}
