import Head from "next/head";
import Main from "../components/Main";
import About  from "../components/About";
import  Skills  from "../components/Skills";
import  Projects  from "../components/Projects";
import  Contact  from "../components/Contact";

export default function Home() {
  return (
    <div>      
    <Head>        
      <title>Khushal | Full-Stack Developer</title>
      <meta property="og:title" content="Khushal | Full-Stack Developer" key="title" />
      <link rel="icon" sizes="16x16" type="image/svg+xml" href="assets/googleScholaricon.png" />
    </Head>

      <Main />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}


