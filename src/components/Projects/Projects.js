import React, {useState} from 'react';
import './project.scss';
import {Data} from './Data';
import quinnie_cosmetic_homepage from "../../assets/quinnie_cosmetic/homepage.png";
import quinnie_cosmetic_about from "../../assets/quinnie_cosmetic/about.png";
import quinnie_cosmetic_blog from "../../assets/quinnie_cosmetic/blog.png";
import quinnie_cosmetic_contact from "../../assets/quinnie_cosmetic/contact.png";
import quinnie_cosmetic_product_list from "../../assets/quinnie_cosmetic/product_list.png";
import quinnie_cosmetic_product_details from "../../assets/quinnie_cosmetic/product_details.png";
const Projects = () => {
    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
        setShowModal(true);
      };

      const closeModal = () => {
        setShowModal(false);
      };
  return (
    <section className='projects section' id='projects'>
        <h2 className='section_title'>
            Projects
        </h2>
        <span className='section_subtitle'>Discovering my works on Website Development</span>

        <div className='projects_container container grid'>

            <div className='projects_content'>
                <div className='project_group'>
                    {Data.map(({id, image, title, description, gitLink, liveLink, techniques }) =>{
                        return (
                            <div className='project_data' key={id}>
                                <div className='project_img'>
                                    <img src={image} alt='' className='image_project' />
                                </div>
                                <div className='project_content'>
                                    <div className='project_heading'>
                                        <h3 className='project_title'>{title}</h3>
                                        <div className='project_links'>
                                            {gitLink ? (
                                                <div className='gitLink'>
                                                    <a href={gitLink} target='_blank'>
                                                        <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4 hover:text-blue-500 md:h-[18px] md:w-[18px]" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                                                    </a>
                                                </div>
                                            ) : null }
                                            {liveLink ? (
                                             <div className='liveLink'>
                                                <a href={liveLink} target='_blank'>
                                                <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4 hover:text-blue-500 md:h-[18px] md:w-[18px]" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                                                </a>
                                            </div>
                                            ) : (
                                                <div className='liveLink' onClick={openModal}>
                                                    <svg
                                                    stroke='currentColor'
                                                    fill='none'
                                                    strokeWidth='2'
                                                    viewBox='0 0 24 24'
                                                    strokeLinecap='round'
                                                    strokeLinejoin='round'
                                                    className='h-4 w-4 hover:text-blue-500 md:h-[18px] md:w-[18px]'
                                                    height='1em'
                                                    width='1em'
                                                    xmlns='http://www.w3.org/2000/svg'
                                                    >
                                                    <path d='M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6'></path>
                                                    <polyline points='15 3 21 3 21 9'></polyline>
                                                    <line x1='10' y1='14' x2='21' y2='3'></line>
                                                    </svg>
                                                </div>
                                            ) }

                                        </div>
                                    </div>
                                
                                    <p className='project_description'>{description}</p>
                                    <div className='project_techniques'>
                                        {techniques.map((technique, index) => (
                                            <span key={index} className='technique_icon'>
                                            {technique}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>   
                        )
                    })}
         
                </div>
            </div>
        </div>

        {showModal && (
            <div className='modal'>
                <div className='modal_content'>
                <span className='close' onClick={closeModal}>
                    &times;
                </span>
                <img src={quinnie_cosmetic_homepage} alt='' className='modal_image' />
                <img src={quinnie_cosmetic_about} alt='' className='modal_image' />
                <img src={quinnie_cosmetic_blog} alt='' className='modal_image' />
                <img src={quinnie_cosmetic_product_list} alt='' className='modal_image' />
                <img src={quinnie_cosmetic_contact} alt='' className='modal_image' />
                </div>
            </div>
        )}
    </section>
  )
}

export default Projects;
