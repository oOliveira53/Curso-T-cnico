nome = ["murilo", "gustavo", "adriano", "rilari", "yuri"]

nomeU = input("Digite um nome: ").strip().lower()

if nomeU in nome:
    posicao = nome.index(nomeU)
    print("Achei, está no indice: ", posicao)
else:
    print("Nome não encontrado")