'use-client'
import { Header } from "@/components/header"
import Image from "next/image"
import style from './style.module.scss'
import Link from "next/link"
import Home from '../../../../public/images/task-home.png'
import Cont from '../../../../public/images/task-cmts.png'
import About from '../../../../public/images/task-tar.png'
import { SiGithub } from 'react-icons/si';
import { Footer } from "@/components/footer"
import { Text } from "@/components/text-task"



export default function System() {
    return (
        <div>
            <Header />
            <div className={style.container}>
                <h2>Projeto: <strong>Tasks</strong></h2>
                <div className={style.contentImage}>
                    <div>
                        <Image
                            src={Home}
                            alt="foto do projeto"
                            className={style.image}
                        />
                    </div>
                    <div>
                        <Image
                            src={About}
                            alt="foto do projeto"
                            className={style.image}
                        />
                    </div>
                    <div>
                        <Image
                            src={Cont}
                            alt="foto do projeto"
                            className={style.image}
                        />
                    </div>
                </div>
                <div>
                    <div className={style.contentDesc}>
                        <h3>Descrição:</h3>
                        <div className={style.text}>
                            <p><Text/></p>
                        </div>
                    </div>
                    <nav className={style.contentGit}>
                        <p>Link do projeto no github: </p>
                        <Link href='https://github.com/Gabr1el-M/board' target='_blank' className={style.Link}>
                            <SiGithub className={style.svg} />
                        </Link>
                    </nav>
                </div>
            </div>
            <Footer/>
        </div>

    )
}