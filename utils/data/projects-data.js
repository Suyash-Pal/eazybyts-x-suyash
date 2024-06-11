import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [
    {
        id: 1,
        name: 'Chrome Extension — Language Translator',
        description: "Developed a Python-based Chrome extension leveraging the Chrome API to create a language translation tool. Utilized Python for backend logic and integration with Google Translate API to enable seamless translation of webcontent. Implemented user-friendly features allowing instant translation of selected text within the browser, enhancing accessibility for multi-languagecontent on web pages.",
        tools: ['PYTHON', 'GOOGLE TRANSLATE API'],
        role: 'PYTHON SOFTWARE DEVELOPER',
        code: '',
        demo: '',
        image: crefin,
    },
    {
        id: 2,
        name: 'Company Website — Website for a startup company.',
        description: 'I have designed and developed a full-stack website for TheWalk-inCloset, a fashion startup based in Manipal Karnataka. I created the UI using ReactJS and Figma . This website consists of features where-in customers can shop using different filters for the products. Used REACT for the frontend and Firebase to set-up the backend. Integrated login as well as sign-up functionality. ',
        tools: ['NodeJS', 'React', "Firebase"],
        role: 'Full Stack Developer',
        code: '',
        demo: '',
        image: travel,
    },
    {
        id: 3,
        name: 'Obstacle Avoider Robot',
        description: 'Developed a robotic car that has the capability of avoiding any obstacles that come in its path. Used Arduino-UnoR3, HCSR04 sensor, L293D motor-controller and servo motor to detect an obstacle and move in a different path. Also developed Line Follower robot using IR sensor. ',
        tools: ['Arduio', 'Embedded C','Sensor Integration'],
        code: '',
        role: 'Electronics Engineer',
        demo: '',
        image: realEstate,
    }
];


// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },