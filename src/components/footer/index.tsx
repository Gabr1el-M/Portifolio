import style from './style.module.scss'

export function Footer() {

    const today = new Date();
    const year = today.getFullYear();

    return (
        <>
            <footer className={style.footer}>
                <p>Todos os direitos reservados&copy; - {year}</p>
            </footer>
        </>
    )
}