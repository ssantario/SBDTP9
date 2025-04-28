import React from "react";
import Card from "./Components/Card";
import CounterDemo from "./Components/Counter";

const data = [
  {
    id: 1,
    title: "Card 1",
    body: "This is the body of Card 1.",
    image: "https://picsum.photos/500",
  },
  {
    id: 2,
    title: "Card 2",
    body: "This is the body of Card 2.",
    image: "https://picsum.photos/500",
  },
  {
    id: 3,
    title: "Card 3",
    body: "This is the body of Card 3.",
    image: "https://picsum.photos/500",
  },
];

export default function App() {
  return (
    <div className="bg-gray-100 flex flex-col items-center">
      {/* Bagian Card */}
      <div className="mt-20 container mx-auto p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {data.map((item) => (
          <Card 
            key={item.id} 
            title={item.title} 
            body={item.body} 
            image={item.image} 
          />
        ))}
      </div>

      {/* Bagian Counter */}
      <div className="w-full flex items-center justify-center bg-gray-100 mt-8">
        <CounterDemo />
      </div>
    </div>
  );
}