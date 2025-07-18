import Header from "../components/Header";
import '../css/about.css';
import AddBtn from "../components/moreBtn";

const About = () => {
    return (
        <div className="about">
            <Header />
            <h1 className="h1">About</h1>
            <div className="about body">
                <h2>About This Project</h2>
                <p>
                    Mini Library Manager is a web application that helps users manage their personal book collections.
                    You can add, update, and delete books, as well as search by title, author, or genre.
                </p>
                <p>
                    This app is built using the MERN Stack (MongoDB, Express.js, React, Node.js) and follows the MVC architecture for a clean and scalable codebase.
                </p>
                <p>
                    Authentication is implemented to ensure that each user can securely manage their own collection.
                </p>
                <p>
                    This project was developed by <a href="https://github.com/FerrerMark" target="_blank" rel="noopener noreferrer">FerrerMark</a> as a self-practice project to learn and apply full-stack web development principles using modern technologies.
                </p>
                <p>
                    The system is hosted on <a href="render.com">Render</a> with free tier. That is why, the upload of an image is not working.
                </p>
            </div>
            <AddBtn />
        </div>
    );
};

export default About;
