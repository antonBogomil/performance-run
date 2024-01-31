import  check from './check.js'
import {program} from 'commander';

program
    .option('--url <url>', 'Specify the URL')
    .option('--n <number>', 'Specify the value for n')
    .option('--async [async]', 'Specify the async value', true) // Default is true
    .parse(process.argv);

const options = program.opts();

if (!options.url || !options.n) {
    console.error('Both --url and --n are required');
    process.exit(1);
}

check(options.url,options.n,options.async)
