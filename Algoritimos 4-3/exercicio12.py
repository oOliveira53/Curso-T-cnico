def main():
    

    while True:
        valor = int(input("Digite um número para ver se é par ou impar: "))

        if valor == 0:
            break
        elif valor % 2 == 0:
            print("O valor é par")
        else:
            print("O valor é impar")
        

   


main()