import './index.scss';

const About = () => {
    
    return (
        <section id="about">
            <div className='about-page p-5em flex'>
                <div class="w-75 mr-5em">
                    <h1 className='text-l justify'>
                        <span className='highlighted-text'>Hello!</span> <br/> I'm Carlos, a software developer.
                    </h1>
                    <div className='about-subtext'>
                        <p className='text-justify text-s'>
                            I am a young Engineer with a passion for programming. I graduated in 2021 in Software Engineering at the University of Oviedo, at the Higher Technical School of Computer Engineering. I've been working since 2019 on different projects. I currently work at Idealista.com, the largest company in Spain in its sector.
                        </p> 
                        <p className='text-justify text-s'>
                            Since I was a kid I've been obsessed with solving problems, and code development allows me to fulfill my dream of unleashing my creativity to put a solution to any problem in the world, while making people's lives easier.
                        </p>
                        <p class="quote text-l">
                            "Build the simplest code, solve the most complex problems"
                        </p>
                    </div>
                </div>
                <div class="w-25">
                    <img alt="Profile" src='logo.jpeg'/>
                </div>
            </div>
        </section>
    )
}

export default About;