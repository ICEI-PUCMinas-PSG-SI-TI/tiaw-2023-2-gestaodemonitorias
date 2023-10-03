# Informações do Projeto
`TÍTULO DO PROJETO`  

PUCTORIA - Facilitando o Aprendizado em ADS

`CURSO` 

Análise e desenvolvimento de sistema

## Participantes

Gustavo Barcelos
Vinicius Tivo
Gabriel Coimbra
Daniel Costa
Cairo Lacerda
Bruno
Nathanael

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

1.Ferramenta do Trello para a divisão de trabalho
2.Ferramenta Figma para o wireframe
3.Técnica usada foi a metodologia Scrum

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

......  COLOQUE AQUI O SEU TEXTO DE INTRODUÇÃO ......

> Apresente as principais interfaces da solução. Discuta como 
> foram elaboradas de forma a atender os requisitos funcionais, não
> funcionais e histórias de usuário abordados nas [Especificações do
> Projeto](#especificações-do-projeto).

## User Flow

......  INCLUA AQUI O DIAGRAMA COM O FLUXO DO USUÁRIO NA APLICAÇÃO ......

> Fluxo de usuário (User Flow) é uma técnica que permite ao desenvolvedor
> mapear todo fluxo de telas do site ou app. Essa técnica funciona
> para alinhar os caminhos e as possíveis ações que o usuário pode
> fazer junto com os membros de sua equipe.
>
> **Links Úteis**:
> - [User Flow: O Quê É e Como Fazer?](https://medium.com/7bits/fluxo-de-usu%C3%A1rio-user-flow-o-que-%C3%A9-como-fazer-79d965872534)
> - [User Flow vs Site Maps](http://designr.com.br/sitemap-e-user-flow-quais-as-diferencas-e-quando-usar-cada-um/)
> - [Top 25 User Flow Tools & Templates for Smooth](https://www.mockplus.com/blog/post/user-flow-tools)
>
> **Exemplo**:
> 
> ![Exemplo de UserFlow](images/userflow.jpg)


## Wireframes

 [Layout Wireframe](https://www.figma.com/file/STOfWOhxehC8RZllHS0BxV/PucToria?type=design&node-id=0-1&mode=design)

# Metodologia

No desenvolvimento do nosso aplicativo de monitoria, adotaremos uma metodologia
ágil chamada Scrum. O Scrum envolve a divisão do projeto em sprints de 2 a 4
semanas, cada uma focada em tarefas priorizadas. Reuniões diárias chamadas de
Daily Standup são realizadas para manter a equipe atualizada e promover a
comunicação aberta. Essa abordagem visa garantir entregas regulares de valor e
adaptabilidade às necessidades dos usuários no desenvolvimento do aplicativo de
monitoria.


No desenvolvimento do nosso aplicativo de monitoria, adotaremos uma metodologia
ágil chamada Scrum. O Scrum envolve a divisão do projeto em sprints de 2 a 4
semanas, cada uma focada em tarefas priorizadas. Reuniões diárias chamadas de
Daily Standup são realizadas para manter a equipe atualizada e promover a
comunicação aberta. Essa abordagem visa garantir entregas regulares de valor e
adaptabilidade às necessidades dos usuários no desenvolvimento do aplicativo de
monitoria.


## Divisão de Papéis

Gustavo Barcelos - Dev
Vinicius Tivo - Dev
Gabriel Coimbra - Dev
Daniel Costa - Dev
Cairo Lacerda - Dev
Bruno - Dev
Nathanael - Dev



## Ferramentas

|Divisão de tarefas  | Trello | https://trello.com/b/4geW6aSz/tiaw-puctoria | 
|Repositório de código | GitHub |(https://github.com/ICEI-PUCMinas-PSG-SI-TI/tiaw-2023-2-gestaodemonitorias/edit/master/docs/relatorio/Relatorio%20Tecnico%20-%20TEMPLATE.md) | 
|Wireframe  | Figma | https://www.figma.com/file/STOfWOhxehC8RZllHS0BxV/PucToria?type=design&node-id=0-1&mode=design | 

## Controle de Versão

......  COLOQUE AQUI O SEU TEXTO ......

> Discuta como a configuração do projeto foi feita na ferramenta de
> versionamento escolhida. Exponha como a gerência de tags, merges,
> commits e branchs é realizada. Discuta como a gerência de issues foi
> realizada.
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

# **############## SPRINT 1 ACABA AQUI #############**


# Projeto da Solução

......  COLOQUE AQUI O SEU TEXTO ......

## Tecnologias Utilizadas

......  COLOQUE AQUI O SEU TEXTO ......

> Descreva aqui qual(is) tecnologias você vai usar para resolver o seu
> problema, ou seja, implementar a sua solução. Liste todas as
> tecnologias envolvidas, linguagens a serem utilizadas, serviços web,
> frameworks, bibliotecas, IDEs de desenvolvimento, e ferramentas.
> Apresente também uma figura explicando como as tecnologias estão
> relacionadas ou como uma interação do usuário com o sistema vai ser
> conduzida, por onde ela passa até retornar uma resposta ao usuário.
> 
> Inclua os diagramas de User Flow, esboços criados pelo grupo
> (stoyboards), além dos protótipos de telas (wireframes). Descreva cada
> item textualmente comentando e complementando o que está apresentado
> nas imagens.

## Arquitetura da solução

......  COLOQUE AQUI O SEU TEXTO E O DIAGRAMA DE ARQUITETURA .......

> Inclua um diagrama da solução e descreva os módulos e as tecnologias
> que fazem parte da solução. Discorra sobre o diagrama.
> 
> **Exemplo do diagrama de Arquitetura**:
> 
> ![Exemplo de Arquitetura](images/arquitetura-exemplo.png)


# Avaliação da Aplicação

......  COLOQUE AQUI O SEU TEXTO ......

> Apresente os cenários de testes utilizados na realização dos testes da
> sua aplicação. Escolha cenários de testes que demonstrem os requisitos
> sendo satisfeitos.

## Plano de Testes

......  COLOQUE AQUI O SEU TEXTO ......

> Enumere quais cenários de testes foram selecionados para teste. Neste
> tópico o grupo deve detalhar quais funcionalidades avaliadas, o grupo
> de usuários que foi escolhido para participar do teste e as
> ferramentas utilizadas.
> 
> **Links Úteis**:
> - [IBM - Criação e Geração de Planos de Teste](https://www.ibm.com/developerworks/br/local/rational/criacao_geracao_planos_testes_software/index.html)
> - [Práticas e Técnicas de Testes Ágeis](http://assiste.serpro.gov.br/serproagil/Apresenta/slides.pdf)
> -  [Teste de Software: Conceitos e tipos de testes](https://blog.onedaytesting.com.br/teste-de-software/)

## Ferramentas de Testes (Opcional)

......  COLOQUE AQUI O SEU TEXTO ......

> Comente sobre as ferramentas de testes utilizadas.
> 
> **Links Úteis**:
> - [Ferramentas de Test para Java Script](https://geekflare.com/javascript-unit-testing/)
> - [UX Tools](https://uxdesign.cc/ux-user-research-and-user-testing-tools-2d339d379dc7)

## Registros de Testes

......  COLOQUE AQUI O SEU TEXTO ......

> Discorra sobre os resultados do teste. Ressaltando pontos fortes e
> fracos identificados na solução. Comente como o grupo pretende atacar
> esses pontos nas próximas iterações. Apresente as falhas detectadas e
> as melhorias geradas a partir dos resultados obtidos nos testes.


# Referências

......  COLOQUE AQUI O SEU TEXTO ......

> Inclua todas as referências (livros, artigos, sites, etc) utilizados
> no desenvolvimento do trabalho.
> 
> **Links Úteis**:
> - [Formato ABNT](https://www.normastecnicas.com/abnt/trabalhos-academicos/referencias/)
> - [Referências Bibliográficas da ABNT](https://comunidade.rockcontent.com/referencia-bibliografica-abnt/)
