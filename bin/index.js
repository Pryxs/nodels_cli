#!/usr/bin/env node
const chalk = require('chalk');
const fs = require('fs')

const getFiles = (dir = process.cwd(), files = []) => {
    try {
        const fileList = fs.readdirSync(dir)
        for (const file of fileList) {
            const path = `${dir}/${file}`
            files.push(path)
        }
        return files
    } catch (err) {
        console.log(chalk.red.bold('Directory not found'))
    }
}

const arg = process.argv[2]

const files = getFiles(arg ?? undefined)

if(files) {
    console.log(chalk.blue.bold(`\n ${files.length} items found \n`))
    for (const item of files) {
        if (fs.statSync(item).isDirectory()) {
            console.log(chalk.yellow(item))
        } else {
            console.log(chalk.green(item))
        }
    }
    console.log('')
}