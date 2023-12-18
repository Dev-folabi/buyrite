import Directory from '../../componenet/directory/directory.component';

import {useState, useEffect, Fragment } from 'react';


const Home = () => {
  // const categories = [
  //   {
  //     id: 1,
  //     title: "hats",
  //     imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
  //   },
  //   {
  //     id: 2,
  //     title: "jackets",
  //     imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
  //   },
  //   {
  //     id: 3,
  //     title: "sneakers",
  //     imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
  //   },
  //   {
  //     id: 4,
  //     title: "womens",
  //     imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
  //   },
  //   {
  //     id: 5,
  //     title: "mens",
  //     imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
  //   },
  // ];

  const [categories, setCategories] = useState([])

  useEffect(()=>{

    const categoriesItems = async ()=>{

      try {
        const response = await fetch("https://api.escuelajs.co/api/v1/categories");
     const data = await response.json()
     setCategories(data.slice(0, 5))
      } catch (error) {
        console.error(error.message)
      }
    }

    categoriesItems();
  },[])

  return (
    <Fragment>
      <Directory categories={categories} />
    </Fragment>
  );
};

export default Home;
