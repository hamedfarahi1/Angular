import { KeyValue } from '@angular/common';

export interface TableData {
  columns: TableColumn[];
  actions?: {
    delete: boolean,
    update: boolean
  };
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
