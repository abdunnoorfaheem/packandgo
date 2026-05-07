import axios from "axios";
import React, { useState } from "react";
import Image from "../Image";
import Container from "../Container";

const Pages = () => {
  let [data, setData] = useState([]);
  async function view() {
    let allData = await axios.get("https://dummyjson.com/products");
    setData(allData.data.products);
  }
  view();

  return (
    <>
      <section>
        <Container>
            <div className="flex flex-wrap">
          {data.map((item) => (
            <div className="w-[22%] shadow-2xl px-4 pt-6 pb-2 rounded-2xl" key={item.id}>
              <Image imgSrc={item.thumbnail}/>
              <h4 className="text-2xl">{item.title}</h4>
              <p className="text-gray-400">{item.description}</p>
              <h5 className="text-md">Price:{item.price}$</h5>
              <button className="text-xl bg-amber-400 text-white w-[100%]">Add To Cart</button>
            </div>
          ))}
        </div>
        </Container>
      </section>
    </>
  );
};

export default Pages;
