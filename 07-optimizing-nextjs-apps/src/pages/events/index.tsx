import EventList from "components/events/EventList";
import EventsSearch from "components/events/EventsSearch";
import { getAllEvents } from "helpers/api-utils";
import Head from "next/head";
import { useRouter } from "next/router";
import { Fragment } from "react";
import { Event } from "../../../type";

interface Props {
  events: Event[];
}
export default function AllEventsPage({ events }: Props) {
  const router = useRouter();

  function findEventsHandler(year: string, month: string) {
    const fullPath = `/events/${year}/${month}`;
    router.push(fullPath);
  }

  return (
    <Fragment>
      <Head>
        <title>All Events</title>
        <meta
          name="description"
          content="Find a lot of great events that allow you to evolve..."
        />
      </Head>
      <EventsSearch onSearch={findEventsHandler} />
      <EventList events={events} />
    </Fragment>
  );
}

export async function getStaticProps() {
  const events = await getAllEvents();

  return {
    props: {
      events: events,
    },
    revalidate: 60,
  };
}
