let connection;

const setupInput = function (conn) {
  connection = conn;

  const stdin = process.stdin;  // create variable to hold the stdin object so we don't have to type process.stdin multiple times
  stdin.setRawMode(true); // Raw Mode allows us to listen for individual keypresses instead of waiting for the user to press enter
  stdin.setEncoding("utf8"); // utf8 encoding is set so that we can read the text data that is input
  stdin.resume(); // resume stdin so the program can listen for input
  stdin.on('data', (key) => {
    if (key === "\u0003") {
      process.exit();
    }
    if (key === "w") {
      connection.write("Move: up")
    }
    if (key === "a") {
      connection.write('Move: left')
    }
    if (key === "s") {
      connection.write('Move: down')
    }
    if (key === "d") {
      connection.write('Move: right')
    }
  })
  return stdin;   // return the stdin object so we can use it elsewhere in the program
};

module.exports = { setupInput }

// "Move: up" - move up one square (unless facing down)
// "Move: down" - move down one square (unless facing up)
// "Move: left" - move left one square (unless facing right)
// "Move: right" - move left one square (unless facing left)