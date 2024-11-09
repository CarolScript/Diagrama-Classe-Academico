function init() {
    var $ = go.GraphObject.make; // Alias para simplificar o uso do GoJS
  
    // Configuração do diagrama dentro da div
    var myDiagram = $(go.Diagram, "myDiagramDiv", {
      "undoManager.isEnabled": true,
      layout: $(go.TreeLayout, { angle: 0, layerSpacing: 80 })
    });
  
    // Estilo para os nós (atores e casos de uso)
    myDiagram.nodeTemplate = $(
      go.Node, "Vertical",
      { locationSpot: go.Spot.Center },
      $(
        go.Shape, "Circle",
        {
          width: 80, height: 80,
          fill: $(go.Brush, "Linear", { 0: "#6a11cb", 1: "#2575fc" }),
          stroke: null, portId: "", cursor: "pointer"
        }
      ),
      $(
        go.TextBlock,
        { margin: 8, font: "bold 12px sans-serif", stroke: "#fff" },
        new go.Binding("text", "name")
      )
    );
  
    // Define o modelo de link (linha de conexão)
    myDiagram.linkTemplate = $(
      go.Link,
      { routing: go.Link.Orthogonal, corner: 5 },
      $(go.Shape, { strokeWidth: 2, stroke: "#fff" })
    );
  
    // Dados dos nós (atores e casos de uso) e links
    myDiagram.model = new go.GraphLinksModel(
      [
        { key: 1, name: "Aluno" },
        { key: 2, name: "Comprar Bilhete de Estacionamento" },
        { key: 3, name: "Pagamento com Cartão de Crédito" },
        { key: 4, name: "Pagamento com Boleto" },
        { key: 5, name: "Obter Cronograma de Disciplinas" },
        { key: 6, name: "Solicitar Grade de Conteúdo das Aulas" },
        { key: 7, name: "Inscrever-se em Disciplinas" },
        { key: 8, name: "Professor" },
        { key: 9, name: "Cadastrar Notas" },
        { key: 10, name: "Sistema de Pagamento" }
      ],
      [
        { from: 1, to: 2 },
        { from: 1, to: 5 },
        { from: 1, to: 6 },
        { from: 1, to: 7 },
        { from: 2, to: 3 },
        { from: 2, to: 4 },
        { from: 8, to: 9 },
        { from: 10, to: 2 }
      ]
    );
  }
  
  // Inicializa o diagrama
  init();
  