// Theme Toggle
const themeToggle = document.getElementById('themeToggle');
const html = document.documentElement;

// Check for saved theme preference or use preferred color scheme
const savedTheme = localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
setTheme(savedTheme);

// Toggle theme on button click
themeToggle.addEventListener('click', () => {
    const currentTheme = html.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
});

// Set theme function
function setTheme(theme) {
    html.setAttribute('data-theme', theme);
    const icon = themeToggle.querySelector('i');
    icon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
}

// Set current year in footer
document.getElementById('current-year').textContent = new Date().getFullYear();

// Mobile Menu Toggle
const mobileMenuToggle = document.getElementById('mobileMenuToggle');
const navLinks = document.getElementById('navLinks');

if (mobileMenuToggle && navLinks) {
    mobileMenuToggle.addEventListener('click', () => {
        mobileMenuToggle.classList.toggle('active');
        navLinks.classList.toggle('active');
        // Previne scroll do body quando menu está aberto
        if (navLinks.classList.contains('active')) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    });
    
    // Fecha o menu ao clicar em um link
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenuToggle.classList.remove('active');
            navLinks.classList.remove('active');
            document.body.style.overflow = '';
        });
    });
    
    // Fecha o menu ao clicar fora dele
    document.addEventListener('click', (e) => {
        if (!navLinks.contains(e.target) && !mobileMenuToggle.contains(e.target)) {
            mobileMenuToggle.classList.remove('active');
            navLinks.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
    
    // Fecha o menu ao redimensionar a janela (se voltar para desktop)
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            mobileMenuToggle.classList.remove('active');
            navLinks.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
}

// Dados do portfólio
const aboutMe = {
    title: 'Sobre mim',
    description: 'Olá, eu sou o Vitor!<br><br>Durante minha trajetória em produto e tecnologia, passei por suporte, QA e, naturalmente, migrei para <strong>Produto</strong>, onde realmente me encontrei.<br><br>Gosto de transformar <strong>problemas complexos em soluções simples e úteis</strong>, sempre guiado por <strong>dados</strong>, <strong>curiosidade</strong> e uma visão prática do que realmente gera valor.<br><br>Atuei em <strong>fintechs</strong>, <strong>e-commerce</strong> e <strong>plataformas digitais</strong>, conectando produto, tecnologia e experiência do usuário para entregar <strong>impacto real</strong>.<br><br>Acredito que trabalhar com produto é sobre <strong>fazer perguntas melhores</strong>, <strong>priorizar com clareza</strong> e <strong>unir pessoas em torno de um propósito comum</strong>.'
};

const timelineData = [
    {
        id: 1,
        date: 'maio/2024 – ago/2025',
        title: 'Product Owner Pleno – Financeiro & Backoffice',
        company: 'Loja do Mecânico',
        description: 'Liderança de squad multidisciplinar (1 Tech Lead, 3 Back-end, 1 Front-end). Gestão de backlog e roadmap dos sistemas financeiros e backoffice. Atuação como PMO, garantindo governança, alinhamento entre áreas e previsibilidade das entregas dos squads.',
        highlights: [
            'Implementação do Motor de Crédito próprio, incluindo discovery, requisitos e acompanhamento de adoção, que aumentou as vendas B2B em 25%',
            'Responsável pela refatoração do fluxo de pagamento do e-commerce, que resultou em +5 p.p. na conversão e redução de R$ 1,2M em chargebacks',
            'Padronização e automação da governança do Jira para 9 squads (~45 pessoas)',
            'Implantação de rituais mensais, promovendo cultura orientada a ROI e impacto no negócio',
            'Gestão de CAPEX/OPEX dos projetos dos times de tecnologia da companhia'
        ],
        tags: ['Governança Ágil', 'Produto Financeiro', 'Pagamentos & Antifraude', 'Priorização Técnica', 'Métricas']
    },
    {
        id: 2,
        date: 'jul/2023 – mar/2024',
        title: 'Product Manager Júnior',
        company: 'MaisTODOS',
        description: 'Gestão de sete produtos geradores de cashback (TIM, RD, Ultragaz, Refuturiza, Awin, AmorSaúde e Energia de TODOS). Liderança de squad multidisciplinar (1 Tech Lead, 2 Back-end e 2 Front-end). Acompanhamento de métricas (Mixpanel, GA360, Metabase).',
        highlights: [
            'Implementação do Mixpanel em app com +5M downloads e ~1M MAU',
            'Liderança da parte técnica da Campanha Nacional #SemanaCashbackCDT, que em conjunto dos produtos e outras parcerias geram +R$30 milhões em cashback por ano',
            'Governança e padronização das documentações de produto no Notion',
            'Reconhecimento interno com o prêmio "Brilhou", concedido às pessoas que mais se destacaram no período',
            'Facilitação de cerimônias ágeis e priorização de backlog'
        ],
        tags: ['Análise de Dados', 'Gestão de Produto', 'Agilidade', 'Growth']
    },
    {
        id: 3,
        date: 'nov/2022 – jul/2023',
        title: 'Product Owner (UX/UI)',
        company: 'MaisTODOS',
        description: 'Liderança do time de UX/UI e backlog de design. Facilitação de ritos, plannings e retrospectivas. Acompanhamento de métricas e resultados pós-lançamento. Comunicação entre UX, Tech e Produto.',
        highlights: [
            'Criação do Manual de UX Writing e Diretrizes de Design do Aplicativo Cartão de TODOS',
            'Repaginação da Home do Aplicativo, com base em análise de funil',
            'Mapeamento completo do app entre Figma e ambiente de produção',
            'Time reconhecido por alta qualidade e consistência de entregas'
        ],
        tags: ['UX Strategy', 'Comunicação', 'Discovery', 'Métricas de Conversão']
    },
    {
        id: 4,
        date: 'mai/2022 – nov/2022',
        title: 'Quality Assurance (QA)',
        company: 'MaisTODOS',
        description: 'Reestruturação de processos e metodologia de QA. Planejamento de testes regressivos e automatizados (BDD). Validação funcional entre UX e desenvolvimento.',
        highlights: [
            'Implementação da cultura BDD e reestruturação do plano de testes',
            'Criação de BDD de todo o aplicativo integrado ao Jira',
            'Redução significativa de bugs em produção e melhoria da nota do app',
            'Documentação end-to-end de processos e testes'
        ],
        tags: ['QA', 'Garantia de Qualidade', 'Automação', 'Organização Técnica']
    },
    {
        id: 6,
        date: 'fev/2022 – mai/2022',
        title: 'Analista de Atendimento Ao Cliente',
        company: 'MaisTODOS',
        description: 'Atuação na linha de frente com usuários, entendendo problemas, coletando feedbacks e garantindo estabilidade do aplicativo. Experiência essencial para consolidar conhecimento de negócio, comportamento do usuário e fluxo operacional do produto.',
        highlights: [
            'Atendimento técnico de 1º e 2º nível, com resolução de incidentes e acompanhamento de chamados',
            'Mapeamento de problemas recorrentes e repasse estruturado para o time de tecnologia',
            'Criação de documentação interna sobre fluxos, dúvidas frequentes e procedimentos',
            'Contribuição direta na redução de ruídos entre suporte, produto e desenvolvimento',
            'Desenvolvimento do Onboarding da Área'
        ],
        tags: ['Suporte Técnico', 'Documentação', 'Comunicação', 'Análise de Incidentes']
    },
    {
        id: 5,
        date: 'nov/2019 – abr/2020',
        title: 'Trainee de Tecnologia',
        company: 'Ouze',
        description: 'Primeira experiência em um time de tecnologia, atuando como apoio operacional entre áreas financeiras, backoffice e desenvolvimento. Responsável por organizar demandas internas e priorizar chamados.',
        highlights: [
            'Coordenação e priorização dos chamados internos, atuando como ponte entre financeiro, backoffice e desenvolvimento',
            'Apoio à gestão de processos e projetos de tecnologia',
            'Mapeamento de processos internos e identificação de pontos de melhoria para otimizar tempo e reduzir retrabalhos',
            'Suporte a times ágeis em atividades do dia a dia, aprendendo na prática sobre operação, regras de negócio e fluxo tecnológico da empresa'
        ],
        tags: ['Processos', 'Operações de TI', 'Priorização', 'Metodologias Ágeis']
    }
];

// Função para limitar o texto a 80 palavras e adicionar três pontos
function limitarTexto(texto) {
    const palavras = texto.split(' ');
    const limite = 80;
    if (palavras.length > limite) {
        return palavras.slice(0, limite).join(' ') + '...';
    } else if (palavras.length > 0) {
        return texto + '...';
    }
    return texto;
}

// Recomendações do LinkedIn - carrossel
const recommendationsData = [
    {
        id: "reco-1",
        text: limitarTexto("Tive a oportunidade de conhecer e liderar o Vitor em duas oportunidades distintas. Sua capacidade de aprendizado rápido e visão estratégica são diferenciais notáveis. Sempre demonstrou grande comprometimento e habilidade para resolver problemas complexos de forma criativa."),
        name: "Luiz Filipe Noman",
        role: "Product Manager | Gerente de Projetos de Tecnologia",
        url: "https://www.linkedin.com/in/vitor-melo-franca/details/recommendations/"
    },
    {
        id: "reco-2",
        text: limitarTexto("Profissional exemplar, com quem tive o prazer de trabalhar no mesmo time na MaisTODOS. Sua proatividade e atenção aos detalhes são notáveis, assim como sua capacidade de comunicação clara e objetiva."),
        name: "Saturnino Gomes de Oliveira",
        role: "Product Designer | UX/UI | Strategy | Fintech | Payments",
        url: "https://www.linkedin.com/in/vitor-melo-franca/details/recommendations/"
    },
    {
        id: "reco-3",
        text: limitarTexto("Trabalhar com o Vitor foi uma experiência enriquecedora. Sua competência técnica e profissionalismo são notáveis, sempre trazendo soluções inovadoras para desafios complexos. Sua combinação de habilidades técnicas e interpessoais o destaca como um profissional excepcional. Sua dedicação e ética de trabalho inspiram toda a equipe."),
        name: "Alyson Fernandes da Silva Ambrósio",
        role: "Pesquisador | Research | Análise de Dados | UX Research",
        url: "https://www.linkedin.com/in/vitor-melo-franca/details/recommendations/"
    },
    {
        id: "reco-4",
        text: limitarTexto("Trabalhar com o Vitor em projetos desafiadores foi uma experiência valiosa. Sua dedicação e profissionalismo são admiráveis, assim como sua capacidade de comunicação clara e objetiva. Sua postura proativa e habilidade em resolver problemas complexos contribuíram significativamente para o sucesso de nossas iniciativas."),
        name: "Jaqueline Gonzaga",
        role: "Desenvolvedora Front-end | React | TypeScript | JavaScript",
        url: "https://www.linkedin.com/in/vitor-melo-franca/details/recommendations/"
    }
];

// Função para gerar avatar com iniciais usando a cor azul do tema
function gerarAvatar(nome) {
    // Pega as iniciais do nome (primeira letra de cada palavra, máximo 2)
    const iniciais = nome
        .split(' ')
        .map(n => n[0] || '')
        .join('')
        .toUpperCase()
        .substring(0, 2);
    
    // Cria um elemento div para o avatar
    const avatar = document.createElement('div');
    avatar.className = 'recs-avatar';
    avatar.style.backgroundColor = '#11345E'; // Azul escuro do tema
    avatar.style.color = '#FFFFFF'; // Texto branco
    avatar.style.display = 'flex';
    avatar.style.alignItems = 'center';
    avatar.style.justifyContent = 'center';
    avatar.style.borderRadius = '50%';
    avatar.style.width = '48px';
    avatar.style.height = '48px';
    avatar.style.fontWeight = '600';
    avatar.style.fontSize = '16px';
    avatar.style.boxShadow = 'none'; // Remove sombra
    avatar.style.fontFamily = 'Inter, sans-serif';
    avatar.style.border = 'none'; // Remove borda
    avatar.style.overflow = 'hidden'; // Garante que nada vaze
    avatar.textContent = iniciais;
    
    return avatar.outerHTML;
}

// Inicializa o carrossel de recomendações na seção de contato
function initRecommendationsCarousel() {
    const carousel = document.querySelector('.recs-carousel');
    const slidesContainer = document.querySelector('.recs-slides');
    const dotsContainer = document.querySelector('.recs-dots');
    const prevButton = document.querySelector('.recs-nav.prev');
    const nextButton = document.querySelector('.recs-nav.next');

    if (!carousel || !slidesContainer || !dotsContainer || !prevButton || !nextButton) {
        return;
    }

    // Limpa qualquer conteúdo anterior
    slidesContainer.innerHTML = '';
    dotsContainer.innerHTML = '';

    let currentIndex = 0;
    let isAnimating = false;
    const total = recommendationsData.length;

    // Função para obter iniciais do nome
    function getInitials(name) {
        return name.split(' ').map(n => n[0]).join('').toUpperCase().substring(0, 2);
    }

    // Cria slides e dots
    recommendationsData.forEach((rec, index) => {
        // Cria o slide
        const slide = document.createElement('div');
        slide.className = `recs-slide ${index === 0 ? 'active' : ''}`;
        slide.setAttribute('data-index', index);
        
        // Gera o avatar único para a pessoa
        const avatarUrl = gerarAvatar(rec.name);
        
        // Cria o conteúdo do slide
        slide.innerHTML = `
            <div class="recs-slide-content">
                <div class="recs-text">
                    <p>${rec.text}</p>
                </div>
                <div class="recs-footer">
                    <div class="recs-avatar">
                        ${gerarAvatar(rec.name)}
                    </div>
                    <div class="recs-author">
                        <div class="recs-name">${rec.name}</div>
                        <div class="recs-role">${rec.role}</div>
                        <a href="${rec.url}" target="_blank" class="recs-linkedin-text" aria-label="Ver recomendação completa no LinkedIn">
                            Ver completo no LinkedIn
                        </a>
                    </div>
                </div>
            </div>
        `;

        // Adiciona evento de clique no card inteiro para abrir o perfil do LinkedIn
        slide.style.cursor = 'pointer';
        slide.addEventListener('click', () => {
            window.open(rec.url, '_blank', 'noopener,noreferrer');
        });

        slidesContainer.appendChild(slide);

        // Cria os indicadores de slide (dots)
        const dot = document.createElement('button');
        dot.type = 'button';
        dot.className = 'recs-dot';
        dot.setAttribute('aria-label', `Ir para a recomendação ${index + 1} de ${total}`);
        dot.addEventListener('click', () => {
            goToSlide(index);
        });
        dotsContainer.appendChild(dot);
    });

    const slides = Array.from(slidesContainer.querySelectorAll('.recs-slide'));
    const dots = Array.from(dotsContainer.querySelectorAll('.recs-dot'));

    function goToSlide(index) {
        if (total === 0 || isAnimating) return;
        currentIndex = (index + total) % total;
        updateSlides();
    }

    function updateSlides() {
        if (isAnimating) return;
        isAnimating = true;
        
        // Primeiro, marque todos os slides como inativos e oculte-os
        slides.forEach((slide, index) => {
            const isActive = index === currentIndex;
            const isPrev = index < currentIndex;
            
            // Remove todas as classes de estado primeiro
            slide.classList.remove('active', 'prev', 'next');
            
            // Aplica as classes apropriadas
            if (isActive) {
                slide.classList.add('active');
                slide.setAttribute('aria-hidden', 'false');
                slide.setAttribute('aria-live', 'polite');
                // Força um reflow para garantir que a transição seja aplicada
                void slide.offsetWidth;
                // Adiciona a transição
                slide.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
            } else if (isPrev) {
                slide.classList.add('prev');
                slide.setAttribute('aria-hidden', 'true');
                slide.removeAttribute('aria-live');
                slide.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
            } else {
                slide.classList.add('next');
                slide.setAttribute('aria-hidden', 'true');
                slide.removeAttribute('aria-live');
                slide.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
            }
        });

        // Atualiza os dots
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentIndex);
            dot.setAttribute('aria-selected', index === currentIndex);
        });
        
        // Reseta a flag de animação após a transição
        setTimeout(() => {
            isAnimating = false;
        }, 300); // Tempo deve corresponder à duração da transição
    }

    function goNext() {
        if (isAnimating) return;
        goToSlide(currentIndex + 1);
    }

    function goPrev() {
        if (isAnimating) return;
        goToSlide(currentIndex - 1);
    }

    // Configura os botões de navegação
    prevButton.setAttribute('aria-label', 'Recomendação anterior');
    nextButton.setAttribute('aria-label', 'Próxima recomendação');
    
    prevButton.addEventListener('click', (e) => {
        e.stopPropagation();
        goPrev();
    });
    
    nextButton.addEventListener('click', (e) => {
        e.stopPropagation();
        goNext();
    });

    // Navegação por teclado no container do carrossel
    carousel.setAttribute('tabindex', '0');
    carousel.setAttribute('role', 'region');
    carousel.setAttribute('aria-label', 'Recomendações profissionais');
    
    carousel.addEventListener('keydown', (event) => {
        switch(event.key) {
            case 'ArrowRight':
                event.preventDefault();
                goNext();
                break;
            case 'ArrowLeft':
                event.preventDefault();
                goPrev();
                break;
            case 'Home':
                event.preventDefault();
                goToSlide(0);
                break;
            case 'End':
                event.preventDefault();
                goToSlide(total - 1);
                break;
        }
    });

    // Autoplay com respeito a prefers-reduced-motion
    let autoplayInterval = null;
    const prefersReducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    function startAutoplay() {
        if (prefersReducedMotion || total <= 1) return;
        if (autoplayInterval) return;
        autoplayInterval = setInterval(goNext, 10000);
    }

    function stopAutoplay() {
        if (autoplayInterval) {
            clearInterval(autoplayInterval);
            autoplayInterval = null;
        }
    }

    // Pausa o autoplay quando o mouse está sobre o carrossel
    carousel.addEventListener('mouseenter', stopAutoplay);
    carousel.addEventListener('mouseleave', startAutoplay);
    
    // Pausa o autoplay quando um elemento dentro do carrossel recebe foco
    carousel.addEventListener('focusin', stopAutoplay);
    carousel.addEventListener('focusout', startAutoplay);

    // Inicia o carrossel
    goToSlide(0);
    startAutoplay();
}

