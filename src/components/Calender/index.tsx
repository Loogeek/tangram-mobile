import React, { FC, useEffect, useState } from "react";
import classNames from "classnames";

import "./index.less";

const classPrefix = `amd-calender`;

export interface CalenderProps {
  value?: Date;
}

const Calender: FC<CalenderProps> = (p) => {
  const { value = new Date() } = p;
  const [date, setDate] = useState(value);
  const [curSelectedDate, setSelectedDate] = useState(date.getDate());
  const monthNames = [
    "一月",
    "二月",
    "三月",
    "四月",
    "五月",
    "六月",
    "七月",
    "八月",
    "九月",
    "十月",
    "十一月",
    "十二月",
  ];

  function getMonthLastDate() {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  }

  function getMonthFirstDay() {
    return date.getDay();
  }

  function handlePrevMonth() {
    setDate(new Date(date.getFullYear(), date.getMonth() - 1, 1));
  }

  function handleNextMonth() {
    setDate(new Date(date.getFullYear(), date.getMonth() + 1, 1));
  }

  function handlerChangeSelectedDate(day: number) {
    setSelectedDate(day);
  }

  function renderDates() {
    const lastDate = getMonthLastDate();
    const days = [];

    for (let i = 0; i < getMonthFirstDay(); i++) {
      days.push(<div className="empty" key={`empty-${i}`}></div>);
    }

    for (let i = 0; i < lastDate; i++) {
      const day = i + 1;
      days.push(
        <div
          key={day}
          className={classNames("day", {
            selected: day === curSelectedDate,
          })}
          onClick={() => handlerChangeSelectedDate(day)}
        >
          {day}
        </div>
      );
    }

    return days;
  }

  return (
    <div className={classPrefix}>
      <div className={`${classPrefix}-header`}>
        <button onClick={handlePrevMonth}>&lt;</button>
        <span>{`${date.getFullYear()}年${monthNames[date.getMonth()]}`}</span>
        <button onClick={handleNextMonth}>&gt;</button>
      </div>
      <div className={`${classPrefix}-dates`}>
        <div className="day">日</div>
        <div className="day">一</div>
        <div className="day">二</div>
        <div className="day">三</div>
        <div className="day">四</div>
        <div className="day">五</div>
        <div className="day">六</div>
        {renderDates()}
      </div>
    </div>
  );
};

export default Calender;
