import * as mysql from "mysql";
import { MySQL_Response } from "../types";
import { sqlConfig } from "../config";

const pools = mysql.createPoolCluster();
Object.keys(sqlConfig).forEach((config) =>
  pools.add(config, sqlConfig[config])
);

export const Query = <T = MySQL_Response>(
  queryString: string,
  usePool: string,
  values?: any
) => {
  return new Promise<T>((resolve, reject) => {
    const formattedSQL = mysql.format(queryString, values);
    console.log(`${formattedSQL}`);

    pools.getConnection(usePool, (connectionError, connection) => {
      if (connectionError) return reject(connectionError);

      console.log(
        `Connected to ${usePool} with thread ID ${connection.threadId}`
      );

      connection.query(formattedSQL, (error, results) => {
        connection.release();
        error ? reject(error) : resolve(results);
      });
    });
  });
};
