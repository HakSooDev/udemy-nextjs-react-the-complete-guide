import path from "path";
import fs from "fs/promises";
import { Product } from ".";
import type {
  InferGetStaticPropsType,
  GetStaticProps,
  GetStaticPropsContext,
} from "next";

export default function ProductDetailPage({
  loadedProduct,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  if (!loadedProduct) {
    return <p>...Something is wrong</p>;
  }
  return (
    <div>
      <h1>{loadedProduct.title}</h1>
      <p>{loadedProduct.description}</p>
    </div>
  );
}

async function getData() {
  const filePath = path.join(process.cwd(), "data", "dummy-backend.json");
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData.toString());

  return data;
}

export const getStaticProps: GetStaticProps<{
  loadedProduct: Product;
}> = async ({ params }: GetStaticPropsContext) => {
  const productId = params!.pid;

  const data = await getData();

  const product = data.products.find(
    (product: Product) => product.id === productId
  );

  if (!product) {
    return { notFound: true };
  }

  return {
    props: {
      loadedProduct: product,
    },
  };
};

export async function getStaticPaths() {
  const data = await getData();

  const paths = data.products.map((product: Product) => ({
    params: { pid: product.id },
  }));

  return {
    paths,
    // if fallback is true, we can leave out some pages that not pre-generated
    // parameters that are not listed in the above will be still considered as valid.
    // those pages will be generated as just in time when a request reaches the server
    fallback: true,
    // fallback : 'blocking' or false are useful
  };
}
