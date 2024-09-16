def main():
    contador_alcool = 0
    contador_gasolina = 0
    contador_diesel = 0

    while True:
        codigo = int(input("Digite o código do combustível (1.Álcool 2.Gasolina 3.Diesel 4.Fim): "))

        if codigo == 1:
            print("Álcool")
            contador_alcool += 1
        elif codigo == 2:
            print("Gasolina")
            contador_gasolina += 1
        elif codigo == 3:
            print("Diesel")
            contador_diesel += 1
        elif codigo == 4:
            break
        else:
            print("Código inválido. Por favor, informe um código entre 1 e 4.")

    print("MUITO OBRIGADO")
    print(f"Álcool: {contador_alcool}")
    print(f"Gasolina: {contador_gasolina}")
    print(f"Diesel: {contador_diesel}")

main()