import React from 'react'
import styles from "./FieldSet.module.css"

type FieldSetProps = {
  variant?: "primary" | "secondary"
} & React.FieldsetHTMLAttributes<HTMLFieldSetElement>

const Fieldset = ({children, variant="primary"}:FieldSetProps) => {
  return (
    <fieldset className={`{styles.inputWrapper} ${variant === 'primary' ? styles.primary : styles.secondary}`}>
      {children}
    </fieldset>
  )
}

export default Fieldset