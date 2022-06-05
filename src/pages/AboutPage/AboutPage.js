import classes from './styles.module.css'

export const AboutPage = () => {
  return (
    <section className={classes.section}>
      <header className={classes.header}>
        <h2 className={classes.header__name}>My name is Kuba</h2>
        <p className={classes.header__paragraph}>In the near future, I will become Junior FrontEnd Developer</p>
      </header>
      <section className={classes.projects}>
        <p className={classes.projects__paragraph}>Click the button below to see my projects!</p>
        <a href="https://github.com/kubaparol" target="_blank" className={classes.projects__link}><button className={classes.link__button}>Hey! Click here!</button></a>
      </section>
    </section>
  )
}