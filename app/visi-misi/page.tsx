import React from "react";

const cards = [
  { title: "Visi", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
  { title: "Misi", text: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
  { title: "Tujuan", text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris." },
];

export default function VisiMisiPage() {
  return (
    <div className="p-6 grid gap-6 md:grid-cols-3">
      {cards.map((card) => (
        <div key={card.title} className="bg-white rounded-lg shadow p-6 flex flex-col items-center">
          <h2 className="text-xl font-bold mb-2">{card.title}</h2>
          <p className="text-gray-600 text-center">{card.text}</p>
        </div>
      ))}
    </div>
  );
}
