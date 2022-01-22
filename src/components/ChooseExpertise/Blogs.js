import React from 'react';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import Slider from 'react-slick';
import Blog from './Blog';
import style from './blogs.module.css';
var settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: true,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
  customPaging: function (i) {
    return <div className='expertiseBlogDot' />;
  },
  dots: true,
  dotsClass: 'expertiseBlogDots slick-thumb',
};
function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div onClick={onClick} className={style.nextArrow}>
      <FaAngleRight />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div onClick={onClick} className={style.prevArrow}>
      <FaAngleLeft />
    </div>
  );
}

const items = [
  {
    id: 1,
    image:
      'https://images.pexels.com/photos/2280547/pexels-photo-2280547.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    title: 'Lab / Expertise name here',
    text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.',
  },
  {
    id: 2,
    image:
      'https://images.pexels.com/photos/3825379/pexels-photo-3825379.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    title: 'Lab / Expertise name here',
    text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.',
  },
  {
    id: 3,
    image:
      'https://images.pexels.com/photos/3735736/pexels-photo-3735736.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    title: 'Lab / Expertise name here',
    text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.',
  },
  {
    id: 4,
    image:
      'https://images.pexels.com/photos/3912364/pexels-photo-3912364.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    title: 'Lab / Expertise name here',
    text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.',
  },
  {
    id: 5,
    image:
      'https://images.pexels.com/photos/3912372/pexels-photo-3912372.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    title: 'Lab / Expertise name here',
    text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.',
  },
  {
    id: 6,
    image:
      'https://images.pexels.com/photos/2506594/pexels-photo-2506594.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    title: 'Lab / Expertise name here',
    text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.',
  },
  {
    id: 7,
    image:
      'https://images.pexels.com/photos/3735766/pexels-photo-3735766.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    title: 'Lab / Expertise name here',
    text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.',
  },
  {
    id: 7,
    image:
      'https://images.pexels.com/photos/3735786/pexels-photo-3735786.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    title: 'Lab / Expertise name here',
    text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.',
  },
];
const Blogs = () => {
  return (
    <div className={style.main}>
      <Slider {...settings}>
        {items.map((item) => (
          <Blog
            key={item.id}
            image={item.image}
            title={item.title}
            text={item.text}
          />
        ))}
      </Slider>
    </div>
  );
};

export default Blogs;