// Habilidades por Categoria - Atualizado em Nov/2024
const skillsByCategory = {
    "Product Strategy & Discovery": [
        "Discovery contínuo",
        "Roadmap & estratégia",
        "Definição e acompanhamento de OKRs",
        "Pesquisa com usuários e mercado",
        "Validação de hipóteses",
        "Modelagem de problemas (JTBD)",
        "Priorização orientada a impacto",
        "Facilitação com stakeholders"
    ],
    "Product Delivery": [
        "Escrita de requisitos claros (PRD, user stories e critérios de aceite)",
        "Gestão de backlog e refinamentos",
        "Planejamento e execução de sprints ",
        "Gestão de dependências e riscos",
        "Rollout gradual (feature flags)",
        "Go-to-Market & lançamento de funcionalidades",
        "Métricas pós-lançamento e monitoramento",
        "Criação de materiais de apoio (guias, FAQs, tutoriais)"
    ],
    "Priorização": [
        "RICE / ICE",
        "MoSCoW",
        "Impacto x Esforço",
        "WSJF (Trabalho Mais Curto com Maior Peso Primeiro)",
        "Opportunity Solution Tree",
        "Priorização por ROI",
        "Fit for Purpose | Valor Percebido"
    ],
    "Dados & IA Generativa": [
        "Análise de dados (Mixpanel, Metabase, GA4)",
        "Cohorts, funis e instrumentação de eventos",
        "A/B Testing e experimentação",
        "SQL básico aplicado a produto",
        "Estruturação de dashboards e métricas-chave",
        "Prototipação com IA (co-pilots, prompts, automações)"
    ],
    "Gerência de Projetos": [
        "Planejamento e execução de projetos",
        "Gestão de escopo, tempo e priorização",
        "Comunicação com stakeholders",
        "Coordenação entre áreas (Tech, Financeiro, Backoffice, UX, Marketing)",
        "Monitoramento de progresso e status report",
        "Gestão de riscos e impedimentos",
        "Documentação e organização de processos",
        "Foco em resultados e eficiência operacional"
    ],
    "PMO / Governança": [
        "Definição e padronização de métodos e processos",
        "Governança de squads (Jira, automações, workflows)",
        "Facilitação de FUPs orientados a ROI",
        "Gestão de portfólio e priorização executiva",
        "Operação ágil entre times",
        "Criação de templates e boas práticas (Notion, Jira, Confluence)",
        "Alinhamento estratégico entre áreas e times",
        "Métricas de eficiência e performance"
    ]
};

