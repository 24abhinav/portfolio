const currentYear = new Date().getFullYear();
export const production = true;
export const name = 'Abhinav Anand';
export const email ='abhinav1813@gmail.com';
export const CURRENT_DESIGNATION = 'Software Engineer';
export const CURRENT_COMPANY_NAME = `Lowe's Companies, Inc.`;
export const CURRENT_CITY = 'Bangalore';
export const TOTAL_EXPERIENCE = currentYear - 2019;
export const PROFILE = ['Web Developer', 'Freelancer'];
export const MOBILE = 7003126299;
export const OTHER_CONTACT = 9534009630;
export const WHATSAPP_NUMBER = 7003126299;
export const DATE_OF_BIRTH = '05 December 1998';
export const DOB = '12-05-1998';
export const HIGHEST_QUALIFICATION = 'B.Tech - CSE';
export const WEBSITE_DOMAIN = window.location.origin;
export const FREELANCING_AVAILABILITY = true;
export const GYAN_KI_BAAT = { text: 'Save a tree', logo: 'fas fa-tree', color: '#33781d' };
export const AGE = currentYear - 1998;

export const socialLinks = [
    
    { title: 'LinkedIn', link: 'https://www.linkedin.com/in/24abhinav/', className: 'fab fa-linkedin-in', color: '#0A66C2' },
    { title: 'Skype', link: 'https://join.skype.com/invite/opBO4rGZv3wG', className: 'fab fa-skype', color: '#0079C0' },
    { title: 'Gmail', link: `mailto:${email}`, className: 'fab fa-google', color: '#EA4335' },
    { title: 'WhatsApp', link: `https://wa.me/+91${ WHATSAPP_NUMBER }`, className: 'fab fa-whatsapp', color: '#01e675' },
    { title: 'Mobile', link: `tel:${MOBILE}`, className: 'fas fa-phone-alt', color: '#0A66C2' },

];

export const professionalSkills = [];

export const CURRENT_COMPANY_PROJECT_DETAILS = ``;

export const aboutMe = `
    My Name is Abhinav Anand, currently working for <i><b>${ CURRENT_COMPANY_NAME }</b> </i> in <b>${ CURRENT_CITY }</b>.
    I have <b>${ TOTAL_EXPERIENCE }<sup>+</sup> years </b> of experience in IT Development.
    I started my career as a <b>Front-end Web Developer</b> in <b>June 2019</b>. <br /><br />
    I specialize in creating beautiful, reusable, professional websites using best practice accessibility
    and the latest W3C web standard guideline, resulting in semantic and SEO-friendly HTML and CSS. For creating a website, I
    use <b>React.JS</b> (A lightweight JavaScript library for building user interfaces) along with the Redux and Redux saga.
    <br /><br /> ${ CURRENT_COMPANY_PROJECT_DETAILS }
`;

export const programmingSkills = [
    { skillName: 'html 5', rating: '90%' },
    { skillName: 'css 3', rating: '85%' },
    { skillName: 'javascript (ES8)', rating: '95%' },
    { skillName: 'React.Js', rating: '85%' },
    { skillName: 'redux', rating: '90%' },
    { skillName: 'Node.Js', rating: '65%' },
    { skillName: 'typescript', rating: '90%' },
    { skillName: 'Angular 2', rating: '70%', sup: '+' },
    { skillName: 'Express', rating: '65%' },
    { skillName: 'SailsJs', rating: '70%' },
];

export const technicalSkills =[
    { skillName: 'Agile Methodology', rating: '90%' },
    { skillName: 'Jira', rating: '90%' },
    { skillName: 'Git', rating: '95%' },
    { skillName: 'Webpack', rating: '60%' },
    { skillName: 'Vs Code', rating: '90%' },
    { skillName: 'Sublime Text', rating: '90%' },
];

export const AboutInfo = [
    { keyName: 'BirthDay', value: DATE_OF_BIRTH },
    { keyName: 'Age', value: AGE },
    // { keyName: 'Website', value: WEBSITE_DOMAIN },
    { keyName: 'Degree', value: HIGHEST_QUALIFICATION },
    { keyName: 'Email', value: email },
    { keyName: 'City', value: CURRENT_CITY },
    { keyName: 'Freelance', value: FREELANCING_AVAILABILITY ? 'Available' : 'Not Available', highlight: FREELANCING_AVAILABILITY },
    { keyName: 'Contact', value: `+91 ${ MOBILE }`, flag: true},
    { keyName: 'Other Contact', value: `+91 ${ OTHER_CONTACT }`, flag: true},
];

