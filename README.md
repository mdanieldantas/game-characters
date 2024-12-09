## Game Characters - Um Exercício de Programação Orientada a Objetos

Este projeto implementa um sistema de personagens para jogos, com foco em demonstrar os conceitos de Programação Orientada a Objetos (POO).

### Funcionalidades

- **Character:**
  - Atributos: nome, pontos de vida, ataque, defesa.
  - Método: `atacar(alvo)`: Subtrai os pontos de vida do alvo, considerando ataque e defesa.
- **Thief:**
  - Herda de Character.
  - Sobrescreve `atacar`: Causa dano dobrado.
- **Mage:**
  - Herda de Character.
  - Atributo: pontos de magia.
  - Sobrescreve `atacar`: Utiliza ataque + magia para calcular dano.
  - Método: `curar(alvo)`: Aumenta os pontos de vida do alvo.
- **Warrior:**
  - Herda de Character.
  - Atributos: pontos de escudo, posição (ataque ou defesa).
  - Sobrescreve `atacar`: Ataca apenas se estiver em posição de ataque.
  - Método: `mudarPosicao()`: Alterna entre ataque e defesa.

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
const personagem1 = new Character('Guerreiro', 100, 20, 10);
const mago = new Mage('Mago', 80, 15, 10, 50);

// Batalha
while (personagem1.pontosDeVida > 0 && mago.pontosDeVida > 0) {
  personagem1.atacar(mago);
  mago.atacar(personagem1);
  console.log(`Personagem 1: ${personagem1.pontosDeVida} pontos de vida`);
  console.log(`Mago: ${mago.pontosDeVida} pontos de vida`);
}

console.log('Fim da batalha!');

### Aprendizados

Este projeto foi uma excelente oportunidade para:

🔷 Aprofundar conhecimentos em Programação Orientada a Objetos

🔷 Praticar a criação de personagens de jogo com diferentes habilidades

🔷 Implementar métodos e herança em classes

### Contribuições

Contribuições são bem-vindas! Sinta-se à vontade para abrir uma issue ou enviar um pull request.

### Licença

Este projeto está sob a licença [Nome da Licença] (ex: MIT).

### Contato

M Daniel Dantas

- **LinkedIn**: [https://www.linkedin.com/in/mdanieldantas](https://www.linkedin.com/in/mdanieldantas)
- **Email**: contatomarcosdgomes@gmail.com
- **Visite meu portifólio**: [https://github.com/mdanieldantas/my-portifolio](https://github.com/mdanieldantas/my-portifolio)