// Ferramentas - Organizadas por categoria
const toolsData = [
    // Ferramentas de Gestão de Projetos
    { 
        name: 'Jira', 
        icon: 'fab fa-jira',
        logo: 'images/tools/jira.logo.png' 
    },
    { 
        name: 'Confluence', 
        icon: 'fab fa-confluence',
        logo: 'images/tools/Confluence.logo.png' 
    },
    { 
        name: 'Asana', 
        icon: 'fas fa-tasks',
        logo: 'images/tools/Asana.logo.png' 
    },
    { 
        name: 'Trello', 
        icon: 'fab fa-trello',
        logo: 'images/tools/Trello.logo.png' 
    },
    { 
        name: 'ClickUp', 
        icon: 'fas fa-tasks',
        logo: 'images/tools/ClickUp.logo.png' 
    },
    { 
        name: 'Monday', 
        icon: 'fas fa-calendar-week',
        logo: 'images/tools/Monday.logo.png' 
    },
    { 
        name: 'Toggl', 
        icon: 'fas fa-stopwatch',
        logo: 'images/tools/Toggl.logo.png' 
    },
    
    // Ferramentas de Análise de Dados
    { 
        name: 'Power BI', 
        icon: 'fas fa-chart-bar',
        logo: 'images/tools/PowerBI.logo.png' 
    },
    { 
        name: 'Google Analytics', 
        icon: 'fas fa-chart-line',
        logo: 'images/tools/GoogleAnalytics.logo.png' 
    },
    { 
        name: 'Mixpanel', 
        icon: 'fas fa-chart-pie',
        logo: 'images/tools/Mixpanel.logo.png' 
    },
    { 
        name: 'Metabase', 
        icon: 'fas fa-database',
        logo: 'images/tools/Metabase.logo.png' 
    },
    { 
        name: 'SQL', 
        icon: 'fas fa-database',
        logo: 'images/tools/SQL.logo.png' 
    },
    { 
        name: 'Adjust', 
        icon: 'fas fa-mobile-alt',
        logo: 'images/tools/Adjust.logo.png' 
    },
    { 
        name: 'Hotjar', 
        icon: 'fas fa-heat-map',
        logo: 'images/tools/Hotjar.logo.png' 
    },
    
    // Ferramentas de Design & Prototipagem
    { 
        name: 'Figma', 
        icon: 'fab fa-figma',
        logo: 'images/tools/Figma.logo.png' 
    },
    { 
        name: 'FigJam', 
        icon: 'fab fa-figma',
        logo: 'images/tools/FigJam.logo.png' 
    },
    { 
        name: 'Miro', 
        icon: 'fas fa-chalkboard',
        logo: 'images/tools/Miro.logo.png' 
    },
    { 
        name: 'Maze', 
        icon: 'fas fa-maze',
        logo: 'images/tools/Maze.logo.jpeg' 
    },
    
    // Ferramentas de Documentação & Conhecimento
    { 
        name: 'Notion', 
        icon: 'fas fa-book',
        logo: 'images/tools/Notion.logo.png' 
    },
    { 
        name: 'Slite', 
        icon: 'fas fa-book',
        logo: 'images/tools/Slite.logo.png' 
    },
    
    // Ferramentas de Desenvolvimento & Versionamento
    { 
        name: 'GitHub', 
        icon: 'fab fa-github',
        logo: 'images/tools/GitHub.logo.png' 
    },
    { 
        name: 'GitLab', 
        icon: 'fab fa-gitlab',
        logo: 'images/tools/GitLab.logo.png' 
    },
    { 
        name: 'Postman', 
        icon: 'fas fa-paper-plane',
        logo: 'images/tools/Postman.logo.png' 
    },
    { 
        name: 'Firebase', 
        icon: 'fas fa-fire',
        logo: 'images/tools/Firebase.logo.png' 
    },
    
    // Ferramentas de Produtividade
    { 
        name: 'Excel', 
        icon: 'fas fa-file-excel',
        logo: 'images/tools/Excel.logo.png' 
    },
    { 
        name: 'PowerPoint', 
        icon: 'fas fa-file-powerpoint',
        logo: 'images/tools/PowerPoint.logo.png' 
    },
    { 
        name: 'Word', 
        icon: 'fas fa-file-word',
        logo: 'images/tools/Word.logo.png' 
    },
    
    // Outras Ferramentas
    { 
        name: 'Algolia', 
        icon: 'fas fa-search',
        logo: 'images/tools/Algolia.logo.png' 
    },
    { 
        name: 'HubSpot', 
        icon: 'fas fa-hubspot',
        logo: 'images/tools/HubSpot.logo.png' 
    },
    { 
        name: 'Oracle RightNow', 
        icon: 'fas fa-headset',
        logo: 'images/tools/Oracle.logo.png' 
    },
    { 
        name: 'Botmaker', 
        icon: 'fas fa-robot',
        logo: 'images/tools/Botmaker.logo.png' 
    },
    { 
        name: 'Winsurf', 
        icon: 'fas fa-wind',
        logo: 'images/tools/Winsurf.logo.png' 
    },
    { 
        name: 'Lovable', 
        icon: 'fas fa-heart',
        logo: 'images/tools/Lovable.logo.png' 
    }
];

