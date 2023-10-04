import Link from "next/link"
import style from './style.module.scss'
import Image from "next/image"
import Logoant from '../../../public/images/logo-ant.gif'

export function Header() {
    return (
        <header className={style.header}>
            <div className={style.headerContent}>
                <Link className={style.link} href="/about"><p>Voltar</p></Link>
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
    )
}