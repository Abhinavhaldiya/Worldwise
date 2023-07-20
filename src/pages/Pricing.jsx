// Uses the same styles as Product
import styles from "./Product.module.css";
import PageNav from "../components/PageNav";

export default function Product() {
  return (
    <main className={styles.product}>
      <PageNav />
      <section>
        <div>
          <h2>
            Simple pricing.
            <br />
            Just $9/month.
          </h2>
          <p>
            Start your journey with WorldWise today! Sign up for free and
            begin building your virtual world map, documenting your experiences,
            and connecting with fellow explorers from around the globe. No
            adventure is too small, and every step you take adds a vibrant
            brushstroke to the canvas of your life's journey.
          </p>
        </div>
        <img src="img-2.jpg" alt="overview of a large city with skyscrapers" />
      </section>
    </main>
  );
}
