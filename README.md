# :fire: Informata-Frontend-Test

Hi pessoas!
Cs tão bem?

Esse vai ser o nosso teste técnico para a vaga referente a desenvolvedor front-end na informata.

## Projeto Front-end

Nesse projeto, você deverá criar um sistema utilizando angular 4+ (a versão mais atual de preferência, como o angular 9 ou 10)
Deverá utilizar de preferência o npm ou yarn como gerenciador de pacotes.
Você deverá utilizar o PrimeNG como biblioteca de estilos e componentes.

As features a serem construidas são:

- Tela de cadastro ( Uma tela fake, não precisa de integração com API, salvar os dados no local storage )
- Tela de login ( Verificar se esses dados existem para validar a seção );
- Função de logout (limpar o local storage e voltar para a tela de login);
- Tela de listagem de produtos (deve haver um campo de pesquisa e deverá ser consumido o endpoint citado abaixo);

Após o usuario realizar o login, deve ser exibida uma tela de listagem de produtos. Nessa tela, deve existir:

- Campo de pesquisa do produto;
- Algo para chamar a funcionalidade de logout

A API de produtos é essa:

https://us-central1-estudo-974fe.cloudfunctions.net/front_end

### O que iremos avaliar?

Você será avaliado pela usabilidade, design e pela arquitetura do app. É esperado que você consiga explicar as decisões que tomou durante o desenvolvimento através dos commits.

Aqui, usamos o padrão de commits `<type>(<scope>): <subject>`, que é amplamente utilizado por:

- https://github.com/angular/angular/blob/master/CONTRIBUTING.md#commit
- http://karma-runner.github.io/3.0/dev/git-commit-msg.html
- Entre outros

Em suma, a avaliação se dará por:

- Estruturação (arquitetura) do app;
- Uso do git;
- Utilização do primeng e seus componentes;
- Componetização;
- JavaScript e typescript (ES6, async/await, http...);
- Utilização de routing;
- Utilização do reactive forms;
- Testes -**extra**-;


# Entrega final

Faça um fork desse desse repositório em seu Github e nos envie um Pull Request com o resultado.

Você pode alterar/ajustar/adicionar um `README.md` explicando como executar o projeto e qualquer outro comentário extra que você tenha a fazer tanto sobre o teste, quanto as camadas que foram construidas por você.

Apesar de parecer simples (e talvez seja), não subestime...se parece simples para você, provavelmente parece simples para os outros também, o que leva a um nivelamento legal no fim das contas.

Caso não conclua tudo, enviar mesmo assim o resultado. Sabemos o quão dificil pode ser um teste desses pra quem já está ocupado durante a semana inteira.

Nossa regra numero 1 é qualidade de codigo/manutenção. Se você conseguiu gerar códigos de facil manutenção, mesmo que incompletos, irá agregar e muito para nós.

Qualquer duvida, enviar email para:

- thiago.dantas@informata.com.br
- thiago@parasolcs.com