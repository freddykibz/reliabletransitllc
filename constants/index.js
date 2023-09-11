import { people01, people02, people03, facebook, instagram, linkedin, twitter, airbnb, binance, coinbase, dropbox, send, shield, star,phone,
   locationpin, destination, docpic, van,office, family,airplane,technology,senior,medical,wheelchair } from "../public/assets";


export const services = [
  {
    id: "service-1",
    icon: medical,
    title: "Doctor Appointment",
    content:
      "we specialize in transporting individuals to and from medical appointments, ensuring they receive the necessary care.",
  },
  {
    id: "service-2",
    icon: senior,
    title: "Senior Transportation",
    content:
      " we often cater to the elderly in the population, offering assistance  to the intended destination",
  },
  {
    id: "service-3",
    icon: family,
    title: "Family Gatherings",
    content:
      "we are pleased to provide transportation for patients to attend special events, family gatherings, and celebrations.",
  },
  
    {
      id: "service-4",
      icon:   airplane,
      title: "Airport  Transportation",
      content:
        "we offer transportation to and from airports, catering to travelers with disabilities or mobility challenges.",
    },
    {
      id: "service-5",
      icon: office,
      title: "Pharmacy Trips",
      content:
        " we offer transportation for individuals to pick up prescriptions and medications from pharmacies.",
    },
    
    {
      id: "service-7",
      icon: wheelchair,
      title: "Assistive Devices",
      content:
        "Our Vehicle are equipped with assistive devices like lifts, ramps, and securement systems to ensure passenger safety.",
    },
  
];

export const coreValues = [
{
  id: "core-1",
  icon: star,
  title: "Empathy and Compassion ",
  content:
    "We prioritize empathy and compassion in all our interactions. We understand the unique needs of our passengers and their families, and we are committed to providing caring, patient-centered transportation solutions that respect their dignity and well-being.",
},
{
  id: "core-2",
  icon: star,
  title: "Accessibility and Inclusivity",
  content:
    " We are dedicated to creating an inclusive environment for all individuals, regardless of their abilities or medical conditions.",
},
{
  id: "core-3",
  icon: star,
  title: "Reliability and Safety",
  content:
    "Safety is our utmost priority. We uphold the highest standards of safety in our vehicles, equipment, and operations.",
},
{
  id: "core-4",
  icon: star,
  title: "Community Engagement",
  content:
    " We believe in building strong connections within the communities we serve. We actively engage with local organizations, healthcare facilities, and advocacy groups to understand the evolving needs of our passengers.",
},

];

