"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

type Event = {
  id?: string;
  title: string;
  description: string;
  date: string;
};

export default function AdminPage() {
  const [authorized, setAuthorized] = useState(false);
  const [password, setPassword] = useState("");

  const [events, setEvents] = useState<Event[]>([]);
  const [newEvent, setNewEvent] = useState<Event>({
    title: "",
    description: "",
    date: "",
  });

  const ADMIN_PASSWORD = "campground123"; // change this

  // LOGIN
  const handleLogin = () => {
    if (password === ADMIN_PASSWORD) {
      setAuthorized(true);
      fetchEvents();
    } else {
      alert("Wrong password");
    }
  };

  // FETCH EVENTS
  const fetchEvents = async () => {
    const { data } = await supabase.from("events").select("*").order("date");
    setEvents(data || []);
  };

  // ADD EVENT
  const addEvent = async () => {
    if (!newEvent.title || !newEvent.date) return;

    await supabase.from("events").insert([newEvent]);

    setNewEvent({ title: "", description: "", date: "" });
    fetchEvents();
  };

  // DELETE EVENT
  const deleteEvent = async (id: string) => {
    await supabase.from("events").delete().eq("id", id);
    fetchEvents();
  };

  if (!authorized) {
    return (
      <div className="p-10 text-center">
        <h2 className="text-xl mb-4">Admin Login</h2>
        <input
          type="password"
          className="border p-2"
          placeholder="Enter password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          onClick={handleLogin}
          className="ml-2 px-4 py-2 bg-green-600 text-white rounded"
        >
          Login
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Events Admin</h1>

      {/* ADD EVENT */}
      <div className="mb-6 space-y-2">
        <input
          placeholder="Title"
          className="border p-2 w-full"
          value={newEvent.title}
          onChange={(e) =>
            setNewEvent({ ...newEvent, title: e.target.value })
          }
        />
        <input
          placeholder="Description"
          className="border p-2 w-full"
          value={newEvent.description}
          onChange={(e) =>
            setNewEvent({ ...newEvent, description: e.target.value })
          }
        />
        <input
          type="date"
          className="border p-2 w-full"
          value={newEvent.date}
          onChange={(e) =>
            setNewEvent({ ...newEvent, date: e.target.value })
          }
        />
        <button
          onClick={addEvent}
          className="bg-green-600 text-white px-4 py-2 rounded"
        >
          Add Event
        </button>
      </div>

      {/* EVENT LIST */}
      <div className="space-y-4">
        {events.map((event) => (
          <div
            key={event.id}
            className="p-4 border rounded flex justify-between items-center"
          >
            <div>
              <p className="font-semibold">{event.title}</p>
              <p className="text-sm text-gray-500">{event.date}</p>
            </div>

            <button
              onClick={() => deleteEvent(event.id!)}
              className="text-red-500"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}