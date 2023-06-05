#!/usr/bin/env node
const args = process.argv.splice(process.execArgv.length + 2),
	data = args[0];
const artigo = require('../lib/index.js').artigo;
artigo(data);
