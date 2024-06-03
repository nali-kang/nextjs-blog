import Image from "next/image";

import classes from "./hero.module.css";

function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/nali.png"
          alt="nali"
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, i'm Nali</h1>
      <p>여기는 제 블로그입니다 어서옵쇼</p>
    </section>
  );
}

export default Hero;
