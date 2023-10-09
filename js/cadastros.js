


// Papel
function CadastraPapel() {
  const Nome_papel = document.getElementById('Nome_papel').value.toUpperCase();
  const Mediada_Papel = document.getElementById('Mediada_Papel').value.toUpperCase();
  const Gramatura_Papel = document.getElementById('Gramatura_Papel').value.toUpperCase();
  const Fomato_Papel = document.getElementById('Fomato_Papel').value.toUpperCase();
  const valor_Papel = document.getElementById('valor_Papel').value.toUpperCase();
  const umaface_Papel = document.getElementById('umaface_Papel');
  let face_papel = 0;
  if (umaface_Papel.checked == true) {
    face_papel = 1;
  }
  const mensagemPapel = document.getElementById('mensagemPapel');
  if (Nome_papel != '' && Mediada_Papel != '' && Gramatura_Papel != '' && Fomato_Papel != '' && valor_Papel != '') {
    return fetch('cadastro_apapel.php?N=' + Nome_papel + '&M=' + Mediada_Papel + '&G=' + Gramatura_Papel + '&F=' + Fomato_Papel + '&U=' + face_papel + '&V=' + valor_Papel).then(res => res.json()).then(result => {
      if (result['erro'] == false) {
        setTimeout(() => {
          abriPapels()
          mensagemPapel.innerHTML = '';
        }, 1000);
        return mensagemPapel.innerHTML = '<div id="alerta1" role="bs-toast" class=" bs-toast toast toast-placement-ex m-3 fade bg-success top-0 end-0 hide show " role="alert" aria-live="assertive" aria-atomic="true"> <div class="toast-header"> <i class="bx bx-bell me-2"></i> <div class="me-auto fw-semibold">Aviso!</div> <small> </small>  </div> <div class="toast-body">Sucesso. Papel Cadastrado!</div></div>';
      } else {
        setTimeout(() => {
          mensagemPapel.innerHTML = '';
        }, 1000);
        return mensagemPapel.innerHTML = '<div id="alerta2" role="bs-toast" class=" bs-toast toast toast-placement-ex m-3 fade bg-danger top-0 end-0 hide show " role="alert" aria-live="assertive" aria-atomic="true"> <div class="toast-header"> <i class="bx bx-bell me-2"></i> <div class="me-auto fw-semibold">Erro!</div> <small> </small>  </div> <div class="toast-body">Não foi possivel salvar o papel!</div></div>';
      }
    })
  } else {
    setTimeout(() => {
      mensagemPapel.innerHTML = '';
    }, 1000);
    return mensagemPapel.innerHTML = '<div id="alerta2" role="bs-toast" class=" bs-toast toast toast-placement-ex m-3 fade bg-danger top-0 end-0 hide show " role="alert" aria-live="assertive" aria-atomic="true"> <div class="toast-header"> <i class="bx bx-bell me-2"></i> <div class="me-auto fw-semibold">Erro!</div> <small> </small>  </div> <div class="toast-body">É necessario completar todos os campos!</div></div>';

  }
}
// Acabamento
function CadastraAcabamento() {
  const Nome_Acabamento = document.getElementById('Nome_Acabamento').value.toUpperCase();
  const valor_Acabamento = document.getElementById('valor_Acabamento').value.toUpperCase();

  const mensagemAcabamento = document.getElementById('mensagemAcabamento');
  if (Nome_Acabamento != '' && valor_Acabamento != '') {
    return fetch('cadastro_Acabamento.php?N=' + Nome_Acabamento + '&V=' + valor_Acabamento).then(res => res.json()).then(result => {
      if (result['erro'] == false) {
        setTimeout(() => {
          abriAcabamentos()
          mensagemAcabamento.innerHTML = '';
        }, 1000);
        return mensagemAcabamento.innerHTML = '<div id="alerta1" role="bs-toast" class=" bs-toast toast toast-placement-ex m-3 fade bg-success top-0 end-0 hide show " role="alert" aria-live="assertive" aria-atomic="true"> <div class="toast-header"> <i class="bx bx-bell me-2"></i> <div class="me-auto fw-semibold">Aviso!</div> <small> </small>  </div> <div class="toast-body">Sucesso. Acabamento Cadastrado!</div></div>';
      } else {
        setTimeout(() => {
          mensagemAcabamento.innerHTML = '';
        }, 1000);
        return mensagemAcabamento.innerHTML = '<div id="alerta2" role="bs-toast" class=" bs-toast toast toast-placement-ex m-3 fade bg-danger top-0 end-0 hide show " role="alert" aria-live="assertive" aria-atomic="true"> <div class="toast-header"> <i class="bx bx-bell me-2"></i> <div class="me-auto fw-semibold">Erro!</div> <small> </small>  </div> <div class="toast-body">Não foi possivel salvar o Acabamento!</div></div>';
      }
    })
  } else {
    setTimeout(() => {
      mensagemAcabamento.innerHTML = '';
    }, 1000);
    return mensagemAcabamento.innerHTML = '<div id="alerta2" role="bs-toast" class=" bs-toast toast toast-placement-ex m-3 fade bg-danger top-0 end-0 hide show " role="alert" aria-live="assertive" aria-atomic="true"> <div class="toast-header"> <i class="bx bx-bell me-2"></i> <div class="me-auto fw-semibold">Erro!</div> <small> </small>  </div> <div class="toast-body">É necessario completar todos os campos!</div></div>';

  }
}
// Servico
function CadastraServico() {
  const Nome_Servico = document.getElementById('Nome_Servico').value.toUpperCase();
  const valorUnitario = document.getElementById('valorUnitario').value.toUpperCase();
  const tipoServico = document.getElementById('tipoServico').value.toUpperCase();
  const valor_min = document.getElementById('valor_min').value.toUpperCase();
  const Servico_Geral = document.getElementById('Servico_Geral').value.toUpperCase();
  const mensagemServico = document.getElementById('mensagemServico');

  if (Nome_Servico != '' && valorUnitario != '') {

    return fetch('cadastro_Servico.php?N=' + Nome_Servico + '&V=' + valorUnitario + '&T=' + tipoServico + '&M=' + valor_min + '&G=' + Servico_Geral).then(res => res.json()).then(result => {
      if (result['erro'] == false) {
        setTimeout(() => {
          abriServicos()
          mensagemServico.innerHTML = '';
        }, 1000);
        return mensagemServico.innerHTML = '<div id="alerta1" role="bs-toast" class=" bs-toast toast toast-placement-ex m-3 fade bg-success top-0 end-0 hide show " role="alert" aria-live="assertive" aria-atomic="true"> <div class="toast-header"> <i class="bx bx-bell me-2"></i> <div class="me-auto fw-semibold">Aviso!</div> <small> </small>  </div> <div class="toast-body">Sucesso. Servico Cadastrado!</div></div>';
      } else {
        setTimeout(() => {
          mensagemServico.innerHTML = '';
        }, 1000);
        return mensagemServico.innerHTML = '<div id="alerta2" role="bs-toast" class=" bs-toast toast toast-placement-ex m-3 fade bg-danger top-0 end-0 hide show " role="alert" aria-live="assertive" aria-atomic="true"> <div class="toast-header"> <i class="bx bx-bell me-2"></i> <div class="me-auto fw-semibold">Erro!</div> <small> </small>  </div> <div class="toast-body">Não foi possivel salvar o Servico!</div></div>';
      }
    })
  } else {
    setTimeout(() => {
      mensagemServico.innerHTML = '';
    }, 1000);
    return mensagemServico.innerHTML = '<div id="alerta2" role="bs-toast" class=" bs-toast toast toast-placement-ex m-3 fade bg-danger top-0 end-0 hide show " role="alert" aria-live="assertive" aria-atomic="true"> <div class="toast-header"> <i class="bx bx-bell me-2"></i> <div class="me-auto fw-semibold">Erro!</div> <small> </small>  </div> <div class="toast-body">É necessario completar todos os campos!</div></div>';

  }
}
const freteObserva = document.getElementById('check_frete');
const arteObserva = document.getElementById('check_arte');
freteObserva.addEventListener('click', vlr => {
  if (freteObserva.checked) {
    document.getElementById('frete').disabled = false
  } else {
    document.getElementById('frete').disabled = true
  }
})
arteObserva.addEventListener('click', vlr => {
  if (arteObserva.checked) {
    document.getElementById('arte').disabled = false
  } else {
    document.getElementById('arte').disabled = true
  }
})

