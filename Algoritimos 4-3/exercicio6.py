def Divisao():
    valor1 = float(input("Informe o primeiro valor: "))
    valor2 = float(input("Informe o segundo valor: "))
    while valor2 == 0:
        valor2 = float(input("Informe um segundo valor diferente de zero!:  "))

    divisao = valor1/valor2

    return divisao

print(Divisao())

#Exercicio7 - Imprimir um valor inválido se 0 for inserido no segundo valor