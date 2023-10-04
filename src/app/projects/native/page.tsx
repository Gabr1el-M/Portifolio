'use-client'
import { Header } from "@/components/header"
import Image from "next/image"
import style from './style.module.scss'
import Link from "next/link"
import Home from '../../../../public/images/home.gif'
import { SiGithub } from 'react-icons/si';
import { Footer } from "@/components/footer"
import { Text } from "@/components/text-native"



export default function System() {
    return (
        <div>
            <Header />
            <div className={style.container}>
                <h2>Projeto: <strong>Finance React-Native</strong></h2>
                <div className={style.contentImage}>
                    <div>
                        <Image
                            src={Home}
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
                        <Link href="https://github.com/Gabr1el-M/Finance-Project-React-Native" target='_blank' className={style.Link}>
                            <SiGithub className={style.svg} />
                        </Link>
                    </nav>
                </div>
            </div>
            <Footer/>
        </div>

    )
}