// Formação Acadêmica
const academicData = {
    type: 'academic',
    title: 'Administração',
    institution: 'Universidade do Sul de Santa Catarina',
    status: 'Concluído • 2021',
    description: 'Formação em Administração concluída',
    logo: 'images/certifications/logo.unisul.png',
    colors: {
        primary: '#0040a8', // Azul Unisul mais escuro
        onPrimary: '#FFFFFF'
    }
};

// Cursos e Certificações
const certificationsData = [
    {
        type: 'course',
        title: 'Acelerando Projetos de Sucesso',
        issuer: 'Universidade de São Paulo (USP)',
        date: '2025',
        skills: 'Gestão de Projetos, Scrum, Kanban',
        logo: 'images/certifications/usp-logo.png',
        colors: {
            primary: '#231F20', // Preto USP
            onPrimary: '#FFFFFF'
        }
    },
    {
        type: 'course',
        title: 'Liderança e Estratégia de Negócios',
        issuer: 'TERA',
        date: '2025',
        skills: 'Gestão de Stakeholders, Liderança, Modelagem de Negócios',
        logo: 'images/certifications/tera-logo.png',
        colors: {
            primary: '#90FE81', // Verde claro TERA
            onPrimary: '#333333'
        }
    },
    {
        type: 'course',
        title: 'IA em Negócios Digitais',
        issuer: 'TERA',
        date: '2025',
        skills: 'Inteligência Artificial aplicada a Produto',
        logo: 'images/certifications/tera-logo.png',
        colors: {
            primary: '#90FE81', // Verde claro TERA
            onPrimary: '#333333'
        }
    },
    {
        type: 'course',
        title: 'Lovable Workshop',
        issuer: 'PM3',
        date: '2025',
        skills: 'Estratégia de Produto e Cultura de Impacto',
        logo: 'images/certifications/pm3.logo.PNG',
        colors: {
            primary: '#442e77', // Roxo PM3
            onPrimary: '#FFFFFF'
        }
    },
    {
        type: 'course',
        title: 'Gestão de Resultados com OKR',
        issuer: 'Alura',
        date: '2023',
        skills: 'Definição e Acompanhamento de OKRs',
        logo: 'images/certifications/alura-logo.jpg',
        colors: {
            primary: '#011230', // Azul escuro Alura
            onPrimary: '#FFFFFF'
        }
    },
    {
        type: 'course',
        title: 'Lógica de Programação: JS e HTML',
        issuer: 'Alura',
        date: '2022',
        skills: 'Pensamento lógico e fundamentos de front-end',
        logo: 'images/certifications/alura-logo.jpg',
        colors: {
            primary: '#011230', // Azul escuro Alura
            onPrimary: '#FFFFFF'
        }
    },
    {
        type: 'course',
        title: 'Quality Assurance: Testes e Gestão de Bugs',
        issuer: 'Alura',
        date: '2022',
        skills: 'QA e Garantia de Qualidade',
        logo: 'images/certifications/alura-logo.jpg',
        colors: {
            primary: '#011230', // Azul escuro Alura
            onPrimary: '#FFFFFF'
        }
    },
    {
        type: 'course',
        title: 'Assistente Administrativo',
        issuer: 'Cebrac',
        date: '2020',
        skills: 'Organização e Processos Administrativos',
        logo: 'images/certifications/logo.cebrac.png',
        colors: {
            primary: '#2B4091', // Azul Cebrac
            onPrimary: '#FFFFFF'
        }
    }
];

