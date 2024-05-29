import React from "react";
import { aiml, c, py, webdev } from "../assets/index.js"; // Ensure these paths are correct and match your file structure

function CourseCard({ image, title, description }) {
  return (
    <div className="course-card flex flex-col justify-between px-10 py-12 rounded-[20px] bg-gray-800 transition-transform transform hover:-translate-y-2">
      <img
        src={image}
        alt={title}
        className="w-[64px] h-[64px] object-contain mb-6"
      />
      <h3 className="font-poppins font-semibold text-[24px] leading-[36px] text-white mb-4">
        {title}
      </h3>
      <p className="font-poppins font-normal text-[18px] leading-[28px] text-white mb-6">
        {description}
      </p>
      <button className="px-6 py-2 bg-blue-600 text-white rounded-md">
        Learn More
      </button>
    </div>
  );
}

function CourseOffering() {
  const courses = [
    {
      image: aiml,
      title: "Artificial Intelligence & Machine Learning",
      description:
        "Unlock the future with our AI and ML course. Learn how to build intelligent systems that can solve complex problems, automate tasks, and drive innovation.",
    },
    {
      image: webdev,
      title: "Web Development",
      description:
        "Become a full-stack web developer. Learn HTML, CSS, JavaScript, and modern frameworks to build responsive and dynamic websites.",
    },
    {
      image: c,
      title: "C++ Programming",
      description:
        "Master the fundamentals and advanced features of C++. This course will prepare you for developing high-performance applications.",
    },
    {
      image: py,
      title: "Python Programming",
      description:
        "Learn Python from scratch. This course covers everything from basic syntax to advanced topics like web development and data analysis.",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-10 w-full courses-container relative z-[1]">
      {courses.map((course, index) => (
        <div
          key={index}
          className={`${
            index === 3 ? "lg:col-start-2" : ""
          } flex justify-center`}
        >
          <CourseCard
            image={course.image}
            title={course.title}
            description={course.description}
          />
        </div>
      ))}
    </div>
  );
}

export default CourseOffering;
