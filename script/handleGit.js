const simpleGit = require('simple-git')
let repo_status = null

const options = {
    baseDir: process.cwd(), // 设置git的工作目录
    binary: 'git', // 如果您的git可执行文件不在系统路径中，则需要设置此项
    maxConcurrentProcesses: 6, // 在此处设置为您的CPU内核数
    trimmed: false, // 如果为true，则删除前导和尾随空格
}
const git = simpleGit(options)

function handleGit() {
    // 1. 检查是否安装git
    git
        .status(null, (err, status) => {
            repo_status = status
            if(repo_status.not_added.length > 0) {
                addAll()
            }
            if(repo_status.modified.length > 0) {
                commit(`update ${repo_status.modified.length} files`)
            }
            if(repo_status.ahead > 0) {
                push()
            }
        })
}

function addAll() {
    git.add('./*', (err, result) => {
        console.log('addAll')
    })
}

function commit(msg) {
    git.commit(msg, (err, result) => {
        console.log('commit')
    })
}
function push() {
    git.push('origin', 'master', (err, result) => {
        console.log('push')
    })
}

handleGit()


