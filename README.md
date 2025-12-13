# 🫀 Meu Coração

Um aplicativo mobile completo desenvolvido para auxiliar pessoas com problemas cardíacos no gerenciamento de sua saúde. O app permite que o usuário tenha todas as informações essenciais sobre medicamentos, exames, consultas agendadas e alergias na palma da mão.

## 📱 Sobre o Projeto

**Meu Coração** é uma solução digital inovadora que centraliza informações importantes de saúde cardíaca. O aplicativo oferece uma interface intuitiva e fácil de usar, permitindo que pacientes monitorem sua saúde de forma organizada e eficiente.

---

## ✨ Funcionalidades Principais

### 👤 Autenticação & Usuários
- **Registro de novo usuário** - Criar conta com email e senha
- **Login/Logout** - Acesso seguro com autenticação JWT
- **Autenticação Google OAuth** - Login simplificado com Google
- **Perfil do usuário** - Visualizar e editar informações pessoais
- **Dados de saúde** - Armazenar informações de saúde do usuário

### 📋 Gerenciamento de Medicamentos (Remédios)
- ✅ Listar todos os medicamentos
- ✅ Adicionar novo medicamento
- ✅ Editar informações de medicamentos
- ✅ Deletar medicamentos
- ✅ Armazenar dosagem, frequência e instruções de uso

### 📅 Agendamento de Consultas & Exames
- ✅ Visualizar agenda de consultas
- ✅ Agendar nova consulta/exame
- ✅ Editar consultas agendadas
- ✅ Cancelar consultas
- ✅ Notificações de consultas próximas
- ✅ Rastreamento de datas e horários

### 🏥 Gerenciamento de Laudos (Exames)
- ✅ Listar laudos e resultados de exames
- ✅ Adicionar novo laudo
- ✅ Editar informações de laudos
- ✅ Deletar laudos
- ✅ Armazenar datas e resultados

### ⚠️ Registro de Alergias
- ✅ Listar alergias conhecidas
- ✅ Adicionar nova alergia
- ✅ Editar informações de alergias
- ✅ Deletar alergias
- ✅ Documentar reações e medicamentos alérgicos

### 😔 Gerenciamento Emocional
- ✅ Registrar estado emocional
- ✅ Acompanhar histórico de humor
- ✅ Apoio ao bem-estar mental
- ✅ Integração com dados de saúde

### 🌐 Interface Multi-plataforma
- 📱 **Mobile** (iOS & Android)
- 🖥️ **Web**
- ⚡ Interface responsiva e adaptativa

---

## 🛠️ Tecnologias Utilizadas

### Frontend

#### Framework & Runtime
- **React Native** `^0.81.5` - Framework para desenvolvimento mobile
- **Expo** `~54.0.13` - Plataforma para desenvolvimento React Native
- **React** `19.1.0` - Biblioteca JavaScript para UI
- **React DOM** `19.1.0` - Renderização em navegadores
- **React Native Web** `~0.21.0` - Execução em web

#### Navegação & Roteamento
- **Expo Router** `~6.0.12` - Roteamento nativo
- **React Navigation Bottom Tabs** `^7.4.0` - Navegação abas inferiores
- **React Navigation Native** `^7.1.8` - Navegação base
- **React Navigation Elements** `^2.6.3` - Elementos de navegação

#### Gestos & Animações
- **React Native Gesture Handler** `~2.28.0` - Gestos nativos
- **React Native Reanimated** `~4.1.1` - Animações performáticas
- **React Native Worklets** `0.5.1` - Worklets otimizados

#### UI & Experiência
- **Expo Vector Icons** `^15.0.2` - Ícones vetoriais
- **Expo Haptics** `~15.0.7` - Feedback háptico (vibração)
- **Expo Image** `~3.0.9` - Componente de imagem otimizado
- **Expo Symbols** `~1.0.7` - Símbolos do sistema
- **Expo System UI** `~6.0.7` - UI do sistema

#### Armazenamento
- **AsyncStorage** `^2.2.0` - Armazenamento local persistente
- **React Native Picker** `2.11.1` - Seletor nativo

#### API & Comunicação
- **Axios** `^1.13.2` - Cliente HTTP para requisições

#### Linking & Browser
- **Expo Linking** `~8.0.8` - Deep linking
- **Expo Web Browser** `~15.0.8` - Navegador web integrado

#### Sistema
- **Expo Font** `~14.0.9` - Carregamento de fontes
- **Expo Constants** `~18.0.9` - Constantes do app
- **Expo Splash Screen** `~31.0.10` - Tela de splash
- **Expo Status Bar** `~3.0.8` - Barra de status
- **React Native Safe Area Context** `~5.6.0` - Áreas seguras
- **React Native Screens** `~4.16.0` - Otimizações de telas

