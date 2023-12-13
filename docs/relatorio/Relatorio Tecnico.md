# Informações do Projeto
`TÍTULO DO PROJETO`  

PUCTORIA - Facilitando o Aprendizado em ADS

`CURSO` 

Análise e desenvolvimento de sistema

## Participantes

* Vinicius Tivo
* Gabriel Coimbra
* Daniel Costa
* Cairo Lacerda
* Nathanael

# Estrutura do Documento

- [Informações do Projeto](#informações-do-projeto)
  - [Participantes](#participantes)
- [Estrutura do Documento](#estrutura-do-documento)
- [Introdução](#introdução)
  - [Problema](#problema)
  - [Objetivos](#objetivos)
  - [Justificativa](#justificativa)
  - [Público-Alvo](#público-alvo)
- [Especificações do Projeto](#especificações-do-projeto)
  - [Personas e Mapas de Empatia](#personas-e-mapas-de-empatia)
  - [Histórias de Usuários](#histórias-de-usuários)
  - [Requisitos](#requisitos)
    - [Requisitos Funcionais](#requisitos-funcionais)
    - [Requisitos não Funcionais](#requisitos-não-funcionais)
  - [Restrições](#restrições)
- [Projeto de Interface](#projeto-de-interface)
  - [User Flow](#user-flow)
  - [Wireframes](#wireframes)
- [Metodologia](#metodologia)
  - [Divisão de Papéis](#divisão-de-papéis)
  - [Ferramentas](#ferramentas)
  - [Controle de Versão](#controle-de-versão)
- [**############## SPRINT 1 ACABA AQUI #############**](#-sprint-1-acaba-aqui-)
- [Projeto da Solução](#projeto-da-solução)
  - [Tecnologias Utilizadas](#tecnologias-utilizadas)
  - [Arquitetura da solução](#arquitetura-da-solução)
- [Avaliação da Aplicação](#avaliação-da-aplicação)
  - [Plano de Testes](#plano-de-testes)
  - [Ferramentas de Testes (Opcional)](#ferramentas-de-testes-opcional)
  - [Registros de Testes](#registros-de-testes)
- [Referências](#referências)


# Introdução

## Problema

A decisão de desenvolver o PUCTORIA surgiu da constatação de diversos desafios enfrentados por estu
dantes de ADS. Notas baixas, alunos com dificuldades em disciplinas específicas, e até mesmo aqueles
que nunca tiveram experiência com programação, muitas vezes se deparam com barreiras que podem pr
ejudicar seu progresso acadêmico. Além disso, a falta de um canal eficiente de comunicação entre aluno
s e professores pode tornar ainda mais difícil a busca por apoio educacional.

## Objetivos

O principal objetivo do PUCTORIA é resolver os problemas mencionados acima e, ao fazê-lo, promover o
desenvolvimento pessoal tanto dos desenvolvedores do aplicativo como dos alunos que participam. Que
remos criar um ambiente onde a colaboração e a aprendizagem sejam incentivadas, permitindo que os al
unos superem obstáculos acadêmicos e alcancem seu pleno potencial. Ao conectar alunos que precisam
de ajuda com aqueles que podem oferecer suporte, acreditamos que podemos criar uma comunidade de
aprendizado mais forte e capacitada.

## Justificativa

O PUCTORIA é uma solução valiosa para o público-alvo, que consiste em alunos com dificuldades no ap
rendizado e na comunicação com seus professores. Este aplicativo/webpage oferece uma série de benef
ícios, incluindo:
Acesso à Monitoria: Os alunos podem encontrar tutores e mentores que podem ajudá-los a superar desaf
ios específicos, esclarecer dúvidas e melhorar seu desempenho acadêmico.
Comunicação Eficiente: O aplicativo facilita a comunicação entre alunos e professores, criando um canal
direto para discussões e esclarecimento de dúvidas, melhorando assim o contato entre ambas as partes.
Desenvolvimento Pessoal: Ao oferecer e receber suporte, os alunos não apenas melhoram suas habilida
des acadêmicas, mas também desenvolvem habilidades de comunicação, colaboração e liderança, enriq
uecendo sua formação educacional e pessoal.
Comunidade de Aprendizado: O PUCTORIA cria uma comunidade onde a troca de conhecimento e a soli
dariedade acadêmica são valorizadas, promovendo um ambiente de aprendizado mais positivo e motivad
or.
Em resumo, o PUCTORIA é uma plataforma inovadora que visa ajudar os alunos de ADS a superar desa
fios acadêmicos, melhorar seu desempenho e, ao mesmo tempo, promover o crescimento pessoal. Acre
ditamos que esta solução não apenas atende às necessidades do público-alvo, mas também contribui pa
ra o fortalecimento da comunidade acadêmica como um todo.

## Público-Alvo

O Público alvo da nossa aplicação será todas pessoas em um ambiente escolar como professores, alunos, diretoria entre outras.


# Especificações do Projeto

* 1.Ferramenta do Trello para a divisão de trabalho
* 2.Ferramenta Figma para o wireframe
* 3.Técnica usada foi a metodologia Scrum
* 4. O ambiente de desenvolvimento será VSCode com controle de repositórios em GitHub.

## Personas e Mapas de Empatia

Maria, 20 anos

Curso: Engenharia Civil
Desafios: Maria está no segundo ano de Engenharia Civil e luta para acompanhar o ritmo das aulas avançadas de matemática e física. Ela precisa de ajuda extra para passar nas disciplinas essenciais e deseja encontrar tutores qualificados para orientá-la.
Como posso ajudá-la: Site para monitoria

Rafael, 22 anos

Curso: Administração
Desafios: Rafael é um aluno ocupado que trabalha meio período para pagar suas despesas. Ele tem dificuldade em equilibrar trabalho, estudos e vida pessoal. Ele busca monitorias flexíveis que se adaptem ao seu horário apertado.
Como posso ajudá-la: Site para monitoria

André, 19 anos

Curso: Ciência da Computação
Desafios: André é um estudante introvertido que tem dificuldade em fazer perguntas em sala de aula. Ele procura um ambiente de aprendizado mais confortável, onde possa fazer perguntas sem hesitação e interagir com tutores que entendam suas necessidades
Como posso ajudá-la: Site para monitoria

## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
| Como um aluno  | desejo poder me registrar no aplicativo de monitoria|  para acessar os recursos e funcionalidades |
| Como um aluno  | desejo poder visualizar um calendário               |  que mostre todas as monitorias disponíveis |
| Como um aluno  | desejo poder me inscrever em monitorias             |  para participar delas                      |
| Como um administrador  | desejo poder gerar relatórios               |  para manter um  controle                   |
| Como um administrador  | desejo poder gerenciar monitores            |  para mudar de monitores                    |


## Requisitos

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade |
|------|-----------------------------------------|----|
|RF-001|Formulário de registro com campos para nome, e-mail, senha e informações de contato | ALTA | 
|RF-002| Calendário interativo com datas e horários de monitorias marcados   | ALTA |
|RF-003| Opção de filtrar monitorias por disciplina ou assunto   | ALTA |
|RF-004| Capacidade de cancelar a inscrição   | MÉDIA |
### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| Painel de administração com opções para adicionar, editar e remover monitores | MÉDIA | 
|RNF-002| Capacidade de atribuir monitores a disciplinas ou grupos de estudo |  BAIXA | 
|RNF-003| Botão de inscrição visível em cada monitoria|  ALTA |
|RNF-004| Confirmação de inscrição com lembrete por e-mail ou notificação push|  MÉDIA |
|RNF-005| •Relatórios que mostrem métricas como número de inscrições, avaliações e participações em monitorias|  BAIXA |

## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deverá ser entregue até o final do semestre |
|02| Não pode ser desenvolvido um módulo de backend        |


> Enumere as restrições à sua solução. Lembre-se de que as restrições
> geralmente limitam a solução candidata.
> 
> **Links Úteis**:
> - [O que são Requisitos Funcionais e Requisitos Não Funcionais?](https://codificar.com.br/requisitos-funcionais-nao-funcionais/)
> - [O que são requisitos funcionais e requisitos não funcionais?](https://analisederequisitos.com.br/requisitos-funcionais-e-requisitos-nao-funcionais-o-que-sao/)


# Projeto de Interface

> A interface do site foi prototipada para ter a aparencia de uma rede social (como Facebook)
> e um fórum organizacional estilo CANVAS PUC. Desta forma, o usuário tem um contato inicial com 
> uma UI reconhecivel de outros sites. Dois exemplos primordias são a tela de login e a 
> tela inicial do usuário logado no site.

### TELA DE LOGIN
![image](https://github.com/ICEI-PUCMinas-PSG-SI-TI/tiaw-2023-2-gestaodemonitorias/assets/74263483/8ffc55eb-2fa4-40ee-8e2e-6e79234befd0)

> Construida semelhante a de criação de conta e de login de sites como twitter e facebook,
> é facilmente navegada com as principais informações expostas na tela: e-mail, usuário,
> e senha, para credenciais, e as principais intenções do usuário no site: ser monitor, aluno
> ou ambos, assim com as tecnologias que pretende ensinar/aprender, atendendo os requisitos funcionais esperados.

### TELA USUÁRIO LOGADO
![image](https://github.com/ICEI-PUCMinas-PSG-SI-TI/tiaw-2023-2-gestaodemonitorias/assets/74263483/7cc73ce6-f417-4e2c-aa8c-dc64805f3069)

> A tela inicial do usuário logado apresenta todas as informações necessárias para o uso
> efetivo da plataforma: os principais posts expostos no centro da tela, um botão 
> centralizado para ter acesso aos eventos privados, uma janeladedicada aos eventos 
> publicos construida como um calendário (inspirado no Google Calendar) no qual os 
> eventos são facilmente visiveis com cores vivas, uma recomendações de outros 
> monitores e/ou alunos cadastrados na plataforma, linkando novos contatos e por fim 
> uma interface de inscrição para se voluntariar para ajudar no desenvolvimento
> do aplicativo, atendendo os requisitos funcionais esperados.


## User Flow

![image](https://github.com/ICEI-PUCMinas-PSG-SI-TI/tiaw-2023-2-gestaodemonitorias/assets/145771766/337fc37b-f36b-4f01-bdca-d391e297604a)



## Wireframes

 [Layout Wireframe](https://www.figma.com/file/STOfWOhxehC8RZllHS0BxV/PucToria?type=design&node-id=0-1&mode=design)

# Metodologia

> No desenvolvimento do nosso aplicativo de monitoria, adotaremos uma metodologia
> ágil chamada Scrum. O Scrum envolve a divisão do projeto em sprints de 2 a 4
> semanas, cada uma focada em tarefas priorizadas. Reuniões diárias chamadas de
> Daily Standup são realizadas para manter a equipe atualizada e promover a
> comunicação aberta. Essa abordagem visa garantir entregas regulares de valor e
> adaptabilidade às necessidades dos usuários no desenvolvimento do aplicativo de
> monitoria.


> No desenvolvimento do nosso aplicativo de monitoria, adotaremos uma metodologia
> ágil chamada Scrum. O Scrum envolve a divisão do projeto em sprints de 2 a 4
> semanas, cada uma focada em tarefas priorizadas. Reuniões diárias chamadas de
> Daily Standup são realizadas para manter a equipe atualizada e promover a
> comunicação aberta. Essa abordagem visa garantir entregas regulares de valor e
> adaptabilidade às necessidades dos usuários no desenvolvimento do aplicativo de
> monitoria.


## Divisão de Papéis

* Daniel Costa - Dev
* Vinicius Tivo - Dev
*  Nathanael - Dev
* Gabriel Coimbra - Dev
* Cairo Lacerda - Dev


## Ferramentas

|Divisão de tarefas  | Trello | https://trello.com/b/4geW6aSz/tiaw-puctoria | 
|Repositório de código | GitHub |(https://github.com/ICEI-PUCMinas-PSG-SI-TI/tiaw-2023-2-gestaodemonitorias/edit/master/docs/relatorio/Relatorio%20Tecnico%20-%20TEMPLATE.md) | 
|Wireframe  | Figma | https://www.figma.com/file/STOfWOhxehC8RZllHS0BxV/PucToria?type=design&node-id=0-1&mode=design | 

## Controle de Versão

> O projeto será desenvolvido via VSCode utlizando HTML, CSS e JS puro.
> Para controle de versionamento, utilizaremos a plataforma GitHub (com
> o ambiente Classroom PUC-Minas a partir do template do professor Gabriel
> B. Fonseca. Nosso gerenciamento de tags, merges, commits e branchs seguirá
> o padrão master/main para versão final com uma versão prévia ele denominada
> testing na qual controlaremos os merges/commits através do Trello, sendo o
> código final só aprovado e comitado caso OUTRO dev analise o código previamente.
> 
> A ferramenta de controle de versão adotada no projeto foi o
> [Git](https://git-scm.com/), sendo que o [Github](https://github.com)
> foi utilizado para hospedagem do repositório `upstream`.
> 
> O projeto segue a seguinte convenção para o nome de branchs:
> 
> - `master`: versão estável já testada do software
> - `unstable`: versão já testada do software, porém instável
> - `testing`: versão em testes do software
> - `dev`: versão de desenvolvimento do software
> 
> Quanto à gerência de issues, o projeto adota a seguinte convenção para
> etiquetas:
> 
> - `bugfix`: uma funcionalidade encontra-se com problemas
> - `enhancement`: uma funcionalidade precisa ser melhorada
> - `feature`: uma nova funcionalidade precisa ser introduzida
>
> **Links Úteis**:
> - [Tutorial GitHub](https://guides.github.com/activities/hello-world/)
> - [Git e Github](https://www.youtube.com/playlist?list=PLHz_AreHm4dm7ZULPAmadvNhH6vk9oNZA)
> - [5 Git Workflows & Branching Strategy to deliver better code](https://zepel.io/blog/5-git-workflows-to-improve-development/)
>
> **Exemplo - GitHub Feature Branch Workflow**:
>
> ![Exemplo de Wireframe](images/Github-Workflow.png)



# Projeto da Solução

> Ao longo do desenvolvimento do projeto inúmeros problemas e bugs foram identificados e prontamente, dentro do possível e do contexto inseridos, resolvidos pelos devs.
> Atualmente nossa plataforma conta com um sistema de cadastro, login, controle de admin via cargo, adicição e exclusão de posts, avaliação de monitoria e diversas outras
> funcionalidades ligadas ao Feed e suas interações com o usuario.


## Tecnologias Utilizadas

> Focamos no desenvolvimento da nossa plataforma seguindo o padrão desejado em sala:
> HTML, CSS e JS puro, com o uso de algumas livrarias especificas como Bootstrap e certos pontos em JQuery.
> Todo o servidor é realizado pela plataforma replit, na qual nosso Json Server está localizado (é necessário
> iniciar o site (RUN) para que o server funcione)).
>
> No mais, das ferramentas utilizadas focamos apenas no VSCODE, tanto no Windows como no Mac.
>
> De forma geral, o Bootstrap permitiu construir uma rede social que tenha uma aparencia agradável já
> atribuindo a ela as estilizações necessárias para que o JS funcione sem menor problema, de forma que
> o usuario pode realizar o cadastro, logar, ter seu perfil gerado via JSON Server com as chamadas de
> codigo JS, etc.


## Arquitetura da solução


> O WEB é criado via arquivo index.html, que puxa as informações estilizadas necessárias do CSS e do JS. Este último, em contrapartida,
> puxa as informações do JSON para que a página WEB possa ser criada de forma dinâmica. No mais, o usuario também pode interagir com a
> avaliação de outros perfis ou eventos expostos no feed, ao qual a avaliação é salva em um outro JSON Server e pode ser requisitada
> na medida que necessário.
> 
> ![image](https://github.com/ICEI-PUCMinas-PSG-SI-TI/tiaw-2023-2-gestaodemonitorias/assets/74263483/6fa7b32c-3f5c-4e6a-b881-688e1982f621)



# Avaliação da Aplicação


> Nossos planos inicias envolviam:
> ID	Descrição do Requisito	Prioridade
RF-001	Formulário de registro com campos para nome, e-mail, senha e informações de contato	ALTA
RF-002	Calendário interativo com datas e horários de monitorias marcados	ALTA
RF-003	Opção de filtrar monitorias por disciplina ou assunto	ALTA
RF-004	Capacidade de cancelar a inscrição	MÉDIA
Requisitos não Funcionais
ID	Descrição do Requisito	Prioridade
RNF-001	Painel de administração com opções para adicionar, editar e remover monitores	MÉDIA
RNF-002	Capacidade de atribuir monitores a disciplinas ou grupos de estudo	BAIXA
RNF-003	Botão de inscrição visível em cada monitoria	ALTA
RNF-004	Confirmação de inscrição com lembrete por e-mail ou notificação push	MÉDIA
RNF-005	•Relatórios que mostrem métricas como número de inscrições, avaliações e participações em monitorias	BAIXA
>
> No geral, pensando no REQUISITOS FUNDAMENTAIS:
> RF-001: Atingido com sucesso;
> RF-002: Atingido - Embora o calendário possua interatividade, o dev responsável não implementou uma interação de salvar os horarios e datas.
> RF-003: Não atingida - O membro responsável desistiu da disciplina e não nos informou.
> RF-004: Atingida parcialmente - Tendo em vista a RF-003, a possibilidade de cancelar a inscrição não foi implementada, mas é possível apagar o post/evento do Feed.
___

> RNF-001: Atingido com sucesso;
> RNF-002: Não atingida;
> RNF-003: Atingida;
> RNF-004: Não atingida;
> RNF-005: Não atingida.

> Embora inúmeros requisitos iniciais não tenham sido atingidos, devido a diversos problemas, a organização inicial da
> plataforma está estruturada, necessitando apenas de implementações que condizem com o proposto originalmente.
> Todo o sistema de Login, Cadastro, Feed, Avaliação de Evento, Headers, Footers e criação de post estão funcionando, sendo alguns
> outros precisando de manutenção, como o calendário e outras avaliações envolvendo o usario. De mais grave, acreditamos que
> faltou a tela de usuário completa, embora cada um possua um modal que pode ser visto do feed ao ser clicado no post.

## Plano de Testes

......  COLOQUE AQUI O SEU TEXTO ......

> Inúmeros testes envolvendo o sistema de Login e Cadastro foram realizados. Embora básicos, sua funcionalidade era
> necessária para que as implementações do Feed e da Avaliação de Usuário funcionassem, pois estas precisavam puxar
> as informações de algum lugar. No Feed, testes envolvendo a experiencia do usuário, caminhos interativos, flows de clicks
> e informações registradas permitiram que a tela tivesse uma excelente usabilidade. Para além disso, a avaliação do usário
> permitiu que as informações expostas nas duas anteriores confirmassem o funcinamento e gerando um fluxo interativo
> interessante para o usuario, mesmo que os eventos e o registro de monitoria não estivessem funcionando como esperado.


## Registros de Testes


> No geral, todos os testes decorreram da comunição com o JSON SERVER e as informações advindas (ou não) dele. Para isso
> foi necessária a constante atualização e adaptação do mesmo para que o Feed e a Avaliação do Usuário pudessem ser feita.


# Referências

......  COLOQUE AQUI O SEU TEXTO ......

> https://developer.mozilla.org/pt-BR/docs/Learn/HTML
> https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/Client-side_web_APIs/Manipulating_documents
> https://developer.mozilla.org/pt-BR/docs/Learn
> https://replit.com/@rommelpuc/JSONServer
> https://pucminas.instructure.com/courses/159943/files/9526743?module_item_id=3672764
> https://pucminas.instructure.com/courses/156127/assignments/749039?module_item_id=3772281
> https://pucminas.instructure.com/courses/156127/pages/dom-slash-ajax-obtendo-os-dados-de-um-jsonserver?module_item_id=3760301
