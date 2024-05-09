import Post from "./components/Post";
import Header from "./components/Header";
import "./global.css";
import styles from "./App.module.css";
import Sidebar from "./components/Sidebar";

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "../src/assets/tux.png",
      name: "Helton Muniz",
      role: "Front-End Developer",
    },
    content: [
      {
        type: "paragraph",
        content: "Fala galeraa 👋",
      },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },
      {
        type: "link",
        content: "jane.design/doctorcare",
      },
    ],
    publishedAt: new Date("2024-05-03 20:00:00"),
  },
  {
    id: 2,
    author: {
      avatarUrl: "../src/assets/prado.jpg",
      name: "Rafael Prado",
      role: "Back-End Developer",
    },
    content: [
      {
        type: "paragraph",
        content: "Fala pessoal 👋",
      },
      {
        type: "paragraph",
        content: "Finalmente finalizei meu novo site/portfólio. Foi um baita desafio criar todo o design e codar na unha, mas consegui 💪🏻 ",
      },
      {
        type: "link",
        content: "devonlane.design",
      },
    ],
    publishedAt: new Date("2024-05-10 20:00:00"),
  },
];

function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => {
            return <Post key={post.id} author={post.author} content={post.content} publishedAt={post.publishedAt} />;
          })}
        </main>
      </div>
    </div>
  );
}

export default App;
