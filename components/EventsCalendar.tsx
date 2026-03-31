import { FaCalendarAlt } from "react-icons/fa";
import eventsData from "@/data/events.json";

export type EventItem = {
  date: string;
  title: string;
  description?: string;
};

export default function EventsCalendar() {
  // Use static JSON data instead of Supabase
  const events: EventItem[] = eventsData || [];

  return (
    <section id="events-calendar" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold flex items-center justify-center gap-3">
            <FaCalendarAlt className="text-green-600" /> Upcoming Events
          </h2>
          <p className="text-gray-600 mt-3">
            We host several seasonal events each year — check back often for updates!
          </p>
        </div>

        {/* Calendar grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {events.map((event) => {
            const eventDate = new Date(event.date);
            const month = eventDate
              .toLocaleString("default", { month: "short" })
              .toUpperCase();
            const day = eventDate.getDate();

            return (
              <div
                key={event.date + event.title}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-1 hover:scale-105 overflow-hidden"
              >
                {/* Date block */}
                <div className="bg-green-600 text-white text-center py-4">
                  <p className="text-sm font-medium">{month}</p>
                  <p className="text-3xl font-bold">{day}</p>
                </div>

                {/* Event details */}
                <div className="p-6 text-left">
                  <h3 className="font-semibold text-lg mb-2">
                    {event.title}
                  </h3>
                  {event.description && (
                    <p className="text-gray-500 text-sm">
                      {event.description}
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
