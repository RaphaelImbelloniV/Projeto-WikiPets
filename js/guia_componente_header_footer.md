# Guia Simples - Migração para Header e Footer Padronizados

## 🎯 O que foi criado

- **`js/header-footer.js`** - Script que gera header e footer automaticamente **com loader**

## 📝 Como usar em páginas novas

### 1. Estrutura básica (com loader automático)
```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <title>Sua Página</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <!-- Container para o header -->
    <div id="header-container"></div>

    <!-- Seu conteúdo aqui -->
    <main>
        <h1>Conteúdo da página</h1>
    </main>

    <!-- Container para o footer -->
    <div id="footer-container"></div>

    <!-- Scripts -->
    <script src="js/header-footer.js"></script>
</body>
</html>
```

### 3. Para páginas em subpastas (posts, saude, etc.)
```html
<!-- Use caminho relativo -->
<script src="../js/header-footer.js"></script>
```

###4. **ATENÇÃO** é necessario que o arquivo de estilo principal (styles.css) seja importado para que o header/footer carregue corretamente
