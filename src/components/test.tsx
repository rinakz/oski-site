import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./styles.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1101 },
    items: 3,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1100, min: 968 },
    items: 3,
    slidesToSlide: 1, // optional, default to 1.
  },
  laptop: {
    breakpoint: { max: 967, min: 568 },
    items: 2,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 567, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const images = [
  {
    label:
      "Родился я 20 апреля 2023 года в семье Японских чемпионов. Моя мама Айкэн Сагаримэ Сачико, а папа Кирей Казоку Дайон",
    imgPath: "/OskiSmall.jpg",
    imgPathSecond: "/Smile.jpg"
  },
//   {
//     label: "А еще я очень смешной :)",
//     imgPath: "/Smile.jpg",
//   },
  {
    label:
      "Уже с самого детства я люблю посещать общественные места и находиться среди большого количества людей",
    imgPath: "/Loko.jpg",
  },
  {
    label: "Я очень красивый и любопытный :)",
    imgPath: "/Metall.jpg",
  },
  {
    label:
      "С самого детства я люблю посещать общественные места и находиться среди людей. Мне всего год, а я уже известный!",
    imgPath: "/MetallSupporters.jpg",
  },
  {
    label: "Я очень выносливый и безумно люблю путешествия",
    imgPath: "/OskiTver.jpg",
    imgPathSecond: "/Mytischi.jpg",
  },
//   {
//     label: "Люблю поваляться в песке и позировать",
//     imgPath: "/Mytischi.jpg",
//   },
  {
    label: "И они меня любят",
    imgPath: "/OskiFace.jpg",
  },
];

const Slider = () => {
  return (
    <div className="parent">
      <Carousel
        responsive={responsive}
        autoPlay={true}
        swipeable={true}
        draggable={true}
        showDots={false}
        infinite={true}
        partialVisible={true}
        dotListClass="custom-dot-list-style"
      >
        {images.map((imageUrl, index) => {
          return (
            <div className="slider" key={index}>
              {imageUrl.imgPathSecond ? (
                <div>
                  <img src={imageUrl.imgPath} alt="movie" />
                  <img src={imageUrl.imgPathSecond} alt="movie" />
                </div>
              ) : (
                <img src={imageUrl.imgPath} alt="movie" />
              )}
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};
export default Slider;