export const PROJECT_LIST = [
    {
        company_name: CURRENT_COMPANY_NAME,
        timeFrame: {
            from: 'Sep 2021',
            to: '..',
            period: 'Working'
        },
        place: 'Bangalore',
        color: '#20C2F3',
        projects: [
            {
                title: ' eCommerce (Lowe’s – Retail Domain)',
                description: `This project is focused on building new web pages using latest web technologies and also 
                upgrading the existing flows for a better user experience.`,
                responsibility: [
                    'Development of business logic using ReactJS based internal framework, Helix.',
                    'Using Joi, a NodeJS based library for rendering the application from server-side',
                    'Using Styled Components for templating.',
                    'Writing unit test cases using lab, Jest and Enzyme.'
                ]
            },
        ]
    },
    {
        company_name: 'Caritor Solutions India Pvt Ltd',
        timeFrame: {
            from: 'Feb 2021',
            to: 'Sep 2021',
            period: '9 Months'
        },
        place: 'Bangalore',
        color: '#20C2F3',
        projects: [
            {
                title: 'Order Management (Asics)',
                description: `This project is focused on building web pages for the seller and Asics order management team to maintain shoe order season-wise.`,
                designation: 'Software Engineer',
                responsibility: [
                    'Development of business logic using ReactJs ',
                    'Using styled component for templating.',
                    'State management using Redux.',
                    'Writing unit test cases using Jest and Enzyme.'
                ]
            },
        ]
    },
    {
        company_name: 'Mantra Labs Pvt Ltd',
        timeFrame: {
            from: 'June 2019',
            to: 'Jan 2021',
            period: '1.8 Years.'
        },
        place: 'Bangalore',
        color: '#BD2329',
        projects: [
            {
                title: 'Religare Health Insurance',
                description: `Religare Health Insurance Company Limited is an Indian health insurance firm.`,
                designation: 'Software Engineer',
                responsibility: [
                    'Development of business logic using ReactJs.',
                    'State management using Redux.',
                    'Creating template using HTML, CSS and Bootstrap.'
                ]
            },
            {
                title: 'Real Estate (Finance Domain)',
                description: `PropCatalyst is an online platform that provides fractional ownership
                of pre-leased commercial properties to prospective investors.
                Through the platform, investors have the opportunity to invest in real estate.`,
                designation: 'Software Engineer',
                responsibility: [
                    'Development of business logic using ReactJs.',
                    'State management using Redux.',
                    'Creating template using HTML, CSS and Bootstrap'
                ]
            }
        ]
    }
];

export const RESUME_URL = 'https://propcatalyst-dev.s3.ap-south-1.amazonaws.com/propcatalyst-assets/Abhinav%20Anand%20CV.pdf';

export const EDUCATIONS = [
    {
        degree: 'Bachelor of Technology',
        organization_name: 'Guru Nanak Institute Of Technology',
        duration: 'Aug 2015 - Jun 2019',
        place: 'Kolkata',
        marksObtained: '7.64 DGPA'
    },

    {
        degree: 'Senior Secondary School',
        organization_name: 'Bihar State Education Board',
        duration: 'Apr 2014 - Mar 2015',
        place: 'Darbhanga',
        marksObtained: '63%'
    },

    {
        degree: 'High School',
        organization_name: 'Bihar State Education Board',
        duration: 'Apr 2012 - Mar 2013',
        place: 'Madhubani',
        marksObtained: '60%'
    },
];


// SEO

const meta_description = `Portfolio of ${ name } | ${ CURRENT_DESIGNATION } | ${ CURRENT_COMPANY_NAME }`;
const keywords = `web development, web designing, javascript, react, website, seo, freelancer, Bangalore, india `;

export const META_TAGS = [
    { selector: `description`, data: meta_description },
    { selector: `author`, data: name },
    { selector: `keywords`, data: keywords },
]

