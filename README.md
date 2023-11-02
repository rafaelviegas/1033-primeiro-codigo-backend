# 1033-primeiro-codigo-backend

## 🚀 Começando

Essas instruções permitirão que você obtenha uma cópia do projeto em operação na sua máquina local para fins de desenvolvimento e teste.

### 📋 Pré-requisitos

É necessário o Node.js instalado na máquina. A versão mínina requerida é a v12.0.0
Para verificar se você já possui utilize o comando abaixo:

```
node -v
v12.18.3
```
### 🔧 Instalação

Para instalar, caso não o possua instalado, faça o download no site oficial do Node [clicando aqui](https://nodejs.org/en/download/).


## ⚙️ Executando a API
Após efetuar o clone do repositório, acesse o diretório  /src via terminal e execute os comandos:

```bash

npm install 

$env:SALT_KEY="minhachavesecreta"
$env:DB_CONNECTION="mongodb://mongodb0.example.com:27017"

npm run dev

```
Abra http://localhost:3000/docs no seu browser para ver o resultado.
