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
  const [currentEvent, setCurrentEvent] = useState<Event>({
    title: "",
    description: "",
    date: "",
  });
  const [editingId, setEditingId] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);

  const ADMIN_PASSWORD = "12345";

  const handleLogin = () => {
    if (password === ADMIN_PASSWORD) {
      setAuthorized(true);
      setPassword("");
    } else {
      alert("Incorrect password");
    }
  };

  const fetchEvents = async () => {
    setIsLoading(true);
    const { data, error } = await supabase
      .from("events")
      .select("*")
      .order("date", { ascending: true });

    if (error) {
      console.error(error);
      alert("Error fetching events: " + error.message);
    } else {
      setEvents(data || []);
    }
    setIsLoading(false);
  };

  const saveEvent = async () => {
    if (!currentEvent.title.trim() || !currentEvent.date) {
      alert("Title and date are required");
      return;
    }

    setIsLoading(true);

    if (editingId) {
      const { error } = await supabase
        .from("events")
        .update({
          title: currentEvent.title.trim(),
          description: currentEvent.description.trim(),
          date: currentEvent.date,
        })
        .eq("id", editingId);
      if (error) alert("Error updating event: " + error.message);
      else alert("✅ Event updated successfully");
    } else {
      const { error } = await supabase.from("events").insert([{
        title: currentEvent.title.trim(),
        description: currentEvent.description.trim(),
        date: currentEvent.date,
      }]);
      if (error) alert("Error adding event: " + error.message);
      else alert("✅ Event added successfully");
    }

    setCurrentEvent({ title: "", description: "", date: "" });
    setEditingId(null);
    setShowEditModal(false);
    fetchEvents();
    setIsLoading(false);
  };

  const deleteEvent = async (id: string) => {
    if (!confirm("Are you sure you want to delete this event?")) return;
    const { error } = await supabase.from("events").delete().eq("id", id);
    if (error) alert("Error deleting event: " + error.message);
    else fetchEvents();
  };

  const editEvent = (event: Event) => {
    setEditingId(event.id!);
    setCurrentEvent({
      title: event.title,
      description: event.description || "",
      date: event.date,
    });
    setShowEditModal(true);
  };

  const cancelEdit = () => {
    setEditingId(null);
    setCurrentEvent({ title: "", description: "", date: "" });
    setShowEditModal(false);
  };

  useEffect(() => {
    if (authorized) fetchEvents();
  }, [authorized]);

  if (!authorized) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 pt-20">
        <div className="max-w-md w-full bg-white rounded-3xl shadow-xl p-10">
          <div className="text-center mb-8">
            <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
              <span className="text-3xl">🔑</span>
            </div>
            <h1 className="text-3xl font-bold text-gray-900">Admin Login</h1>
            <p className="text-gray-500 mt-2">Enter password to access event management</p>
          </div>

          <div className="space-y-4">
            <input
              type="password"
              placeholder="Enter admin password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleLogin()}
              className="w-full px-5 py-4 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-green-500 cursor-pointer"
            />
            <button
              onClick={handleLogin}
              className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-4 rounded-2xl transition cursor-pointer"
            >
              Login
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50" style={{ paddingTop: "100px" }}>

      <div className="max-w-3xl mx-auto px-6">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-12 gap-4">
          <div>
            <h1 className="text-4xl font-bold text-gray-900">Event Management</h1>
            <p className="text-gray-600 mt-2 text-lg">Add, edit, and manage your events</p>
          </div>
          <div className="text-sm text-gray-500 bg-white px-5 py-2.5 rounded-2xl shadow-sm">
            {events.length} event{events.length !== 1 ? "s" : ""}
          </div>
        </div>

        {/* Add New Event */}
        <div className="bg-white rounded-3xl shadow-sm p-10 mb-14">
          <h2 className="text-2xl font-semibold text-gray-900 mb-8 flex items-center gap-3">
            ➕ Add New Event
          </h2>

          <div className="space-y-8">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Event Title</label>
              <input
                type="text"
                placeholder="Annual General Meeting"
                value={currentEvent.title}
                onChange={(e) => setCurrentEvent({ ...currentEvent, title: e.target.value })}
                className="w-full px-6 py-4 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-green-600 transition"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Date</label>
              <input
                type="date"
                value={currentEvent.date}
                onChange={(e) => setCurrentEvent({ ...currentEvent, date: e.target.value })}
                className="w-full px-6 py-4 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-green-600 transition"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
              <textarea
                placeholder="Provide details about the event..."
                value={currentEvent.description}
                onChange={(e) => setCurrentEvent({ ...currentEvent, description: e.target.value })}
                rows={5}
                className="w-full px-6 py-4 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-green-600 transition resize-y"
              />
            </div>
          </div>

          <button
            onClick={saveEvent}
            disabled={isLoading || !currentEvent.title.trim() || !currentEvent.date}
            className="mt-10 w-full bg-green-600 hover:bg-green-700 disabled:bg-green-400 text-white font-semibold py-4 rounded-2xl transition cursor-pointer text-lg"
          >
            {isLoading ? "Adding..." : "Add Event"}
          </button>
        </div>

        {/* Events List */}
        <div className="space-y-8">
          <h2 className="text-2xl font-semibold text-gray-900">Upcoming Events</h2>

          {isLoading && events.length === 0 ? (
            <div className="text-center py-16 text-gray-500">Loading events...</div>
          ) : events.length === 0 ? (
            <div className="bg-white rounded-3xl p-16 text-center text-gray-500 shadow-sm">
              No events yet. Add your first event above.
            </div>
          ) : (
            events.map((event) => (
              <div
                key={event.id}
                className="bg-white rounded-3xl p-8 hover:shadow-md transition-all duration-300"
              >
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-8">
                  <div className="flex-1">
                    <div className="flex items-center gap-4">
                      <div className="text-4xl">📅</div>
                      <div>
                        <p className="font-semibold text-2xl text-gray-900">{event.title}</p>
                        <p className="text-green-600 font-medium mt-1">
                          {new Date(event.date).toLocaleDateString("en-US", {
                            weekday: "long",
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          })}
                        </p>
                      </div>
                    </div>

                    {event.description && (
                      <p className="mt-6 text-gray-600 leading-relaxed">
                        {event.description}
                      </p>
                    )}
                  </div>

                  <div className="flex gap-3 self-end sm:self-start">
                    <button
                      onClick={() => editEvent(event)}
                      className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-3 rounded-2xl font-medium transition cursor-pointer active:scale-95"
                    >
                      ✏️ Edit
                    </button>
                    <button
                      onClick={() => deleteEvent(event.id!)}
                      className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-2xl font-medium transition cursor-pointer active:scale-95"
                    >
                      🗑️ Delete
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      {/* ==================== PROFESSIONAL EDIT MODAL ==================== */}
      {showEditModal && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-3xl shadow-2xl w-full max-w-lg overflow-hidden border border-gray-200">   {/* Added border */}

            {/* Modal Header */}
            <div className="px-8 py-6 border-b border-gray-100 flex items-center justify-between bg-gray-50">
              <h2 className="text-2xl font-semibold text-gray-900 flex items-center gap-3">
                ✏️ Edit Event
              </h2>
              <button
                onClick={cancelEdit}
                className="text-4xl leading-none text-gray-400 hover:text-gray-600 transition cursor-pointer"
              >
                ×
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-10 space-y-8">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Event Title</label>
                <input
                  type="text"
                  value={currentEvent.title}
                  onChange={(e) => setCurrentEvent({ ...currentEvent, title: e.target.value })}
                  className="w-full px-6 py-4 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-green-600 transition"
                  placeholder="Enter event title"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Date</label>
                <input
                  type="date"
                  value={currentEvent.date}
                  onChange={(e) => setCurrentEvent({ ...currentEvent, date: e.target.value })}
                  className="w-full px-6 py-4 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-green-600 transition"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                <textarea
                  value={currentEvent.description}
                  onChange={(e) => setCurrentEvent({ ...currentEvent, description: e.target.value })}
                  rows={6}
                  className="w-full px-6 py-4 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-green-600 transition resize-y"
                  placeholder="Provide detailed description of the event..."
                />
              </div>
            </div>

            {/* Modal Footer - Fixed button sizes */}
            <div className="px-8 py-8 bg-gray-50 border-t border-gray-100 flex gap-4">
              <button
                onClick={cancelEdit}
                className="flex-1 py-4 rounded-2xl font-semibold border border-gray-300 hover:bg-gray-100 transition cursor-pointer text-base p-2"
              >
                Cancel
              </button>
              <button
                onClick={saveEvent}
                disabled={isLoading}
                className="flex-1 py-4 rounded-2xl font-semibold bg-green-600 hover:bg-green-700 disabled:bg-green-400 text-white transition cursor-pointer text-base p-2"
              >
                {isLoading ? "Saving Changes..." : "Save Changes"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}