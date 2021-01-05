const read = require("./read");
const add = require("./add");
const deleteEntry = require("./delete");
const updateEntry = require("./update")

const keyword = process.argv[2];

switch (keyword) {
  case "read":
    read();
    break;
  case "create":
    add();
    break;
  case "delete":
    deleteEntry();
    break;
  case "update":
    updateEntry();
    break;
}
