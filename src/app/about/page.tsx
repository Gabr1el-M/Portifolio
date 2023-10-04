import Link from 'next/link';
import style from './style.module.scss';
import Image from 'next/image';

// import Logo from '../../../public/images/logo.svg'
import Logoant from '../../../public/images/logo-ant.gif';

import {
    SiJavascript,
    SiHtml5,
    SiCss3,
    SiNextdotjs,
    SiSass,
    SiIos,
    SiReact,
    SiPrismic,
    SiGithub,
    SiStyledcomponents
}
    from 'react-icons/si';


export default function About() {

    const today = new Date();
    const year = today.getFullYear();

    return (
        <>
            <header className={style.header}>
                <div className={style.headerContent}>
                    <Link className={style.link} href="/"><p>Inicio</p></Link>
                    <Link className={style.link} href="../personal"><p>Sobre mim</p></Link>
                </div>
                <div className={style.svg}>
                    <Image
                        src={Logoant}
                        alt="logo"
                        width={290}
                        height={70}
                    />
                </div>
            </header>

            <main className={style.container}>
                <h1>Meus projetos:</h1>

                <div className={style.content}>
                    <div className={style.projects}>
                        <Link className={style.linkProjects} href="../projects/system">
                            System
                        </Link>
                    </div>
                    <div className={style.projects}>
                        <Link className={style.linkProjects} href="../projects/tasks">
                            Tasks
                        </Link>
                    </div>
                    <div className={style.projects}>
                        <Link className={style.linkProjects} href="../projects/native">
                            Finance React native
                        </Link>
                    </div>
                </div>

                <div className={style.contentTecs}>
                    <h2>Tecnologias que usei para fazer esse portifólio:</h2>
                    <div className={style.tecs}>
                        <SiJavascript className={style.tec} />
                        <SiHtml5 className={style.tec} />
                        <SiCss3 className={style.tec} />
                        <SiNextdotjs className={style.tec} />
                        <SiSass className={style.tec} />
                    </div>
                </div>

                <div className={style.contentTecs}>
                    <h2>Também tenho conhecimento em:</h2>
                    <div className={style.tecs}>
                        <SiReact className={style.tec} />
                        <SiPrismic className={style.tec} />
                        <SiGithub className={style.tec} />
                        <SiStyledcomponents className={style.tec} />
                        <SiIos className={style.tec} />
                    </div>
                </div>
            </main>

            <footer className={style.footer}>
                <p>Todos os direitos reservados&copy; - {year}</p>
            </footer>
        </>)
}