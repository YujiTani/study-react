export const fetcher = async (url) => {
  const responce = await fetch(url)

  if (!responce.ok) {
    throw new Error(`エラーが発生したので、データを取得できませんでした`)
  }

  const json = await responce.json()
  return json
}
