const pool = require("./mysql_pool");

exports.executeQuery = function (query, data) {
  return new Promise((resolve, reject) => {
    pool.getConnection(function (err, connection) {
      if (err) {
        connection.release();
        reject(err);
      }
      connection.query(query, data, function (err, rows) {
        connection.release();
        if (!err) {
          resolve({ rows: rows });
        } else {
          reject(err);
        }
      });
    });
  });
};
