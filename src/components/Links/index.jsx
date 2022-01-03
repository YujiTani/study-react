import classes from '@/components/Links/Links.module.css'

export function Links({ items, handleRemove }) {
  return (
    <div className={classes.grid}>
      <button onClick={handleRemove}>減らす</button>
      {items.map((item) => {
        return (
          <a href={item.href} className={classes.card} key={item.id}>
            <h2>{item.title}</h2>
            <p>{item.description}</p>
          </a>
        )
      })}
    </div>
  )
}
