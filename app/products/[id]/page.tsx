export async function generateStaticParams() {
  return [
    { id: "1" },
    { id: "2" },
    { id: "3" },
  ];
}

export default function ProductPage({
  params,
}: {
  params: { id: string };
}) {
  return (
    <div style={{ padding: 20 }}>
      <h1>Product ID: {params.id}</h1>
    </div>
  );
}
