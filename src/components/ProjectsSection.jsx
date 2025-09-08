import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Dashboard",
    description: "A fully responsive admin dashboard built with React Vite and CSS. The dashboard provides an elegant interface to visualize data, manage users, and monitor key performance indicators. It includes interactive charts, tables, authentication pages, and dynamic routing. Styled with Tailwind CSS for a modern UI and powered by fakeAPI for testing data interactions.",
    image: "https://i.ibb.co/nsqjFgPk/screencapture-dashboard45-onrender-2025-09-05-14-56-31.png",
    tags: ["React Vite","HTML", "CSS","fakeAPI", "JavaScript","Responsive UI"],
    demoUrl: "https://dashboard45.onrender.com/",
   
  },
  {
    id: 2,
    title: "Ethiopian Cultural Food Delivery",
    description:
      "A modern web application designed for ordering authentic Ethiopian cultural food online. The platform allows users to explore traditional dishes, customize orders, and have food delivered to their doorsteps. It combines a clean, responsive design with cultural aesthetics to celebrate Ethiopian heritage through cuisine.",
    image: "https://i.ibb.co/LzZDKCwg/screencapture-ethio-food-delivery-netlify-app-2025-09-05-15-19-34.png",
    tags: ["React Vite","HTML", " CSS", "JavaScript", "FakeAPI ","Responsive UI"],
    demoUrl: "https://ethio-food-delivery.netlify.app/",
    
  },
  {
    id: 3,
    title: "Dessup Website Design",
    description:
      "A sleek and modern website design created for Dessup, focusing on user experience and brand identity. The project includes a fully responsive layout with intuitive navigation, elegant typography, and a clean color scheme. The design highlights key services, team information, and contact sections while maintaining a professional and approachable look. Built using React Vite with Tailwind CSS for fast development and pixel-perfect responsiveness.",
    image: "https://i.ibb.co/20dvmjWv/screencapture-dresssupshop-netlify-app-2025-09-05-17-17-47.png",
    tags: ["React Vite", "HTML","Tailwind CSS", "JavaScript", "Responsive UI", "UX Design"],
    demoUrl: "https://dresssupshop.netlify.app/",
   
  },
  {
  id: 4,
  title: "E-commerce Platform",
  description:
    "A full-featured e-commerce platform built for showcasing and selling fashion products online. The project emphasizes seamless user experience, mobile-first responsiveness, and secure checkout integration. It includes product listings, category filtering, a shopping cart system, and smooth navigation. The design combines modern UI patterns with clean typography and a minimal color scheme to maintain both aesthetics and usability. Developed using React Vite and Tailwind CSS for fast performance, with optimized components for scalability.",
  image: "https://i.ibb.co/jvr1nXZM/screencapture-ecommerce-platform12-onrender-2025-09-08-23-31-22.png",
  tags: ["React Vite", "HTML", "SCSS", "JavaScript","CSS", "Responsive UI",],
  demoUrl: "https://ecommerce-platform12.onrender.com/",

}
];

export const ProjectsSection = () => (
  <section id="projects" className="py-24 px-4 relative">
    <div className="container mx-auto max-w-5xl">
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
        {" "}
        Showcase
      </h2>

      <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
        Take a look at some of my latest projects, built with an emphasis on quality, speed, and usability.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, key) => (
          <div
            key={key}
            className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
          >
            <div className="h-48 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
            </div>

            <div className="p-6">
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                    {tag}
                  </span>
                ))}
              </div>

              <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
              <p className="text-muted-foreground text-sm mb-4">
                {project.description}
              </p>
              <div className="flex justify-between items-center">
                <div className="flex space-x-3">
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    className="text-foreground/80 hover:text-primary transition-colors duration-300"
                  >
                    <ExternalLink size={20} />
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    className="text-foreground/80 hover:text-primary transition-colors duration-300"
                  >
                    <Github size={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-12">
        <a
          className="cosmic-button w-fit flex items-center mx-auto gap-2"
          target="_blank"
          href="https://github.com/habtashagithub"
        >
          Check My Github <ArrowRight size={16} />
        </a>
      </div>
    </div>
  </section>
);
