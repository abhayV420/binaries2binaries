import ecommerceImg from './projects/ecommerce.jpg'
import todosImg from './projects/todos.jpg'

export const projects = [
    {
        id: 'vastra',
        image: ecommerceImg,
        title: 'VASTRA',
        description: 'This dummy fashion website showcases a modern e-commerce experience built with React.js for a dynamic and responsive user interface. Tailwind CSS is used for rapid and efficient styling, while React Router DOM facilitates smooth navigation between product pages, cart, and checkout. Context API manages the shopping cart and user authentication, providing a realistic simulation of an online store.',
        ref: 'https://vastra0.netlify.app/'
    },
    {
        id: 'todosmanager',
        image: todosImg,
        title: 'TODOS MANAGER',
        description: 'Developed using React.js, this todos manager application allows users to add, edit, and delete tasks. Tailwind CSS ensures a modern and user-friendly interface, and Context API is used for centralized state management, making it easy to share and update todo lists throughout the application.',
        ref: 'https://myt0dosmanager.netlify.app/'
    }
]