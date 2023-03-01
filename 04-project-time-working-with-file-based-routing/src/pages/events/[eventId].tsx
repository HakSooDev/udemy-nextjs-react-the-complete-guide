import { useRouter } from "next/router";
import { Fragment } from "react";
import { getEventById } from "../../../dummy-data";
import EventSummary from "../../../components/event-detail/EventSummary";
import EventLogistics from "../../../components/event-detail/EventLogistics";
import EventContent from "../../../components/event-detail/EventContent";
import ErrorAlert from "components/ui/ErrorAlert";

export default function EventDetailPage() {
  const router = useRouter();

  const eventId = router.query.eventId;
  const event = getEventById(eventId as string);

  if (!event) {
    return <ErrorAlert>No event found!</ErrorAlert>;
  }

  return (
    <Fragment>
      <EventSummary title={event.title} />
      <EventLogistics
        date={event.date}
        address={event.location}
        image={event.image}
        imageAlt={event.title}
      />
      <EventContent />
      <p>{event.description}</p>
    </Fragment>
  );
}
