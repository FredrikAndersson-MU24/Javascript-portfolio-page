import "./style/style.css";

function App() {
    const prevButton = document.getElementById("prev-button");
    const nextButton = document.getElementById("next-button");
    const menuButton = document.getElementById("menu-button");
    const menuItem = document.querySelector(".menu");
    const links = document.querySelector(".links");
    const scrollLink = document.querySelectorAll(".scrolling-link");
    const navbar = document.querySelector(".navbar");
    // const date = document.getElementById("date");
    const toTopBtn = document.getElementById("to-top");
    // const main = document.getElementById("main");
    // date.innerHTML = new Date().getFullYear();

    const title = document.getElementById("title");
    const description = document.getElementById("description");
    const link = document.getElementById("link");
    const image = document.getElementById("image");

    const menu = document.getElementById("menu");

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

    let currentRepo = 0;

    window.addEventListener("scroll", () => {
        if (window.scrollY > 100) {
            toTopBtn.style.bottom = "2rem";
        } else {
            toTopBtn.style.bottom = "-8rem";
        }
    });

    window.addEventListener("load", () => setRepo(currentRepo));

    // Clicking the previous button
    prevButton.addEventListener("click", () => {
        currentRepo--;
        if (currentRepo < 0) {
            currentRepo = repos.length - 1;
        }
        console.log(currentRepo);
        setRepo(currentRepo);
    });

    // Clicking the next button
    nextButton.addEventListener("click", () => {
        currentRepo++;
        if (currentRepo > repos.length - 1) {
            currentRepo = 0;
        }
        console.log(currentRepo);
        setRepo(currentRepo);
    });

    function setRepo(repo) {
        title.innerText = repos[repo].title;
        description.innerText = repos[repo].description;
        link.href = repos[repo].link;
        image.src = repos[repo].img;
    }

    menuButton.addEventListener("click", () => {
        const containerHeight = menuItem.getBoundingClientRect().height;
        const linksHeight = links.getBoundingClientRect().height;
        if (containerHeight === 0) {
            menuItem.style.height = `${linksHeight}px`;
            menuButton.classList.add("button-down");
        } else {
            menuItem.style.height = 0;
            menuButton.classList.remove("button-down");
        }
    });

    // menuItem.addEventListener("click", () => {
    //     menu.classList.toggle("show-menu");
    // });

    scrollLink.forEach(function (link) {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const id = e.currentTarget.getAttribute("href").slice(1);
            const element = document.getElementById(id);
            const navHeight = navbar.getBoundingClientRect().height;
            const containerHeight = menuItem.getBoundingClientRect().height;
            let position = element.offsetTop - navHeight + containerHeight - 10;
            console.log(position);
            window.scrollTo({
                left: 0,
                top: position,
            });
            menuItem.style.height = 0;
            menuButton.classList.remove("button-down");
        });
    });

    return (
        <>
            <header class="navbar" id="home">
                <div class="header-mobile">
                    <h1>
                        Fredrik Andersson
                        <button id="menu-button" class="button">
                            MENU
                        </button>
                    </h1>
                    <nav id="menu" class="menu">
                        <ul class="links">
                            <li>
                                <a
                                    id="menu-item"
                                    class="menu-item scrolling-link"
                                    href="#home"
                                >
                                    Home
                                </a>
                            </li>
                            <li>
                                <a
                                    id="menu-item"
                                    class="menu-item scrolling-link"
                                    href="#about"
                                >
                                    About
                                </a>
                            </li>
                            <li>
                                <a
                                    id="menu-item"
                                    class="menu-item scrolling-link"
                                    href="#portfolio"
                                >
                                    Portfolio
                                </a>
                            </li>
                            <li>
                                <a
                                    id="menu-item"
                                    class="menu-item scrolling-link"
                                    href="#contact"
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
                <section id="about">
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
                <section id="portfolio">
                    <h3 class="portfolio-heading">School projects</h3>
                    <p>
                        These are projects bulit for specific courses in the
                        MU24 programme.
                    </p>
                    {/* <!-- Repos --> */}
                    <article class="repos">
                        <h4 id="title">Title</h4>
                        <div class="repo-details">
                            <p id="description">Short description</p>
                            <img id="image" src="" alt="" />
                        </div>

                        <div class="button-wrapper">
                            <button class="repo-button">
                                <a id="link" href="">
                                    Read more about project
                                </a>
                            </button>
                            <button class="repo-button" id="prev-button">
                                Previous
                            </button>
                            <button class="repo-button" id="next-button">
                                Next
                            </button>
                        </div>
                    </article>
                    {/* <!--  --> */}
                </section>
                {/* <!-- Contact --> */}
                <section id="contact">
                    <h3>Contact</h3>
                    <ul>
                        <li>
                            <a
                                href="https://github.com/FredrikAndersson-MU24"
                                class="contacts"
                            >
                                GitHub
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://www.linkedin.com/in/fredrik-andersson-960aa8332/"
                                class="contacts"
                            >
                                LinkedIn
                            </a>
                        </li>
                        <li>
                            <a
                                href="mailto:fredrik@fredande.se"
                                class="contacts"
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
            <a href="#home" class="scrolling-link button to-top" id="to-top">
                /\
            </a>
        </>
    );
}

export default App;
