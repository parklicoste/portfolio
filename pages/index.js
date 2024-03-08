import Head from "next/head";
import Main from "../components/Main";
import About  from "../components/About";
import  Skills  from "../components/Skills";
import  Projects  from "../components/Projects";
import  Contact  from "../components/Contact";
import { SiGoogleScholar } from "react-icons/si";

export default function Home() {

  return (
    <div>      
    <Head>        
      <title>Khushal | Full-Stack Developer</title>
      <meta property="og:title" content="Khushal | Full-Stack Developer" key="title" />
      <link rel="shortcut icon" href='assets/Navlogofinal.png' />
    
    </Head>

      <Main />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}


