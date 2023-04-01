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
};

export default appConfig;