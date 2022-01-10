import classes from '@/components/Layout/Layout.module.css'
import { loadGetInitialProps } from 'next/dist/shared/lib/utils'

export const Layout = (props) => {
  return <div className={classes.container}>{props.children}</div>
}
