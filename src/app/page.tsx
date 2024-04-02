import Image from "next/image";
import Link from "next/link";
export default function Home() {
  const fakeApis = [
    {
      name: "ledinhdong",
      id: 1234,
    },
    {
      name: "nguyentienthanh",
      id: 4321,
    },
  ];
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <Link href="/login">Login</Link> <br />
        <Link href="/admin">Admin</Link>
        {fakeApis.map((fakeApi) => {
          return (
            <div key={fakeApi.id}>
              <Link href={`/detail/${fakeApi.id}`}>{fakeApi.name}</Link>
            </div>
          );
        })}
      </div>
    </main>
  );
}
