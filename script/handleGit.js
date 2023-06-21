const simpleGit = require('simple-git')
const shell = require("shelljs")

const options = {
    baseDir: process.cwd(), // 设置git的工作目录
    binary: 'git', // 如果您的git可执行文件不在系统路径中，则需要设置此项
    maxConcurrentProcesses: 6, // 在此处设置为您的CPU内核数
    trimmed: false, // 如果为true，则删除前导和尾随空格
}
const git = simpleGit(options)

function handleGit() {
    shell.exec('git add .');

    git
        .status(null, (err, status) => {
            console.log('status', status)
        })

}

handleGit()


