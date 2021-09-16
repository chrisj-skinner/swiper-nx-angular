const { CLIEngine } = require('eslint/lib/cli-engine');
const log = require('eslint/lib/shared/logging');

const engine = new CLIEngine();

const formatters = [
  {
    name: 'html',
    output: 'file',
  },
  {
    name: 'json',
    output: 'file',
    parser: (result) => JSON.parse(result),
  },
  {
    name: 'stylish',
    output: 'console',
  },
];

module.exports = function (results, args) {
  var output = { reporters: {} };
  for (const formatterConfig of formatters || []) {
    const formatter = engine.getFormatter(formatterConfig.name);
    const formatterResult = formatter(results, args);

    switch (formatterConfig.output) {
      case 'console':
        log.info(formatterResult);
        break;
      case 'file':
        output.reporters[formatterConfig.name] = formatterConfig.parser
          ? formatterConfig.parser(formatterResult)
          : formatterResult;
    }
  }

  return JSON.stringify(output);
};
