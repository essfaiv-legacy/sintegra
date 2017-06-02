# Manual Sintegra

https://www.confaz.fazenda.gov.br/legislacao/convenios/1995/cv057_95_manual_de_orientacao

## Registro Tipo 10

Mestre do Estabelecimento


| Nº | Denominação do Campo | Conteúdo | Tamanho | Posição início | Posição fim | Formato |
|----|----------------------|----------|---------|----------------|-------------|---------|
| 01 | Tipo | "10" | 2 | 1 | 2 | N |
| 02 | CGC/MF | CGC/MF do estabelecimento informante | 14 | 3 | 16 | N |
| 03 | Inscrição Estadual | Inscrição estadual do estabelecimento informante | 14 | 17 | 30 | X |
| 04 | Nome do Contribuinte | Nome comercial (razão social/denominação) do contribuinte | 35 | 31 | 65 | X |
| 05 | Município|  Município onde está domiciliado o estabelecimento informante | 30 | 66 | 95 | X |
| 06 | Unidade da Federação | Unidade da Federação referente ao Município | 2 | 96 | 97 | X |
| 07 | Fax | Número do fax do estabelecimento informante | 10 | 98 | 107 | N |
| 08 | Data Inicial | A data do início do período referente às informações prestadas | 8 | 108 | 115 | N |
| 09 | Data Final | A data do fim do período referente às informações prestadas | 8 | 116 | 123 | N |
| 10 | Código da identificação da estrutura do arquivo magnético entregue | Código da identificação da estrutura do arquivo magnético entregue, conforme tabela abaixo | 1 | 124 | 124 | X |
| 11 | Código da identificação da natureza das operações informadas | Código da identificação da natureza das operações informadas, conforme tabela abaixo | 1 | 125 | 125 | X |
| 12 | Código da finalidade do arquivo magnético | Código do finalidade utilizado no arquivo magnético, conforme tabela abaixo | 1 | 126 | 126 | X |


