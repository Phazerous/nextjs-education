import { useRouter } from "next/router"

export default function Client() {
  const router = useRouter();

  return <div>
    <h1>This is a client {router.query.clientID}</h1>
  </div>
}