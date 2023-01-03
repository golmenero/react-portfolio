import './index.scss';

const Socials = () => {
    
    return (
        <div id='socials' className='m-0 p-0'>
            <ul className="social-networks square spin-icon">
                <li>
                    <div>
                        <span>cgomezcolmenero</span><span className='accent-color'>@gmail.com</span>
                    </div>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/carlos-gomez-colmenero/"> 
                        <i class='bx bxl-linkedin' ></i>
                    </a>
                </li>
                <li>
                    <a href="https://github.com/golmenero">
                        <i class='bx bxl-github' ></i>
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default Socials;