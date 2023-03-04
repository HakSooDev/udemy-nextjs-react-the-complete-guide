import path from "path";
import fs from "fs/promises";
import Link from "next/link";

export type Product = { id: string; title: string; description: string };

interface Props {
  products: Product[];
}

export default function HomePage({ products }: Props) {
  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>
          <Link key={product.id} href={`/product/${product.id}`}>
            {product.title}
          </Link>
        </li>
      ))}
    </ul>
  );
}

// this function prepares the props for the component
// Next js will execute this function first, then execute component function
// this function won't be part of bundle which means that never be visible on the client site
// this function runs on server side
export async function getStaticProps() {
  const filePath = path.join(process.cwd(), "data", "dummy-backend.json");
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData.toString());

  // redirect option
  if (!data) return { redirect: { destination: "/no-data" } };

  // not found option
  if (data.products.length === 0) return { notFound: true };

  return {
    props: {
      products: data.products,
    },
    revalidate: 10,
  };
}
