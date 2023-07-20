import styles from "./Product.module.css";
import PageNav from "../components/PageNav";

export default function Product() {
  return (
    <main className={styles.product}>
      <PageNav />
      <section>
        <img
          src="img-1.jpg"
          alt="person with dog overlooking mountain with sunset"
        />
        <div>
          <h2>About WorldWide.</h2>
          <p>
            Welcome to WorldWise! At WorldWise, we are passionate about
            exploring the world and creating unforgettable experiences. Our
            platform is designed to help travelers like you track your
            adventures and keep a digital record of your journeys across the
            globe. Whether you're a seasoned globetrotter or just starting to
            discover the wonders of travel, WorldWise is here to be your
            faithful companion on every step of your journey.
          </p>
          <p>
            Our mission is to inspire and empower travelers to roam freely and
            embrace the diversity of our world. We believe that travel has the
            power to transform individuals, broaden horizons, and foster a
            deeper understanding and appreciation for different cultures and
            traditions.
          </p>
        </div>
      </section>
    </main>
  );
}
