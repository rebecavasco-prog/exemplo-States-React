# 📘 Projeto: Sistema de Exemplos — React Componentes e States

Este projeto foi desenvolvido para demonstrar, na prática, os principais conceitos do material **“ReactJS – Componentes e States”**, apresentando exemplos reais de:

- Componentização
- Props
- States (useState / this.state)
- Eventos
- Inputs controlados
- Renderização condicional
- Componentes funcionais e de classe
- Composição de componentes

O objetivo é servir como um guia simples e didático para iniciantes em React.

---

## 🧾 Descrição Geral do Projeto

A aplicação foi desenvolvida em **React com Vite** e contém uma coleção de componentes que simulam um pequeno sistema de formulário.  
Ela demonstra:

### ✔ Componentes funcionais  
Usando hooks (useState) para controlar estados internos.

### ✔ Componentes de classe  
Mostrando o uso de constructor e this.state.

### ✔ Reutilização de componentes (props)  
Envio e recebimento de valores entre componentes.

### ✔ Inputs controlados  
Campos de texto totalmente sincronizados com o estado.

### ✔ Eventos e renderização condicional  
Botões que mudam o texto, validações, mensagens dinâmicas e mais.

### ✔ Composição de interface  
O componente `Login.jsx` junta todos os outros componentes e monta um mini-formulário.

---

## 📂 Estrutura do Projeto


---

## 🧩 Descrição dos Componentes

### **Label.jsx**
Componente funcional simples que recebe texto via props e exibe na tela.

### **Labelln.jsx**
Exemplo em classe utilizando `this.state` para armazenar valores.

### **InputText.jsx**
Input controlado com validação simples (campo obrigatório).

### **InputPassword.jsx**
Input de senha controlado exibindo o valor digitado.

### **Button.jsx**
Botão que altera seu texto quando clicado (demonstra uso de eventos).

### **Login.jsx**
Integra todos os componentes acima em um pequeno formulário.






