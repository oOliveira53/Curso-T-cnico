n = [1,2,3,4,5,6,7,8,9,12,13,14,15,16,17,18,19,20]

pares = [num for num in n if num % 2 == 0]
impares = [num for num in n if num % 2 != 0]


print("Aqui estão os impares: ", impares)
print("Aqui está o vetor completo: ", n)
print("Aqui estãos os pares: ",pares)
