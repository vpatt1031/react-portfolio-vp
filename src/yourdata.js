// Skills Icons
import htmlIcon from "./images/html.svg"
import cssIcon from "./images/css.svg"
import reactIcon from "./images/react.svg"
import jsIcon from "./images/javascript.svg"
import designIcon from "./images/design.svg"
import codeIcon from "./images/code.svg"
import employee_directory from "./images/employee_directory.png"
import burger_app from "./images/buger_app.png"
import aboutme from "./images/aboutme.jpeg"
import pwa from "./images/pwa.png"
import project1 from "./images/project1_giphy.gif"
import fitness_tracker from "./images/fitness_tracker.png"

// Social Icon
import githubIcon from "./images/github.svg"
import codepenIcon from "./images/codepen.svg"
import dribbbleIcon from "./images/dribbble.svg"
import instagramIcon from "./images/instagram.svg"
import linkedinIcon from "./images/linkedin.png"


export default {
  //(Please Do Not Remove The comma(,) after every variable)
  //Change The Website Template

  //   Header Details ---------------------
  name: "Vanessa Patterson",
  headerTagline: [
    //Line 1 For Header
    "Web developer from",
    //Line 2 For Header
    "Charlotte, NC.",
    //Line 3 For Header
    // "and programming",
  ],
  //   Header Paragraph
  headerParagraph:
  "",

  //Contact Email
  contactEmail: "vpatt1031@gmail.com",

  // End Header Details -----------------------

  // Promotion Section --------------------------

  promotionHeading: "Summary",
  promotionPara:
    "Full stack developer educated at the University of Richmond with a background in web content management and software implementation. Developed skills in HTML, CSS, JavaScript, jQuery, Node.js, React.js and responsive web design. Strengths in being a self-starter, results driven, and teamwork. Passionate about combining the art of design with the art of programming.",
  // End Promotion Section -----------------

  // Work Section ------------------------
  projects: [
    {
      title: "React Employee Directory", //Project Title
      para:
        "This application is an employee directory created using React, with the UI broken up into components. The user can view non-sensitive data about employees, filter and search names.", 
      //Project Image 
      imageSrc: employee_directory,
        
      //Project URL
      url: "https://vpatt1031.github.io/react_employee_directory/",
    },
    {
      title: "Eat Da Burger", //Project Title 
      para:
        "This application is a burger logger created with MySQL, Node, Express, Handlebars, and ORM. The application was structured using the MVC design pattern. Node and MySQL were used to query and route data into the application. The HTML page was generated using Handlebars.", 
      //Project Image
      imageSrc: burger_app,
      //Project URL 
      url: "https://pure-bayou-22405.herokuapp.com/",
    },
    {
      title: "PWA Budget Tracker", //Project Title
      para:
        "This application is a budget tracker that allows offline access and functionality. The user is able to add expenses and deposits to their budget with or without a connection. When entering transactions offline, the transactions populate the total when brought back online.", 
      //Project Image 
      imageSrc: pwa,
      //Project URL
      url: "https://infinite-basin-55228.herokuapp.com/",
    },
    {
      title: "Movie Roulette", //Project Title 
      para:
        "This is an online application using multiple APIs that finds upcoming holidays, and then displays movies related to that holiday when clicked on. The user can also save movies to local storage.", 
      //Project Image 
      imageSrc: project1,
      //Project URL
      url: "https://vpatt1031.github.io/movie_roullette/",
    },
    {
      title: "Mongo Fitness Tracker", //Project Title
      para:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.", // Add Your Service Type Here
      //Project Image 
      imageSrc: fitness_tracker,
      //Project URL 
      url: "https://afternoon-river-21848.herokuapp.com/?id=60652c20cd48880015f1cc6e",
    },
    {
      title: "Express Note Taker", //Project Title
      para:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        "https://images.unsplash.com/photo-1517479149777-5f3b1511d5ad?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTAyfHxwYXN0ZWx8ZW58MHx8MHw%3D&auto=format&fit=crop&w=400&q=60",
      //Project URL - Add Your Project Url Here
      url: "http://chetanverma.com/",
    },

    /*
    If You Want To Add More Project just Copy and Paste This At The End
    ,{
        title: 'Project Five',
        para: 'Something Amazing',
        imageSrc: "",
        url: ''
    }
    */
  ],

  // End Work Section -----------------------

  

  // About Secton --------------
  aboutParaOne:
    "I am a graduate of Virginia Commonwealth University with a Bachelor of Science in Biology, currently pursuing a certificate in full stack development from the University of Richmond. Since graduating from VCU, I have spent my time traveling and living in different cities while starting a family. Over the years, I've lived in Germany, Hawaii, Texas, Virginia, and have now settled in North Carolina. ",
  aboutParaTwo:
    "My love for travel has allowed me to learn from so many differnt people and cultures, and that has truly enriched my experiences and outlook on life. I came to love web design while working for a private school in Annandale, VA. I managed and updated the school's learninng management software and student information system. Using the development features in Word Press, I created a new school website.",
  aboutParaThree:
    "I also assisted the Marketing Director in designing fliers, booklets, programs, and invitations. I really enjoy the artistic process of fusing graphic design and web development together and hope to develop a career doing what I love.",
  aboutImage: aboutme,
    

  //   End About Section ---------------------

  // Skills Section ---------------

  //   Import Icons from the top and link it here

  skills: [
    {
      img: htmlIcon,
      para:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    },
    {
      img: cssIcon,
      para:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    },
    {
      img: jsIcon,
      para:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    },
    {
      img: reactIcon,
      para:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    },
    {
      img: designIcon,
      para:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    },
    {
      img: codeIcon,
      para:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    },
  ],

  // End Skills Section --------------------------

  
  //   Contact Section --------------

  contactSubHeading: "Let's create your next experience together",
  social: [
    // Add Or Remove The Link Accordingly
    { img: githubIcon, url: "https://github.com/vpatt031" },
    { img: linkedinIcon, url: "https://www.linkedin.com/in/vanessa-saucedo-patterson" },
    {
      img: codepenIcon,
      url: "https://codepen.io/vpatt1031",
    },
    {
      img: dribbbleIcon,
      url: "https://dribbble.com/vpatt1031",
    },
    {
      img: instagramIcon,
      url: "https://www.instagram.com/",
    },
  ],

  // End Contact Section ---------------
}

// Thanks for using this template, I would love to hear from you contact me at hello@chetanverma.com
