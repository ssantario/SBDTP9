import React, { useState, useEffect } from "react";

const CounterDemo = () => {
  const [count, setCount] = useState(0);

  // useEffect untuk menampilkan alert ketika count habis dibagi 10
  useEffect(() => {
    if (count !== 0 && count % 10 === 0) {
      alert(`The count ${count} is divisible by 10!`);
    }
  }, [count]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md text-center">
        <h1 className="text-2xl font-bold mb-4">Counter Demo</h1>
        <p className="text-4xl font-semibold mb-6">{count}</p>
        <div className="flex space-x-4">
          <button
            onClick={() => setCount(count + 1)}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 ease-in-out duration-300 transform hover:scale-105"
          >
            +
          </button>
          <button
            onClick={() => setCount(count - 1)}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700 ease-in-out duration-300  transform hover:scale-105"
          >
            -
          </button>
          <button
            onClick={() => setCount(0)}
            className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-700 ease-in-out duration-300  transform hover:scale-105"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default CounterDemo;