# Gerenciamento de Usuários em Plataforma de Ensino

## Sobre o Curso
Neste curso, vamos trabalhar com um sistema que gerencia usuários de uma plataforma de ensino, incluindo estudantes, docentes e administradores da plataforma.

## Antes de Codar: Planejamento
Antes de começar a programar, precisamos entender o que será implementado. O primeiro passo é mapear as pessoas usuárias da plataforma.

## Mapeando Usuários
As principais pessoas usuárias do sistema são:
- **Estudantes**: Matriculam-se em cursos e assistem às aulas.
- **Docentes**: Ministram aulas e criam cursos.
- **Administradores**: Gerenciam a plataforma, deletando usuários, aprovando estudantes e publicando cursos.

Para entender melhor a estrutura do sistema, utilizamos um **diagrama UML** que representa as classes e suas relações.

## Diagrama UML
O seguinte diagrama apresenta as classes do sistema e suas relações de herança:

```
+----------------+
|      User      |
|---------------|
| nome: string  |
| email: string |
| nascimento: date |
| role: string  |
| ativo: bool   |
|---------------|
| constructor() |
| exibirInfos() |
+----------------+
        /\
        ||
-------------------
|                 |
|                 |
+----------------+  +----------------+
|     Admin      |  |    Docente     |
|---------------|  |---------------|
| constructor() |  | constructor() |
| criarCurso()  |  | aprovarEstudante() |
+----------------+  +----------------+
```

### Classe Base: `User`
A classe `User` contém os atributos básicos:
- `nome` (string)
- `email` (string)
- `nascimento` (date - pode ser tratado como string)
- `role` (string - estudante, docente, admin, etc.)
- `ativo` (boolean - true ou false)

E os métodos:
- `constructor()`: Inicializa os atributos.
- `exibirInfos()`: Exibe informações do usuário.

### Classes Específicas
As classes `Admin` e `Docente` herdam de `User`, mas possuem métodos específicos:
- **Admin**:
  - `constructor()`: Inicializa os atributos herdados de `User`.
  - `criarCurso()`: Permite a criação de cursos.
- **Docente**:
  - `constructor()`: Inicializa os atributos herdados de `User`.
  - `aprovarEstudante()`: Permite aprovar estudantes.

## Herança e Restrições
A herança permite que `Admin` e `Docente` compartilhem atributos e métodos de `User`. No entanto, estabelecemos restrições:
- Apenas `Admin` pode criar cursos.
- Apenas `Docente` pode aprovar estudantes.
- Todos os tipos de usuário podem exibir informações.

## Próximos Passos
Agora que entendemos a estrutura do sistema, vamos começar a codificar para validar essas definições. 🚀
