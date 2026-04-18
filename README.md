# AeroCode — AV2

---

## Fluxo de Usuário

```mermaid
flowchart TD
    LOGIN([Login]) --> AUTH{Autenticação}
    AUTH -- Falha --> LOGIN

    AUTH --> AERONAVES[Aeronaves]
    AUTH --> PECAS[Peças]
    AUTH --> ETAPAS[Etapas]
    AUTH --> FUNCIONARIOS[Funcionários]
    AUTH --> TESTES[Testes]
    AUTH --> RELATORIO[Relatório]

    AERONAVES & PECAS & ETAPAS & FUNCIONARIOS & TESTES & RELATORIO --> LOGOUT([Logout])
    LOGOUT --> LOGIN
```

---

## Telas

### Login

![Login](./docs/AV2%20-%20Prototipo/Login.png)

---

### Menu Principal

![Menu Principal](./docs/AV2%20-%20Prototipo/Aeronaves.png)

---

### Menu — Aeronaves

![Aeronaves](./docs/AV2%20-%20Prototipo/Aeronaves.png)

**Ações disponíveis por perfil:**

| Ação               | Administrador | Engenheiro | Operador |
|--------------------|:---:|:---:|:---:|
| Listar             | ✓   | ✓   | ✓   |
| Cadastrar          | ✓   |     |     |
| Ver Detalhes       | ✓   | ✓   |     |
| Remover            | ✓   |     |     |

---

### Menu — Peças

![Peças](./docs/AV2%20-%20Prototipo/Pe%C3%A7as.png)

**Ações disponíveis por perfil:**

| Ação                  | Administrador | Engenheiro | Operador |
|-----------------------|:---:|:---:|:---:|
| Listar                | ✓   | ✓   |     |
| Adicionar             | ✓   | ✓   |     |
| Atualizar Status      | ✓   | ✓   | ✓   |

---

### Menu — Etapas

![Etapas](./docs/AV2%20-%20Prototipo/Etapas.png)

**Ações disponíveis por perfil:**

| Ação                        | Administrador | Engenheiro | Operador |
|-----------------------------|:---:|:---:|:---:|
| Listar                      | ✓   | ✓   |     |
| Adicionar                   | ✓   | ✓   |     |
| Iniciar                     | ✓   | ✓   | ✓   |
| Finalizar                   | ✓   | ✓   | ✓   |
| Adicionar Funcionário       | ✓   | ✓   |     |
| Listar Funcionários         | ✓   | ✓   |     |

> Regra: etapa só pode ser iniciada se a anterior estiver `CONCLUÍDA`.

---

### Menu — Funcionários

![Funcionários](./docs/AV2%20-%20Prototipo/Funcionario.png)

**Ações disponíveis por perfil:**

| Ação        | Administrador | Engenheiro | Operador |
|-------------|:---:|:---:|:---:|
| Listar      | ✓   |     |     |
| Cadastrar   | ✓   |     |     |
| Remover     | ✓   |     |     |

---

### Menu — Testes

![Testes](./docs/AV2%20-%20Prototipo/ModalExample.png)

**Ações disponíveis por perfil:**

| Ação          | Administrador | Engenheiro | Operador |
|---------------|:---:|:---:|:---:|
| Listar        | ✓   | ✓   |     |
| Realizar      | ✓   | ✓   |     |

---

### Modal de Ação

![Modal](./docs/AV2%20-%20Prototipo/ModalExample.png)

---

### Perfil do Usuário

![Perfil](./docs/AV2%20-%20Prototipo/User.png)

---

### Notificações

![Notificações](./docs/AV2%20-%20Prototipo/Notification.png)
# AV2
