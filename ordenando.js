// Função para trocar dois valores no vetor
const swap = (vetor, pos1, pos2) => {
  let temp = vetor[pos1];
  vetor[pos1] = vetor[pos2];
  vetor[pos2] = temp;
};

// Função para bagunçar o vetor
const shuffle = (vetor, numTrocas) => {
  const tamanho = vetor.length;
  for (let i = 0; i < numTrocas; i++) {
    let pos1 = Math.floor(Math.random() * tamanho);
    let pos2 = Math.floor(Math.random() * tamanho);
    swap(vetor, pos1, pos2);
  }
};

// Função para ordenar o vetor com o Bubble Sort
const bubble_sort = (vetor) => {
  const tamanho = vetor.length;
  for (let i = 0; i < tamanho - 1; i++) {
    for (let j = 0; j < tamanho - 1 - i; j++) {
      if (vetor[j] > vetor[j + 1]) {
        swap(vetor, j, j + 1);
      }
    }
  }
};

// Função para ordenar o vetor com o Selection Sort
const selection_sort = (vetor) => {
  const tamanho = vetor.length;
  for (let i = 0; i < tamanho - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < tamanho; j++) {
      if (vetor[j] < vetor[minIndex]) {
        minIndex = j;
      }
    }
    if (minIndex !== i) {
      swap(vetor, i, minIndex);
    }
  }
};

// Função para ordenar o vetor com o Quick Sort
const quick_sort = (vetor, inicio, fim) => {
  if (inicio < fim) {
    let pivoIndex = partition(vetor, inicio, fim);
    quick_sort(vetor, inicio, pivoIndex - 1);
    quick_sort(vetor, pivoIndex + 1, fim);
  }
};

// Função para organizar o vetor em volta do pivô (usada pelo Quick Sort)
const partition = (vetor, inicio, fim) => {
  let pivo = vetor[fim];
  let i = inicio - 1;

  for (let j = inicio; j < fim; j++) {
    if (vetor[j] < pivo) {
      i++;
      swap(vetor, i, j);
    }
  }
  swap(vetor, i + 1, fim);
  return i + 1;
};

const particionamento = (vetor, inicio, fim, pivo) => {
  let i = inicio - 1;

  for (let j = inicio; j <= fim; j++) {
    if (vetor[j] < pivo) {
      i++;
      swap(vetor, i, j);
    }
  }
  swap(vetor, i + 1, fim);
  return i + 1;
};
