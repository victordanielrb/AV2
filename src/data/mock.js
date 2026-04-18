export const usuarios = [
  { id: '1', nome: 'Eduardo', usuario: 'admin', senha: 'admin123', nivel: 'ADMINISTRADOR' },
  { id: '2', nome: 'Ana Lima', usuario: 'ana', senha: '1234', nivel: 'ENGENHEIRO' },
  { id: '3', nome: 'Carlos Souza', usuario: 'carlos', senha: '1234', nivel: 'OPERADOR' },
]

export const aeronaves = [
  { id: 1, codigo: 'A001', modelo: 'Boeing 737', tipo: 'COMERCIAL', status: 'ativo', capacidade: 180, alcance: 5600 },
  { id: 2, codigo: 'A002', modelo: 'Airbus A320', tipo: 'COMERCIAL', status: 'manutenção', capacidade: 165, alcance: 6150 },
  { id: 3, codigo: 'A003', modelo: 'Embraer 190', tipo: 'COMERCIAL', status: 'ativo', capacidade: 100, alcance: 4537 },
  { id: 4, codigo: 'A004', modelo: 'Boeing 777', tipo: 'COMERCIAL', status: 'inativo', capacidade: 396, alcance: 13650 },
  { id: 5, codigo: 'A005', modelo: 'ATR 72', tipo: 'REGIONAL', status: 'ativo', capacidade: 72, alcance: 1528 },
]

export const pecas = [
  { id: 1, nome: 'Motor CFM56', aeronave: 'Boeing 737', status: 'ativo', tipo: 'NACIONAL' },
  { id: 2, nome: 'Trem de Pouso', aeronave: 'Airbus A320', status: 'manutenção', tipo: 'IMPORTADA' },
  { id: 3, nome: 'APU GTCP36', aeronave: 'Embraer 190', status: 'ativo', tipo: 'IMPORTADA' },
  { id: 4, nome: 'Flap Hidráulico', aeronave: 'Boeing 777', status: 'inativo', tipo: 'NACIONAL' },
  { id: 5, nome: 'Winglet Composto', aeronave: 'ATR 72', status: 'ativo', tipo: 'NACIONAL' },
  { id: 6, nome: 'Radar Frontal', aeronave: 'Boeing 737', status: 'ativo', tipo: 'IMPORTADA' },
  { id: 7, nome: 'Computador de Voo', aeronave: 'Airbus A320', status: 'ativo', tipo: 'IMPORTADA' },
  { id: 8, nome: 'Sensor O2', aeronave: 'Embraer 190', status: 'manutenção', tipo: 'NACIONAL' },
  { id: 9, nome: 'Válvula Pressão', aeronave: 'Boeing 777', status: 'ativo', tipo: 'IMPORTADA' },
]

export const etapas = [
  { id: 1, nome: 'Revisão Estrutural', aeronave: 'Boeing 737', status: 'CONCLUIDA', prazo: '10/03/2025' },
  { id: 2, nome: 'Teste Hidráulico', aeronave: 'Airbus A320', status: 'ANDAMENTO', prazo: '20/04/2025' },
  { id: 3, nome: 'Pintura Externa', aeronave: 'Embraer 190', status: 'PENDENTE', prazo: '15/05/2025' },
  { id: 4, nome: 'Calibração Aviónica', aeronave: 'Boeing 777', status: 'ANDAMENTO', prazo: '01/04/2025' },
  { id: 5, nome: 'Inspeção Final', aeronave: 'ATR 72', status: 'PENDENTE', prazo: '30/06/2025' },
  { id: 6, nome: 'Lubrificação Geral', aeronave: 'Boeing 737', status: 'CONCLUIDA', prazo: '05/02/2025' },
  { id: 7, nome: 'Troca de Pneus', aeronave: 'Airbus A320', status: 'PENDENTE', prazo: '10/05/2025' },
  { id: 8, nome: 'Revisão Elétrica', aeronave: 'Embraer 190', status: 'ANDAMENTO', prazo: '25/04/2025' },
  { id: 9, nome: 'Teste de Pressão', aeronave: 'Boeing 777', status: 'CONCLUIDA', prazo: '15/01/2025' },
]

export const funcionarios = [
  { id: 1, nome: 'Eduardo Silva', usuario: 'admin', nivel: 'ADMINISTRADOR', telefone: '(11) 99999-0001', endereco: 'Sede Aerocode' },
  { id: 2, nome: 'Ana Lima', usuario: 'ana', nivel: 'ENGENHEIRO', telefone: '(11) 99999-0002', endereco: 'Hangar B' },
  { id: 3, nome: 'Carlos Souza', usuario: 'carlos', nivel: 'OPERADOR', telefone: '(11) 99999-0003', endereco: 'Pista 1' },
  { id: 4, nome: 'Mariana Costa', usuario: 'mari', nivel: 'ENGENHEIRO', telefone: '(11) 99999-0004', endereco: 'Hangar A' },
  { id: 5, nome: 'Roberto Melo', usuario: 'roberto', nivel: 'OPERADOR', telefone: '(11) 99999-0005', endereco: 'Pista 2' },
]

export const testes = [
  { id: 1, tipo: 'ELETRICO', aeronave: 'Boeing 737', resultado: 'APROVADO', data: '05/03/2025' },
  { id: 2, tipo: 'HIDRAULICO', aeronave: 'Airbus A320', resultado: 'REPROVADO', data: '12/03/2025' },
  { id: 3, tipo: 'AERODINAMICO', aeronave: 'Embraer 190', resultado: 'APROVADO', data: '18/03/2025' },
  { id: 4, tipo: 'ELETRICO', aeronave: 'Boeing 777', resultado: 'APROVADO', data: '22/03/2025' },
  { id: 5, tipo: 'HIDRAULICO', aeronave: 'ATR 72', resultado: 'APROVADO', data: '01/04/2025' },
]

export const relatorios = [
  { id: 1, titulo: 'Relatório 001', aeronave: 'Boeing 737', status: 'ativo', data: '01/03/2025' },
  { id: 2, titulo: 'Relatório 002', aeronave: 'Airbus A320', status: 'manutenção', data: '10/03/2025' },
  { id: 3, titulo: 'Relatório 003', aeronave: 'Embraer 190', status: 'ativo', data: '15/03/2025' },
  { id: 4, titulo: 'Relatório 004', aeronave: 'Boeing 777', status: 'inativo', data: '20/03/2025' },
  { id: 5, titulo: 'Relatório 005', aeronave: 'ATR 72', status: 'ativo', data: '25/03/2025' },
]
