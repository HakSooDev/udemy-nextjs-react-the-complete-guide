import EventItem from "./EventItem";
import { Event } from "dummy-data";
import classes from "./EventList.module.css";

interface Props {
  events: Event[];
}

export default function EventList({ events }: Props) {
  return (
    <ul className={classes.list}>
      {events.map((event) => (
        <EventItem key={event.id} event={event} />
      ))}
    </ul>
  );
}
