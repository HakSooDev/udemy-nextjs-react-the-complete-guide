import Button from "components/ui/button";
import { FormEvent, useRef } from "react";
import classes from "./EventsSearch.module.css";

interface Props {
  onSearch: (year: string, month: string) => void;
}

export default function EventsSearch({ onSearch }: Props) {
  const yearInputRef = useRef<HTMLSelectElement>(null);
  const monthInputRef = useRef<HTMLSelectElement>(null);

  function submitHandler(event: FormEvent) {
    event.preventDefault();

    const selectedYearInput = yearInputRef.current?.value!;
    const selectedMonthInput = monthInputRef.current?.value!;
    onSearch(selectedYearInput, selectedMonthInput);
  }

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.controls}>
        <div className={classes.control}>
          <label htmlFor="year">Year</label>
          <select id="year" ref={yearInputRef}>
            <option value="2021">2021</option>
            <option value="2022">2022</option>
          </select>
        </div>
        <div className={classes.control}>
          <label htmlFor="month">Month</label>
          <select id="month" ref={monthInputRef}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
            <option value="11">11</option>
            <option value="12">12</option>
          </select>
        </div>
      </div>

      <Button>Find Events</Button>
    </form>
  );
}
