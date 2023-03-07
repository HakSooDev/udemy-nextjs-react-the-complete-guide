import EventList from "components/events/EventList";
import { Event } from "type";
import { getFeaturedEvents } from "../../helpers/api-utils";

interface Props {
  events: Event[];
}

export default function Home({ events }: Props) {
  return (
    <div>
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
