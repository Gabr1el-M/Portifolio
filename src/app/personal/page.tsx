"use client"
import Link from 'next/link';
import style from './style.module.scss';
import { Text } from '@/components/text/index';
import Image from 'next/image';
import Photo from '../../../public/images/photo.jpg';
import { SiLinkedin, SiWhatsapp, SiGmail } from 'react-icons/si';

export default function Personal() {

    const today = new Date();
    const year = today.getFullYear();

    return (
        <>
            <div className={style.header}>
                <Link id={style.link} href="/about"><p>Home</p></Link>
                <div className={style.content}>

                    <Link href="https://www.linkedin.com/in/gabriel-mart1ns/" target="_blank" className={style.link}>
                        <SiLinkedin className={style.svg} />
                    </Link>

                    <Link href="https://wa.me/11950784641" target="_blank" className={style.link}>
                        <SiWhatsapp className={style.svg} />
                    </Link>

                    <Link href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=CllgCJNrchWDgGmGMZkXrhRZrMSzqbNZFhPXHVFqGDhCFsxzWgMDjsgbqmwBFffkWCFNhxDXlDq" className={style.link}>
                        <SiGmail className={style.svg} />
                    </Link>

                </div>
            </div>
            
            <main className={style.container}>
                <p className={style.text}><Text /></p>
                <Image
                    src={Photo}
                    alt="Minha foto"
                    className={style.photo}
                />
            </main>

            <footer className={style.footer}>
                <p>Todos os direitos reservados&copy; - {year}</p>
            </footer>
        </>)
}