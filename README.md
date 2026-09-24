# GoTask

Aplicação de gerenciamento de tarefas em um quadro Kanban, desenvolvida durante o curso **Aplicando os fundamentos na prática — Projeto GoTask**, da **Rocketseat**.

O projeto aplica fundamentos de Angular na construção de uma interface com formulários reativos, gerenciamento de estado com RxJS, persistência local e movimentação de tarefas entre etapas.

**[Acesse a demonstração no GitHub Pages](https://vandercosta.github.io/go-task/)**

## Funcionalidades

- Criar tarefas com nome e descrição.
- Editar e excluir tarefas.
- Organizar tarefas nas colunas **A Fazer**, **Fazendo** e **Concluída**.
- Alterar o status das tarefas arrastando os cartões entre as colunas.
- Adicionar e remover comentários nas tarefas.
- Visualizar a quantidade de tarefas por coluna e de comentários por tarefa.
- Validar os campos dos formulários, com nome e descrição obrigatórios e mínimo de 10 caracteres.
- Salvar tarefas e comentários no navegador com LocalStorage.

## Tecnologias

| Tecnologia | Utilização |
| --- | --- |
| **Angular 19.2** | Estrutura da aplicação, componentes standalone e injeção de dependência |
| **TypeScript 5.7** | Tipagem e modelagem dos dados com interfaces, tipos e enums |
| **RxJS 7.8** | Gerenciamento reativo do estado com Observables e `BehaviorSubject` |
| **Angular Reactive Forms** | Formulários e validações com `FormGroup`, `FormControl` e `Validators` |
| **Angular CDK 19.2** | Modais com Dialog e movimentação de cartões com Drag and Drop |
| **Tailwind CSS 4.1** | Estilização utilitária e adaptações de layout |
| **HTML e CSS** | Templates e estilos complementares |
| **LocalStorage** | Persistência local dos dados no navegador |
| **Angular CLI e npm** | Execução local, gerenciamento de dependências e build |
| **PostCSS** | Integração do Tailwind CSS ao processamento dos estilos |
| **Git e GitHub** | Versionamento e hospedagem do código |
| **GitHub Actions** | Automação do build e da publicação |
| **GitHub Pages** | Hospedagem da aplicação |

## Conceitos praticados

- Organização da interface em componentes standalone, com responsabilidades separadas e reutilização de componentes como os cartões de tarefas.
- Injeção de dependência com `inject()` e separação da lógica em serviços.
- Comunicação entre componentes com `@Input`.
- Formulários reativos com validação e exibição de mensagens de erro.
- Gerenciamento de estado com `BehaviorSubject` e exposição de Observables.
- Uso dos operadores RxJS `map` e `tap` e consumo de dados com `AsyncPipe`.
- Controle de fluxo nos templates com `@if`, `@for` e `@let`.
- Modelagem de tarefas, comentários e status com TypeScript.
- Abertura de modais e tratamento dos seus resultados com Angular CDK.
- Persistência de dados no navegador e publicação automatizada.

## Como executar localmente

### Pré-requisitos

- Node.js **22.x**, versão utilizada no workflow de publicação.
- npm.
- Git, caso utilize o comando de clonagem abaixo.

### Instalação e execução

Clone o repositório e acesse a pasta:

```bash
git clone https://github.com/vandercosta/go-task.git
cd go-task
```

Na pasta do projeto, instale as dependências:

```bash
npm install
```

Inicie o servidor de desenvolvimento:

```bash
npm run start
```

Acesse **[http://localhost:4200](http://localhost:4200)**. A aplicação será recarregada automaticamente quando os arquivos de código forem alterados.

## Build

Para gerar a versão de produção:

```bash
npm run build
```

Os arquivos da aplicação são gerados em `dist/projeto-go-task/browser`.

## Publicação com GitHub Actions e GitHub Pages

O [workflow de publicação](.github/workflows/deploy.yml) é acionado por pushes na branch `master` ou manualmente pelo GitHub Actions, selecionando essa mesma branch.

O processo utiliza Node.js 22 e executa as seguintes etapas:

1. Obtém o código do repositório.
2. Instala as dependências com `npm ci`, utilizando o `package-lock.json`.
3. Gera o build de produção com o caminho base `/go-task/`.
4. Envia os arquivos gerados e publica a aplicação no GitHub Pages.

Comando de build utilizado na publicação:

```bash
npm run build -- --configuration production --base-href /go-task/
```

O `--base-href /go-task/` configura a aplicação para o subdiretório utilizado pelo GitHub Pages.

**Endereço da aplicação:** [https://vandercosta.github.io/go-task/](https://vandercosta.github.io/go-task/).

## Organização do código

```text
src/app/
├── components/   # Interface, cartões e modais
├── services/     # Gerenciamento das tarefas e abertura de modais
├── interfaces/   # Contratos dos dados
├── enums/        # Status das tarefas
├── types/        # Tipos utilizados pela aplicação
└── utils/        # Funções auxiliares
```

## Testes

O projeto possui configuração de testes unitários com **Jasmine** e **Karma**, acessível pelo comando:

```bash
npm test
```

A suíte existente precisa de ajustes para funcionar com a implementação atual. O workflow de publicação executa o build e o deploy, sem executar os testes.

## Escopo atual

A aplicação funciona no navegador, sem backend ou autenticação. Os dados ficam armazenados no LocalStorage do navegador utilizado e não são sincronizados entre dispositivos.

As informações de perfil, os controles de notificação e saída e o tempo exibido nos comentários fazem parte da interface demonstrativa.

## Créditos

Projeto desenvolvido durante o curso **Aplicando os fundamentos na prática — Projeto GoTask**, da **Rocketseat**.

Repositório mantido por **[@vandercosta](https://github.com/vandercosta)**.
