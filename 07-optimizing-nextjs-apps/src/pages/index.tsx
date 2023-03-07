import EventList from "components/events/EventList";
import Head from "next/head";
import { Event } from "type";
import { getFeaturedEvents } from "../../helpers/api-utils";

interface Props {
  events: Event[];
}

export default function Home({ events }: Props) {
  return (
    <div>
      <Head>
        <title>Next JS Events</title>
        <meta
          name="description"
          content="Find a lot of great events that allow you to evolve..."
        />
      </Head>
      <EventList events={events} />
    </div>
  );
}

export async function getStaticProps() {
  const featuredEvents = await getFeaturedEvents();

  return {
    props: {
      events: featuredEvents,
    },
    revalidate: 1800,
  };
}
