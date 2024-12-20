## Game Characters - Um Exercício de Programação Orientada a Objetos

Este projeto implementa um sistema de personagens para jogos, com foco em demonstrar os conceitos de Programação Orientada a Objetos (POO).

### Funcionalidades

- **Character:**
  - Atributos: nome, pontos de vida, ataque, defesa.
  - Método: `attack(targetCharacter)`: Subtrai os pontos de vida do alvo, considerando ataque e defesa.
- **Thief:**
  - Herda de Character.
  - Sobrescreve `attack(targetCharacter)`: Causa dano dobrado.
- **Mage:**
  - Herda de Character.
  - Atributo: pontos de magia.
  - Sobrescreve `attack(targetCharacter)`: Utiliza ataque + magia para calcular dano.
  - Método: `heal(targetCharacter))`: Aumenta os pontos de vida do alvo.
- **Warrior:**
  - Herda de Character.
  - Atributos: pontos de escudo, posição (ataque ou defesa).
  - Sobrescreve `attack(targetCharacter)`: Ataca apenas se estiver em posição de ataque.
  - Método: `switchStance()`: Alterna entre ataque e defesa.

### Tecnologias Utilizadas

- **[Linguagem de Programação]**: A linguagem utilizada para implementar o projeto (ex: JavaScript, Python, etc.)

### Como Executar o Projeto

1. **Clone o repositório:**

    ```bash
    git clone https://github.com/seu-usuario/game-characters.git
    cd game-characters
    ```

2. **Instale as dependências:**

    ```bash
    npm install
    ```

3. **Execute o projeto:**

    ```bash
    npm start
    ```

Abra [http://localhost:3000](http://localhost:3000) no seu navegador para ver a aplicação em execução.

### Exemplo de Uso

```javascript
// Importa as classes necessárias
const Character = require("./Character");
const Mage = require("./Mage");
const Thief = require("./Thief");
const Warrior = require("./Warrior");

// Cria instâncias dos personagens
const arthur = new Mage('Arthur', 90, 4, 2, 14);
const beatrice = new Thief('Beatrice', 140, 22, 8);
const cain = new Warrior('Cain', 200, 14, 12, 4);

// Exibe os personagens em uma tabela
console.table({ arthur, beatrice, cain });

// Realiza algumas ações entre os personagens
cain.switchStance(); // Cain muda de postura
arthur.attack(cain); // Arthur ataca Cain
beatrice.attack(arthur); // Beatrice ataca Arthur

// Exibe o estado dos personagens após as ações
console.table({ arthur, beatrice, cain });

// Mais ações entre os personagens
cain.attack(arthur); // Cain ataca Arthur
arthur.heal(arthur); // Arthur se cura
beatrice.attack(cain); // Beatrice ataca Cain

// Exibe o estado final dos personagens
console.table({ arthur, beatrice, cain });

// Cria dois novos personagens para um exemplo adicional
let character1 = new Character('Hero', 100, 20, 5);
let character2 = new Character('Villain', 80, 15, 10);

// Hero ataca Villain
character1.attack(character2);

// Exibe o resultado do ataque
console.log(`${character1.name} atacou ${character2.name}. Pontos de vida restantes de ${character2.name}: ${character2.lifepoints}`);
```

### Aprendizados

Este projeto foi uma excelente oportunidade para:

- 🔷 Aprofundar conhecimentos em Programação Orientada a Objetos
- 🔷 Praticar a criação de personagens de jogo com diferentes habilidades
- 🔷 Implementar métodos e herança em classes

## Contribuições

Contribuições são bem-vindas! Sinta-se à vontade para abrir uma issue ou enviar um pull request.

## Licença

Este projeto está sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.

## Contato

**M Daniel Dantas**

- **LinkedIn:** https://www.linkedin.com/in/mdanieldantas
- **Email:** contatomarcosdgomes@gmail.com
- **Visite meu Portifólio:** https://github.com/mdanieldantas/my-portifolio
