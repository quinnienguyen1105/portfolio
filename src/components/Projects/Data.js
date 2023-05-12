import Image from "../../assets/MapleStays.png";
import d3 from "../../assets/d3-2.svg";
export const Data = [
    {
        id: 1,
        image: Image,
        title: "MapleStays",
        description: "A simple airbnb website that servers for hosts and travellers to book or renting an amazing airbnb in Ontario, Canada", 
        gitLink: "https://github.com/quinnienguyen1105/airbnb-booking",
        liveLink: "https://maplestays.vercel.app/",
        techniques: [
            <i class='bx bxl-react'></i>,
            <i class='bx bxl-firebase' ></i>,
            <i class='bx bxl-redux' ></i>,
            <i class='bx bxl-html5' ></i>, 
            <i class='bx bxl-sass' ></i>
        ],
    },
    {
        id: 2,
        image: Image,
        title: "PropertyPhoto360",
        description: "A portfolio website for Property Business including introduction, services, portfolio and contact to potential customers.", 
        gitLink: "#",
        liveLink: "#",
        techniques: [
            <i class='bx bxl-wordpress' ></i>,
            <i class='bx bxl-html5' ></i>,
            <i class='bx bxl-css3' ></i>,

        ]
    },
    {
        id: 3,
        image: Image,
        title: "Mastery",
        description: "An educational website that was designed to introduce about this center, online courses, team members, contact information", 
        gitLink: "#",
        liveLink: "#",
        techniques: [
            <i class='bx bxl-html5' ></i>,
            <i class='bx bxl-css3' ></i>,
            <i class='bx bxl-javascript' ></i>,
        ]
    },
    {
        id: 4,
        image: Image,
        title: "CanJet Pattern Library",
        description: "This is a group project to design a pattern library website for CanJet.", 
        gitLink: "#",
        liveLink: "#",
        techniques: [
            <i class='bx bxl-html5' ></i>,
            <i class='bx bxl-css3' ></i>,
            <i class='bx bxl-javascript' ></i>,
        ]
    },
    {
        id: 5,
        image: Image,
        title: "CanJet Customer Satisfication Report",
        description: "This is a group project to create website including charts. We used D3.js to display a CanJet Customer Satisfication Report through a provied survey.", 
        gitLink: "#",
        liveLink: "#",
        techniques: [
            <img src={d3} alt="" style={{ filter: 'saturate(0)', width: '29px', height: '28px' }} className="img_icon"/>,
            <i class='bx bxl-html5' ></i>,
            <i class='bx bxl-css3' ></i>,
            <i class='bx bxl-javascript' ></i>,
        ]
    },
    {
        id: 6,
        image: Image,
        title: "Quinnie Cosmetic",
        description: "This is an individual e-commerce project that I designed and created for a cosmetic store that I can learn about SEO drammatically.", 
        gitLink: "#",
        liveLink: "#",
        techniques: [
            <i class='bx bxl-wordpress'></i>,
            <i class='bx bxl-html5' ></i>,
            <i class='bx bxl-css3' ></i>,
        ]
    },
]