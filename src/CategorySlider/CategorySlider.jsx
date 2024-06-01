import React from "react";
import "./CategorySlider.css";

const CategorySlider = () => {
  const categories = [
    {
      title: "Mobile",
      url: "/shots/popular/mobile",
      color1: "#E3EBFD",
      color2: "#EDF3D8",
      image:
        "https://cdn.dribbble.com/userupload/14632160/file/original-379d4f5694700191d02668862e4255f1.jpg?format=webp&resize={width}x{height}&vertical=center",
    },
    {
      title: "Illustration",
      url: "/shots/popular/illustration",
      color1: "#E6FBFE",
      color2: "#EDF3D8",
      image:
        "https://cdn.dribbble.com/userupload/14713090/file/original-2d2cce602c0027559014ba7ed1564bc7.jpg?format=webp&resize={width}x{height}&vertical=center",
    },

    {
      title: "Mobile",
      url: "/shots/popular/mobile",
      color1: "#E3EBFD",
      color2: "#EDF3D8",
      image:
        "https://cdn.dribbble.com/userupload/14632160/file/original-379d4f5694700191d02668862e4255f1.jpg?format=webp&resize={width}x{height}&vertical=center",
    },
    {
      title: "Illustration",
      url: "/shots/popular/illustration",
      color1: "#E6FBFE",
      color2: "#EDF3D8",
      image:
        "https://cdn.dribbble.com/userupload/14713090/file/original-2d2cce602c0027559014ba7ed1564bc7.jpg?format=webp&resize={width}x{height}&vertical=center",
    },
    {
      title: "Product Design",
      url: "/shots/popular/product-design",
      color1: "#EDDDFB",
      color2: "#DDFDE8",
      image:
        "https://cdn.dribbble.com/userupload/14470609/file/original-8c1cbaea6ffc59916fac726f5e29a6c3.jpg?format=webp&resize={width}x{height}&vertical=center",
    },
    {
      title: "Animation",
      url: "/shots/popular/animation",
      color1: "#F6D9FB",
      color2: "#E3EBFD",
      image:
        "https://cdn.dribbble.com/userupload/14732576/file/still-544ec44d8742d9a52b6efc61c8b47ff6.gif?format=webp&resize={width}x{height}&vertical=center",
    },
    {
      title: "Print",
      url: "/shots/popular/print",
      color1: "#E6FBFE",
      color2: "#DDFDE8",
      image:
        "https://cdn.dribbble.com/userupload/14720704/file/original-6d0f1ec042561fd2acc5f366f02161c8.png?format=webp&resize={width}x{height}&vertical=center",
    },
    {
      title: "Branding",
      url: "/shots/popular/branding",
      color1: "#E6FDC9",
      color2: "#EDF3D8",
      image:
        "https://cdn.dribbble.com/userupload/14363439/file/original-00a6a46c6999e22a1b5353948e9a98e5.jpg?format=webp&resize={width}x{height}&vertical=center",
    },
    {
      title: "Typography",
      url: "/shots/popular/typography",
      color1: "#DDFDE8",
      color2: "#EDF3D8",
      image:
        "https://cdn.dribbble.com/userupload/14581321/file/original-470f7afe87727c8f8d14231ac9f33b94.jpg?format=webp&resize={width}x{height}&vertical=center",
    },
    {
      title: "Web Design",
      url: "/shots/popular/web-design",
      color1: "#EDF3D8",
      color2: "#EDDDFB",
      image:
        "https://cdn.dribbble.com/userupload/14632160/file/original-379d4f5694700191d02668862e4255f1.jpg?format=webp&resize={width}x{height}&vertical=center",
    },
  ];

  return (
    <div
      id="footer"
      className="footer-v2 js-site-footer"
      data-footer-v2
      role="contentinfo"
    >
      <div className="footer-v2-marquee" data-footer-v2-marquee>
        <div className="footer-v2-marquee__track">
          <div className="footer-v2-marquee__grid">
            {categories.map((category, index) => (
              <a
                key={index}
                className="footer-v2-marquee-item"
              >
                <div
                  className="footer-v2-marquee-item__stack"
                  style={{
                    "--stack-color-1": category.color1,
                    "--stack-color-2": category.color2,
                  }}
                ></div>
                <div className="footer-v2-marquee-item__media">
                  <img
                    alt={category.title}
                    width="200"
                    height="150"
                    src={category.image}
                  />
                </div>
                <div className="footer-v2-marquee-item__title">
                  {category.title}
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategorySlider;
