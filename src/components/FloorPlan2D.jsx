import React, { useRef, useState, useEffect } from "react";

export default function FloorPlan2D({ onUpdatePlan }) {
  const canvasRef = useRef(null);
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw rooms
    rooms.forEach(room => {
      ctx.fillStyle = "rgba(0, 150, 255, 0.3)";
      ctx.fillRect(room.x, room.y, room.width, room.height);
      ctx.strokeStyle = "black";
      ctx.strokeRect(room.x, room.y, room.width, room.height);
      ctx.fillStyle = "black";
      ctx.fillText(room.name, room.x + 5, room.y + 15);
    });
  }, [rooms]);

  const addRoom = () => {
    const newRoom = { name: "Room", x: 50, y: 50, width: 100, height: 80 };
    setRooms(prev => [...prev, newRoom]);
    onUpdatePlan([...rooms, newRoom]);
  };

  return (
    <div>
      <canvas ref={canvasRef} width={800} height={600} style={{ border: "1px solid #ccc" }} />
      <button onClick={addRoom} className="mt-2 px-3 py-1 bg-blue-600 text-white rounded">
        Add Room
      </button>
    </div>
  );
}