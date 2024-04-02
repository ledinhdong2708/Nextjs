export default function Page({ params }: { params: { slug: number } }) {
  return <div>id: {params.slug}</div>;
}
