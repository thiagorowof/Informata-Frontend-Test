# Renato, Teste FrontEnd - Informata / PE
----------

## Pré-requisitos

- **[Angular 10.0.5+](https://cli.angular.io/)**
- **[Node 12.18.3+](https://nodejs.org/en/download/)**
  -  Uma ótima alternativa para instalar o **node** é encontrada nesse tutorial do medium [A Melhor Forma de Instalar o Node.js](https://medium.com/collabcode/a-melhor-forma-de-insatalar-o-node-js-4fd5574af28d#:~:text=js,-Raphael%20Bernardo%20Ohlsen&text=Existem%20algumas%20maneiras%20de%20instalar,abriviatura%20em%20ingl%C3%AAs%20%C3%A9%20nvm%20.)

## Iniciando a aplicação
- Com todos os pré-requisitos instalados navegue até o diretório do projeto ```./{MINHA_NAVEGAÇÃO}/renato``` e execute 

```bash
npm install
```

- em seguida execute

```bash
ng serve
```

- Com o projeto servindo abra no navegador e vá para o endereço [http://localhost:4200](http://localhost:4200)

## Login
- Para acessar a aplicação use
```json
{
  "cpf": "11111111111",
  "senha": "123456"
}
```

>**NOTA**: Esta aplicação não está conectada a uma API externa de usuários, por isso os dados acima levam a um usuário padrão.

>Está aplicação não persiste em um banco de dados, apenas armazena no local storage do navegador.
