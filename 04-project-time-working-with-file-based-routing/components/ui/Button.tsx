import Link from "next/link";
import classes from "./Button.module.css";

interface Props {
  link: string;
  children: React.ReactNode;
}

export default function Button({ link, children }: Props) {
  return (
    <Link href={link} className={classes.btn}>
      {children}
    </Link>
  );
}
