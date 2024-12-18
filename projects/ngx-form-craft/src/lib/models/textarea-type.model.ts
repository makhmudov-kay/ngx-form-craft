import { BaseField } from './common.model';

export interface TextareaField extends BaseField {
  type: 'textarea';
  textAreaConfigs: {
    sizeConfig?: { minRows: number; maxRows: number };
    maxCharacterCount?: number;
  };
}
