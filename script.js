// Dados dos projetos para o modal
const projectData = {
  'landing-pages': {
    title: 'Landing Pages de Alta Conversão',
    description: 'Desenvolvimento de landing pages focadas em performance e na captura de leads...',
    tags: ['HTML5', 'CSS3', 'JavaScript', 'Otimização'],
    images: [
    'imagens/01barberhori.png',
    'imagens/02barber.png',
    'imagens/03barber.png',
    'imagens/04barber.png',
    ],
    gradient: 'bg-gradient-to-br from-blue-400 to-purple-500'
  },
  'sites-institucionais': {
    title: 'Sites Institucionais Profissionais',
    description: 'Criação de websites corporativos que fortalecem a presença online da marca...',
    tags: ['Vue.js', 'Tailwind', 'SEO', 'Responsividade'],
    images: [
    'imagens/01clinica.png',
    'imagens/02clinica.png',
    'imagens/03clinica.png',
    'imagens/04clinica.png'
    ],    icon: '<svg>...</svg>',
    gradient: 'bg-gradient-to-br from-green-400 to-blue-500'
  },
  'portfolios': {
    title: 'Portfólios Criativos',
    description: 'Desenvolvimento de portfólios online elegantes e impactantes...',
    tags: ['React', 'CSS3', 'Animações', 'UI/UX'],
    images: [
    'imagens/01potffolio.png',
    'imagens/02port.png',
    'imagens/03port.png',
    'imagens/03port.png'
    ],    icon: '<svg>...</svg>',
    gradient: 'bg-gradient-to-br from-pink-400 to-red-500'
  },
  'blogs': {
    title: 'Blogs e Plataformas de Conteúdo',
    description: 'Criação de blogs e plataformas de conteúdo com foco em SEO...',
    tags: ['HTML5', 'Tailwind', 'CMS', 'SEO'],
    images: [
    'imagens/01BLOG.png',
    'imagens/02BLOG.png',
    'imagens/03BLOG.png',
    'imagens/04BLOG.png'
    ],    icon: '<svg>...</svg>',
    gradient: 'bg-gradient-to-br from-indigo-400 to-purple-500'
  }
};


// Funções do Modal
function openModal(projectId) {
    const modal = document.getElementById('project-modal');
    const data = projectData[projectId];
    if (!data || !modal) return;

    // Elementos do Modal
    const titleEl = document.getElementById('modal-title');
    const descEl = document.getElementById('modal-description');
    const tagsEl = document.getElementById('modal-tags');
    const imageEl = document.getElementById('modal-image-placeholder');
    
    // Preencher dados
    titleEl.textContent = data.title;
    descEl.textContent = data.description;
    imageEl.innerHTML = `
    <div class="grid grid-cols-2 gap-4">
        ${data.images.map(img =>
        `<img src="${img}" alt="${data.title}" class="w-full h-auto rounded-lg shadow-md" />`
        ).join('')}
    </div>
    `;
    imageEl.className = 'modal-image'; // Remove o gradiente, se não for mais necessário
    
    tagsEl.innerHTML = ''; // Limpa tags antigas
    data.tags.forEach(tag => {
        const span = document.createElement('span');
        span.className = 'bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm';
        span.textContent = tag;
        tagsEl.appendChild(span);
    });

    modal.classList.add('active');
    document.body.style.overflow = 'hidden'; // Impede o scroll do fundo
}

function closeModal() {
    const modal = document.getElementById('project-modal');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto'; // Restaura o scroll do fundo
    }
}

// Anexa as funções à window para serem acessíveis pelos `onclick` no HTML
window.openModal = openModal;
window.closeModal = closeModal;


// Demais funcionalidades
document.addEventListener('DOMContentLoaded', () => {
    // Menu Mobile
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    mobileMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });

    document.querySelectorAll('#mobile-menu a').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
        });
    });

    // Animação de Scroll para Seções
    const sections = document.querySelectorAll('.section-hidden');
    const observerOptions = { root: null, rootMargin: '0px', threshold: 0.15 };
    const sectionObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('section-visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    sections.forEach(section => sectionObserver.observe(section));
    
    // Formulário de Contato via WhatsApp
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const formData = new FormData(contactForm);
      const name = formData.get('name') || '';
      const email = formData.get('email') || '';
      const project = formData.get('project') || 'Não informado';
      const message = formData.get('message') || '';

      if (!name || !email || !message) {
        alert('Por favor, preencha todos os campos obrigatórios.');
        return;
      }

        const texto = `
    🔔 *Novo Contato do Site*
    👤 *Nome:* ${name}
    📧 *Email:* ${email}
    📌 *Projeto:* ${project}
    📝 *Mensagem:* ${message}
        `;

      const numero = '5579991353409'; // Seu número com DDI + DDD
      const url = `https://wa.me/${numero}?text=${encodeURIComponent(texto)}`;
      window.open(url, '_blank');
    });
  }
});