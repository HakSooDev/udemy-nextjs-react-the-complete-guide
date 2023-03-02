type Product = { id: string; title: string; description: string };

interface Props {
  products: Product[];
}

export default function HomePage({ products }: Props) {
  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>{product.title}</li>
      ))}
    </ul>
  );
}

// this function prepares the props for the component
// Next js will execute this function first, then execute component function
// this function won't be part of bundle which means that never be visible on the client site
// this function runs on server side
export async function getStaticProps() {
  return {
    props: {
      products: [{ id: "p1", title: "Product 1" }],
    },
  };
}
