function verificarSenha(senha) {

    const Mcomprimento = 8;
    const letraMaiuscula = /[A-Z]/.test(senha);
    const letraMinuscula = /[a-z]/.test(senha);
    const temDigito = /\d/.test(senha);
    const temCaractereEspecial = /[@#$%&*!]/.test(senha);

 
    if (
        senha.length >= Mcomprimento &&
        letraMaiuscula &&
        letraMinuscula &&
        temDigito &&
        temCaractereEspecial
    ) {
        console.log('Senha forte!');
    } else {
    
        let mensagem = 'Senha fraca. A senha deve atender a todos os seguintes critérios:';
        if (senha.length < Mcomprimento) {
            mensagem += ' pelo menos 8 caracteres,';
        }
        if (!letraMaiuscula) {
            mensagem += ' uma letra maiúscula,';
        }
        if (!letraMinuscula) {
            mensagem += ' uma letra minúscula,';
        }
        if (!temDigito) {
            mensagem += ' um número,';
        }
        if (!temCaractereEspecial) {
            mensagem += ' um caractere especial (@, #, $, %, etc.),';
        }
     
        mensagem = mensagem.replace(/,\s*$/, '.');
        console.log(mensagem);
    }
}


verificarSenha('teste'); 
verificarSenha('Teste');  
verificarSenha('Teste01');    
verificarSenha('Teste01!');  