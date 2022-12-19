import { useRouter } from "next/router"

export default function Client() {
  const router = useRouter();

  function startProjectHandler() {
    console.log(router.query.clientID)
    router.push({
      pathname: `[clientID]/projectA`,
      query: { clientID: router.query.clientID.toString() }
    })
  }

  return <div>
    <h1>This is a client {router.query.clientID}</h1>
    <input type="button" value="Start Project A" onClick={startProjectHandler} />
  </div>
}