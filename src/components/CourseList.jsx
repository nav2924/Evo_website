import React from 'react';
import CourseCard from './CourseCard';

function CoursesList() {
  const courses = [
    {
      title: "Introduction to AI",
      description: "Learn the basics of artificial intelligence.",
      placeholder: "Enter your name",
    },
    {
      title: "Advanced Python",
      description: "Deep dive into advanced Python topics.",
      placeholder: "Enter your name",
    },
    {
      title: "C Programming",
      description: "Master the fundamentals of C programming.",
      placeholder: "Enter your name",
    },
    {
      title: "Machine Learning",
      description: "Understand and build machine learning models.",
      placeholder: "Enter your name",
    },
  ];

  return (
    <div className="flex flex-wrap sm:justify-start justify-center w-full courses-container relative z-[1]">
      {courses.map((course, index) => (
        <CourseCard
          key={index}
          title={course.title}
          description={course.description}
          placeholder={course.placeholder}
        />
      ))}
    </div>
  );
}

export default CoursesList;
