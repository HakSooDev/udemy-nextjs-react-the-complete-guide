import EventList from "components/events/EventList";
import ResultsTitle from "components/events/ResultsTitle";
import Button from "components/ui/Button";
import ErrorAlert from "components/ui/ErrorAlert";
import Head from "next/head";
import { getFilteredEvents } from "../../../helpers/api-utils";

export default function FilteredEventsPage(props) {
  let pageHeadData = (
    <Head>
      <title>Filtered Events</title>
      <meta name="description" content={`Change your filter`} />
    </Head>
  );

  if (props.hasError) {
    return (
      <>
        {pageHeadData}
        <ErrorAlert>
          <p>Invalid filter. Please adjust your filter data</p>
        </ErrorAlert>
        <div className="center">
          <Button link="/events">Show All Events</Button>
        </div>
      </>
    );
  }

  pageHeadData = (
    <Head>
      <title>Empty events</title>
      <meta
        name="description"
        content={`All events for ${props.date.year}/${props.date.month}`}
      />
    </Head>
  );

  if (props.filteredEvents.length === 0) {
    return (
      <>
        {pageHeadData}
        <ErrorAlert>
          <p>No events found for the chosen filter!</p>
        </ErrorAlert>
        <div className="center">
          <Button link="/events">Show All Events</Button>
        </div>
      </>
    );
  }

  pageHeadData = (
    <Head>
      <title>Filtered Events</title>
      <meta
        name="description"
        content={`All events for ${props.date.year}/${props.date.month}`}
      />
    </Head>
  );

  const date = new Date(props.date.year, props.date.month - 1);

  return (
    <>
      {pageHeadData}
      <ResultsTitle date={date} />
      <EventList events={props.filteredEvents} />
    </>
  );
}

export async function getServerSideProps(context) {
  const { params } = context;

  const filterData = params.slug;
  const filteredYear = filterData[0];
  const filteredMonth = filterData[1];

  const numYear = +filteredYear;
  const numMonth = +filteredMonth;
  if (
    isNaN(numYear) ||
    isNaN(numMonth) ||
    numYear > 2030 ||
    numYear < 2021 ||
    numMonth < 1 ||
    numMonth > 12
  ) {
    return { props: { hasError: true } };
  }

  const filteredEvents = await getFilteredEvents({
    year: numYear,
    month: numMonth,
  });

  return {
    props: {
      hasError: false,
      filteredEvents: filteredEvents,
      date: {
        year: numYear,
        month: numMonth,
      },
    },
  };
}
