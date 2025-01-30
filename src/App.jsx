import "./style/style.css";
import { useRef, useState } from "react";

function App() {
    const [currentRepo, setCurrentRepo] = useState(0);
    const homeRef = useRef(null);
    const aboutRef = useRef(null);
    const portfolioRef = useRef(null);
    const contactRef = useRef(null);

    const prevButtonRef = useRef(null);
    const nextButtonRef = useRef(null);
    const menuButtonRef = useRef(null);
    const menuItemRef = useRef(null);
    const linksRef = useRef(null);
    const toTopBtnRef = useRef(null);
    const titleRef = useRef(null);
    const descriptionRef = useRef(null);
    const linkRef = useRef(null);
    const imageRef = useRef(null);
    const menuRef = useRef(null);
    const navbarRef = useRef(null);

    const repos = [
        {
            id: 1,
            img: "../img/exam-typescript-react.png",
            title: "exam-typescript-react",
            description:
                "A simple todo app built using Typescript and React. Built with components and utilizing useEffect React hook to save the array of tasks to local storage when tasks are added, checked or deleted.",
            link: "https://github.com/FredrikAndersson-MU24/exam-typescript-react",
        },
        {
            id: 2,
            img: "../img/java-tictactoe.png",
            title: "Java-TicTacToe",
            description:
                "A simple Tic-Tac-Toe game written in Java for an individual exam. Textbased and played in the console. Human vs Human or Human vs CPU. Two difficulty levels against the CPU",
            link: "https://github.com/FredrikAndersson-MU24/Java-TicTacToe",
        },
        {
            id: 3,
            img: "../img/FLIM-phonebook.png",
            title: "FLIM-Phonebook",
            description:
                "A group project built for the final exam in the Java course. Utilizing OOP, CRUD, inheritance and persistant data using FileStream our group of four bulit this textbased phone book application. PArt of the assignment was using UML and Trello to track work.",
            link: "https://github.com/LindaMU24/FLIM-Phonebook",
        },
        {
            id: 4,
            img: "../img/mu24-frontend-intro-exam.png",
            title: "frontend-intro-exam",
            description:
                "A simple todo-app. It uses the browser local storage to save the tasks and their status between browser sessions.",
            link: "https://github.com/FredrikAndersson-MU24/MU24-frontend-intro-exam",
        },
    ];

    // Clicking the previous button
    const prevRepo = () => {
        setCurrentRepo(currentRepo - 1);
        if (currentRepo <= 0) {
            setCurrentRepo(repos.length - 1);
        }
        console.log(currentRepo);
    };

    // Clicking the next button
    const nextRepo = () => {
        setCurrentRepo(currentRepo + 1);
        if (currentRepo >= repos.length - 1) {
            setCurrentRepo(0);
        }
        console.log(currentRepo);
    };

    const scrollToSection = (ref) => {
        const navbarHeight = navbarRef.current.getBoundingClientRect().height;
        window.scrollTo({
            top: ref.current.offsetTop - navbarHeight,
            behavior: "smooth",
        });
    };

    return (
        <>
            <header className="navbar" id="home" ref={navbarRef}>
                <div className="header-mobile">
                    <h1>
                        Fredrik Andersson
                        <button
                            id="menu-button"
                            className="button"
                            ref={menuButtonRef}
                            onClick={() => {
                                const containerHeight =
                                    menuRef.current.getBoundingClientRect()
                                        .height;
                                console.log(containerHeight);
                                const linksHeight =
                                    linksRef.current.getBoundingClientRect()
                                        .height;
                                console.log(linksHeight);
                                if (containerHeight === 0) {
                                    menuRef.current.style.height = `${linksHeight}px`;
                                    menuButtonRef.current.classList.add(
                                        "button-down"
                                    );
                                } else {
                                    menuRef.current.style.height = 0;
                                    menuButtonRef.current.classList.remove(
                                        "button-down"
                                    );
                                }
                            }}
                        >
                            MENU
                        </button>
                    </h1>
                    <nav id="menu" className="menu" ref={menuRef}>
                        <ul className="links" ref={linksRef}>
                            <li>
                                <a
                                    id="menu-item"
                                    className="menu-item scrolling-link "
                                    onClick={() => {
                                        menuRef.current.style.height = 0;
                                        menuButtonRef.current.classList.remove(
                                            "button-down"
                                        );
                                        setTimeout(() => {
                                            scrollToSection(navbarRef);
                                        }, 300);
                                    }}
                                >
                                    Home
                                </a>
                            </li>
                            <li>
                                <a
                                    id="menu-item"
                                    className="menu-item scrolling-link "
                                    onClick={() => {
                                        menuRef.current.style.height = 0;
                                        menuButtonRef.current.classList.remove(
                                            "button-down"
                                        );
                                        setTimeout(() => {
                                            scrollToSection(aboutRef);
                                        }, 300);
                                    }}
                                >
                                    About
                                </a>
                            </li>
                            <li>
                                <a
                                    id="menu-item"
                                    className="menu-item scrolling-link "
                                    onClick={() => {
                                        menuRef.current.style.height = 0;
                                        menuButtonRef.current.classList.remove(
                                            "button-down"
                                        );
                                        setTimeout(() => {
                                            scrollToSection(portfolioRef);
                                        }, 300);
                                    }}
                                >
                                    Portfolio
                                </a>
                            </li>
                            <li>
                                <a
                                    id="menu-item"
                                    className="menu-item scrolling-link "
                                    onClick={() => {
                                        menuRef.current.style.height = 0;
                                        menuButtonRef.current.classList.remove(
                                            "button-down"
                                        );
                                        setTimeout(() => {
                                            scrollToSection(contactRef);
                                        }, 300);
                                    }}
                                >
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>

            <main>
                {/* <!-- About --> */}
                <section ref={aboutRef}>
                    <h3>About me</h3>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Sapiente omnis quisquam pariatur unde! Nobis ea
                        fugiat suscipit, unde at esse praesentium! Doloribus
                        alias sequi maiores quos distinctio error illo ratione.
                        Fugiat, nam. Optio quod odio dicta dignissimos vitae
                        minus accusamus nobis minima eaque libero fugiat
                        perspiciatis esse expedita quibusdam neque cum ab in
                        doloribus, veniam pariatur possimus temporibus? Nobis,
                        et!
                    </p>
                </section>
                {/* <!-- Portfolio --> */}
                <section ref={portfolioRef}>
                    <h3 className="portfolio-heading">School projects</h3>
                    <p>
                        These are projects bulit for specific courses in the
                        MU24 programme.
                    </p>
                    {/* <!-- Repos --> */}
                    <article className="repos">
                        <h4 id="title">Title</h4>
                        <div className="repo-details">
                            <p id="description">Short description</p>
                            <img id="image" src="" alt="" />
                        </div>

                        <div className="button-wrapper">
                            <button className="repo-button">
                                <a id="link" href="">
                                    Read more about project
                                </a>
                            </button>
                            <button
                                className="repo-button"
                                id="prev-button"
                                onClick={() => {
                                    prevRepo();
                                }}
                            >
                                Previous
                            </button>
                            <button
                                className="repo-button"
                                id="next-button"
                                onClick={() => {
                                    nextRepo();
                                }}
                            >
                                Next
                            </button>
                        </div>
                    </article>
                    {/* <!--  --> */}
                </section>
                {/* <!-- Contact --> */}
                <section ref={contactRef}>
                    <h3>Contact</h3>
                    <ul>
                        <li>
                            <a
                                href="https://github.com/FredrikAndersson-MU24"
                                className="contacts"
                            >
                                GitHub
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://www.linkedin.com/in/fredrik-andersson-960aa8332/"
                                className="contacts"
                            >
                                LinkedIn
                            </a>
                        </li>
                        <li>
                            <a
                                href="mailto:fredrik@fredande.se"
                                className="contacts"
                            >
                                Email
                            </a>
                        </li>
                    </ul>
                </section>
            </main>
            <footer id="footer">
                Copyright &copy; <span id="date"></span>
            </footer>
            <a
                href="#home"
                className="scrolling-link button to-top"
                id="to-top"
            >
                /\
            </a>
        </>
    );
}

export default App;
