import classes from '@/components/Main/Main.module.css'
import { Headline } from '@/components/Headline'
import { Links } from '@/components/Links'

export function Main(props) {
  return (
    <main className={classes.main}>
      <Headline page={props.page}>
        <code className={classes.code}>pages/{props.page}.js</code>
      </Headline>
      <button className={classes.btn}>ボタン</button>
      <Links />
    </main>
  )
}
