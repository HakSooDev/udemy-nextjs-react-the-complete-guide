import classes from "./hero.module.css";
import Image from "next/image";

function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/haksoo-image.png"
          alt="An image showing HakSoo"
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I'm HakSoo Kim</h1>
      <p>
        I blog about web development especially frontend framework like React.
      </p>
    </section>
  );
}

export default Hero;
