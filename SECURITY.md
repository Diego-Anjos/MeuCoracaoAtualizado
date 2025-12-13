# 🔐 Segurança - Guia de Dados Sensíveis

## ⚠️ Dados Sensíveis Não Devem Estar no Git

Este documento lista todos os tipos de dados sensíveis que **NUNCA** devem ser commitados no repositório.

---

## 📋 Lista de Dados Sensíveis

### Variáveis de Ambiente (.env)
- ❌ `.env` - Arquivo de configuração com segredos
- ❌ `.env.local` - Variáveis locais
- ❌ `.env.development.local` - Variáveis de desenvolvimento
- ❌ `.env.production.local` - Variáveis de produção
- ❌ `.env.test.local` - Variáveis de teste

### Chaves e Tokens
- ❌ JWT_SECRET - Chave secreta de autenticação
- ❌ Google OAuth credentials
- ❌ API keys
- ❌ Private keys (*.key, *.pem)
- ❌ Certificates

### Credenciais de Banco de Dados
- ❌ DATABASE_URL com senha
- ❌ MONGO_URI completo
- ❌ Usuários e senhas do banco

### Arquivos de Credenciais
- ❌ google-credentials.json
- ❌ service-account.json
- ❌ firebase-config.json

### Dados Pessoais
- ❌ Informações de usuários reais
- ❌ Tokens de autenticação
- ❌ Sessions files

### Arquivos de Build e Cache
- ❌ `/node_modules` - Já no .gitignore
- ❌ `/dist` - Build artifacts
- ❌ `.eslintcache`
- ❌ `.cache/`

---

## ✅ Como Usar as Variáveis de Ambiente

### 1. Copiar do Exemplo
```bash
# Frontend
cp .env.example .env.local

# Backend
cd backend/cardio-backend
cp .env.example .env
```

### 2. Preencher com Valores Reais
Edite os arquivos `.env` e `.env.local` com suas credenciais reais:
```
EXPO_PUBLIC_API_URL=http://localhost:3000
JWT_SECRET=sua_chave_secreta_aqui
GOOGLE_CLIENT_ID=seu_id_aqui
```

### 3. Verificar o .gitignore
Certifique-se de que `.gitignore` contém:
```
.env
.env.local
.env.*.local
```

---

## 🔍 Verificar Arquivos Antes de Subir

### Verificar Dados Sensíveis com Git
```bash
# Ver o que será commitado
git status

# Ver arquivo específico
git diff --cached backend/cardio-backend/.env

# Se acidentalmente adicionou .env
git rm --cached .env
```

### Buscar por Dados Sensíveis
```bash
# Procurar por chaves conhecidas
git log -p -S "JWT_SECRET" 
git log -p -S "GOOGLE_CLIENT_ID"

# Procurar por patterns suspeitos
grep -r "mongodb://" --include="*.ts" --include="*.js"
grep -r "Bearer " --include="*.ts" --include="*.js"
```

---

## 🚨 O Que Fazer se Vazou um Segredo?

### 1. Imediatamente
- Revogue a chave/token (ex: Google, JWT)
- Mude a senha do banco de dados
- Notifique a equipe

### 2. Remover do Histórico Git
```bash
# Remover um arquivo específico do histórico
git filter-branch --tree-filter 'rm -f backend/cardio-backend/.env' HEAD

# Ou usar BFG Repo-Cleaner
bfg --delete-files .env

# Force push (cuidado!)
git push origin main --force-with-lease
```

### 3. Comunicar com a Equipe
- Informe todos sobre a mudança
- Peça para todos fazerem git pull
- Gere novas chaves/tokens

---

## 📝 Checklist Antes de Fazer Push

- [ ] Rodei `git status` e verifiquei o que será enviado
- [ ] Não vejo `.env` ou `.env.local` na lista
- [ ] Verifiquei `/node_modules` não está incluído
- [ ] Não há arquivos com nomes suspeitos (*.key, *.pem, etc)
- [ ] `.gitignore` está correto no repositório
- [ ] Executei `git diff --cached` para revisar mudanças
- [ ] Não estou commitando informações de produção

---

## 🔗 Links Úteis

- [GitHub - Ignoring Files](https://docs.github.com/en/get-started/getting-started-with-git/ignoring-files)
- [OWASP - Sensitive Data](https://owasp.org/www-project-top-ten/)
- [12 Factor App - Config](https://12factor.net/config)
- [Git Secrets Tool](https://github.com/awslabs/git-secrets)

---

## 🛡️ Melhorias de Segurança Implementadas

✅ `.gitignore` atualizado com padrões sensíveis
✅ `.env.example` criado como referência
✅ Documentação de segurança criada
✅ Lista de dados sensíveis definida
✅ Instruções de limpeza de histórico

---

**Lembre-se: Segurança é responsabilidade de todos! 🔐**
