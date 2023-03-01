import EventList from "components/events/EventList";
import EventsSearch from "components/events/EventsSearch";
import { useRouter } from "next/router";
import { Fragment } from "react";
import { getAllEvents, Event } from "../../../dummy-data";

export default function AllEventsPage() {
  const events: Event[] = getAllEvents();
  const router = useRouter();

  function findEventsHandler(year: string, month: string) {
    const fullPath = `/events/${year}/${month}`;
    router.push(fullPath);
  }

  return (
    <Fragment>
      <EventsSearch onSearch={findEventsHandler} />
      <EventList events={events} />
    </Fragment>
  );
}
