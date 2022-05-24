import Link from 'next/link';

const Index = () => {
  return (
    <div>
      <h1>Hello World</h1>
      <Link href='/about'>
        <a>About</a>
      </Link>

      <Link href='/category/products'>
        <a>Products</a>
      </Link>
    </div>
  );
};

export default Index;
