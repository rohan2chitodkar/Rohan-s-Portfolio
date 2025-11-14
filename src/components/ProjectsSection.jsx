import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
    {
        id: 1,
        title: "ClggDhundo Educational Website",
        description: "Developed ClggDhundo, an educational website built with HTML, CSS, and JavaScript that enables users to easily search and explore categorized colleges through a responsive and interactive interface.",
        image: "/projects/Project1.png",
        tags: ["HTML", "CSS", "JavaScript"],
        link: "https://clgdhundo.netlify.app/",
        gitHubLink: "https://github.com/rohan2chitodkar/clgdhundo.github.io/tree/main/clgdhundo.github.io-main",
    },
    {
        id: 2,
        title: "DineTech Management System",
        description: "Created a personal portfolio website using React and Tailwind CSS to showcase projects, skills, and experience with a modern and responsive design.",
        image: "/projects/Project2.png",
        tags: ["React", "Tailwind CSS"],
        link: "#",
        gitHubLink: "#",
    },
    {
        id: 3,
        title: "Service360",
        description: "Built WeatherNow, a weather application using React Native and OpenWeatherMap API that provides real-time weather updates and forecasts with an intuitive user interface.",
        image: "/projects/Project3.png",
        tags: ["Javascript", "HTML", "CSS"],
        link: "https://service360.netlify.app/",
        gitHubLink: "https://github.com/rohan2chitodkar/service360",
    },
    {
        id: 4,
        title: "Personal Portfolio Website",
        description: "Created a personal portfolio website using React and Tailwind CSS to showcase projects, skills, and experience with a modern and responsive design.",
        image: "/projects/Project4.png",
        tags: ["React.JS", "Tailwind CSS", "HTML 5", "CSS 3"],
        link: "#",
        gitHubLink: "https://github.com/rohan2chitodkar/Rohan-s-Portfolio",
    },
    {
        id: 5,
        title: "MovieFinder App",
        description: "Developed MovieFinder, a movie search application using React and the OMDB API that allows users to search for movies, view details, and manage a favorites list with a sleek user interface.",
        image: "/projects/Project5.png",
        tags: ["React", "OMDB API", "CSS"],
        link: "https://cinestacks.netlify.app/",
        gitHubLink: "https://github.com/rohan2chitodkar/movieLibraryProject",
    },
];


export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                {" "}
                Featured <span className="text-primary"> Projects </span>
            </h2>

            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                Here are some of the projects I've worked on recently. 
                Click on any project to learn more about it.
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
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            >
                            </img>
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
                                        href={project.link}
                                        target="_blank"
                                        className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                    >
                                        <ExternalLink size={20}></ExternalLink>
                                    </a>
                                    <a
                                        href={project.gitHubLink}
                                        target="_blank"
                                        className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                    >
                                        <Github size={20}></Github>
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
                    href="https://github.com/rohan2chitodkar"
                >
                    Check My GitHub <ArrowRight size={16}></ArrowRight>
                </a>
            </div>
        </div>
    </section>
  );
};
