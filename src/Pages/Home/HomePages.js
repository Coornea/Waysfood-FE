import { useNavigate } from "react-router-dom";

import Jumbotron from "../../Components/Jumbotron/Jumbotron";
import CardPopular from "../../Components/Content/Cards/CardPopular";
import CardRecommend from "../../Components/Content/Cards/CardRecommend";

import styles from "./Home.module.css";
function HomePages() {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <Jumbotron />
      <div className={styles.cardPopular}>
        <h2 className={styles.title}>Popular Restaurant</h2>
        <CardPopular />
        <br />
        <br />
        <h2 className={styles.title}>Restaurant Near You</h2>
        <CardRecommend />
      </div>
    </div>
  );
}

export default HomePages;
