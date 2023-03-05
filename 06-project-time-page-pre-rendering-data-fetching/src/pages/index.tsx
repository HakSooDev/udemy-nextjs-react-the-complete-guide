import EventList from "components/events/EventList";
import { getFeaturedEvents } from "dummy-data";
import { Event } from "dummy-data";

export default function Home() {
  const featuredEvents: Event[] = getFeaturedEvents();

  return (
    <div>
      <EventList events={featuredEvents} />
    </div>
  );
}
