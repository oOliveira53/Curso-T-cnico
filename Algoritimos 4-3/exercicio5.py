def calcular_media ():
    n1 = float(input("Digite a primeira nota: "))
    n2 = float(input("Digite a segunda nota: "))
    n3 = float(input("Digite a terceira nota: "))

    media = (n1+n2+n3)/3

    print(f"A média do aluno é: {media:.2f}")

def loop():
    while True:
        calcular_media()

        resposta = input("Deseja calcular a média de outro aluno? 1.Sim 2.Não: ")

        if resposta != '1' :
            print("Programa encerrado")
            break



loop()