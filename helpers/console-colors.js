const chalk = require('chalk')

const errorMsg = chalk.bgKeyword('white').redBright;
const succesMsg = chalk.bgKeyword('green').white

module.exports = {
    errorMsg,
    succesMsg
}