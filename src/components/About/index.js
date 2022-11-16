import './index.scss';

const About = () => {
    
    return (
        <section id="about">
            <div className='about-page p-5em flex'>
                <div class="w-75 mr-5em">
                    <h1 className='text-xl justify'>
                        Hello! <br/> I'm Carlos, a Software Engineer.
                    </h1>
                    <div className='about-subtext'>
                        <p className='text-justify text-m'>
                            I am a young Engineer with a passion for programming. I graduated in 2021 from the University of Oviedo, at the School of Computer Engineering. Since I was a kid I have been obsessed with solving problems, and code development allows me to fulfill my dream of unleashing my creativity to put a solution to any problem in the world, while making people's lives easier. any problem in the world, while making people's lives easier.
                        </p>
                        <p class="quote text-l">
                            "Build the simplest code, solve the most complex problems"
                        </p>
                    </div>
                </div>
                <div class="w-25">
                    <img alt="Profile picture" src='logo.jpeg'/>
                </div>
            </div>
        </section>
    )
}

export default About;