import React, { useEffect, useState } from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import axios from "axios";

import Cards from "./Cards";

// const list = [
//   {
//     "id": 1,
//     "name": "Story Book",
//     "title": "The Lion King",
//     "price": 0,
//     "category": "Free",
//     "image": "https://img.freepik.com/free-vector/group-books-pennant_25030-38688.jpg?ga=GA1.1.563157329.1722086107&semt=ais_hybrid"
//   },
//   {
//     "id": 2,
//     "name": "Kids Book",
//     "title": "The Jungle Book",
//     "price": 0,
//     "category": "Free",
//     "image": "https://img.freepik.com/free-vector/group-books-pennant_25030-38688.jpg?ga=GA1.1.563157329.1722086107&semt=ais_hybrid"
//   },
//   {
//     "id": 3,
//     "name": "Cartoon Book",
//     "title": "The Cartoon Adventures",
//     "price": 0,
//     "category": "Free",
//     "image": "https://img.freepik.com/free-vector/group-books-pennant_25030-38688.jpg?ga=GA1.1.563157329.1722086107&semt=ais_hybrid"
//   },
//   {
//     "id": 4,
//     "name": "Adventure Book",
//     "title": "The Great Escape",
//     "price": 0,
//     "category": "Free",
//     "image": "https://img.freepik.com/free-vector/group-books-pennant_25030-38688.jpg?ga=GA1.1.563157329.1722086107&semt=ais_hybrid"
//   },
//   {
//     "id": 5,
//     "name": "Fantasy Book",
//     "title": "The Magic Realm",
//     "price": 0,
//     "category": "Free",
//     "image": "https://img.freepik.com/free-vector/group-books-pennant_25030-38688.jpg?ga=GA1.1.563157329.1722086107&semt=ais_hybrid"
//   },
//   {
//     "id": 6,
//     "name": "Mystery Book",
//     "title": "The Hidden Truth",
//     "price": 0,
//     "category": "Free",
//     "image": "https://img.freepik.com/free-vector/group-books-pennant_25030-38688.jpg?ga=GA1.1.563157329.1722086107&semt=ais_hybrid"
//   },
//   {
//     "id": 7,
//     "name": "Sci-Fi Book",
//     "title": "The Galactic Voyage",
//     "price": 0,
//     "category": "500",
//     "image": "https://img.freepik.com/free-vector/group-books-pennant_25030-38688.jpg?ga=GA1.1.563157329.1722086107&semt=ais_hybrid"
//   },
//   {
//     "id": 8,
//     "name": "Historical Book",
//     "title": "The Ancient Chronicles",
//     "price": 0,
//     "category": "Free",
//     "image": "https://img.freepik.com/free-vector/group-books-pennant_25030-38688.jpg?ga=GA1.1.563157329.1722086107&semt=ais_hybrid"
//   },
//   {
//     "id": 9,
//     "name": "Biography Book",
//     "title": "The Life of Legends",
//     "price": 0,
//     "category": "Free",
//     "image": "https://img.freepik.com/free-vector/group-books-pennant_25030-38688.jpg?ga=GA1.1.563157329.1722086107&semt=ais_hybrid"
//   },
//   {
//     "id": 10,
//     "name": "Self-Help Book",
//     "title": "The Path to Success",
//     "price": 0,
//     "category": "Free",
//     "image": "https://img.freepik.com/free-vector/group-books-pennant_25030-38688.jpg?ga=GA1.1.563157329.1722086107&semt=ais_hybrid"
//   },
//   {
//     "id": 11,
//     "name": "Cooking Book",
//     "title": "The Culinary Delights",
//     "price": 0,
//     "category": "Free",
//     "image": "https://img.freepik.com/free-vector/group-books-pennant_25030-38688.jpg?ga=GA1.1.563157329.1722086107&semt=ais_hybrid"
//   },
//   {
//     "id": 12,
//     "name": "Travel Book",
//     "title": "The World Tour",
//     "price": 0,
//     "category": "Free",
//     "image": "https://img.freepik.com/free-vector/group-books-pennant_25030-38688.jpg?ga=GA1.1.563157329.1722086107&semt=ais_hybrid"
//   },
//   {
//     "id": 13,
//     "name": "Science Book",
//     "title": "The Scientific Wonders",
//     "price": 0,
//     "category": "Free",
//     "image": "https://img.freepik.com/free-vector/group-books-pennant_25030-38688.jpg?ga=GA1.1.563157329.1722086107&semt=ais_hybrid"
//   },
//   {
//     "id": 14,
//     "name": "Art Book",
//     "title": "The Artistic Creations",
//     "price": 0,
//     "category": "Free",
//     "image": "https://img.freepik.com/free-vector/group-books-pennant_25030-38688.jpg?ga=GA1.1.563157329.1722086107&semt=ais_hybrid"
//   },
//   {
//     "id": 15,
//     "name": "Music Book",
//     "title": "The Musical Symphony",
//     "price": 0,
//     "category": "Free",
//     "image": "https://img.freepik.com/free-vector/group-books-pennant_25030-38688.jpg?ga=GA1.1.563157329.1722086107&semt=ais_hybrid"
//   }
// ]


function Freebook() {
  
  const [book, setBook] = useState([]);
  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("http://localhost:4002/book");

        const data = res.data.filter((data) => data.category === "Free");
        console.log(data);
        setBook(data);
      } catch (error) {
        console.log(error);
      }
    };
    getBook();
  }, []);


  // const filterData = list.filter((item) => item.category === "Free");


  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,    // here v want to show 3 slides
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,   // if >1024px then show 3 slides
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,   // if >600px then show 2 slides
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,  // if >480px then show 1 slides i.e. MOBILE VIEW
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className=" max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div>
          <h1 className="font-semibold text-xl pb-2">Free Offered Courses</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Accusantium veritatis alias pariatur ad dolor repudiandae eligendi
            corporis nulla non suscipit, iure neque earum?
          </p>
        </div>

        <div>
          <Slider {...settings}>
            {book.map((item) => (
              <Cards item={item} key={item.id} />
            ))}

            {/* {filterData.map((item) => (
              <Cards item={item} key={item.id} />))} */}

          </Slider>
        </div>
      </div>
    </>
  );
}
export default Freebook;
