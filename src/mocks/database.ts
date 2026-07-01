import { Pool, PoolClient, QueryResult } from 'pg';

export class Database {
  private pool: Pool;

  constructor() {
    this.pool = new Pool({
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME
    });
  }

  async connect(): Promise<PoolClient> {
    return await this.pool.connect();
  }

  async executeQuery(
    query: string,
    values: (string | number | boolean | null)[] = []
  ): Promise<QueryResult> {
    return await this.pool.query(query, values);
  }

  async close(): Promise<void> {
    await this.pool.end();
  }
}