// Render Sobre Mim
function renderAboutMe() {
    const aboutSection = document.createElement('section');
    aboutSection.id = 'about';
    aboutSection.className = 'about-section';
    aboutSection.innerHTML = `
        <div class="container">
            <h2 class="section-title">Sobre mim</h2>
            <div class="about-content">
                <p>${aboutMe.description.replace(/\n/g, '</p><p>')}</p>
            </div>
        </div>
    `;
    
    // Inserir após a seção hero
    const heroSection = document.querySelector('.hero');
    heroSection.parentNode.insertBefore(aboutSection, heroSection.nextSibling);
}

// Render timeline
function renderTimeline() {
    const timelineContainer = document.querySelector('.timeline');
    
    // Limpa o conteúdo existente
    timelineContainer.innerHTML = '';
    
    // Verifica se está em mobile/tablet
    const isMobile = window.innerWidth <= 768;
    
    timelineData.forEach((item, index) => {
        const tagsHtml = item.tags.map(tag => `<span class="tag">${tag}</span>`).join('');
        const highlightsHtml = item.highlights ? 
            '<div class="timeline-highlights"><strong>Principais Entregas/Responsabilidades:</strong><ul>' + 
            item.highlights.map(highlight => `<li>${highlight}</li>`).join('') + 
            '</ul></div>' : '';
        
        const timelineItem = document.createElement('div');
        timelineItem.className = 'timeline-item';
        
        // HTML para mobile/tablet com dropdown
        if (isMobile) {
            timelineItem.innerHTML = `
                <button class="timeline-toggle" aria-expanded="false" aria-controls="timeline-content-${index}">
                    <div class="timeline-toggle-header">
                        <div>
                            <div class="timeline-toggle-date">${item.date}</div>
                            <h3 class="timeline-toggle-title">${item.title}</h3>
                            <div class="timeline-company">${item.company}</div>
                        </div>
                        <i class="fas fa-chevron-down timeline-toggle-icon"></i>
                    </div>
                </button>
                <div class="timeline-content" id="timeline-content-${index}">
                    <p class="timeline-description">${item.description}</p>
                    ${highlightsHtml}
                    ${tagsHtml ? `<div class="timeline-tags">${tagsHtml}</div>` : ''}
                </div>
            `;
        } else {
            // HTML para desktop (layout original)
            timelineItem.innerHTML = `
                <div class="timeline-dot"></div>
                <div class="timeline-content">
                    <div class="timeline-date">${item.date}</div>
                    <h3 class="timeline-title">${item.title}</h3>
                    <div class="timeline-company">${item.company}</div>
                    <p class="timeline-description">${item.description}</p>
                    ${highlightsHtml}
                    ${tagsHtml ? `<div class="timeline-tags">${tagsHtml}</div>` : ''}
                </div>
            `;
        }
        
        timelineContainer.appendChild(timelineItem);
    });
    
    // Inicializa os toggles em mobile/tablet
    if (isMobile) {
        initTimelineToggles();
    }
    
    // Força a renderização inicial
    setTimeout(() => {
        document.querySelectorAll('.timeline-item').forEach(item => {
            item.classList.add('visible');
        });
    }, 100);
}

