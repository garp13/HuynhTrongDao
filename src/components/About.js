
import Project from "./Project";
import Projects from "./Projects";



const About = (props) => {

    const projects = [
        {
            name:"Weather-app",
            linkGithub: "https://github.com/garp13/Weather-app",
            linkDeploy: "https://garp13.github.io/Weather-app/",
            tech:["Reactjs","Redux","Rehook","Async-await"],
        },
        {
            name:"Todo-Lists",
            linkGithub: "https://github.com/garp13/todo-list",
            linkDeploy: "https://garp13.github.io/todo-list/",
            tech:["Reactjs","Redux","Rehook","localStorage"],
        },
        {
            name: "CV Online",
            linkGithub: "https://github.com/garp13/HuynhTrongDao",
            linkDeploy: "http://localhost:3000/HuynhTrongDao",
            tech:["Reactjs"],
        },
    ]
    
    const handleProjects = (projects) => {
        return(
            projects.map((project,index) =>   <Project
                                            key={index}
                                            name={project.name}
                                            linkGithub={project.linkGithub}
                                            linkDeploy={project.linkDeploy}
                                            tech={project.tech}
                                        />
                        )
        )
    }

    return(
        <Projects
            handleProjects={handleProjects(projects)}
        />
            
        
    )
}

export default About;