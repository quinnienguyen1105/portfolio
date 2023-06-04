import React, { useEffect, useState } from 'react'
import "./header.scss"
const Header = () => {
    //toggle menu
    const [Toggle, showMenu] = useState(false);
    //day-night mode 
    const [mode, setMode] = useState('day');
    const [scrollClass, setScrollClass] = useState('');
    const toogleMode = () => {
        if(mode=== 'day') {
            setMode('night');
        }
        else {
            setMode('day');
        }
    }
    useEffect(()=> {
        document.documentElement.className= mode;
    }, [mode])


    useEffect(() => {
        const handleScroll = () => {
          const scrollPosition = window.scrollY;
          if (scrollPosition > 0) {
            setScrollClass('scrolled');
          } else {
            setScrollClass('');
          }
        };
    
        window.addEventListener('scroll', handleScroll);
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, [scrollClass]);
    

  return (
    <header className={`header ${scrollClass}`}> 
        <nav className='nav container'>
            <a href='index.html' className='nav_logo'>Quinnie.dev</a>
            <div className={Toggle ? "nav_menu show_menu" : "nav_menu"}>
                <ul className='nav_list grid'>
                    <li className='nav_item'>
                        <a href='#home' className='nav_link active_link'><i className='uil uil-estate nav_icon'></i> Home</a>
                    </li>
                    <li className='nav_item'>
                        <a href='#about' className='nav_link'><i className='uil uil-user nav_icon'></i> About</a>
                    </li>
                    <li className='nav_item'>
                        <a href='#skills' className='nav_link'><i className='uil uil-file-alt nav_icon'></i> Skills</a>
                    </li>
                    <li className='nav_item'>
                        <a href='#projects' className='nav_link'><i className='uil uil-briefcase nav_icon'></i> Projects</a>
                    </li>
                    <li className='nav_item'>
                        <a href='#contact' className='nav_link'><i className='uil uil-message nav_icon'></i> Contact</a>
                    </li>
                    <li className='nav_item toggle_mode'>
                        {mode === 'day' ? (
                            <>
                            <i className='bx bx-moon' onClick={toogleMode}></i>
                            <a href='#' className='nav_link'>Night Mode</a>
                            </>
                        ) : (
                            <>
                            <i className='bx bx-sun' onClick={toogleMode}></i>
                            <a href='#' className='nav_link'>Day Mode</a>
                            </>
                        )}
                    </li>
                </ul>

                <i className='uil uil-times nav_close' onClick={() => showMenu(!Toggle)}></i>
            </div>

            <div className='nav_toggle' onClick={() => showMenu(!Toggle)}>
                <i className='uil uil-apps'></i>
            </div>
        </nav>
    </header>
  )
}

export default Header;