// Inicializa os toggles da timeline em mobile/tablet
function initTimelineToggles() {
    const timelineToggles = document.querySelectorAll('.timeline-toggle');
    
    timelineToggles.forEach(toggle => {
        toggle.addEventListener('click', () => {
            const timelineItem = toggle.closest('.timeline-item');
            const isActive = timelineItem.classList.contains('active');
            const contentId = toggle.getAttribute('aria-controls');
            const content = document.getElementById(contentId);
            
            // Fecha todos os outros itens (accordion behavior)
            document.querySelectorAll('.timeline-item').forEach(item => {
                if (item !== timelineItem) {
                    item.classList.remove('active');
                    const otherToggle = item.querySelector('.timeline-toggle');
                    const otherContentId = otherToggle?.getAttribute('aria-controls');
                    const otherContent = otherContentId ? document.getElementById(otherContentId) : null;
                    if (otherToggle) {
                        otherToggle.setAttribute('aria-expanded', 'false');
                    }
                    if (otherContent) {
                        otherContent.style.display = 'none';
                    }
                }
            });
            
            // Toggle do item atual
            if (isActive) {
                timelineItem.classList.remove('active');
                toggle.setAttribute('aria-expanded', 'false');
                if (content) {
                    content.style.display = 'none';
                }
            } else {
                timelineItem.classList.add('active');
                toggle.setAttribute('aria-expanded', 'true');
                if (content) {
                    content.style.display = 'block';
                }
            }
        });
    });
}

