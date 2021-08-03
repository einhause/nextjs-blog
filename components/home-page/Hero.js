import Image from 'next/image';
import EricImage from '../../public/images/site/eric.jpeg';
import classes from './hero.module.css';

const Hero = () => {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src={EricImage}
          alt='An image showing Eric'
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I'm Eric</h1>
      <p>I am an aspiring web developer, specializing in React and Next.js</p>
    </section>
  );
};

export default Hero;
