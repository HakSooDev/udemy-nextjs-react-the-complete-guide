import classes from "./contact-form.module.css";
import { useReducer } from "react";

function ContactForm() {
  const [form, updateForm] = useReducer(
    (prev, next) => {
      return { ...prev, ...next };
    },
    { email: "", name: "", message: "" }
  );

  function sendMessageHandler(event) {
    event.preventDefault();

    console.log(form);
    fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify({
        email: form.email,
        name: form.name,
        message: form.message,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  return (
    <section className={classes.contact}>
      <h1>How can I help you?</h1>
      <form className={classes.form} onSubmit={sendMessageHandler}>
        <div className={classes.controls}>
          <div className={classes.control}>
            <label htmlFor="email">Your Email</label>
            <input
              type="email"
              id="email"
              required
              value={form.email}
              onChange={(e) => updateForm({ email: e.target.value })}
            />
          </div>
          <div className={classes.control}>
            <label htmlFor="name">Your Name</label>
            <input
              type="text"
              id="name"
              required
              value={form.name}
              onChange={(e) => updateForm({ name: e.target.value })}
            />
          </div>
        </div>
        <div className={classes.control}>
          <label htmlFor="message">Your Message</label>
          <textarea
            id="message"
            rows="5"
            required
            value={form.message}
            onChange={(e) => updateForm({ message: e.target.value })}
          ></textarea>
        </div>

        <div className={classes.actions}>
          <button>Send Message</button>
        </div>
      </form>
    </section>
  );
}

export default ContactForm;
