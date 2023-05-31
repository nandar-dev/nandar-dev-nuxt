const getAge = () => {
  const now = new Date();
  const birthDaay = new Date("2000-10-14");
  var dateDiffInTime = now.getTime() - birthDaay.getTime();
  var dateDiffInYear = dateDiffInTime / (1000 * 3600 * 24 * 365);
  return Math.floor(dateDiffInYear);
};

const appConfig = {
  devName: "Nandar",
  sitename: "Nandar | Web Developer",
  prefession: "Web Developer",
  devDescription:
    "I am a passionate web developer with a strong focus on delivering high quality websites that are visually appealing and user friendly. I enjoy taking on new challenges and staying up to date with the latest technologies and trends in the industry.",
  age: getAge(),
  prodUrl: "https://nandar.tk",
  location: {
    link: "https://goo.gl/maps/qfSY6ZsXDyL1DLs39",
    address: "Nawnghkio, Myanmar",
  },
  contact: {
    email: "nandar.dev.mgk@gmail.com",
    phone: "+959960160802",
  },
  social: {
    github: "https://github.com/nandar-dev/",
    linkedin: "https://www.linkedin.com/in/nandar-ghimire-3951b91b1/",
    twitter: "https://twitter.com/nandar_dev",
    facebook: "https://www.facebook.com/mg.nandar.14/",
    instagram: "https://www.instagram.com/nanda_ghimire/",
  },
  experience: [
    {
      companyName: "Unity Power Co.,LTD",
      position: "Font-End Developer",
      from: "2022 September",
      to: "2023 February",
      responsibility: [
        "Developed and maintain web applications using HTML, CSS, and JavaScript.",
        "Collaborated with project managers and designers to determine project scope and requirements.",
        "Wrote and maintain code using Vue and React, as well as vanilla JavaScript.",
        "Use version control (Git) to manage codebase and collaborate with other developers.",
      ],
    },
    {
      companyName: "TASTYSOFT Software Co.,LTD",
      position: "Junior Full-Stack Developer",
      from: "2021 April",
      to: "2022 August",
      responsibility: [
        "Worked on various projects, including QR Coupon Pricing, Payroll, CRM system, and Connect 365 which is a multipurpose mobile application for time tracking, collaboration, productivity and e-learning platform for employees, responsible for both frontend and backend development.",
        "Developed Serverless REST API With Python And AWS Lambda and implemented various frontend technologies, including Angular and Flutter.",
        "Developed multiple mobile applications for both Android and IOS using Flutter.",
        "Collaborated with clients to understand their requirements and provide technical guidance.",
      ],
    },
  ],
  education: {
    school: [
      {
        name: "Mogok Foundation",
        profession: "Professional Computer Programming",
        from: "January 2019",
        to: "January 2021",
        courses: [
          " Basic programming with Java.",
          "Fundamental web development with HTML, CSS, JavaScript, Bootstrap, jQuery and Angular.",
          "Mobile app development with Ionic 3 and Flutter.",
        ],
      },
    ],
    certificateCourse: [
      {
        name: "Crash Course on Python",
        icon: "arcticons:coursera",
        link: "https://www.coursera.org/account/accomplishments/certificate/C64FU6FFSNT2",
      },
      {
        name: "Responsive Web Design",
        icon: "simple-icons:freecodecamp",
        link: "https://www.freecodecamp.org/certification/fcc34bb36ad-2033-48f2-ad0d-db030c571871/responsive-web-design",
      },
      {
        name: "JavaScript Algorithms and Data Structures",
        icon: "simple-icons:freecodecamp",
        link: "https://www.freecodecamp.org/certification/fcc34bb36ad-2033-48f2-ad0d-db030c571871/javascript-algorithms-and-data-structures",
      },
      {
        name: "Front-End Web Development with React",
        icon: "arcticons:coursera",
        link: "https://www.coursera.org/account/accomplishments/certificate/9W3EV4DXBW55",
      },
      {
        name: "NodeJS, Express and MongoDB",
        icon: "arcticons:coursera",
        link: "https://www.coursera.org/account/accomplishments/certificate/BACCMJHMQXFK",
      },
    ],
  },
  skills: {
    summery: [
      {
        name: "Front-End",
        progress: "70%",
      },
      {
        name: "Back-End",
        progress: "50%",
      },
    ],
    technologies: {
      main: [
        {
          name: "Vue.js",
          icon: "devicon-vuejs-plain colored",
        },
        {
          name: "Nuxt.js",
          icon: "devicon-nuxtjs-plain colored",
        },
        {
          name: "Typescript",
          icon: "devicon-typescript-plain colored",
        },
        {
          name: "Tailwind",
          icon: "devicon-tailwindcss-plain colored",
        },
        {
          name: "Node.js",
          icon: "devicon-nodejs-plain colored",
        },
        {
          name: "Express.js",
          icon: "devicon-express-original",
        },

        {
          name: "MySql",
          icon: "devicon-mysql-plain colored",
        },
      ],
      famailiar: [
        {
          name: "Python",
          icon: "devicon-python-plain colored",
        },
        {
          name: "Angular",
          icon: "devicon-angularjs-plain colored",
        },
        {
          name: "React.js",
          icon: "devicon-react-original colored",
        },
        {
          name: "Flutter",
          icon: "devicon-flutter-plain colored",
        },
        {
          name: "Firebase",
          icon: "devicon-firebase-plain colored",
        },
        {
          name: "AWS",
          icon: "devicon-amazonwebservices-original colored",
        },
        {
          name: "PostgreSQL",
          icon: "devicon-postgresql-plain colored",
        },
      ],
    },
  },
  projects: [
    {
      name: "JobDotCom",
      description:
        "Basic CRUD operation , filter and sorting with Vant UI 3 and Typescript.",
      gitLink: "https://github.com/nandar-dev/JobDotCom",
      demoLink: "https://jobdotcom.netlify.app/",
      technologies: ["Vue.js", "Typescript", "Vant 3"],
      screenshots:
        "https://upload.wikimedia.org/wikipedia/commons/7/73/Jdc-ss1.png",
    },

    {
      name: "News Home Page",
      description: "Design news home page using vue (Front-end Mentor)",
      gitLink: "https://github.com/nandar-dev/vue-news-homepage",
      demoLink: "https://news-home-frontend-mentor.netlify.app/",
      technologies: ["Vue.js", "Typescript", "Tailwind"],
      screenshots:
        "https://github.com/nandar-dev/vue-news-homepage/raw/master/src/design/desktop-preview.jpg",
    },
    {
      name: "jwt-auth-nodejs-typeorm",
      description:
        "Jwt authentication with Node.js express, Type Orm, Postgres.",
      gitLink: "https://github.com/nandar-dev/jwt-auth-nodejs-typeorm",
      demoLink: "",
      technologies: [
        "Node.js",
        "Express.js",
        "Typescript",
        "Type ORM",
        "Postgres",
      ],
      screenshots:
        "https://upload.wikimedia.org/wikipedia/commons/d/d1/Image_not_available.png",
    },
  ],
};

export default appConfig;
