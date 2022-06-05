import {InputForm} from './../../components/InputForm'

import classes from './styles.module.css'

export const FormPage = () => {
  return (
    <section className={classes.section}>
      <h2 className={classes.header}>You can add something to the list:</h2>
      <InputForm/>
    </section>
  )
}