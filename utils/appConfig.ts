const getAge = () => {
  const now = new Date();
  const birthDaay = new Date("2000-10-14");
  var dateDiffInTime = now.getTime() - birthDaay.getTime();
  var dateDiffInYear = dateDiffInTime / (1000 * 3600 * 24 * 365);
  return Math.floor(dateDiffInYear);
};

const appConfig = {
  devName: "Nandar",
  prefession: "Web Developer",
  age: getAge(),
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
    twitter: "https://twitter.com/nanda2000dev",
    facebook: "https://www.facebook.com/mg.nandar.14/",
    instagram: "https://www.instagram.com/nanda_ghimire/",
  },
  experience: [
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
  ],
};

export default appConfig;
