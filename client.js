const net = require("net");

const connect = function () {
  const conn = net.createConnection({
    host: 'localhost',// IP address here,
    port: 50541,// PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on('connect', () => {
    console.log('connection succeful')
    conn.write('Name: ABU')
    // conn.write('Move: down')
    setInterval(() => {
      conn.write('Move: down')
    }, 500)
    // setTimeout(() => {
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

// "Move: up" - move up one square (unless facing down)
// "Move: down" - move down one square (unless facing up)
// "Move: left" - move left one square (unless facing right)
// "Move: right" - move left one square (unless facing left)