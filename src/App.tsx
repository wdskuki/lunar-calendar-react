import { useState } from "react";
import DateItem from "./components/dateItem";
import { getDayOfWeek } from './components/utils'

export default function App() {
  const year = 2024
  const month = 5
  const dateList = getDayOfWeek(year, month);
  // const dateList = Array.from({ length: 31 }, (_, i) => i + 1);
  const headerList = ["日", "一", "二", "三", "四", "五", "六"];

  const dateTableList: number[][] = [];
  let line: number[] = [];

  dateList.forEach((item, index) => {
    if((index + 1) % 7 !== 0) {
      line.push(item)
    }else {
      line.push(item)
      dateTableList.push([...line])
      line = []
    }
  })
  if(line.length) {
    dateTableList.push([...line])
  }

  // 当前活跃的日期
  const [activeDate, setActiveDate] = useState<number | string>();
 
  return (
    <table className="w-full">
      <thead>
        <tr>
          {headerList.map((item, itemIndex) => {
            return (
              <th key={itemIndex}>
                <DateItem key={item} date={item}  />
              </th>
            );
          })}
        </tr>
      </thead>

      <tbody>
        {dateTableList.map((line, lineIndex) => {
          return (
            <tr key={lineIndex}>
              {line.map((item, itemIndex) => {
                return (
                  <td key={itemIndex} onClick={() => setActiveDate(item)}>
                    <DateItem date={item} isActive={activeDate === item} topText="今日" bottomText="初十" />
                  </td>
                )
              })}
            </tr>
          )
        })}
      </tbody>
    </table>
  );
}
