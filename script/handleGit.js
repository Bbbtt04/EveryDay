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
        })
        .then(() => {
            if(repo_status.files.length === 0) {
                console.log('没有需要提交的文件')
                return
            } else {
                // 2. 添加文件
                git.add('./*')
                    .then(() => {
                        // 3. 提交文件
                        git.commit('提交文件')
                            .then(() => {
                                // 4. 推送到远程仓库
                                git.push('origin', 'master')
                                    .then(() => {
                                        console.log('提交成功')
                                    })
                                    .catch((err) => {
                                        console.log(err)
                                    })
                            })
                            .catch((err) => {
                                console.log(err)
                            })
                    })
                    .catch((err) => {
                        console.log(err)
                    })
            }
        })

}

handleGit()