#### Linguagem & Tipos
- **TypeScript** `~5.9.2` - Tipagem estática
- **@types/react** `~19.1.0` - Tipos React

#### Linting
- **ESLint** `^9.25.0` - Linter de código
- **eslint-config-expo** `~10.0.0` - Configuração ESLint para Expo

---

### Backend

#### Framework & Runtime
- **NestJS** `^10.0.0` - Framework Node.js progressivo
- **Node.js** - Runtime JavaScript backend

#### Banco de Dados
- **MongoDB** `^8.20.1` - Banco de dados NoSQL
- **Mongoose** `^11.0.3` - ODM para MongoDB
- **Docker Compose** - Containerização do MongoDB

#### Autenticação & Segurança
- **JWT (JSON Web Tokens)** `^11.0.1` - Autenticação segura
- **Passport.js** `^0.7.0` - Middleware de autenticação
- **Passport JWT** `^4.0.1` - Estratégia JWT
- **Passport Google OAuth 2.0** `^2.0.0` - Integração Google
- **bcryptjs** `^3.0.3` - Hashing de senhas

#### Validação & Transformação
- **class-validator** `^0.14.2` - Validação de dados
- **class-transformer** `^0.5.1` - Transformação de dados

#### Configuração
- **@nestjs/config** `^4.0.2` - Gerenciamento de configurações
- **dotenv** `^17.2.3` - Variáveis de ambiente

#### Testes
- **Jest** - Framework de testes
- **@nestjs/testing** `^10.0.0` - Testes NestJS
- **Supertest** - Testes HTTP

#### CLI & Build
- **@nestjs/cli** `^10.0.0` - CLI NestJS
- **@nestjs/schematics** `^10.0.0` - Schematics para geração de código
- **TypeScript** - Compilação TypeScript

#### Dependências Adicionais
- **RxJS** `^7.8.1` - Programação reativa
- **reflect-metadata** - Metadados para TypeScript
- **Express** `^5.0.0` - Framework HTTP

---

## 📂 Estrutura do Projeto

```
MeuCoracaoAtualizado/
├── app/                          # Rotas e telas do app
│   ├── (tabs)/                   # Navegação em abas
│   ├── agenda.tsx / agenda-adicionar.tsx / agenda-editar.tsx
│   ├── remedios.tsx / remedios-adicionar.tsx / remedios-editar.tsx
│   ├── alergias.tsx / alergias-adicionar.tsx / alergias-editar.tsx
│   ├── laudos.tsx / laudos-adicionar.tsx / laudos-editar.tsx
│   ├── emocional.tsx
│   ├── dados.tsx
│   ├── login.tsx
│   └── cadastro.tsx
│
├── components/                   # Componentes reutilizáveis
│   ├── ui/
│   ├── input.tsx
│   ├── themed-text.tsx
│   ├── Tile.tsx
│   └── parallax-scroll-view.tsx
│
├── contexts/                     # Context API para estado global
│   ├── AuthContext.tsx
│   ├── AgendaContext.tsx
│   ├── RemedioContext.tsx
│   ├── AlergiaContext.tsx
│   ├── LaudoContext.tsx
│   └── EmocionalContext.tsx
│
├── services/                     # Serviços e API
│   └── api.ts                    # Cliente Axios com interceptadores
│
├── hooks/                        # React Hooks customizados
│   ├── use-color-scheme.ts
│   ├── use-theme-color.ts
│   └── use-color-scheme.web.ts
│
├── constants/                    # Constantes do app
│   └── theme.ts
│
├── backend/cardio-backend/       # Backend NestJS
│   ├── src/
│   │   ├── auth/                 # Autenticação e JWT
│   │   ├── users/                # Gerenciamento de usuários
│   │   ├── agenda/               # Agendamentos
│   │   ├── remedios/             # Medicamentos
│   │   ├── alergias/             # Alergias
│   │   ├── laudos/               # Exames/Laudos
│   │   ├── schemas/              # Schemas do MongoDB
│   │   └── main.ts               # Ponto de entrada
│   ├── test/                     # Testes E2E
│   ├── docker-compose.yml        # Configuração Docker
│   └── package.json
│
├── assets/                       # Imagens e recursos
│   └── images/
│
├── types.d.ts                    # Definições de tipos globais
├── tsconfig.json                 # Configuração TypeScript
├── package.json                  # Dependências Frontend
└── README.md                     # Este arquivo
```

---

## 🚀 Como Executar o Projeto

### Pré-requisitos
- Node.js `>=16.0.0`
- npm ou yarn
- Docker (opcional, para MongoDB)
- Expo CLI

### Instalação

