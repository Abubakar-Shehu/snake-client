const net = require("net");

const connect = function () {
  const conn = net.createConnection({
    host: 'localhost',
    port: 50541,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on('connect', () => {
    console.log('connection succeful')
    conn.write('Name: ABU')
    // conn.write('Move: down')
    // setInterval(() => {
    //   conn.write('Move: down')
    // }, 500)
    // // setTimeout(() => {
    //   conn.write('Move: left')
    // }, 700)
    // setTimeout(() => {
    //   conn.write('Move: up')
    // }, 1000)
  });

  conn.on('data', (data) => {
    console.log(data)
  })

  return conn;
};

module.exports = connect;

