def media_aritmetica():
    try:
        n1 = float(input("Digite um valor: "))
        n2 = float(input("Digite outro valor: "))
        n3 = float(input("Digite outro valor: "))
        n4 = float(input("Digite outro valor: "))
        n5 = float(input("Digite outro valor: "))
        n6 = float(input("Digite outro valor: "))
        n7 = float(input("Digite outro valor: "))
        n8 = float(input("Digite outro valor: "))
        n9 = float(input("Digite outro valor: "))
        n10 = float(input("Digite outro valor: "))

        media = (n1 + n2 + n3 + n4 + n5 + n6 + n7 + n8 + n9 + n10) / 10

        print(f"A média aritmética é: {media:.2f}")

    except ValueError:
        print("Erro: Por favor, insira apenas números.")

media_aritmetica()
