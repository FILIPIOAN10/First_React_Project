import './App.css'

function App() {
  const name = "Filip Ioan";
  const profession  ="Full Stack Developer";
  const projects =[
    {
      title:"Research-Assistant",
      description:" Smart Research Assistant Smart Research Assistant is a full-stack application built with Spring Boot and the Spring Framework, designed to automatically summarize selected content from web pages. It includes a custom Google Chrome Extension that interacts with the backend to send selected text and receive concise summaries",
      link :"#"

    },
    {
      title:"Smart_Email_Assistant",
      description:"Smart Email Assistant Smart Email Assistant is an intelligent application built with Spring Boot and Spring AI, designed to generate AI-powered email replies directly within Gmail, using the Gemini API",
      link:"#"
    },
    {
      title:"Job_Portal",
      description:"In this project, I designed and developed a full-featured job portal web application aimed at streamlining the recruitment process for employers and job seekers alike"
    }
  ]
 
  return (
    <div className="App">
      {/* Header section*/}
      <header className='header'>
        <h1>{name}</h1>
        <p>{profession}</p>
        <nav>
          <a href='#about'>About</a>
          <a href='#projects'>Projects</a>
          <a href='#contact'>Contact</a>
        </nav>
      </header>
      {/* About Section */}
      <section id='about' className='about-section'>
        <h2>About Me</h2>
        <p>Hello! I am {name}, a passionate {profession}. I love building web application that solves real world user problems </p>
      </section>

      {/* Projects Section*/}
      <section id='projects' className='projects-section'>
        <h2>Projects</h2>
        <div className='projects-list'>
          {projects.map((project,index) => (
            <div key={index} className='project-item'> 
                <h3>{project.title}</h3>
                <h3>{project.description}</h3>
                <a href={project.link} target='_blank' rel='noopener noreferrer'>View Project</a>
              </div>

          ))}
        </div>
      </section>

      {/*Contact Section*/}
      <section id='contact' className='contact-section'>
        <h2>Contact me </h2>
          <p>If you like to get in touch, feel free to email me at <a href='mailto:filipioan_29@yahoo.ro'>filipioan_29@yahoo.ro</a></p>
      </section>
      
      {/* Footer Section*/}
      <footer className='footer'>
            <p>2025. All Rights Reserved</p>
      </footer>
    </div>

  )
}

export default App
