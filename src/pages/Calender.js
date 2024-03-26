import React from 'react';
import { useState } from 'react';

// Define the number of days in each month
const DAYS_IN_MONTH = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

const Calendar = () => {
  // Get current date
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth();

  // Initialize state
  const [year, setYear] = useState(currentYear);
  const [month, setMonth] = useState(currentMonth);

  // Function to handle month change
  const handleMonthChange = (delta) => {
    let newYear = year;
    let newMonth = month + delta;
    if (newMonth < 0) {
      newMonth = 11;
      newYear--;
    } else if (newMonth > 11) {
      newMonth = 0;
      newYear++;
    }
    setYear(newYear);
    setMonth(newMonth);
  };

  // Calculate the number of days in the current month
  const numDaysInMonth = (year, month) => {
    if (month === 1 && (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
      return 29; // Leap year
    }
    return DAYS_IN_MONTH[month];
  };

  // Generate array of days in the current month
  const days = [];
  const numDays = numDaysInMonth(year, month);
  for (let i = 1; i <= numDays; i++) {
    days.push(i);
  }

  return (
    <div>
        <nav className="bg-white border-gray-200 dark:border-gray-600 dark:bg-gray-900">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
                    <a href="https://flowbite.com" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Blog<sub>site</sub></span>
                    </a>
                    <div id="mega-menu-full-cta" className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1">
                        <ul className="flex flex-col mt-4 font-medium md:flex-row md:mt-0 md:space-x-8 rtl:space-x-reverse">
                            <li>
                                <a href="/home" className="block py-2 px-3 text-gray-900 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700" aria-current="page">Home</a>
                            </li>
                            <li>
                                <button id="mega-menu-full-cta-dropdown-button" data-collapse-toggle="mega-menu-full-cta-dropdown" data-dropdown-placement="bottom" className="flex items-center justify-between w-full py-2 px-3 font-medium text-gray-900 border-b border-gray-100 md:w-auto hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700">Company <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
                                </svg></button>
                            </li>
                            <li>
                                <a href="#" className="block py-2 px-3 text-gray-900 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700">Marketplace</a>
                            </li>
                            <li>
                                <a href="#" className="block py-2 px-3 text-gray-900 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700">Resources</a>
                            </li>
                            <li>
                                <a href="#" className="block py-2 px-3 text-gray-900 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

    <div className="container mx-auto mt-8">
      <div className="flex justify-between items-center mb-4">
        <button className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300" onClick={() => handleMonthChange(-1)}>
          Previous Month
        </button>
        <h1 className="text-2xl font-bold">
          {new Date(year, month).toLocaleString('default', { month: 'long', year: 'numeric' })}
        </h1>
        <button className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300" onClick={() => handleMonthChange(1)}>
          Next Month
        </button>
      </div>
      <div className="grid grid-cols-7 gap-2">
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
          <div key={day} className="text-center font-semibold text-gray-800">
            {day}
          </div>
        ))}
        {Array(numDays)
          .fill()
          .map((_, index) => (
            <div key={index + 1} className="text-center py-2 border border-gray-200">
              {index + 1}
            </div>
          ))}
      </div>
    </div>
    </div>
  );
};

export default Calendar;
