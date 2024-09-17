cores = ["amarelo", "azul", "branca"]

corUser = input("Digite uma cor: ").strip().lower()

if corUser in cores:
    posicao = cores.index(corUser)
    print(posicao)
else:
    print("Cor não encontrada, digite outra")