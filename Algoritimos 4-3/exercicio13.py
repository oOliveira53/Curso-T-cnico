def calcular_media(notas):
    return sum(notas) / len(notas)

quantidade_alunos = int(input("Digite a quantidade de alunos na turma: "))

notas = []

for i in range(quantidade_alunos):
    nota = float(input(f"Digite a nota do aluno {i + 1}: "))
    notas.append(nota)

media = calcular_media(notas)

print(f"A média aritmética das notas é: {media:.2f}")
