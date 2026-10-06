// Add the store's WhatsApp number in international format once supplied (55 + DDD + number).
const SHOP_WHATSAPP_NUMBER = '';
const leadForm = document.getElementById('lead-form');
let directInterest = null;

function interestNames() {
  const compared = favorites.map(id => rugs.find(rug => rug.id === id)?.name).filter(Boolean);
  return [...new Set([...(directInterest ? [directInterest] : []), ...compared])];
}

function refreshLeadInterest() {
  const names = interestNames();
  document.getElementById('lead-interest-text').textContent = names.length
    ? names.join(' · ')
    : 'Se você selecionar tapetes para comparar, eles aparecerão na mensagem.';
}

window.showLeadForm = function () {
  directInterest = modal.open ? modal.querySelector('.detail h2')?.textContent.trim() || null : null;
  if (modal.open) modal.close();
  refreshLeadInterest();
  document.getElementById('experiencia').scrollIntoView({behavior: 'smooth', block: 'start'});
};

document.addEventListener('click', event => {
  if (event.target.closest('[data-favorite]')) refreshLeadInterest();
});

function buildLeadMessage(data) {
  const lines = [
    'Olá! Encontrei a coleção de tapetes pelo site e gostaria de orientação.',
    '',
    '*Meu espaço*',
    `Nome: ${data.get('name').trim()}`,
    `Ambiente: ${data.get('room')}`,
    `Medida aproximada: ${data.get('size').trim() || 'Ainda não tenho a medida'}`,
    `Paleta preferida: ${data.get('palette')}`,
    `Faixa de investimento: ${data.get('budget').trim() || 'Gostaria de conhecer as opções'}`,
    `Quando pretendo escolher: ${data.get('timing')}`,
  ];
  const city = data.get('city').trim();
  if (city) lines.push(`Cidade/estado: ${city}`);
  const names = interestNames();
  if (names.length) lines.push(`Tapetes que gostei: ${names.join(', ')}`);
  lines.push('', 'Podem me indicar as opções mais adequadas e informar medidas, valores e disponibilidade?');
  return lines.join('\n');
}

function previewMessage(message) {
  const content = document.getElementById('modal-content');
  content.innerHTML = '<span class="eyebrow">Prévia da mensagem</span><h2>Pronto para conversar.</h2><p class="preview-copy">O número da loja ainda não foi configurado nesta prévia. Você pode copiar a mensagem ou abrir o WhatsApp e escolher um contato.</p>';
  const preview = document.createElement('pre');
  preview.className = 'message-preview';
  preview.textContent = message;
  content.append(preview);

  const actions = document.createElement('div');
  actions.className = 'preview-actions';
  const copy = document.createElement('button');
  copy.className = 'btn primary';
  copy.textContent = 'Copiar mensagem';
  copy.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(message);
      copy.textContent = 'Mensagem copiada ✓';
    } catch {
      copy.textContent = 'Selecione e copie o texto acima';
    }
  });
  const open = document.createElement('button');
  open.className = 'btn ghost';
  open.textContent = 'Abrir WhatsApp ↗';
  open.addEventListener('click', () => window.open(`https://wa.me/?text=${encodeURIComponent(message)}`, '_blank', 'noopener'));
  actions.append(copy, open);
  content.append(actions);
  modal.showModal();
}

leadForm.addEventListener('submit', event => {
  event.preventDefault();
  if (!leadForm.reportValidity()) return;
  const message = buildLeadMessage(new FormData(leadForm));
  const number = SHOP_WHATSAPP_NUMBER.replace(/\D/g, '');
  if (number) {
    window.open(`https://wa.me/${number}?text=${encodeURIComponent(message)}`, '_blank', 'noopener');
  } else {
    previewMessage(message);
  }
});

refreshLeadInterest();
