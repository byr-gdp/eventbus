import resolve from 'rollup-plugin-node-resolve';
import common from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';

const formatList = ['umd', 'cjs', 'iife']
const basicConfig = {
  input: 'index.js',
  output: {
    file: 'dist/bundle.js',
    format: 'umd',
    name: 'EventBus', // FIXME: read package.json name
  },
};

const plugins = [
  resolve(),
  common(),
  babel(),
];

const finalConfigs = formatList.map((el) => {
  const cloneConfig = JSON.parse(JSON.stringify(basicConfig));
  cloneConfig.output.format = el;
  cloneConfig.output.file = `dist/bundle.${el}.js`;
  cloneConfig.plugins = plugins;
  return cloneConfig;
});

export default finalConfigs;
