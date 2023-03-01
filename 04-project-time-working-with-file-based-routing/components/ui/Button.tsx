import Link from "next/link";
import classes from "./Button.module.css";

interface Props {
  link?: string;
  handleOnClick?: () => void;
  children: React.ReactNode;
}

export default function Button({ link, handleOnClick, children }: Props) {
  if (!!link) {
    return (
      <Link href={link} className={classes.btn}>
        {children}
      </Link>
    );
  }
  return (
    <button className={classes.btn} onClick={handleOnClick}>
      {children}
    </button>
  );
}
