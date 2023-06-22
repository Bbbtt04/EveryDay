function getCurrentDay() {
    // 格式 2023年6月23日
    let date = new Date();
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate()
    day = `${year}年${month}月${day}日`
    return day;
}
module.exports = getCurrentDay();
