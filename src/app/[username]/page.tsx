export default function Page({ params }: { params: { username: string } }) {
  console.log("aca")
  return <div>{params.username}</div>
}