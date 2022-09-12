export interface MysqlWrapper {
  query(queryString: String, queryConfig?: any[]): Promise<{ rows: any[] }>;
}