// CALCULO ORÇAMENTO
// Tabela Produto
function ObterTabelaProduto() {
  // PRODUTOS
  const tabelaProdutoSelecionado = document.getElementById('SelecionadoProudutosProduto');
  const Produtos = [];

  for (let i = 1; i < tabelaProdutoSelecionado.rows.length; i++) {
    const linha = tabelaProdutoSelecionado.rows[i];
    const celulas = linha.cells;
    const item = {
      código: celulas[0].textContent,
      descrição: celulas[1].textContent,
      largura: celulas[2].textContent,
      altura: celulas[3].textContent,
      "qtd. páginas": celulas[4].textContent
    };
    Produtos.push(item);
  }
  return JSON.stringify(Produtos);
  //(jsonProdutos);
}
//Tabela Tiragens
function obterTabelaTiragens() {
  const tabela = document.getElementById('ProdutoTIragens');
  const dados = [];

  // Verificar se a tabela possui dados
  if (tabela.rows.length > 1) {
    // Loop começa a partir de 1 para ignorar a primeira linha de cabeçalho
    for (let i = 1; i < tabela.rows.length; i++) {
      const linha = tabela.rows[i];
      const celulas = linha.cells;
      const item = {
        produto: celulas[0].textContent,
        quantidade: celulas[1].querySelector('input').value,
        digital: celulas[2].querySelector('input').checked,
        offset: celulas[3].querySelector('input').checked,
        valorImpressaoDigital: celulas[4].querySelector('input').value,
        valorUnidade: celulas[5].querySelector('input').value
      };
      dados.push(item);
    }
  } else {
    // A tabela não possui dados
    ('Nenhum produto selecionado.');
    return;
  }

  return JSON.stringify(dados);
  //(jsonData);
}

