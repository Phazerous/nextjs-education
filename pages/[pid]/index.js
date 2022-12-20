import fs from 'fs/promises';
import path from 'path';

export default function Product({ title, description }) {
  return (
    <>
      <h1>{title}</h1>
      <p>{description}</p>
    </>
  );
}

export async function getStaticProps({ params }) {
  const productId = params.pid;

  const fullPath = path.join(process.cwd(), 'data', 'dummy-data.json');
  const jsonData = await fs.readFile(fullPath);
  const data = JSON.parse(jsonData);

  const product = data.products.find((el) => el.id === productId);

  return {
    props: {
      title: product.title,
      description: product.description,
    },
  };
}

export async function getStaticPaths() {
  return {
    paths: [
      { params: { pid: 'p1' } },
      { params: { pid: 'p2' } },
      { params: { pid: 'p3' } },
    ],
    fallback: false,
  };
}
