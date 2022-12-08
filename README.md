# Vacinação de Bovino

## Sobre
Repositório destinado para a implementação do front-end do projeto para disciplina Desenvolvimento de Sistemas Web II. O objetivo da aplicação é ajudar no monitoramento do processo de vacinação de bovinos.  


## Ferramentas utilizadas

As ferramentas utilizadas foram: 

- Java 11.0.16
- Maven

## Endpoints

Os endpoints da API podem ser verificados no Postman no arquivo abaixo:

[API Vacinação Bovino - Coleção de requisições](https://github.com/raixasantos/vacinacao-bovino/blob/projeto02/Vacina%C3%A7%C3%A3o%20Bovino.postman_collection.json)

## Execução
Para realizar o deploy do frontend com Docker execute os seguintes comandos na pasta do frontend do projeto
```
docker build -t vb:web2 .
docker run -v ${PWD}:/app -v /app/node_modules -p 8081:80 --rm vb:web2
```

## Desenvolvedores
- [Angelo Gustavo](https://github.com/AngeloGustavo)
- [Neylane Lopes](https://github.com/neylanepl) 
- [Raíssa Santos](https://github.com/raixasantos)
- [Silvia](https://github.com/silviafds)