// Tabela Papeis
function ObsertPapelCorreto() {
  const tabela = document.getElementById('tabela_campos');
  const linhas = tabela.getElementsByTagName('tr');
  const tbodys = tabela.getElementsByTagName('tbody');
  // Passo 2: Iterar sobre as linhas e células da tabela
  let item = [];
  for (let i = 0; i < linhas.length; i++) {
    const celulas = linhas[i].getElementsByTagName('td');
    // Passo 3: Acessar e manipular os valores contidos em cada célula
    for (let j = 0; j < celulas.length; j++) {
      const valorCelula = celulas[j].innerText;
      let tipoPapel = 0;

      switch (celulas[3].textContent) {
        case "FOLHA":
          tipoPapel = 1;
          break;
        case "CAPA":
          tipoPapel = 2;
          break;
        case "MIOLO":
          tipoPapel = 3;
          break;
        case "1ª VIA":
          tipoPapel = 4;
          break;
        case "2ª VIA":
          tipoPapel = 5;
          break;
        case "3ª VIA":
          tipoPapel = 6;
          break;
      }
      item[i] = {
        produto: celulas[0].textContent,
        codigoPapel: celulas[1].textContent,
        descricao: celulas[2].textContent,
        tipo: celulas[3].textContent,
        tipo_papel: tipoPapel,
        cf: celulas[4].querySelector('input').value,
        cv: celulas[5].querySelector('input').value,
        formatoImpressao: celulas[6].querySelector('input').value,
        perca: celulas[7].querySelector('input').value,
        gastoFolha: celulas[8].querySelector('input').value,
        precoFolha: celulas[9].textContent,
        quantidadeChapas: celulas[10].querySelector('input').value,
        precoChapa: celulas[11].textContent
      };
    }
  }
  return item;
}