export const stats = [
    {
      id: "stats-1",
      title: "Clients",
      value: "38+",
    },
    {
      id: "stats-2",
      title: " Average Monthly Trips",
      value: "150",
    },
    {
      id: "stats-3",
      title: "Years Serving",
      value: "2+",
    },
  ];
  
  export const features = [
    {
      id: "feature-1",
      icon: phone,
      title: "MAKE A CALL / BOOKING ",
      content:
        "To schedule an appointment, you can either call our dedicated booking line",
    },
    {
      id: "feature-2",
      icon: locationpin,
      title: "SET PICK-UP LOCATION",
      content:
        "We'll pick you up right from your location .",
    },
    {
      id: "feature-3",
      icon: destination,
      title: "ARRIVE TO DESTINATION",
      content:
        "We ensure a smooth journey, taking you directly to your destination.",
    },
  ];
  export const footerLinks = [
    {
      title: "Useful Links",
      links: [
        {
          name: "Book Appointment",
          link: "/book-appointment",
        },
        {
          name: "Our Services",
          link: "/services",
        },
        {
          name: "About Us",
          link: "/#about",
        },
        {
          name: "Contact Us",
          link: "/#contact",
        },
        {
          name: "Terms & Services",
          link: "/terms",
        },
      ],
    },
    {
      title: "Quick Links",
      links: [
        {
          name: "Privacy Policy",
          link: "/privacy",
        },
        {
          name: "FAQs",
          link: "/faqs",
        },
        {
          name: "facebook",
          link: "",
        },
        {
          name: "twitter",
          link: "",
        },
        {
          name: "LinkedIn",
          link: "",
        },
      ],
    },
  ];
  export const socialMedia = [
    {
      id: "social-media-1",
      icon: instagram,
      link: "https://www.instagram.com/",
    },
    {
      id: "social-media-2",
      icon: facebook,
      link: "https://www.facebook.com/",
    },
    {
      id: "social-media-3",
      icon: twitter,
      link: "https://www.twitter.com/",
    },
    {
      id: "social-media-4",
      icon: linkedin,
      link: "https://www.linkedin.com/",
    },
  ];
  
  export const feedback = [
    {
      id: "feedback-1",
      content:
        "As a caregiver for my elderly mother, getting her to medical appointments and social events used to be a major challenge.With their reliable and caring drivers, we now have a stress-free solution that has truly been a lifesaver for our family.",
      name: "Herman Jensen",
      title: "Founder & Leader",
      img: people01,
    },
    {
      id: "feedback-2",
      content:" From the moment I make a booking to the time I reach my destination, their drivers and staff provide exceptional service. It's reassuring to know that I can count on them for safe and punctual rides.",
      name: "Steve Mark",
      title: "Founder & Leader",
      img: people02,
    },
    {
      id: "feedback-3",
      content:
        "Thanks to their caring drivers and accommodating vehicles, I've regained my sense of freedom and can confidently go about my daily activities.",
      name: "Kenn Gallagher",
      title: "Founder & Leader",
      img: people03,
    },
  ];

  export const faqsData = [
    {
      id: 'que-01',
      question: "What is Paratransit/NEMTS?",
      answer: "Paratransit, also known as Non-Emergency Medical Transportation (NEMTS), refers to specialized transportation services designed to assist individuals with disabilities or medical conditions in reaching their destinations, such as medical appointments, social events, or other essential trips."
    },
    {
      id: 'que-02',
      question: "Who is eligible for Paratransit/NEMTS services?",
      answer: "Eligibility criteria vary, but typically include individuals who have disabilities, medical conditions, or mobility challenges that prevent them from using regular public transportation independently."
    },
    {
      id: 'que-03',
      question: "How do I determine my eligibility for your services?",
      answer: "Eligibility can be assessed through an application process. Contact our company to obtain the necessary forms and information about the evaluation process."
    },
    {
      id: 'que-04',
      question: "How do I schedule a ride with your company?",
      answer: "You can schedule a ride by contacting our booking hotline or using our online booking system. Provide your information, desired pick-up and drop-off locations, and preferred date and time."
    },
    {
      id: 'que-05',
      question: "What areas do you serve?",
      answer: "We serve [list of service areas], catering to a wide range of locations to ensure that clients can access transportation where they need it."
    },
    {
      id: 'que-06',
      question: "Are your vehicles accessible?",
      answer: "Yes, all our vehicles are equipped to accommodate individuals with mobility challenges. They are designed to provide comfortable and safe transportation for passengers with varying needs."
    },
    {
      id: 'que-07',
      question: "Are your drivers trained to assist passengers with disabilities?",
      answer: "Absolutely, our drivers receive specialized training to assist passengers with disabilities, ensuring a supportive and respectful experience throughout the journey."

    },
    {
      id: 'que-08',
      question: "Can I bring a companion with me on the ride?",
      answer: "In many cases, companions are allowed to accompany passengers. Please let us know in advance so we can make the necessary arrangements."
      
    },
    {
      id: 'que-09',
      question: "How far in advance should I book a ride?",
      answer: "In many cases, companions are allowed to accompany passengers. Please let us know in advance so we can make the necessary arrangements."
      
    },
    {
      id: 'que-10',
      question: "What are your rates for Paratransit/NEMTS services?",
      answer: "Rates can vary based on factors such as distance, type of trip, and any additional services required. Contact our customer service for detailed information about our pricing structure."
      
    },



  ]