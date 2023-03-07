import AddressIcon from "components/icons/AddressIcon";
import ArrowRightIcon from "components/icons/ArrowRightIcon";
import DateIcon from "components/icons/DateIcon";
import Button from "components/ui/Button";
import Image from "next/image";
import { Event } from "type";
import classes from "./EventItem.module.css";

interface Props {
  event: Event;
}

export default function EventItem({ event }: Props) {
  const { title, image, date, location, id } = event;

  const humanReadableDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const formattedAddress = location.replace(", ", "\n");
  const exploreLink = `/events/${id}`;

  return (
    <li className={classes.item}>
      <Image src={`/${image}`} alt={title} width={360} height={160} />
      <div className={classes.content}>
        <div className={classes.summary}>
          <h2>{title}</h2>
          <div className={classes.date}>
            <DateIcon />
            <time>{humanReadableDate}</time>
          </div>
          <div className={classes.address}>
            <AddressIcon />
            <address>{formattedAddress}</address>
          </div>
        </div>
        <div className={classes.actions}>
          <Button link={exploreLink}>
            <span>Explore Event</span>
            <span className={classes.icon}>
              <ArrowRightIcon />
            </span>
          </Button>
        </div>
      </div>
    </li>
  );
}