function obterTabelaPapeis() {
  // Selecionar o elemento pai (table) que contém o elemento a ser removido
  const tableElement = document.getElementById('tabela_campos');

  // Selecionar o elemento a ser removido (tbody)
  const tbodyElement = tableElement.querySelectorAll('tbody');
  if (tbodyElement.length == 2) {
    // Remover o elemento (tbody) do elemento pai (table)
    tableElement.removeChild(tbodyElement[0]);
  }
  const tabela = document.getElementById('tabela_campos');
  const dados = [];
  // Verificar se a tabela possui dados
  if (tabela.rows[1]) {
    // Loop começa a partir de 1 para ignorar a primeira linha de cabeçalho

    const linha = tabela.rows[1];
    const celulas = linha.cells;
    const item = {
      produto: celulas[0].textContent,
      codigoPapel: celulas[1].textContent,
      descricao: celulas[2].textContent,
      tipo: celulas[3].textContent,
      cf: celulas[4].querySelector('input').value,
      cv: celulas[5].querySelector('input').value,
      formatoImpressao: celulas[6].querySelector('input').value,
      perca: celulas[7].querySelector('input').value,
      gastoFolha: celulas[8].querySelector('input').value,
      precoFolha: celulas[9].textContent,
      quantidadeChapas: celulas[10].querySelector('input').value,
      precoChapa: celulas[11].textContent
    };
    dados.push(item);

  } else {
    // A tabela não possui dados
    ('Nenhum papel selecionado.');
    return;
  }

  return JSON.stringify(dados);
  //(jsonData);

}
// Tabela Acabamentos
function obterTabelaAcabamentos() {
  const tabela = document.getElementById('seleccionadoacabamentos');
  const dados = [];

  // Verificar se a tabela possui dados
  if (tabela.rows.length > 1) {
    // Loop começa a partir de 1 para ignorar a primeira linha de cabeçalho
    for (let i = 1; i < tabela.rows.length; i++) {
      const linha = tabela.rows[i];
      const celulas = linha.cells;
      const item = {
        codigoAcabamento: celulas[0].textContent,
        descricao: celulas[1].textContent,
        precoAcabamento: celulas[2].textContent
      };
      dados.push(item);
    }
  } else {
    // A tabela não possui dados
    ('Nenhum acabamento selecionado.');
    return;
  }

  return JSON.stringify(dados);
  //(jsonData);
}
// Tabela Serviços
function obterTabelaServicos() {
  const tabela = document.getElementById('tabelaAservicos');
  const dados = [];
  let TOTAL_valor = 0;
  // Verificar se a tabela possui dados
  if (tabela.rows.length > 1) {
    // Loop começa a partir de 1 para ignorar a primeira linha de cabeçalho
    for (let i = 1; i < tabela.rows.length; i++) {
      const linha = tabela.rows[i];
      const celulas = linha.cells;
      if (celulas[1] != undefined) {
        dados.push(celulas[2].textContent)
      }
    }
    dados.map(valor => {
      TOTAL_valor += +valor
    })
    return TOTAL_valor;
  }

  //(jsonData);
}
// Valor Observacao
function obterValorObservacao() {
  const textareaObservacao = document.getElementById('observacao_orc');
  return textareaObservacao.value;
  // (valorObservacao);
}

/**
 * FUNÇÕES PARA COMPLETAR OS CALCULOS
 */
function calcularCif(){
  const ValorCif = document.getElementById('cif').value;
  let CifConvertido = +ValorCif / 100;
  console.log('Valor do cif = ' + CifConvertido);
  return CifConvertido;
}

function clacularArte(){
  let ValorArte = null;
  if (document.getElementById('check_arte').value) {
    ValorArte = Number(document.getElementById('arte').value);
  } else {
    ValorArte = 0;
  }
  console.log('Valor de arte = ' + ValorArte);
  return ValorArte;
}

function caluclarFrete(){
  let ValorFrete = null;
  if (document.getElementById('check_frete').value) {
    ValorFrete = Number(document.getElementById('frete').value);
  } else {
    ValorFrete = 0;
  }
  console.log('Valor de frete = ' + ValorFrete);
  return ValorFrete;
}
function calcularDesconto(){
  const ValorDesconto = Number(document.getElementById('desconto').value);
  let DescontoConvertido = +ValorDesconto / 100;
  console.log('Valor de desconto = ' + DescontoConvertido);
  return DescontoConvertido;
}
function pegarQtdPaginas(){
  // Encontre a tabela pelo ID
var tabela = document.getElementById("SelecionadoProudutosProduto");

// Encontre todas as linhas da tabela
var linhas = tabela.getElementsByTagName("tr");

// Itere pelas linhas da tabela, excluindo o cabeçalho
for (var i = 1; i < linhas.length; i++) {
    // Obtenha a célula correspondente à coluna "QUANTIDADE DE PÁGINAS" (índice 4)
    var celulaQuantidadePaginas = linhas[i].getElementsByTagName("td")[4];

    // Pegue o valor dentro da célula
    var valorQuantidadePaginas = celulaQuantidadePaginas.textContent;

    // Faça algo com o valor (por exemplo, exiba-o no console)
    console.log("Quantidade de Páginas: " + valorQuantidadePaginas);
}
return valorQuantidadePaginas;
}
function pegarQtdTiragem(){
  // Encontre o elemento da tabela pelo ID
var tabela = document.getElementById("ProdutoTIragens");

// Encontre todas as linhas da tabela
var linhas = tabela.getElementsByTagName("tr");

// Itere pelas linhas da tabela, excluindo o cabeçalho
for (var i = 1; i < linhas.length; i++) {
    // Obtenha a célula correspondente à coluna "QUANTIDADE" (índice 1)
    var celulaQuantidade = linhas[i].getElementsByTagName("td")[1];

    // Verifique se a célula contém um elemento <input> com o id "quantidade"
    var inputQuantidade = celulaQuantidade.querySelector("input#quantidade");

    // Se o elemento <input> for encontrado
    if (inputQuantidade) {
        // Pegue o valor do elemento <input>
        var valorQuantidade = inputQuantidade.value;

        // Faça algo com o valor (por exemplo, exiba-o no console)
        console.log("Quantidade: " + valorQuantidade);
    }
}
return valorQuantidade;
}
//CALCULO MASTER QUANTIDADE DE PAPEL E DE CHAPA UTILIZADA

