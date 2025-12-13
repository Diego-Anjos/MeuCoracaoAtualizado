# ⚙️ Configuração Inicial do Projeto

## 🚀 Setup Frontend

### 1. Instalar Dependências
```bash
npm install
```

### 2. Configurar Variáveis de Ambiente
```bash
# Copiar arquivo de exemplo
cp .env.example .env.local

# Editar com seus valores
# EXPO_PUBLIC_API_URL=http://localhost:3000
```

### 3. Iniciar o Projeto
```bash
# Desenvolvimento em web
npm run web

# iOS
npm run ios

# Android  
npm run android
```

---

## 🛠️ Setup Backend

### 1. Navegar para o Backend
```bash
cd backend/cardio-backend
```

### 2. Instalar Dependências
```bash
npm install
```

### 3. Iniciar MongoDB (com Docker)
```bash
docker-compose up -d
```

Ou instale MongoDB localmente: https://www.mongodb.com/try/download/community

### 4. Configurar Variáveis de Ambiente
```bash
# Copiar arquivo de exemplo
cp .env.example .env

# Editar com seus valores
# DATABASE_URL=mongodb://localhost:27017/meucoracao
# JWT_SECRET=sua_chave_secreta_aqui
# GOOGLE_CLIENT_ID=seu_id_aqui
# GOOGLE_CLIENT_SECRET=seu_secret_aqui
```

### 5. Executar Migrations (se aplicável)
```bash
npm run migrate
```

### 6. Iniciar o Servidor
```bash
# Desenvolvimento com watch mode
npm run start:dev

# Produção
npm run build
npm run start:prod
```

---

## 🔐 Google OAuth Setup

### 1. Criar Projeto no Google Cloud
- Acesse: https://console.cloud.google.com
- Crie um novo projeto
- Ative a API "Google+ API"

### 2. Criar Credenciais
- Vá para "Credenciais"
- Crie uma "OAuth 2.0 ID do Cliente"
- Tipo: Aplicação Web
- URIs autorizados:
  - `http://localhost:3000`
  - `http://localhost:3000/auth/google/callback`
  - `http://localhost:19006` (Expo Web)
  - Seu domínio em produção

### 3. Adicionar ao .env
```env
GOOGLE_CLIENT_ID=seu_id.apps.googleusercontent.com
GOOGLE_CLIENT_SECRET=seu_secret
```

---

## 📊 Verificar Conectividade

### Backend rodando?
```bash
curl http://localhost:3000
```

### MongoDB conectado?
```bash
mongosh
show dbs
```

### Frontend conectado ao Backend?
- Abra as DevTools (F12)
- Vá para Network/Console
- Faça login - veja se a requisição vai para `http://localhost:3000`

---

## 🧪 Testes

### Frontend
```bash
npm run lint
```

### Backend
```bash
cd backend/cardio-backend

# Testes unitários
npm run test

# Testes E2E
npm run test:e2e

# Cobertura
npm run test:cov
```

---

## 🐛 Troubleshooting

### "Cannot connect to MongoDB"
- Verificar se MongoDB está rodando: `mongosh`
- Verificar DATABASE_URL no .env
- Se usar Docker: `docker ps` para ver containers

### "CORS error"
- Verificar FRONTEND_URL no backend .env
- Verificar EXPO_PUBLIC_API_URL no frontend .env.local

### "JWT token invalid"
- Verificar JWT_SECRET é o mesmo no backend
- Limpar cache do app: `npm run reset-project`
- Fazer logout e login novamente

### "Google OAuth not working"
- Verificar GOOGLE_CLIENT_ID e GOOGLE_CLIENT_SECRET
- Verificar URIs autorizados no Google Cloud Console
- Limpar cookies do navegador

---

## 📁 Estrutura de Dados MongoDB

```javascript
// Users Collection
{
  _id: ObjectId,
  name: String,
  email: String (unique),
  password: String (hashed),
  createdAt: Date,
  updatedAt: Date
}

// Remedios Collection
{
  _id: ObjectId,
  userId: ObjectId,
  name: String,
  dosage: String,
  frequency: String,
  startDate: Date,
  endDate: Date,
  createdAt: Date
}

// Similar para: Agenda, Alergias, Laudos
```

---

## 📝 Commits Iniciais Recomendados

```bash
# Setup inicial
git add .
git commit -m "chore: initial project setup with docker and env config"

# Após configuração
git commit -m "docs: add setup guide and security documentation"

# Antes de features
git commit -m "ci: configure github actions and lint rules"
```

---

## ✅ Pre-Deploy Checklist

- [ ] Todas as variáveis de ambiente estão em `.env.example`
- [ ] Nenhum `.env` real foi commitado
- [ ] Testes passando: `npm run test`
- [ ] Sem warnings de lint: `npm run lint`
- [ ] README.md atualizado
- [ ] SECURITY.md revisto
- [ ] `.gitignore` está correto
- [ ] MongoDB migrations rodadas
- [ ] Frontend conecta ao backend
- [ ] Google OAuth funcionando

---

**Próximos passos:** 
1. Configurar CI/CD (GitHub Actions)
2. Setup de deploy (Heroku/DigitalOcean para backend)
3. Setup de deploy (Expo/App Store para frontend)
4. Monitoramento e logs