// Render skills by category - Novo formato com quadrados grandes
function renderSkills() {
    const skillsSection = document.querySelector('.skills-section .container');
    
    // Limpa o conteúdo existente
    skillsSection.innerHTML = `
        <h2 class="section-title">Habilidades & Competências</h2>
        <div class="skills-categories-grid"></div>
    `;
    
    const gridContainer = skillsSection.querySelector('.skills-categories-grid');
    
    // Para cada categoria, cria um card grande
    Object.entries(skillsByCategory).forEach(([category, skills]) => {
        const categoryCard = document.createElement('div');
        categoryCard.className = 'skill-category-card';
        
        // Cria a lista de habilidades
        const skillsList = skills.map(skill => 
            `<li class="skill-item">${skill}</li>`
        ).join('');
        
        // Adiciona o título e a lista ao card
        categoryCard.innerHTML = `
            <h3 class="category-title">${category}</h3>
            <ul class="skills-list">
                ${skillsList}
            </ul>
        `;
        
        gridContainer.appendChild(categoryCard);
    });
}

// Render tools - Versão simplificada
function renderTools() {
    const toolsContainer = document.querySelector('.tools-grid');
    
    toolsData.forEach(tool => {
        const toolElement = document.createElement('div');
        toolElement.className = 'tool-card';
        toolElement.title = tool.name; // Tooltip com o nome da ferramenta
        
        // HTML simplificado - apenas logo/ícone e nome
        toolElement.innerHTML = `
            <div class="tool-logo-container">
                <img src="${tool.logo}" alt="${tool.name}" class="tool-logo" onerror="this.onerror=null; this.parentElement.innerHTML='<i class=\'${tool.icon} tool-icon\'></i>';" />
            </div>
            <div class="tool-name">${tool.name}</div>
        `;
        
        toolsContainer.appendChild(toolElement);
    });
}

// Render certifications
function renderCertifications() {
    const certsSection = document.querySelector('.certifications-section .container');
    
    // Clear existing content
    certsSection.innerHTML = `
        <h2 class="section-title">Formação & Certificações</h2>
        
        <!-- Formação Acadêmica Section -->
        <div class="academic-formation">
            <h3 class="subsection-title">Formação Acadêmica</h3>
            <div class="academic-grid">
                ${renderAcademicCard(academicData)}
            </div>
        </div>
        
        <!-- Cursos e Certificações Section -->
        <div class="courses-section">
            <h3 class="subsection-title">Cursos e Certificações</h3>
            <div class="certifications-grid">
                ${certificationsData.map(cert => renderCertificationCard(cert)).join('')}
            </div>
        </div>
    `;
}

