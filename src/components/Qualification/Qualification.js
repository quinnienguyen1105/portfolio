import React, {useState} from 'react'
import "./qualification.scss"
const Qualification = () => {
    const [toggleState, setToggleState] = useState(1);
    const toggleTab = (index) => {
        setToggleState(index);
    }
    console.log(toggleState);
  return (
    <section className='qualification section'>
        <h2 className='section_title'>My journey</h2>
        <span className='section_subtitle'>2015-2023</span>
        <div className='qualification_container container'>
            <div className='qualification_tabs'>
                <div className={toggleState === 1 ? "qualification_button qualification_active button-flex": "qualification_button button-flex"} onClick={() => toggleTab(1)}>
                    <i className='uil uil-graduation-cap qualification_icon'></i>
                    Education
                </div>

                <div className={toggleState === 2 ? "qualification_button qualification_active button-flex": "qualification_button button-flex"} onClick={() => toggleTab(2)}>
                    <i className='uil uil-briefcase-alt qualification_icon'></i>
                    Experience
                </div>
            </div>

            <div className='qualification_sections'>
                <div className={toggleState === 1 ? "qualification_content qualification_content-active" : "qualification_content"}>
                    <div className='qualification_data'>
                        <div></div>

                        <div>
                            <span className='qualification_rounder'></span>
                            <span className='qualification_line'></span>
                        </div>

                        <div >
                            <h3 className='qualification_title'>Fanshawe College </h3>
                            <span className='qualification_subtitle'>Diploma in Web Development and Internet Applications</span>
                            <div className='qualification_calendar'>
                                <i className='uil uil-calendar-alt'>2022- 2023</i>
                            </div>
                        </div>

                       
                    </div>

                    <div className='qualification_data'>
                        <div >
                            <h3 className='qualification_title'>Defeneded A Thesis </h3>
                            <span className='qualification_subtitle'>Educational Forum with 9.0/10</span>
                            <div className='qualification_calendar'>
                                <i className='uil uil-calendar-alt'>2018</i>
                            </div>
                        </div>
                        <div>
                            <span className='qualification_rounder'></span>
                            <span className='qualification_line'></span>
                        </div>

                        <div></div>
                    </div>


                    <div className='qualification_data'>
                        <div></div>

                        <div>
                            <span className='qualification_rounder'></span>
                            <span className='qualification_line'></span>
                        </div>

                        <div >
                            <h3 className='qualification_title'>Open University Ho Chi Minh City, Vietnam </h3>
                            <span className='qualification_subtitle'>Bachelor of Computer Science</span>
                            <div className='qualification_calendar'>
                                <i className='uil uil-calendar-alt'>2015-2019</i>
                            </div>
                        </div>

                       
                    </div>
                </div>

                <div className={toggleState === 2 ? "qualification_content qualification_content-active" : "qualification_content"}>
                    <div className='qualification_data'>
                        <div></div>

                        <div>
                            <span className='qualification_rounder'></span>
                            <span className='qualification_line'></span>
                        </div>

                        <div >
                            <h3 className='qualification_title'>TPS Software Corporation</h3>
                            <span className='qualification_subtitle'>Frontend Developer</span>
                            <div className='qualification_calendar'>
                                <i className='uil uil-calendar-alt'>2019- 2020</i>
                            </div>
                        </div>

                       
                    </div>

                    <div className='qualification_data'>
                        <div >
                            <h3 className='qualification_title'>Ceres Solutions Software Company</h3>
                            <span className='qualification_subtitle'>Full-stack Developer Internship</span>
                            <div className='qualification_calendar'>
                                <i className='uil uil-calendar-alt'>2018- 2019</i>
                            </div>
                        </div>

                        <div>
                            <span className='qualification_rounder'></span>
                            <span className='qualification_line'></span>
                        </div>

                        <div></div>


                       
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Qualification
