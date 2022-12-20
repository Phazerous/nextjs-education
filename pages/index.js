import fs from 'fs/promises';
import path from 'path';
import Link from 'next/link';

export async function getStaticProps() {
  const fullPath = path.join(process.cwd(), 'data', 'dummy-data.json');
  const jsonData = await fs.readFile(fullPath);
  const data = JSON.parse(jsonData);

  return {
    props: {
      products: data.products,
    },
    revalidate: 10,
  };
}

export default function HomePage({ products }) {
  return (
    <>
      {products
        ? products.map((product) => {
            return (
              <>
                <Link href={`${product.id}`}>
                  <h1>Product {product.id}</h1>
                </Link>
              </>
            );
          })
        : null}
    </>
  );
}