#### Frontend
```bash
# Instalar dependências
npm install

# Ou com yarn
yarn install
```

#### Backend
```bash
# Navegar para o backend
cd backend/cardio-backend

# Instalar dependências
npm install

# Ou com yarn
yarn install
```

### Executar o Projeto

#### Frontend

```bash
# Web
npm run web

# iOS
npm run ios

# Android
npm run android

# Desenvolvimento
npm start
```

#### Backend

```bash
# Desenvolvimento com watch mode
cd backend/cardio-backend
npm run start:dev

# Produção
npm run start:prod

# Testes
npm run test

# Testes E2E
npm run test:e2e

# Testes com Docker
npm run test:ci
```

### Variáveis de Ambiente

Crie um arquivo `.env` na raiz do projeto frontend:
```
EXPO_PUBLIC_API_URL=http://localhost:3000
```

Crie um arquivo `.env` no backend:
```
DATABASE_URL=mongodb://localhost:27017/meucoracao
JWT_SECRET=sua_chave_secreta_jwt
GOOGLE_CLIENT_ID=seu_id_cliente_google
GOOGLE_CLIENT_SECRET=seu_secret_google
NODE_ENV=development
```

---

## 📊 Fluxo de Dados

```
┌─────────────────────────────────────────┐
│     Frontend (React Native + Expo)      │
│  Screens > Contexts > Services (API)    │
└──────────────────┬──────────────────────┘
                   │
              HTTP/Axios
                   │
                   ▼
┌─────────────────────────────────────────┐
│    Backend (NestJS + Express)           │
│  Controllers > Services > MongoDB       │
└──────────────────┬──────────────────────┘
                   │
              MongoDB Driver
                   │
                   ▼
┌─────────────────────────────────────────┐
│         MongoDB (NoSQL Database)        │
│  Collections: Users, Agenda, Remedios   │
│  Alergias, Laudos, Emocional            │
└─────────────────────────────────────────┘
```

---

## 🔐 Segurança

- ✅ Autenticação JWT
- ✅ OAuth 2.0 (Google)
- ✅ Hashing de senhas com bcryptjs
- ✅ Validação de dados com class-validator
- ✅ Interceptadores Axios para tokens
- ✅ Armazenamento seguro em AsyncStorage

---

## 📈 API Endpoints

### Autenticação
- `POST /auth/register` - Registrar novo usuário
- `POST /auth/login` - Login com email e senha
- `POST /auth/google` - Login com Google
- `POST /auth/logout` - Logout

### Usuários
- `GET /users/:id` - Obter dados do usuário
- `PUT /users/:id` - Atualizar dados do usuário

### Remédios
- `GET /remedios` - Listar remédios
- `POST /remedios` - Criar remédio
- `PUT /remedios/:id` - Atualizar remédio
- `DELETE /remedios/:id` - Deletar remédio

### Agenda
- `GET /agenda` - Listar agendamentos
- `POST /agenda` - Criar agendamento
- `PUT /agenda/:id` - Atualizar agendamento
- `DELETE /agenda/:id` - Deletar agendamento

### Alergias
- `GET /alergias` - Listar alergias
- `POST /alergias` - Criar alergia
- `PUT /alergias/:id` - Atualizar alergia
- `DELETE /alergias/:id` - Deletar alergia

### Laudos
- `GET /laudos` - Listar laudos
- `POST /laudos` - Criar laudo
- `PUT /laudos/:id` - Atualizar laudo
- `DELETE /laudos/:id` - Deletar laudo

---

## 🧪 Testes

```bash
# Executar todos os testes
npm run test

# Testes em modo watch
npm run test:watch

# Cobertura de testes
npm run test:cov

# Testes E2E
npm run test:e2e

# Testes CI com Docker
npm run test:ci
```

---

## 📦 Deploy

### Frontend (Expo)
```bash
npm run build
eas build --platform all
```

### Backend (Docker)
```bash
docker-compose up -d
npm run start:prod
```

---

## 🤝 Contribuições

Contribuições são bem-vindas! Por favor:

1. Faça um Fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

---

## 📝 Licença

Este projeto está licenciado sob a Licença MIT - veja o arquivo LICENSE para detalhes.

---

## 👨‍💻 Autor

**Diego Anjos**

- GitHub: [@Diego-Anjos](https://github.com/Diego-Anjos)

---

## 📞 Suporte

Para suporte, abra uma issue no repositório GitHub ou entre em contato com o desenvolvedor.

---

## 🙏 Agradecimentos

- Expo team pelo excelente framework
- NestJS pela arquitetura robusta
- MongoDB pela flexibilidade
- React Native community

---

**Desenvolvido com ❤️ para a saúde cardíaca**
