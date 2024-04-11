export function getDayOfWeek(year: number, month: number) {
  const dates = [];
  
  // 创建一个 Date 对象，设置为给定年份和月份的第一天
  const firstDayOfMonth = new Date(year, month - 1, 1);
  
  // 获取这个月的天数
  const daysInMonth = new Date(year, month, 0).getDate();
  
  // 循环遍历这个月的每一天
  for (let day = 1; day <= daysInMonth; day++) {
    // 创建一个 Date 对象，表示当前循环的日期
    const currentDate = new Date(year, month - 1, day);
    
    // 获取当前日期是星期几，返回值为 0（星期日）到 6（星期六）
    const dayOfWeek = currentDate.getDay();
    
    // 将日期和星期几添加到结果数组中
    dates.push({
      date: day,
      dayOfWeek: dayOfWeek
    });
  }
  return dates;
}

// // 例子：获取 2024 年 4 月的所有日期及对应的星期几
// const year = 2024;
// const month = 4;
// const result = getDates(year, month);
// console.log(result);
