"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const MONTHS = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

function getDaysInMonth(year: number, month: number) {
  return new Date(year, month + 1, 0).getDate();
}

function getFirstDayOfMonth(year: number, month: number) {
  return new Date(year, month, 1).getDay();
}

function getOrdinalSuffix(day: number) {
  if (day > 3 && day < 21) return "th";
  switch (day % 10) {
    case 1: return "st";
    case 2: return "nd";
    case 3: return "rd";
    default: return "th";
  }
}

interface FlipCalendarProps {
  accentColor?: string;
}

export default function FlipCalendar({ accentColor = "#f97316" }: FlipCalendarProps) {
  const today = new Date();
  const [selectedDate, setSelectedDate] = useState(today);
  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [currentYear, setCurrentYear] = useState(today.getFullYear());
  const [flipDirection, setFlipDirection] = useState<"up" | "down">("up");

  const daysInMonth = getDaysInMonth(currentYear, currentMonth);
  const firstDay = getFirstDayOfMonth(currentYear, currentMonth);

  const goToPrevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  const goToNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  const handleDateSelect = (day: number) => {
    const newDate = new Date(currentYear, currentMonth, day);
    const oldDay = selectedDate.getDate();
    setFlipDirection(day > oldDay ? "up" : "down");
    setSelectedDate(newDate);
  };

  const selectedDay = selectedDate.getDate();
  const selectedMonth = selectedDate.getMonth();
  const selectedYear = selectedDate.getFullYear();

  // Generate calendar days
  const calendarDays = [];
  for (let i = 0; i < firstDay; i++) {
    calendarDays.push(null);
  }
  for (let day = 1; day <= daysInMonth; day++) {
    calendarDays.push(day);
  }

  return (
    <div className="flex flex-col sm:flex-row items-center justify-center gap-6 p-8">
      {/* Flip Display */}
      <div 
        className="relative w-[200px] h-[220px] rounded-xl overflow-hidden"
        style={{ 
          border: `2px solid ${accentColor}`,
          background: "linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)"
        }}
      >
        {/* Month Header */}
        <div 
          className="flex items-center justify-between px-4 py-2"
          style={{ backgroundColor: accentColor }}
        >
          <span className="text-sm font-bold text-white tracking-wider">
            {MONTHS[selectedMonth].toUpperCase()}
          </span>
          <FiChevronLeft className="text-white" />
        </div>

        {/* Day Display with Flip Animation */}
        <div className="flex flex-col items-center justify-center h-[160px] relative overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedDay}
              initial={{ 
                rotateX: flipDirection === "up" ? -90 : 90,
                opacity: 0 
              }}
              animate={{ 
                rotateX: 0,
                opacity: 1 
              }}
              exit={{ 
                rotateX: flipDirection === "up" ? 90 : -90,
                opacity: 0 
              }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="text-center"
              style={{ perspective: "500px" }}
            >
              <div className="text-7xl font-bold text-white">
                {selectedDay}
                <span className="text-3xl align-top">{getOrdinalSuffix(selectedDay)}</span>
              </div>
            </motion.div>
          </AnimatePresence>
          <div className="text-zinc-400 text-lg mt-2">{selectedYear}</div>
        </div>
      </div>

      {/* Calendar Picker */}
      <div className="bg-white rounded-xl p-4 shadow-lg min-w-[280px]">
        {/* Month Navigation */}
        <div className="flex items-center justify-between mb-4">
          <button
            onClick={goToPrevMonth}
            className="p-1 hover:bg-zinc-100 rounded transition-colors"
            aria-label="Go back 1 month"
          >
            <FiChevronLeft className="w-5 h-5 text-zinc-600" />
          </button>
          <span className="font-medium text-zinc-800">
            {MONTHS[currentMonth].slice(0, 3)} {currentYear}
          </span>
          <button
            onClick={goToNextMonth}
            className="p-1 hover:bg-zinc-100 rounded transition-colors"
            aria-label="Go forward 1 month"
          >
            <FiChevronRight className="w-5 h-5 text-zinc-600" />
          </button>
        </div>

        {/* Day Headers */}
        <div className="grid grid-cols-7 gap-1 mb-2">
          {DAYS.map((day) => (
            <div 
              key={day} 
              className="text-center text-xs font-medium text-zinc-400 py-1"
            >
              {day}
            </div>
          ))}
        </div>

        {/* Calendar Grid */}
        <div className="grid grid-cols-7 gap-1">
          {calendarDays.map((day, index) => (
            <button
              key={index}
              onClick={() => day && handleDateSelect(day)}
              disabled={!day}
              className={`
                w-9 h-9 rounded-full text-sm font-medium transition-all
                ${!day ? "invisible" : ""}
                ${day === selectedDay && currentMonth === selectedMonth && currentYear === selectedYear
                  ? "text-white"
                  : "text-zinc-700 hover:bg-zinc-100"
                }
              `}
              style={
                day === selectedDay && currentMonth === selectedMonth && currentYear === selectedYear
                  ? { backgroundColor: accentColor }
                  : {}
              }
              aria-label={day ? `${DAYS[new Date(currentYear, currentMonth, day).getDay()]} ${MONTHS[currentMonth].slice(0, 3)} ${String(day).padStart(2, '0')} ${currentYear}` : undefined}
              aria-pressed={day === selectedDay && currentMonth === selectedMonth && currentYear === selectedYear}
            >
              {day}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
