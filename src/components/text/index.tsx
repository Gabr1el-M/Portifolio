export function Text() {

    const dataNascimento = new Date('2001-12-06');
    const anoAtual = new Date().getFullYear();
    const idade = anoAtual - dataNascimento.getFullYear();

    return (
        <>
            <p>Olá, meu nome é Gabriel Martins de Lima, tenho {idade} anos e estou estudando Análise e Desenvolvimento de Sistemas na Anhembi Morumbi. Atualmente, estou aprendendo Next-js para aprimorar minhas habilidades em desenvolvimento web. Também tenho conhecimentos em React e React Native. Fora da área de tecnologia, meus hobbies incluem viajar, cinema, futebol e jogos. Estou animado em continuar aprendendo e crescendo como desenvolvedor front-end. Se quiser saber mais sobre mim ou meu trabalho, sinta-se à vontade para entrar em contato comigo. Logo acima deixei meu Linkedin, Whatsapp e Gmail.</p>
        </>
    )
}