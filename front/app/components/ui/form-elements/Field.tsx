
import { forwardRef } from "react"
import { IField } from "./form.interface"
import cn from 'classnames'
import styles from './form.module.scss'

const Field = forwardRef<HTMLInputElement, IField>( ({ placeholder, error, type = 'text', style, ...rest }, ref) => {
  return (
    <div className={cn(styles.common, styles.field)} style={style} >
      <label>
        <span>{placeholder}</span>
        <input ref={ref} type={type} {...rest}/>
      </label>
      {error && <div className={styles.error}>{error.message}</div>}
    </div>
  )
})

export default Field