function retornaQuantidadeFolhas(tipoProduto, tipoPapel, quantidadeFolhas, formatoImpressao, tiragem, numeroVias, perca) {
  let quantidadeFolhasF1 = new BigNumber(10);

  if (tipoProduto == 1) {
    quantidadeFolhasF1 = new BigNumber(tiragem).dividedBy(formatoImpressao).integerValue(BigNumber.ROUND_CEIL);
    console.log('Formato = ' + formatoImpressao + 'Tiragem = ' + tiragem + ' total = ' + tiragem / formatoImpressao)
    quantidadeFolhasF1 = quantidadeFolhasF1.plus(new BigNumber(quantidadeFolhasF1).times(perca).dividedBy(100).integerValue(BigNumber.ROUND_FLOOR));
    console.log('Quantide = ' + quantidadeFolhasF1 + ' Perca = ' + perca + ' total = ' + (quantidadeFolhasF1 / perca) / 100)
  } else if (tipoProduto == 2) {
    if (tipoPapel == 1 || tipoPapel == 2) {
      quantidadeFolhasF1 = new BigNumber(tiragem).dividedBy(formatoImpressao).integerValue(BigNumber.ROUND_CEIL);
      quantidadeFolhasF1 = quantidadeFolhasF1.plus(new BigNumber(quantidadeFolhasF1).times(perca).dividedBy(100).integerValue(BigNumber.ROUND_FLOOR));
    } else if (tipoPapel == 3) {
      quantidadeFolhasF1 = new BigNumber(quantidadeFolhas).dividedBy(formatoImpressao).times(tiragem).integerValue(BigNumber.ROUND_CEIL).dividedBy(2);
      quantidadeFolhasF1 = quantidadeFolhasF1.plus(new BigNumber(quantidadeFolhasF1).times(perca).dividedBy(100).integerValue(BigNumber.ROUND_FLOOR));
    }
  } else if (tipoProduto == 3) {
    if (tipoPapel == 2) {
      quantidadeFolhasF1 = new BigNumber(tiragem).dividedBy(formatoImpressao).integerValue(BigNumber.ROUND_CEIL);
      quantidadeFolhasF1 = quantidadeFolhasF1.plus(new BigNumber(quantidadeFolhasF1).times(perca).dividedBy(100).integerValue(BigNumber.ROUND_FLOOR));
    } else if (tipoPapel == 4 || tipoPapel == 5 || tipoPapel == 6) {
      quantidadeFolhas = new BigNumber(quantidadeFolhas).dividedBy(numeroVias);
      quantidadeFolhasF1 = new BigNumber(tiragem).times(quantidadeFolhas).dividedBy(formatoImpressao).integerValue(BigNumber.ROUND_CEIL);
      quantidadeFolhasF1 = quantidadeFolhasF1.plus(new BigNumber(quantidadeFolhasF1).times(perca).dividedBy(100).integerValue(BigNumber.ROUND_FLOOR));
    }
  } 

  console.log('Quantidade de papel gasto = ' + quantidadeFolhasF1.toString());
  return quantidadeFolhasF1;
}
function retornaQuantidadeChapas(tipoProduto, tipoPapel, numeroCoresFrente, numeroCoresVerso, formatoImpressao, quantidadePaginas) {
  let quantidadeChapas = 0;
  let coresTotal = numeroCoresFrente + numeroCoresVerso;

  switch (tipoProduto) {
    case 1:
      quantidadeChapas = coresTotal;
      break;
    case 2:
      switch (tipoPapel) {
        case 2:
          quantidadeChapas = coresTotal;
          break;
        case 3:
          quantidadeChapas = (quantidadePaginas / formatoImpressao) * coresTotal;
          break;
      }
      break;
    case 3:
      switch (tipoPapel) {
        case 2:
          quantidadeChapas = coresTotal;
          break;
        case 4:
        case 5:
        case 6:
          quantidadeChapas = coresTotal;
          break;
      }
      break;
    case 4:
    case 5:
      quantidadeChapas = 0;
      break;
  }

  return quantidadeChapas;
}

