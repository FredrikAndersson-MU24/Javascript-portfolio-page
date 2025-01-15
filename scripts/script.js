const prevButton = document.getElementById("prev-button");
const nextButton = document.getElementById("next-button");

const title = document.getElementById("title");
const description = document.getElementById("description");
const link = document.getElementById("link");
const image = document.getElementById("image");

const repos = [
  {
    id: 1,
    img: "../img/image.png",
    title: "exam-typescript-react",
    description:
      "A simple todo app built using Typescript and React. Built with components and utilizing useEffect React hook to save the array of tasks to local storage when tasks are added, checked or deleted.",
    link: "https://github.com/FredrikAndersson-MU24/exam-typescript-react",
  },
  {
    id: 2,
    img: "../img/image.png",
    title: "Java-TicTacToe",
    description:
      "A simple Tic-Tac-Toe game written in Java. Textbased and played in the console. Human vs Human or Human vs CPU. Two difficulty levels against the CPU",
    link: "https://github.com/FredrikAndersson-MU24/Java-TicTacToe",
  },
];

let currentRepo = 0;

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
