export default async function Layout({children}: {children: React.ReactNode}) {
  const randomNumber = Math.floor(Math.random() * 100)
  const res = await fetch('https://jsonplaceholder.typicode.com/comments/'+randomNumber)
  const data = await res.text()
  console.log(data)
  return (
    <>
    <p>{data}</p>
    {children}
    </>
  )

}