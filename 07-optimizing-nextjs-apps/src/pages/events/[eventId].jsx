import ErrorAlert from "components/ui/ErrorAlert";
import { getEventById, getFeaturedEvents } from "helpers/api-utils";
import { Fragment } from "react";
import EventContent from "../../../components/event-detail/EventContent";
import EventLogistics from "../../../components/event-detail/EventLogistics";
import EventSummary from "../../../components/event-detail/EventSummary";

export default function EventDetailPage(props) {
  const event = props.selectedEvent;

  if (!event) {
    return (
      <div className="center">
        <p>Loading...</p>
      </div>
    );
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

export async function getStaticProps(context) {
  const eventId = context.params.eventId;
  const event = await getEventById(eventId);

  return {
    props: {
      selectedEvent: event,
    },
    revalidate: 30,
  };
}

export async function getStaticPaths() {
  const events = await getFeaturedEvents();

  const paths = events.map((event) => ({
    params: { eventId: event.id },
  }));

  return {
    paths,
    fallback: true,
  };
}
