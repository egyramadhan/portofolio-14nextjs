import { url } from "inspector";

export const navItems = [
  { name: "Home", link: "#home" },
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building a JS Animation library",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Smart Processing",
    des: "A web application is intended to manage the product process from planning to finished product.",
    img: "/Screenshot_35.png",
    iconLists: ["/nuxt.svg", "/laravel.svg"],
    link: "",
  },
  {
    id: 2,
    title: "Redhub - Reimbursement",
    des: "A web app that simplifies the reimbursement process for employees and employers. It features a user-friendly interface and a secure backend system.",
    img: "/reimbursements.svg",
    iconLists: ["/nuxt.svg", "/tail.svg", "/ts.svg", "/laravel.svg"],
    link: "",
  },
  {
    id: 3,
    title: "Redhub - Client Evaluation",
    des: "A web app that helps businesses evaluate their clients and make informed decisions. It features a responsive design and a secure backend system.",
    img: "/client.svg",
    iconLists: ["/nuxt.svg", "/tail.svg", "/ts.svg", "/laravel.svg"],
    link: "",
  },
  {
    id: 4,
    title: "Redcomm Indonesia",
    des: "A web digital agency that provides a wide range of services, including web development, digital marketing, and branding. It features a modern design and a user-friendly interface.",
    img: "/redcomm.svg",
    iconLists: ["/nuxt.svg", "/tail.svg", "/ts.svg", "/laravel.svg"],
    link: "https://redcomm.co.id/",
  },
  {
    id: 5,
    title: "Hello God App",
    des: "A companion app that adjusts to how you feel and guides you through it with God.",
    img: "/hellogod.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "https://www.hellogod.id/",
  },
  {
    id: 6,
    title: "Wasser",
    des: "A web catalog that provides information about sanitary products and services. It features a clean design and a user-friendly interface.",
    img: "/wasser.png",
    iconLists: ["/nuxt.svg", "/tail.svg", "/laravel.svg"],
    link: "https://wasser.co.id/",
  },
  {
    id: 7,
    title: "ICDX - Go Carbon Neutral",
    des: "A web pledge that encourages businesses to go carbon neutral and reduce their carbon footprint. It features a responsive design and a user-friendly interface.",
    img: "/carbons.png",
    iconLists: ["/nuxt.svg", "/tail.svg", "/laravel.svg"],
    link: "https://carbonneutral.icdx.co.id/",
  },
];

export const testimonials = [
  {
    quote:
      "Working with Egi was a delight! Their expertise in Nuxt.js and Laravel helped us achieve a website that not only looks great but performs flawlessly.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "I was impressed with how Egi translated our ideas into a responsive and user-friendly interface using Nuxt.js. Their attention to detail and dedication to quality were evident throughout the project.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Thanks to Egi's skill with Laravel, we now have a secure and efficient backend that perfectly complements our frontend. They were responsive to our needs and delivered beyond our expectations.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Choosing Egi as our freelance front-end developer was a wise decision. Their proficiency in Nuxt.js ensured our website not only ranks well but also provides a seamless experience for our users.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Highly recommend Egi for anyone looking to create a modern and responsive website. Their expertise in both Nuxt.js and Laravel made our project a success, and their professionalism was outstanding.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Full Stack Developer - Redcomm Indonesia",
    desc: "I use Node.js, Nuxt.js, Next.js, and Laravel to create fast, user-friendly websites and powerful back-end systems. I build responsive interfaces and handle data efficiently, ensuring seamless performance across the entire application.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Front End Developer Redcomm Indonesia",
    desc: "I specialize in crafting user-friendly interfaces using HTML, CSS, and JavaScript. I transform design concepts into responsive, visually appealing websites and applications, ensuring seamless functionality across devices.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Front End Developer - Freelance",
    desc: "using Nuxt.js for building fast and SEO-friendly websites, and Laravel for creating secure back-end systems and APIs. I focus on delivering responsive and dynamic web solutions that meet client needs effectively.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Full Stack Developer - Asclar Indonesia",
    desc: "I use Laravel to create secure back-end systems and APIs, and Livewire.js for building fast and SEO-friendly websites. I focus on delivering responsive and dynamic web solutions that meet client needs effectively.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    url: "https://github.com/egyramadhan",
  },
  {
    id: 2,
    img: "/twit.svg",
    url: "",
  },
  {
    id: 3,
    img: "/link.svg",
    url: "https://www.linkedin.com/in/egi-ramadhan/",
  },
];