// FUNÇÃO DO CALCULO
function calcularValor() {
  const JsProduto = ObterTabelaProduto();
  const JsTiragens = obterTabelaTiragens();
  const JsPapeis = JSON.stringify(ObsertPapelCorreto());
  const JsAcabamentos = obterTabelaAcabamentos();
  const JsServicos = obterTabelaServicos();
  const JsObservacao = obterValorObservacao();

  // CIF
  let ValorCif = calcularCif();

  // Quantidade
  let Quantidade = document.getElementById('quantidade').value

  // Arte
  let ValorArte = clacularArte();
  
  // FRETE
  let ValorFrete = caluclarFrete();
  
  // DESCONTO
  let ValorDesconto = calcularDesconto();
  
  // PRODUTO
  const Produto = JSON.parse(JsProduto)
  const resultadoProduto = Produto.map(item => {
    // Realize as manipulações desejadas no objeto item
  });
  
  // TIRAGENS
  const Tiragens = JSON.parse(JsTiragens)
  let ValorImpressao = 0
  let digital, offset, ValorUnitario = 0;
  Tiragens.map(item => {
    ValorImpressao += +item.valorImpressaoDigital * Quantidade;
    ValorUnitario = item.valorUnidade;
    digital = item.digital;
    offset = item.offset;
  });
  console.log('digital = ' + digital + ' | offset = ' + offset)
  
  // PAPEIS
  
  const Papeis = JSON.parse(`[${JsPapeis}]`)
  let ValorPapel = 0;
  let PapelUnita = 0;
  let ValorChapa, numeroVias, QuantidadeGastaChapa, QuantidadeGasta = 0;
  Papeis.map(item => {
    for (i = 0; i < item.length; i++) {
      if (item[i]) {
        let tipoProduto = document.getElementById('TIPO_PRODUTO').value;
        if (tipoProduto === 3) {
          for (let j = 0; j < tabelaPapeis.getRowCount(); j++) {
           let tipoPapelAux = item[i].tipo_papel;
            if (tipoPapelAux === "1ª VIA" || tipoPapelAux === "2ª VIA" || tipoPapelAux === "3ª VIA") {
              numeroVias += 1;
            }
          }
        }
        let ValorFolha = item[i].precoFolha;
        let tipoPapel = item[i].tipo_papel;
        let formatoImpressao = item[i].formatoImpressao;
        let quantidadePaginas  = pegarQtdPaginas();
        let tiragem = pegarQtdTiragem();
        let perca = item[i].perca;
        let numeroCoresFrente = item[i].cf;
        let numeroCoresVerso = item[i].cv;
        if(digital == true){
         QuantidadeGasta = retornaQuantidadeFolhas(
          tipoProduto,
          tipoPapel,
          quantidadePaginas,
          formatoImpressao,
          tiragem,
          numeroVias,
          perca
        );
        PapelUnita += +ValorFolha;
        console.log(ValorFolha + ' A ' + QuantidadeGasta);
        ValorPapel +=  +ValorFolha * +QuantidadeGasta;
        console.log('valor em papel' + ValorPapel)
        console.log('Quantidade Gasta de Folha' + QuantidadeGasta)
        document.getElementById('GFolha'+item[i].codigoPapel).value = QuantidadeGasta;
         }else{
          QuantidadeGastaChapa = retornaQuantidadeChapas(tipoProduto, tipoPapel, numeroCoresFrente, numeroCoresVerso, formatoImpressao, quantidadePaginas)
          console.log('Quantidade Gasta de Chapa' + QuantidadeGastaChapa)
          document.getElementById('GChapa'+item[i].codigoPapel).value = QuantidadeGastaChapa;
         }
      }
    }
  });
  
  console.log('------------------------------FIM PAPEL------------------------------')
  console.log('------------------------------------------------------------')
  
  // ACABAMENTO
  const Acabamento = JSON.parse(JsAcabamentos)
  let ValorAcabamento = 0;
  let AcabamentoUnita = 0;
  console.log('------------------------------ACABAMENTO------------------------------')
  Acabamento.map(item => {
    ValorAcabamento += Quantidade * +item.precoAcabamento;
    AcabamentoUnita += +item.precoAcabamento;
    console.log('Valores a calcular: Preço do acabamento * Quantidade ' + item.precoAcabamento + ' * ' + Quantidade + ' = ' + ValorAcabamento);
  });
  console.log('-- TOTAL ACABAMENTO = ' + ValorAcabamento);
  console.log('------------------------------FIM ACABAMENTO------------------------------')
  console.log('------------------------------------------------------------')
  
  // SERVIÇOS
  ValorServico = JsServicos;

  // OBSERVAÇÃO
  const Observacao = JsObservacao;
  console.log(' --- QUANTIDADE ---');
  console.log(document.getElementById('quantidade').value);
  
  console.log(Quantidade);
  console.log(' ------');
  console.log(' --- CHAPA ---');
  console.log(ValorChapa);
  console.log(' ------');

  //CALCULO
  let SomaValor = 0;
  let Total = SomaValor;
  let UnitaTotais = Math.ceil(+PapelUnita) + Math.ceil(ValorImpressao);
  console.log('Valor unitario bruto = ' + UnitaTotais);
  if (digital === false && offset === false) {
    alert('SELECIONE O TIPO DE IMPRESSÃO DIGITAL OU OFSSET!')
    Total = 'ERRO';
  } else {
    if (digital === true) {
      console.log('papel = ' + Math.ceil(PapelUnita) + ' Acabamento = ' + Math.ceil(AcabamentoUnita) + ' = ' + UnitaTotais)
      SomaValor += ValorAcabamento;
      console.log(' + acabamento  ' + ValorAcabamento)
      SomaValor += ValorPapel;
      console.log(' + valor do apapel  '+ValorPapel+' = ' +  SomaValor);
      SomaValor += ValorImpressao;
      console.log(' + Valor de impressao ' + ValorImpressao + ' = ' + SomaValor)
      SomaValor += (ValorPapel * 0.0102) / 100;
      console.log(' + Valor de impressao ' + ValorPapel + ' = ' + (ValorPapel * 0.0102) / 100 + ' = ' + SomaValor.toFixed(2))
      Total = SomaValor;
      let ValorUnitario_Final = SomaValor / Quantidade;
      Total = ValorUnitario_Final.toFixed(2) * Quantidade;
      document.getElementById('preco_unitario').value = ValorUnitario_Final.toFixed(2)
      console.log('Valor dividido para o unitario é = ' + ValorUnitario_Final.toFixed(2))
      console.log('Valor adptado = ' + ValorUnitario_Final.toFixed(2) * Quantidade);
      console.log('Math.floor está abaixando 0,2 a mais que na versão Java')
    }
    if (offset === true) {
      SomaValor += ValorAcabamento * Quantidade;
      console.log('acabamento * quantidade ' + ValorAcabamento + ' * ' + Quantidade + ' = ' + SomaValor)

      SomaValor += ValorPapel;
      console.log(' + valor do apapel = ' + SomaValor);
      SomaValor += ValorChapa;
      console.log(' + valor da Chapa = ' + SomaValor);
      SomaValor /= Quantidade;
      console.log(' Valor dividido pela quantidade ' + Quantidade + ' = ' + SomaValor)
      SomaValor += ValorImpressao;
      console.log(' + Valor de impressao ' + ValorImpressao + ' = ' + SomaValor)
      SomaValor += (SomaValor * +CifConvertido) / 100;
      console.log("SomaValor += (SomaValor * +CifConvertido " + CifConvertido + ") / 100;" + SomaValor)
      SomaValor -= (SomaValor * DescontoConvertido) / 100;
      console.log("SomaValor -= (SomaValor * DescontoConvertido" + DescontoConvertido + ") / 100;" + SomaValor)

      Total = SomaValor;
    }
  }

  console.log('---------------------------------------------');
  // ADICIONA VALOR AO CAMPO DE VALOR TOTAL
  document.getElementById('ValorTotalOrc').value = Total.toFixed(2);
}
