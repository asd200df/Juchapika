import React from "react";
// import axios from "axios";
import { useEffect, useState } from "react";
import TopNav from "../../components/Nav/TopNav";
import styles from "./EnrollmentCar.module.css";
import car from "../../assets/car3.png";
import axios from "axios";

export default function EnrollmentCar() {
  const [posts, setPosts] = useState([]);
  const [carnum, setcarnum] = useState("19가337");
  const [InputText, setInputText] = useState("19가337");

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        setPosts(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  const onChange = (e) => {
    setInputText(e.target.value);
  };

  const button = (e) => {
    e.preventDefault();
    setcarnum(InputText);
  };

  return (
    <div className={styles.background}>
      <TopNav />
      <div className={styles.body}>
        <div className={styles.now}>
          <div className={styles.now1}>
            {posts.map((post) => (
              <div className={styles.nums} key={post.id}>
                <div className={styles.num}>{post.title}</div>
                <hr></hr>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.imgcon}>
          <img src={car} alt="logo" className={styles.img} />
        </div>

        <div className={styles.detailscon}>
          <div className={styles.details}>
            <div className={styles.detail}>
              <div className={styles.title}>차량번호</div>
              <div className={styles.data1}>
                <form onSubmit={button} style={{ width: "70%" }}>
                  <input type="text" value={InputText} onChange={onChange} className={styles.input} />
                </form>
                <div onClick={button} className={styles.button}>
                  <div>수정</div>
                </div>
              </div>
            </div>

            <div className={styles.detail}>
              <div className={styles.title}>적발일시</div>
              <div className={styles.data}>{carnum}</div>
            </div>
            <div className={styles.detail}>
              <div className={styles.title}>적발장소</div>
              <div className={styles.data}>적발장소</div>
            </div>
            <div className={styles.detail}>
              <div className={styles.title}>납부금액</div>
              <div className={styles.data}>납부금액</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
