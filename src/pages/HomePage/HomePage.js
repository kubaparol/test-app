import { useState, useEffect } from "react";

import classes from "./styles.module.css";
import { getList } from "../../api";

import Modal from "../../components/Modal";

export const HomePage = () => {
  const [list, setList] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    getList().then((items) => {
      setList(items.results);
    });
  }, []);

  return (
    <section className={classes.section}>
      {isOpen && <Modal setIsOpen={setIsOpen} />}
      <h2 className={classes.header}>Hello</h2>
      <a
        href="https://github.com/kubaparol/test-app"
        target="_blank"
        className={classes.link}
        rel="noreferrer"
      >
        <button className={classes.button}>
          Click to see repo of this project
        </button>
      </a>
      <ul className={classes.list}>
        {list.map((item) => (
          <li key={item.id} className={classes.item}>
            <h3 className={classes.name}>{item.name}</h3>
            <img className={classes.img} src={item.image} alt="character-img" />
          </li>
        ))}
      </ul>
    </section>
  );
};
