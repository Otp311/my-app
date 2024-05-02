import React from "react";
export const getServerSideProps = async () => {
  const res = await fetch("/product.json");
  const data = await res.json();
  console.log(data);
  return {
    props: { product: data },
  };
};
const Index = ({ product }) => {
  return (
    <div>
      <h1> Welcome to My blog gallery ssg</h1>
      {product.map((item) => (
        <div key={item.id}>
          <a>
            {" "}
            <h3>{item.title}</h3>{" "}
          </a>
          <img src={item.url} />
        </div>
      ))}
    </div>
  );
};
export default Index;
