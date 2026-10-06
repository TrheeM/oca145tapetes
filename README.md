# Catálogo de tapetes premium — versão local

Exportação da versão 4: visual claro/editorial, busca, filtros, detalhes de produtos, comparação de até três tapetes e formulário de atendimento.

## Rodar no PC

1. Extraia o ZIP completo.
2. Tenha o Node.js instalado (18 ou superior).
3. Abra o terminal na pasta `tapetes-premium` e execute `npm start`.
4. Acesse **http://localhost:3000**.

No Windows, também é possível abrir `INICIAR-WINDOWS.bat`. Para parar, pressione Ctrl+C no terminal. Não precisa executar `npm install`: o servidor usa apenas módulos nativos do Node.js.

## Arquivos

- `site/index.html`: estrutura, estilos originais, produtos e lógica de busca/filtros/comparação.
- `site/light.css`: aparência clara.
- `site/lead.css`: estilos do formulário.
- `site/lead.js`: formulário, mensagem e WhatsApp.
- `site/assets/`: todas as imagens originais incluídas.
- `server.cjs`: servidor local.
- `PROMPT-PARA-CLAUDE.md`: instruções prontas para o Claude Code.

## Configurar o WhatsApp

Em `site/lead.js`, altere somente:

```js
const SHOP_WHATSAPP_NUMBER = '';
```

Preencha com o número real da loja, apenas dígitos, incluindo 55 + DDD + número. Sem número, o site exibe a mensagem e permite copiá-la ou escolher um contato no WhatsApp.

## Estado da prévia

Marca, imagens e produtos são demonstrativos. Não há checkout, banco de dados, estoque real ou envio automático de mensagens. O formulário prepara o texto e abre o WhatsApp; o visitante confirma o envio. Não exige chaves, login ou arquivo `.env`.

Todas as imagens estão locais. As fontes mantêm o carregamento original pelo Google Fonts e usam fontes alternativas se não houver internet. O WhatsApp também requer conexão.

Este pacote não inclui credenciais, histórico Git ou configuração da hospedagem anterior. O design e o comportamento do catálogo foram preservados.
