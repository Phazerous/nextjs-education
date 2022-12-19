import Link from "next/link";

export default function Clients() {
  const clientList = [
    { id: 249, name: 'Phazerous' },
    { id: 248, name: 'FnisBUF' },
    { id: 555, name: 'MrTylSet' },
    { id: 103, name: 'MrLeavens' }
  ];

  return <div>
    {clientList.map((client) => {
      return <div>
        <Link href={{
          pathname: "clients/[clientID]",
          query: { clientID: client.id }
        }}>
          {client.name}
        </Link>
      </div>
    })}
  </div>
}