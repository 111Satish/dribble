import React from "react";
import "./Hero.css";

const Hero = () => {
  const slide = [
    {
      imageUrl:
        "https://cdn.dribbble.com/uploads/47171/original/daniele-buffa-3.png?1689174763&format=webp&resize={width}x{height}&vertical=center",
      alt: "Daniele Buffa",
      title: "Principal Designer",
      tags: ["Animation", "UI", "Visual"],
    },
    {
      imageUrl:
        "https://cdn.dribbble.com/uploads/47178/original/mercedes-bazan.png?1689174566&format=webp&resize={width}x{height}&vertical=center",
      alt: "Mercedes Bazan",
      title: "Illustrator",
      tags: ["Graphic Design", "Illustration"],
    },
    {
      imageUrl:
        "https://cdn.dribbble.com/uploads/47174/original/4f02d72fe701b15b2168a4954332427f.png?1685645150&format=webp&resize={width}x{height}&vertical=center",
      alt: "Lilla Bardenova",
      title: "Brand + Illustrator",
      tags: ["Brand", "Illustration", "Web"],
    },
    {
      imageUrl:
        "https://cdn.dribbble.com/uploads/47177/original/3986915be548424a5d36657f2b034ead.jpeg?1685645250&format=webp&resize={width}x{height}&vertical=center",
      alt: "Chris Owens",
      title: "Creative Director",
      tags: ["Illustration", "Mobile", "UI"],
    },
    {
      imageUrl:
        "https://cdn.dribbble.com/uploads/47176/original/9b22cd83bde1809976bec0722d1f8923.jpeg?1685645213&format=webp&resize={width}x{height}&vertical=center",
      alt: "Elif Kameşoğlu",
      title: "Brand Designer",
      tags: ["Brand", "Illustration", "Web"],
    },
    {
      imageUrl:
        "https://cdn.dribbble.com/uploads/47170/original/cd3266dde4f00a5d6a509c7375ddaecd.png?1685644840&format=webp&resize={width}x{height}&vertical=center",
      alt: "Aurélien Salomon",
      title: "Design Director",
      tags: ["Mobile", "Product", "UX"],
    },
    {
      imageUrl:
        "https://cdn.dribbble.com/uploads/47175/original/1fb34610061a95a007ac5e7b1dc53138.jpeg?1685645183&format=webp&resize={width}x{height}&vertical=center",
      alt: "Victa Wille",
      title: "Digital Designer",
      tags: ["Mobile", "UI", "Web"],
    },
    {
      imageUrl:
        "https://cdn.dribbble.com/uploads/47173/original/Vladimir_Gruev.png?1689174896&format=webp&resize={width}x{height}&vertical=center",
      alt: "Vladimir Gruev",
      title: "Digital Designer",
      tags: ["Brand", "Design"],
    },
  ];

  const slide1 = [...slide, ...slide];
  const slides = [...slide1, ...slide1];
  return (
    <div className="hero-slider">
      <div className="slides-container">
        {slides.map((slide, index) => (
          <div className="slide" key={index}>
            <img src={slide.imageUrl} alt={slide.alt} />
            <div className="slide-content">
              <h2>{slide.alt}</h2>
              <h2>{slide.title}</h2>
              <p>{slide.tags.join(", ")}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hero;
