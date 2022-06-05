import classes from './styles.module.css'

export const HomePage = () => {
  return (
    <section className={classes.section}>
      <h2 className={classes.header}>Hello</h2>
      <a href="https://github.com/kubaparol/test-app" target="_blank" className={classes.link}><button className={classes.button}>Click to see repo of this project</button></a>
    </section>
  )
}