// Render academic card
function renderAcademicCard(academic) {
    // Usa o caminho da logo definido no objeto academic
    const logoPath = academic.logo;
    const year = academic.status.split('•')[1].trim();
    
    return `
        <div class="certification-card" style="--primary-color: ${academic.colors.primary}; --on-primary: ${academic.colors.onPrimary};" data-issuer="${academic.institution}">
            <div class="certification-header">
                <div class="certification-logo">
                    <img 
                        src="${logoPath}" 
                        width="48" 
                        height="48" 
                        alt="${academic.institution}"
                        loading="lazy"
                        onerror="this.onerror=null; this.src='images/certifications/default-logo.png'"
                    >
                </div>
                <div class="certification-issuer">${academic.institution} (UNISUL)</div>
            </div>
            <div class="certification-content">
                <h3 class="certification-title">
                    <span class="title-text">${academic.title}</span>
                </h3>
                ${academic.description ? `<div class="certification-skills">${academic.description}</div>` : ''}
            </div>
            <div class="certification-footer">
                <div class="certification-tags">
                    <span class="certification-year">${year}</span>
                    <span class="certification-tag">FORMAÇÃO</span>
                </div>
            </div>
        </div>
    `;
}

// Render certification card
function renderCertificationCard(cert) {
    // Usa o caminho do logo definido no objeto ou tenta gerar um caminho padrão
    let logoPath = cert.logo || '';
    
    // Se não houver caminho definido, tenta gerar um baseado no nome do emissor
    if (!logoPath) {
        const issuerName = cert.issuer.toLowerCase()
            .replace(/[^a-z0-9]/g, '-')  // Substitui caracteres especiais por hífens
            .replace(/-+/g, '-')         // Remove múltiplos hífens consecutivos
            .replace(/-$/, '');          // Remove hífen do final
        logoPath = `images/certifications/${issuerName}.png`;
    }
    
    // Remove emojis do título e habilidades
    const cleanTitle = cert.title.replace(/[\u{1F600}-\u{1F64F}\u{1F300}-\u{1F5FF}\u{1F680}-\u{1F6FF}\u{1F1E0}-\u{1F1FF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}\u{1F900}-\u{1F9FF}]/gu, '').trim();
    const cleanSkills = cert.skills.replace(/[\u{1F600}-\u{1F64F}\u{1F300}-\u{1F5FF}\u{1F680}-\u{1F6FF}\u{1F1E0}-\u{1F1FF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}\u{1F900}-\u{1F9FF}]/gu, '').trim();
    
    return `
        <div class="certification-card" style="--primary-color: ${cert.colors.primary}; --on-primary: ${cert.colors.onPrimary};" data-issuer="${cert.issuer}">
            <div class="certification-header">
                <div class="certification-logo">
                    <img 
                        src="${logoPath}" 
                        width="48" 
                        height="48" 
                        alt="${cert.issuer}"
                        loading="lazy"
                        onerror="this.onerror=null; this.src='images/certifications/default-logo.png'"
                    >
                </div>
                <div class="certification-issuer">${cert.issuer}</div>
            </div>
            <div class="certification-content">
                <h3 class="certification-title">
                    <span class="title-text">${cleanTitle}</span>
                </h3>
                ${cleanSkills ? `<div class="certification-skills">${cleanSkills}</div>` : ''}
            </div>
            <div class="certification-footer">
                <div class="certification-tags">
                    <span class="certification-year">${cert.date}</span>
                    <span class="certification-type">${cert.type === 'course' ? 'Curso' : 'Certificado'}</span>
                </div>
            </div>
        </div>
    `;
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Animate timeline items on scroll
function animateOnScroll() {
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    timelineItems.forEach(item => {
        const itemTop = item.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (itemTop < windowHeight - 100) {
            item.classList.add('visible');
            
            // Adiciona um atraso progressivo para cada item
            const index = Array.from(timelineItems).indexOf(item);
            item.style.transitionDelay = `${index * 0.1}s`;
        }
    });
    
    // Animate skill bars
    const skillBars = document.querySelectorAll('.skill-progress');
    const skillObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.width = entry.target.style.width;
            }
        });
    }, {
        threshold: 0.5
    });
    
    skillBars.forEach(bar => {
        skillObserver.observe(bar);
    });
}

// Initialize the page
function init() {
    renderAboutMe();
    renderTimeline();
    renderSkills();
    renderTools();
    renderCertifications();
    initRecommendationsCarousel();

    // Initialize animations
    animateOnScroll();
    
    // Add animation class to hero section on load
    document.querySelector('.hero-content').classList.add('animate-in');
    
    // Re-render timeline quando a janela é redimensionada (para alternar entre mobile/desktop)
    let resizeTimer;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
            const currentIsMobile = window.innerWidth <= 768;
            const timelineItems = document.querySelectorAll('.timeline-item');
            const hasToggle = timelineItems.length > 0 && timelineItems[0].querySelector('.timeline-toggle');
            
            // Só re-renderiza se mudou de mobile para desktop ou vice-versa
            if ((currentIsMobile && !hasToggle) || (!currentIsMobile && hasToggle)) {
                renderTimeline();
            }
        }, 250);
    });
}

// Run when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', init);
