import React from "react";



const CoursesItem = () => {



    /**
     * 
     */



    const courses = [
        {
            id: 1,
            name: "Web Development Courses",
            description: "Become a proficient web developer with our in-depth courses. Learn everything from front-end to back-end development, including HTML, CSS, JavaScript, Node.js, and database management.",
            link: "#",
        },
        {
            id: 2,
            name: "Front End Enginner",
            description: "Master the skills needed to become a Front End Engineer. This course covers React JS, Vue.js  and Angular 2+ , with the JSX and TypeSctipt",
            link: "#",
        },
        {
            id: 3,
            name: "Python Courses",
            description: "Dive into Python programming with our comprehensive courses. Learn everything from the basics to advanced concepts, including data science, machine learning, and web development with Django and Flask.",
            link: "#",
        },
        {
            id: 4,
            name: "Design Courses",
            description: "Unleash your creativity with our design courses. Learn graphic design, UI/UX design, and web design using the latest tools and techniques to create stunning visuals and user experiences.",
            link: "#",
        },
        {
            id: 5,
            name: "Accounting Courses",
            description: "Gain the skills and knowledge needed to excel in the field of accounting. Our courses cover fundamental accounting principles, financial reporting, and advanced topics such as auditing and tax preparation.",
            link: "#",
          },
          {
            id: 6,
            name: "C++ Courses",
            description: "Learn C++ programming from the ground up with our comprehensive courses. Covering basics to advanced topics, including object-oriented programming, data structures, algorithms, and real-world applications.",
            link: "#",
          },
          {
            id: 7,
            name: "C# Courses",
            description: "Master C# programming with our detailed courses. Explore fundamental concepts, object-oriented programming, and advanced topics such as asynchronous programming, .NET development, and creating Windows applications.",
            link: "#",
          },
          {
            id: 8,
            name: "Languages Courses",
            description: "Expand your linguistic abilities with our language courses. Learn new languages from scratch or improve your proficiency in languages like English, Spanish, French, Russian, and more.",
            link: "#",
          },
        // Add more courses as needed
    ];


    return (
        <div className="py-12 ">
            <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-8">
                Explore Our Courses
            </h2>
            <div className="grid gap-5 align-content:center  grid-cols-1 md:grid-cols-2  lg:grid-cols-4 xl:grid-cols-4">
                {courses.map((course) => (
                    <div
                        key={course.id}
                        className="flex flex-col bg-gray-100 rounded-lg shadow-lg overflow-hidden"
                    >
                        <div className="bg-purple-600 px-4 py-5 sm:px-6">
                            <h3 className="text-lg leading-6 font-medium text-white">
                                {course.name}
                            </h3>
                        </div>
                        <div className="p-6 flex-1 flex flex-col justify-between">
                            <p className="text-black text-lg">{course.description}</p>
                            {/* <div className="mt-6 flex items-center">
                                <a
                                    href={course.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-4 py-2 border border-transparent text-sm font-medium rounded-lg text-white bg-purple-600 hover:bg-purple-800"
                                >
                                   See More
                                </a>
                            </div> */}
                        </div>
                    </div>
                ))}
            </div>
        </div>


    )
};


export default CoursesItem