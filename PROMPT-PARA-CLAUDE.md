Quero executar no localhost do meu PC o site deste projeto, preservando exatamente o visual claro/editorial e as funcionalidades existentes.

1. Leia o README.md e examine os arquivos antes de alterar qualquer coisa.
2. Este projeto é um site estático em site/, com todas as imagens em site/assets/. O servidor server.cjs usa módulos nativos do Node.js. Não precisa de npm install, framework, build, API, banco, chave ou .env.
3. Verifique se o Node.js está instalado. Se estiver, execute npm start na raiz do projeto e informe o endereço http://localhost:3000. Se faltar, oriente a instalação e continue após estar disponível.
4. Se a porta 3000 já estiver ocupada, preserve o processo existente e escolha outra porta com a variável PORT. No PowerShell: $env:PORT="3001"; npm start. No CMD: set PORT=3001 e depois npm start.
5. Confira que imagens, CSS e JS carregam. Teste busca, filtros, detalhes, seleção e comparação de até três tapetes, remoção da seleção, menu mobile e formulário de atendimento. Confira se a mensagem inclui as respostas e os modelos selecionados.
6. O número comercial ainda não foi fornecido. Mantenha SHOP_WHATSAPP_NUMBER vazio em site/lead.js até eu passar o número correto. Sem número, preserve a prévia/copiar mensagem e o WhatsApp com escolha de contato.
7. Não refaça o site, não mude design, textos ou imagens, não invente dados de produtos e não acrescente integrações. Corrija apenas eventual problema que impeça a versão recebida de rodar localmente, explicando a mudança.
8. Não publique em hospedagem e não envie mensagens a clientes. O objetivo agora é rodar e visualizar no localhost do meu PC.

Ao finalizar, diga qual comando iniciou o site, o endereço local e se há alguma pendência.
