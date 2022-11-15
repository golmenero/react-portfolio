import './index.scss';

const About = () => {
    
    return (
        <section id="about">
            <div className='about-page'>
                <div className='section-card header-zone'>
                    <h1 className='text-large justify'>
                        I'm Carlos, a Software Engineer. I love programming to make the world a simpler place.
                    </h1>
                    <div className='header-zone-subtext'>
                        <div className='text-medium'>
                            <p className='text-justify'>
                            I am a young Engineer with a passion for programming. Since I was a kid I have been obsessed with solving problems, and code development allows me to fulfill my dream of unleashing my creativity to put a solution to any problem in the world, while making people's lives easier. any problem in the world, while making people's lives easier.
                            </p>
                            <span class="quote">"Build the simplest code, solve the biggest problems"</span>
                        </div>
                        <img className='w-25' alt="Profile picture" src='logo.png'/>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default About;