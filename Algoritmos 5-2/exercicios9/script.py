# n = int(input("Digite o tamnho da lista: "))
# lista = []
# for i in lista:
#     if  i%2 == 0 :
#         lista.append("par")
#     else:
#         lista.append("impar")
# print(lista)
n = int(input("Digite o tamanho da lista: "))

lista = []

for i in range(n):
    if i % 2 == 0:
        lista.append("impar")
    else:
        lista.append("par")

print(lista)