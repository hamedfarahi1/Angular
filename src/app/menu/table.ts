import { KeyValue } from '@angular/common';

export interface TableData {
  columns: TableColumn[];
  actions?: {
    action: boolean;
    delete: boolean,
    update: boolean,
    other?: {
      label: string,
      link?: string,
      value?: string,
      icon?: string
    }
  };
  rate?: boolean;
}

export interface TableService {
  read(result?: KeyValue<string, string>[]);
  delete(data: any);
}

export interface TableColumn {
  field: string;
  label: string;
  type?: string;
  pipeParam?: KeyValue<number, string>[];
  format?: string;
  filter?: boolean;
  filterValue?: string;
}
