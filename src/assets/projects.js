import vastra from './projects/vastra.png';
import passwordgenerator from './projects/passwordgenerator.png';
import todosmanager from './projects/todosmanager.png';


export const projects = [
    {
        id: 'vastra',
        image: vastra,
        title: 'VASTRA',
        description: 'This dummy fashion website showcases a modern e-commerce experience built with React.js for a dynamic and responsive user interface. Tailwind CSS is used for rapid and efficient styling, while React Router DOM facilitates smooth navigation between product pages, cart, and checkout. Context API manages the shopping cart and user authentication, providing a realistic simulation of an online store.',
        ref: 'https://vastra0.netlify.app/'
    },
    {
        id: 'passgen',
        image: passwordgenerator,
        title: 'PASSWORD GENERATOR',
        description: 'A simple password generator project built with React.js and styled with Tailwind CSS.',
        ref: 'https://rand0mpassw0rdgenerat0r.netlify.app/'
    },
    {
        id: 'todosmanager',
        image: todosmanager,
        title: 'TODOS MANAGER',
        description: 'Developed using React.js, this todos manager application allows users to add, edit, and delete tasks. Tailwind CSS ensures a modern and user-friendly interface, and Context API is used for centralized state management, making it easy to share and update todo lists throughout the application.',
        ref: 'https://myt0dosmanager.netlify.app/'
    }
]