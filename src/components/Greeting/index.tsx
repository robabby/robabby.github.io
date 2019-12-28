import * as React from 'react'
import * as styles from './styles.module.scss'

interface GreetingProps {
  siteName: string
}
class Greeting extends React.PureComponent<GreetingProps> {
  public render(): JSX.Element {
    const { siteName } = this.props
    return (
      <div className={styles.textWrapper}>
        <h1>{siteName}</h1>
      </div>
    )
  }
}

export default Greeting
