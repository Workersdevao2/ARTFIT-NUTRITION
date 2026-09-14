/* ARTFIT NUTRITION – Core JS */

(function () {
  'use strict';

  const translations = {
    pt: {
      nav_home: 'Início',
      nav_about: 'Sobre',
      nav_products: 'Produtos',
      nav_quality: 'Qualidade',
      nav_gallery: 'Galeria',
      nav_contact: 'Contacto',
      hero_eyebrow: 'PROMOÇÃO LIMITADA',
      hero_title: '100% Pure<br>Creatine',
      hero_sub: 'Monohidrato Micronizado · 200g · 40 doses',
      hero_cta: 'Ver Produto',
      hero_buy: 'Comprar Agora',
      about_eyebrow: 'A MARCA',
      about_title: 'Qualidade que você pode verificar',
      about_p1: 'A ARTFIT NUTRITION é especializada na distribuição de vitaminas e suplementos de alto desempenho em Luanda, Angola.',
      about_p2: 'A nossa creatina monohidratada é 100% pura, micronizada, sem aditivos ou enchimentos. Fabricada sob condições controladas e certificada Halal.',
      about_p3: 'Aceite internacionalmente, com padrões de qualidade dos EUA e Europa. Ideal para atletas que buscam força, potência e recuperação.',
      about_li1: '100% Creatina Monohidratada Pura',
      about_li2: 'Micronizada para absorção rápida',
      about_li3: 'Testada para substâncias proibidas',
      about_li4: 'Certificação Halal Internacional',
      about_li5: 'Rotulagem clara e transparente',
      products_eyebrow: 'PRODUTOS',
      products_title: 'Creatina Monohidrato',
      products_desc: 'Novos tamanhos e quantidades. Escolha o ideal para o seu treino.',
      badge_promo: 'PROMOÇÃO',
      badge_soon: 'EM BREVE',
      prod_200_desc: '100% Pure Creatine Monohydrate · Unflavored',
      prod_300_desc: '100% Pure Creatine Monohydrate · Unflavored',
      prod_500_desc: '100% Pure Creatine Monohydrate · Unflavored',
      prod_hcl_desc: 'Rapid Transit · No Loading · Com BioPerine®',
      soon_price: 'Em breve',
      buy_btn: 'Comprar',
      view_btn: 'Ver detalhes',
      notify_btn: 'Notificar-me',
      buy_now: 'Comprar via WhatsApp',
      video_eyebrow: 'EM ACÇÃO',
      video_title: 'Treino & Resultados',
      video_cap1: 'Treino intenso com ARTFIT',
      video_cap2: 'Depoimento real de atleta',
      quality_eyebrow: 'CERTIFICAÇÕES',
      quality_title: 'Premium Quality Brand',
      q1_title: 'Certificado Halal',
      q1_desc: 'Certificado pelo Halal International Trust. Conformidade com leis alimentares internacionais.',
      q2_title: 'Qualidade Verificável',
      q2_desc: 'Testado em laboratório. Fabricado sob condições controladas e certificadas.',
      q3_title: 'Transparência Total',
      q3_desc: 'Apenas um ingrediente. Rotulagem clara e completa. Sem aditivos.',
      q4_title: 'Base Científica',
      q4_desc: 'Aumento comprovado no tamanho das fibras musculares após suplementação.',
      gallery_eyebrow: 'GALERIA',
      gallery_title: 'Resultados & Estilo de Vida',
      ig_cta: 'Ver no Instagram',
      contact_eyebrow: 'CONTACTO',
      contact_title: 'Fale Connosco',
      info_loc: 'Localização',
      info_phone: 'WhatsApp',
      info_social: 'Redes Sociais',
      info_hours: 'Horário',
      hours: 'Seg – Sáb · 09:00 – 18:00',
      form_name: 'Nome',
      form_phone: 'Telefone',
      form_msg: 'Mensagem',
      form_submit: 'Enviar via WhatsApp',
      footer_tag: 'Distribuição de vitaminas e suplementos premium',
      footer_rights: 'Todos os direitos reservados.',
      back: '← Voltar aos produtos',
      p200_desc: '100% Pure Creatine Monohydrate micronizada. Apenas um ingrediente, sem aditivos ou enchimentos. Absorção rápida e dissolução fácil.',
      p300_desc: 'Tamanho intermédio ideal para quem treina regularmente. 100% Pure Creatine Monohydrate micronizada, sem aditivos.',
      p500_desc: 'O tamanho mais económico para atletas consistentes. 100% Pure Creatine Monohydrate micronizada, suficiente para 3+ meses de uso diário.',
      phcl_desc: 'A próxima geração de creatina. Creatine Hydrochloride altamente solúvel e absorvível, sem necessidade de fase de carga. Enriquecida com BioPerine® para maximizar a biodisponibilidade.',
      meta_weight: 'Peso líquido',
      meta_serv: 'Porções',
      meta_dose: 'Dose',
      meta_flavor: 'Sabor',
      meta_origin: 'Origem',
      meta_form: 'Formato',
      meta_type: 'Tipo',
      meta_loading: 'Carga',
      no_loading: 'Não necessária',
      benefits_title: 'Benefícios',
      b1: 'Aumenta força e potência',
      b2: 'Melhora recuperação muscular',
      b3: 'Suporta crescimento muscular',
      b4: 'Certificada Halal & testada',
      bh1: 'Absorção superior à monohidratada',
      bh2: 'Sem inchaço / retenção de água',
      bh3: 'Dose mais baixa, mesmo efeito',
      bh4: 'Com BioPerine® para melhor absorção',
      related_eyebrow: 'OUTROS TAMANHOS',
      related_title: 'Escolha o ideal'
    },
    en: {
      nav_home: 'Home',
      nav_about: 'About',
      nav_products: 'Products',
      nav_quality: 'Quality',
      nav_gallery: 'Gallery',
      nav_contact: 'Contact',
      hero_eyebrow: 'LIMITED OFFER',
      hero_title: '100% Pure<br>Creatine',
      hero_sub: 'Micronized Monohydrate · 200g · 40 servings',
      hero_cta: 'View Product',
      hero_buy: 'Buy Now',
      about_eyebrow: 'THE BRAND',
      about_title: 'Quality you can verify',
      about_p1: 'ARTFIT NUTRITION specialises in the distribution of high-performance vitamins and supplements in Luanda, Angola.',
      about_p2: 'Our creatine monohydrate is 100% pure, micronized, with no additives or fillers. Manufactured under controlled conditions and Halal certified.',
      about_p3: 'Internationally accepted, meeting US and European quality standards. Ideal for athletes seeking strength, power and recovery.',
      about_li1: '100% Pure Creatine Monohydrate',
      about_li2: 'Micronized for faster absorption',
      about_li3: 'Tested for banned substances',
      about_li4: 'International Halal Certification',
      about_li5: 'Clear and transparent labelling',
      products_eyebrow: 'PRODUCTS',
      products_title: 'Creatine Monohydrate',
      products_desc: 'New sizes and quantities. Choose the ideal one for your training.',
      badge_promo: 'PROMO',
      badge_soon: 'COMING SOON',
      prod_200_desc: '100% Pure Creatine Monohydrate · Unflavored',
      prod_300_desc: '100% Pure Creatine Monohydrate · Unflavored',
      prod_500_desc: '100% Pure Creatine Monohydrate · Unflavored',
      prod_hcl_desc: 'Rapid Transit · No Loading · With BioPerine®',
      soon_price: 'Coming soon',
      buy_btn: 'Buy',
      view_btn: 'View details',
      notify_btn: 'Notify me',
      buy_now: 'Buy via WhatsApp',
      video_eyebrow: 'IN ACTION',
      video_title: 'Training & Results',
      video_cap1: 'Intense training with ARTFIT',
      video_cap2: 'Real athlete testimonial',
      quality_eyebrow: 'CERTIFICATIONS',
      quality_title: 'Premium Quality Brand',
      q1_title: 'Halal Certified',
      q1_desc: 'Certified by Halal International Trust. Compliant with international food laws.',
      q2_title: 'Verifiable Quality',
      q2_desc: 'Lab tested. Manufactured under controlled and certified conditions.',
      q3_title: 'Full Transparency',
      q3_desc: 'Only one ingredient. Clear and complete labelling. No additives.',
      q4_title: 'Science-Based',
      q4_desc: 'Proven increase in muscle fibre size following supplementation.',
      gallery_eyebrow: 'GALLERY',
      gallery_title: 'Results & Lifestyle',
      ig_cta: 'View on Instagram',
      contact_eyebrow: 'CONTACT',
      contact_title: 'Get in Touch',
      info_loc: 'Location',
      info_phone: 'WhatsApp',
      info_social: 'Social',
      info_hours: 'Hours',
      hours: 'Mon – Sat · 09:00 – 18:00',
      form_name: 'Name',
      form_phone: 'Phone',
      form_msg: 'Message',
      form_submit: 'Send via WhatsApp',
      footer_tag: 'Premium vitamins and supplements distribution',
      footer_rights: 'All rights reserved.',
      back: '← Back to products',
      p200_desc: '100% Pure micronized Creatine Monohydrate. Only one ingredient, no additives or fillers. Fast absorption and easy dissolution.',
      p300_desc: 'Ideal mid-size for regular trainees. 100% Pure micronized Creatine Monohydrate, no additives.',
      p500_desc: 'Most economical size for consistent athletes. 100% Pure micronized Creatine Monohydrate, enough for 3+ months of daily use.',
      phcl_desc: 'Next-generation creatine. Highly soluble and absorbable Creatine Hydrochloride – no loading phase required. Enhanced with BioPerine® for maximum bioavailability.',
      meta_weight: 'Net weight',
      meta_serv: 'Servings',
      meta_dose: 'Serving size',
      meta_flavor: 'Flavour',
      meta_origin: 'Origin',
      meta_form: 'Format',
      meta_type: 'Type',
      meta_loading: 'Loading',
      no_loading: 'Not required',
      benefits_title: 'Benefits',
      b1: 'Increases strength and power',
      b2: 'Improves muscle recovery',
      b3: 'Supports muscle growth',
      b4: 'Halal certified & tested',
      bh1: 'Superior absorption vs monohydrate',
      bh2: 'No bloating / water retention',
      bh3: 'Lower dose, same effect',
      bh4: 'With BioPerine® for better absorption',
      related_eyebrow: 'OTHER SIZES',
      related_title: 'Choose the ideal one'
    }
  };

  let currentLang = localStorage.getItem('artfit-lang') || 'pt';

  function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('artfit-lang', lang);
    document.documentElement.lang = lang;
    const dict = translations[lang];

    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (dict[key] !== undefined) {
        el.innerHTML = dict[key];
      }
    });

    const toggle = document.getElementById('langToggle');
    if (toggle) {
      toggle.innerHTML = lang === 'pt'
        ? '<span class="lang-active">PT</span> / <span>EN</span>'
        : '<span>PT</span> / <span class="lang-active">EN</span>';
    }

    const nameInput = document.getElementById('name');
    const phoneInput = document.getElementById('phone');
    const msgInput = document.getElementById('message');
    if (nameInput) nameInput.placeholder = lang === 'pt' ? 'O seu nome' : 'Your name';
    if (phoneInput) phoneInput.placeholder = '948 XXX XXX';
    if (msgInput) msgInput.placeholder = lang === 'pt'
      ? 'Olá, quero saber mais sobre a creatina...'
      : 'Hi, I would like to know more about the creatine...';
  }

  const hamburger = document.getElementById('hamburger');
  const nav = document.getElementById('nav');

  if (hamburger && nav) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('open');
      nav.classList.toggle('open');
    });
    nav.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('open');
        nav.classList.remove('open');
      });
    });
  }

  const langToggle = document.getElementById('langToggle');
  if (langToggle) {
    langToggle.addEventListener('click', () => {
      setLanguage(currentLang === 'pt' ? 'en' : 'pt');
      // Notify chat widget (if present) to refresh labels
      document.dispatchEvent(new CustomEvent('artfit-lang-change'));
    });
  }

  const form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      const name = document.getElementById('name').value.trim();
      const phone = document.getElementById('phone').value.trim();
      const message = document.getElementById('message').value.trim();

      let text = currentLang === 'pt'
        ? `Olá, o meu nome é ${name}.`
        : `Hello, my name is ${name}.`;

      if (phone) {
        text += currentLang === 'pt'
          ? ` O meu contacto é ${phone}.`
          : ` My contact is ${phone}.`;
      }
      text += `\n\n${message}`;

      window.open(`https://wa.me/244948387343?text=${encodeURIComponent(text)}`, '_blank');
    });
  }

  // Active nav highlight only on index
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');
  if (sections.length > 2) {
    function onScroll() {
      const scrollY = window.scrollY + 100;
      sections.forEach(sec => {
        const top = sec.offsetTop;
        const height = sec.offsetHeight;
        const id = sec.getAttribute('id');
        if (scrollY >= top && scrollY < top + height) {
          navLinks.forEach(l => l.classList.remove('active'));
          const active = document.querySelector(`.nav-link[href*="#${id}"]`);
          if (active) active.classList.add('active');
        }
      });
    }
    window.addEventListener('scroll', onScroll, { passive: true });
  }


  // Hero video rotator – Safari-safe muted autoplay
  (function initHeroVideos() {
    const videos = Array.from(document.querySelectorAll('.hero-video'));
    if (!videos.length) return;

    let current = 0;
    let rotating = false;
    let unlocked = false;

    // Force muted + inline attributes (Safari is strict)
    videos.forEach(v => {
      v.muted = true;
      v.defaultMuted = true;
      v.setAttribute('muted', '');
      v.setAttribute('playsinline', '');
      v.setAttribute('webkit-playsinline', '');
      v.playsInline = true;
      v.volume = 0;
    });

    function safePlay(video) {
      video.muted = true;
      video.volume = 0;
      const p = video.play();
      if (p && typeof p.then === 'function') {
        return p.catch(function () {
          // Autoplay blocked – wait for a user gesture
          return false;
        });
      }
      return Promise.resolve(true);
    }

    function show(index) {
      videos.forEach((v, i) => {
        if (i === index) {
          v.classList.add('active');
        } else {
          v.classList.remove('active');
          if (!v.paused) v.pause();
        }
      });
    }

    function playAt(index) {
      if (rotating) return;
      rotating = true;
      current = index;
      const video = videos[current];
      show(current);
      video.currentTime = 0;
      safePlay(video).then(function (ok) {
        rotating = false;
        if (ok === false && !unlocked) {
          // Will retry on first interaction
        }
      });
    }

    function playNext() {
      playAt((current + 1) % videos.length);
    }

    videos.forEach((v, i) => {
      v.addEventListener('ended', function () {
        if (i === current) playNext();
      });
      // iOS sometimes doesn't fire 'ended' reliably on muted loops – watch timeupdate near end
      v.addEventListener('timeupdate', function () {
        if (i !== current || !v.duration || isNaN(v.duration)) return;
        if (v.duration - v.currentTime < 0.35 && !rotating) {
          playNext();
        }
      });
    });

    // Unlock / retry after any user gesture (required by Safari when autoplay was blocked)
    function unlockAndPlay() {
      if (unlocked) return;
      unlocked = true;
      videos.forEach(v => { v.muted = true; v.volume = 0; });
      playAt(current);
      document.removeEventListener('touchstart', unlockAndPlay);
      document.removeEventListener('click', unlockAndPlay);
      document.removeEventListener('scroll', unlockAndPlay);
    }
    document.addEventListener('touchstart', unlockAndPlay, { once: true, passive: true });
    document.addEventListener('click', unlockAndPlay, { once: true });
    document.addEventListener('scroll', unlockAndPlay, { once: true, passive: true });

    // Initial attempt
    playAt(0);

    // Fallback: if still paused after a short delay, try again (Safari quirk)
    setTimeout(function () {
      const active = videos[current];
      if (active && active.paused) {
        safePlay(active);
      }
    }, 400);
    setTimeout(function () {
      const active = videos[current];
      if (active && active.paused) {
        safePlay(active);
      }
    }, 1200);

    // Safety interval if ended events never fire
    setInterval(function () {
      const active = videos[current];
      if (!active) return;
      if (active.ended || (active.paused && unlocked)) {
        playNext();
      }
    }, 3000);
  })();


  // ========== ARTFIT AI Assistant (smarter client-side knowledge) ==========
  (function initArtfitChat() {
    // Product facts (single source of truth)
    const FACTS = {
      phone: '948 387 343',
      wa: 'https://wa.me/244948387343',
      location: 'Combatentes – Luanda, Angola',
      hours: { pt: 'Seg – Sáb · 09:00 – 18:00', en: 'Mon – Sat · 09:00 – 18:00' },
      ig: 'https://www.instagram.com/p/DWgnCA7jNE0/',
      fb: 'https://www.facebook.com/profile.php?id=61579702071397',
      products: [
        { id: '200', g: 200, doses: 40, price: 12500, promo: true },
        { id: '300', g: 300, doses: 60, price: 17500, promo: false },
        { id: '500', g: 500, doses: 100, price: 27500, promo: false }
      ],
      doseG: 5
    };

    function fmtKZ(n) {
      return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.') + ' KZ';
    }

    function priceList(lang) {
      return FACTS.products.map(p => {
        const tag = p.promo ? (lang === 'pt' ? ' (promoção)' : ' (promo)') : '';
        return '• ' + p.g + 'g ≈ ' + p.doses + (lang === 'pt' ? ' doses — ' : ' servings — ') + fmtKZ(p.price) + tag;
      }).join('\n');
    }

    function bestValue(lang) {
      // price per dose
      let best = null;
      FACTS.products.forEach(p => {
        const per = p.price / p.doses;
        if (!best || per < best.per) best = { p, per };
      });
      if (lang === 'pt') {
        return 'O melhor custo por dose é o ' + best.p.g + 'g (~' + Math.round(best.per) + ' KZ/dose). O 200g está em promoção se quiser experimentar primeiro.';
      }
      return 'Best value per serving is the ' + best.p.g + 'g (~' + Math.round(best.per) + ' KZ/serving). The 200g is on promo if you want to try first.';
    }

    // Topics: id, weight, keywords (normalized later), answers pt/en
    const TOPICS = [
      {
        id: 'price',
        weight: 10,
        keys: ['preco', 'precos', 'preço', 'preços', 'custo', 'quanto custa', 'valor', 'kz', 'promo', 'promocao', 'promoção', 'barato', 'caro', 'price', 'prices', 'cost', 'how much', 'expensive', 'cheap'],
        pt: () => 'Preços actuais (sujeitos a actualização):\n' + priceList('pt') + '\n• Creatina HCL — em breve\n\n' + bestValue('pt') + '\n\nPara encomendar: WhatsApp ' + FACTS.phone + '.',
        en: () => 'Current prices (may update):\n' + priceList('en') + '\n• Creatine HCL — coming soon\n\n' + bestValue('en') + '\n\nTo order: WhatsApp ' + FACTS.phone + '.'
      },
      {
        id: 'what',
        weight: 9,
        keys: ['o que e', 'o que é', 'que e creatina', 'what is', 'creatina monohidrato', 'monohidrato', 'monohydrate', 'oque e', 'definir', 'about creatine'],
        pt: () => 'A Creatina ARTFIT é monohidrato de creatina micronizado — a forma mais estudada cientificamente.\n\nAjuda a:\n• Aumentar força e potência\n• Melhorar recuperação entre séries\n• Suportar treinos de alta intensidade\n\nÉ 100% pure, com verificação de qualidade e certificação Halal.',
        en: () => 'ARTFIT Creatine is micronized creatine monohydrate — the most researched form.\n\nIt helps:\n• Increase strength and power\n• Improve recovery between sets\n• Support high-intensity training\n\n100% pure, quality-verified and Halal certified.'
      },
      {
        id: 'dose',
        weight: 10,
        keys: ['como tomar', 'dosagem', 'dose', 'tomar', 'usar', 'uso', 'scoop', 'colher', 'por dia', 'quantas vezes', 'how to take', 'how much to take', 'serving', 'dosage', 'daily'],
        pt: () => 'Dosagem recomendada: cerca de ' + FACTS.doseG + 'g por dia (1 scoop).\n\n• Dissolva em água ou sumo\n• Pode tomar antes ou depois do treino, ou em qualquer altura do dia\n• Não é obrigatório fazer “fase de carga”\n• Beba água ao longo do dia\n\nSe tiver condições médicas, fale com um profissional de saúde.',
        en: () => 'Recommended dose: about ' + FACTS.doseG + 'g per day (1 scoop).\n\n• Mix in water or juice\n• Before/after training or any time of day\n• Loading phase is optional (not required)\n• Drink water through the day\n\nIf you have medical conditions, check with a health professional.'
      },
      {
        id: 'loading',
        weight: 11,
        keys: ['carga', 'loading', 'fase de carga', 'load phase', '20g', 'carregamento'],
        pt: () => 'Fase de carga (opcional): alguns usam ~20g/dia (divididos em 4×5g) durante 5–7 dias, depois passam a ' + FACTS.doseG + 'g/dia.\n\nNão é obrigatória — tomar só ' + FACTS.doseG + 'g/dia também satura os músculos, só demora um pouco mais (cerca de 3–4 semanas).',
        en: () => 'Loading phase (optional): some use ~20g/day (split into 4×5g) for 5–7 days, then ' + FACTS.doseG + 'g/day.\n\nNot required — ' + FACTS.doseG + 'g/day alone also saturates muscles; it just takes a bit longer (~3–4 weeks).'
      },
      {
        id: 'sizes',
        weight: 9,
        keys: ['tamanho', 'tamanhos', '200', '300', '500', 'gramas', 'embalagem', 'doses', 'size', 'sizes', 'pack', 'serving', 'which size', 'qual tamanho'],
        pt: () => 'Tamanhos disponíveis (monohidrato):\n' + priceList('pt') + '\n\n' + bestValue('pt') + '\n\nHCL chega em breve.',
        en: () => 'Available sizes (monohydrate):\n' + priceList('en') + '\n\n' + bestValue('en') + '\n\nHCL coming soon.'
      },
      {
        id: 'hcl',
        weight: 11,
        keys: ['hcl', 'hidrocloreto', 'hydrochloride', 'em breve', 'novidade', 'coming soon', 'diferenca hcl', 'diferença hcl'],
        pt: () => 'Creatina HCL ARTFIT — em breve.\n\nDiferença face ao monohidrato:\n• Melhor solubilidade em água\n• Doses tipicamente menores\n• Menos queixas de desconforto digestivo em algumas pessoas\n\nO monohidrato continua a ser o mais estudado e com melhor relação qualidade/preço. Peça para ser avisado no WhatsApp ' + FACTS.phone + '.',
        en: () => 'ARTFIT Creatine HCL — coming soon.\n\nVs monohydrate:\n• Better water solubility\n• Typically lower doses\n• Fewer stomach comfort complaints for some people\n\nMonohydrate remains the most studied and best value. Ask to be notified on WhatsApp ' + FACTS.phone + '.'
      },
      {
        id: 'safety',
        weight: 10,
        keys: ['segura', 'seguranca', 'segurança', 'efeito', 'efeitos', 'risco', 'rim', 'rins', 'figado', 'fígado', 'side effect', 'safe', 'safety', 'kidney', 'liver', 'dangerous', 'perigosa'],
        pt: () => 'A creatina monohidrato é um dos suplementos mais estudados do mundo e é considerada segura para adultos saudáveis nas doses recomendadas (~' + FACTS.doseG + 'g/dia).\n\n• Não substitui alimentação equilibrada nem treino\n• Mantenha boa hidratação\n• Se tiver problemas renais, hepáticos ou outras condições, consulte o médico antes\n• Não é esteróide nem hormona',
        en: () => 'Creatine monohydrate is one of the most studied supplements and is considered safe for healthy adults at ~' + FACTS.doseG + 'g/day.\n\n• Does not replace a balanced diet or training\n• Stay well hydrated\n• If you have kidney, liver or other conditions, ask your doctor first\n• It is not a steroid or hormone'
      },
      {
        id: 'benefits',
        weight: 8,
        keys: ['beneficio', 'benefício', 'beneficios', 'benefícios', 'vantagens', 'para que serve', 'resultados', 'benefit', 'benefits', 'results', 'why use', 'serve para'],
        pt: () => 'Principais benefícios da creatina ARTFIT:\n• Mais força e potência no treino\n• Melhor recuperação entre séries\n• Suporte a treinos de alta intensidade\n• Aumento do volume muscular (água dentro do músculo)\n\nResultados notam-se sobretudo com treino consistente — tipicamente em 2–4 semanas de uso diário.',
        en: () => 'Main benefits of ARTFIT creatine:\n• More strength and power\n• Better recovery between sets\n• Support for high-intensity training\n• Increased muscle volume (water inside the muscle)\n\nResults show best with consistent training — often within 2–4 weeks of daily use.'
      },
      {
        id: 'quality',
        weight: 9,
        keys: ['qualidade', 'puro', 'pure', 'certificado', 'halal', 'lab', 'teste', 'micronizado', 'micronized', 'quality', 'certif', 'genuine', 'original'],
        pt: () => 'Qualidade ARTFIT:\n• Monohidrato micronizado 100% pure\n• Verificação de qualidade\n• Certificação Halal\n\nPode ver rótulos, tabela nutricional e certificados na secção Qualidade / Galeria do site.',
        en: () => 'ARTFIT quality:\n• 100% pure micronized monohydrate\n• Quality verification\n• Halal certification\n\nSee labels, nutrition panel and certificates in the Quality / Gallery section.'
      },
      {
        id: 'location',
        weight: 9,
        keys: ['onde', 'loja', 'local', 'luanda', 'combatentes', 'morada', 'endereco', 'endereço', 'where', 'location', 'address', 'store', 'shop'],
        pt: () => 'Localização: ' + FACTS.location + '\nHorário: ' + FACTS.hours.pt + '\nWhatsApp: ' + FACTS.phone,
        en: () => 'Location: ' + FACTS.location + '\nHours: ' + FACTS.hours.en + '\nWhatsApp: ' + FACTS.phone
      },
      {
        id: 'buy',
        weight: 10,
        keys: ['comprar', 'encomendar', 'pedido', 'whatsapp', 'contactar', 'contacto', 'falar', 'buy', 'order', 'purchase', 'contact', 'how to buy'],
        pt: () => 'Para comprar ou tirar dúvidas:\n• WhatsApp ' + FACTS.phone + '\n• Use o botão verde no site (mensagem já vem preenchida)\n\nEntregas e pagamento combinam-se directamente no WhatsApp.',
        en: () => 'To buy or ask questions:\n• WhatsApp ' + FACTS.phone + '\n• Use the green button on the site (pre-filled message)\n\nDelivery and payment are arranged directly on WhatsApp.'
      },
      {
        id: 'delivery',
        weight: 10,
        keys: ['entrega', 'entregas', 'envio', 'delivery', 'shipping', 'levam', 'transport'],
        pt: () => 'Entregas: combinamos no WhatsApp conforme a sua zona em Luanda / Angola.\nEnvie a sua localização ou bairro para ' + FACTS.phone + ' e indicamos disponibilidade e tempo estimado.',
        en: () => 'Delivery: arranged on WhatsApp based on your area in Luanda / Angola.\nSend your location or neighbourhood to ' + FACTS.phone + ' and we will confirm availability and timing.'
      },
      {
        id: 'social',
        weight: 7,
        keys: ['instagram', 'facebook', 'rede', 'redes', 'social', 'ig', 'fb'],
        pt: () => 'Redes ARTFIT:\n• Instagram — link no site\n• Facebook — facebook.com/profile.php?id=61579702071397\n\nWhatsApp directo: ' + FACTS.phone,
        en: () => 'ARTFIT social:\n• Instagram — link on the site\n• Facebook — facebook.com/profile.php?id=61579702071397\n\nWhatsApp: ' + FACTS.phone
      },
      {
        id: 'water',
        weight: 9,
        keys: ['agua', 'água', 'inchaco', 'inchaço', 'inchar', 'peso', 'retenção', 'retencao', 'bloat', 'bloating', 'water retention', 'gain weight'],
        pt: () => 'A creatina pode aumentar ligeiramente o peso por retenção de água dentro do músculo (não é gordura).\n\n• Beba água ao longo do dia\n• Inchaço “por fora” excessivo é pouco comum com monohidrato de qualidade em doses normais\n• O peso extra costuma ser desempenho, não gordura',
        en: () => 'Creatine can slightly raise body weight via water held inside the muscle (not fat).\n\n• Drink water through the day\n• Excess outer bloating is uncommon with quality mono at normal doses\n• Extra scale weight is usually performance-related, not fat'
      },
      {
        id: 'women',
        weight: 9,
        keys: ['mulher', 'mulheres', 'feminino', 'woman', 'women', 'female', 'ladies'],
        pt: () => 'Sim — a creatina monohidrato é adequada para mulheres que treinam força ou alta intensidade.\n\nDose habitual: ~' + FACTS.doseG + 'g/dia.\nNão “masculiniza” nem é hormona. Se estiver grávida, a amamentar ou com condições médicas, fale com o médico.',
        en: () => 'Yes — creatine monohydrate is suitable for women who train strength or high intensity.\n\nUsual dose: ~' + FACTS.doseG + 'g/day.\nIt is not a hormone and does not “masculinize.” If pregnant, breastfeeding or under medical care, ask your doctor.'
      },
      {
        id: 'results_time',
        weight: 9,
        keys: ['quando vejo', 'quanto tempo', 'demora', 'resultados quando', 'how long', 'when results', 'weeks', 'semanas'],
        pt: () => 'Com ' + FACTS.doseG + 'g/dia e treino regular, muita gente nota diferença de força/volume em 2–4 semanas.\nCom fase de carga, a saturação é mais rápida (cerca de 1 semana). A consistência importa mais do que um único treino.',
        en: () => 'At ' + FACTS.doseG + 'g/day with regular training, many people notice strength/volume changes in 2–4 weeks.\nWith a loading phase, saturation is faster (~1 week). Consistency matters more than any single workout.'
      },
      {
        id: 'stack',
        weight: 8,
        keys: ['proteina', 'proteína', 'whey', 'stack', 'juntar', 'combinar', 'com proteina', 'protein'],
        pt: () => 'Pode combinar creatina com proteína (whey ou outra) sem problema.\n\nTome a creatina todos os dias; a proteína conforme o seu plano alimentar. Não precisam de ir no mesmo shake, mas podem.',
        en: () => 'You can combine creatine with protein (whey or other) without issue.\n\nTake creatine every day; protein according to your nutrition plan. They don’t have to be in the same shake, but they can.'
      },
      {
        id: 'caffeine',
        weight: 8,
        keys: ['cafeina', 'cafeína', 'café', 'cafe', 'pre workout', 'pre-treino', 'pre treino', 'caffeine', 'coffee'],
        pt: () => 'Pode usar creatina no mesmo dia que café ou pré-treino.\nAlguns estudos antigos sugeriam interferência da cafeína; na prática, a maioria das pessoas usa os dois sem problema. Mantenha a dose diária de creatina estável.',
        en: () => 'You can use creatine the same day as coffee or pre-workout.\nOlder studies suggested caffeine interference; in practice most people use both fine. Keep your daily creatine dose consistent.'
      },
      {
        id: 'vegan',
        weight: 8,
        keys: ['vegan', 'vegetariano', 'vegetariana', 'plant based', 'origem'],
        pt: () => 'A creatina monohidrato de síntese (como a ARTFIT) é adequada a vegetarianos e veganos — não depende de carne. Quem não come carne costuma ter reservas mais baixas e pode beneficiar ainda mais da suplementação.',
        en: () => 'Synthetic creatine monohydrate (like ARTFIT) is suitable for vegetarians and vegans — it is not from meat. People who don’t eat meat often have lower stores and may benefit even more.'
      },
      {
        id: 'kids',
        weight: 9,
        keys: ['crianca', 'criança', 'adolescente', 'menor', 'kids', 'teen', 'children', 'under 18'],
        pt: () => 'Não recomendamos creatina para crianças. Em adolescentes atletas, só com orientação de um profissional de saúde. O nosso foco é adultos saudáveis que treinam.',
        en: () => 'We do not recommend creatine for children. For teenage athletes, only with guidance from a health professional. Our focus is healthy adults who train.'
      },
      {
        id: 'cycle',
        weight: 8,
        keys: ['ciclo', 'cyclar', 'parar', 'descansar', 'cycle', 'on off', 'break from'],
        pt: () => 'Não é obrigatório “cyclar” creatina. Pode usar de forma contínua ' + FACTS.doseG + 'g/dia. Alguns preferem pausas longas por preferência pessoal, não por necessidade comprovada.',
        en: () => 'You don’t have to cycle creatine. Continuous ' + FACTS.doseG + 'g/day is fine. Some people take long breaks by preference, not because it is required.'
      },
      {
        id: 'greeting',
        weight: 6,
        keys: ['ola', 'olá', 'oi', 'bom dia', 'boa tarde', 'boa noite', 'hello', 'hi', 'hey', 'good morning', 'good afternoon'],
        pt: () => 'Olá! Posso ajudar com creatina ARTFIT — preços, dosagem, tamanhos, qualidade ou como comprar. O que precisa?',
        en: () => 'Hello! I can help with ARTFIT creatine — prices, dosage, sizes, quality or how to buy. What do you need?'
      },
      {
        id: 'thanks',
        weight: 6,
        keys: ['obrigado', 'obrigada', 'valeu', 'agradec', 'thanks', 'thank you', 'ty'],
        pt: () => 'Com prazer! Se quiser encomendar ou tiver mais dúvidas: WhatsApp ' + FACTS.phone + '.',
        en: () => 'You’re welcome! To order or ask more: WhatsApp ' + FACTS.phone + '.'
      }
    ];

    const UI = {
      pt: {
        welcome: 'Olá! Sou o assistente ARTFIT. Pergunte sobre creatina, preços, dosagem, tamanhos, qualidade ou como comprar — respondo com base nos produtos da marca.',
        placeholder: 'Ex: qual o melhor tamanho?',
        typing: 'A escrever…',
        title: 'Assistente ARTFIT',
        subtitle: 'Produtos & creatina',
        chips: ['Preços', 'Como tomar?', 'Qual tamanho?', 'É segura?', 'Como comprar?'],
        fallback: 'Não tenho essa informação com precisão no site. Para uma resposta personalizada, fale no WhatsApp ' + FACTS.phone + '.\n\nPosso ajudar com: preços, dosagem, tamanhos, qualidade, HCL, entregas.'
      },
      en: {
        welcome: 'Hi! I’m the ARTFIT assistant. Ask about creatine, prices, dosage, sizes, quality or how to buy — I answer from the brand’s product info.',
        placeholder: 'e.g. which size is best?',
        typing: 'Typing…',
        title: 'ARTFIT Assistant',
        subtitle: 'Products & creatine',
        chips: ['Prices', 'How to take?', 'Which size?', 'Is it safe?', 'How to buy?'],
        fallback: 'I don’t have precise info on that here. For a personal answer, WhatsApp ' + FACTS.phone + '.\n\nI can help with: prices, dosage, sizes, quality, HCL, delivery.'
      }
    };

    function lang() {
      return (localStorage.getItem('artfit-lang') || 'pt') === 'en' ? 'en' : 'pt';
    }

    function normalize(s) {
      return (s || '')
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/[^\w\s]/g, ' ')
        .replace(/\s+/g, ' ')
        .trim();
    }

    // Short memory of last topics for follow-ups
    let lastTopics = [];

    function scoreQuestion(q) {
      const nq = normalize(q);
      const scores = [];

      TOPICS.forEach(topic => {
        let score = 0;
        topic.keys.forEach(k => {
          const nk = normalize(k);
          if (!nk) return;
          if (nq === nk) score += 20 + nk.length;
          else if (nq.includes(nk)) score += 8 + Math.min(nk.length, 12);
          else {
            // token overlap
            const tokens = nk.split(' ').filter(Boolean);
            tokens.forEach(t => {
              if (t.length > 2 && nq.split(' ').includes(t)) score += 3;
            });
          }
        });
        // boost recent topic on short follow-ups
        if (nq.split(' ').length <= 4 && lastTopics.includes(topic.id)) {
          score += 5;
        }
        score *= (topic.weight / 10);
        if (score > 0) scores.push({ topic, score });
      });

      scores.sort((a, b) => b.score - a.score);
      return scores;
    }

    function answerFor(question) {
      const L = lang();
      const scores = scoreQuestion(question);
      if (!scores.length || scores[0].score < 3) {
        return UI[L].fallback;
      }

      // Take top matches if close in score (combine up to 2)
      const top = scores[0];
      const parts = [top.topic[L]()];
      lastTopics = [top.topic.id];

      if (scores[1] && scores[1].score >= top.score * 0.72 && scores[1].topic.id !== top.topic.id) {
        // avoid combining greetings/thanks with product info awkwardly
        const skip = ['greeting', 'thanks'];
        if (!skip.includes(top.topic.id) && !skip.includes(scores[1].topic.id)) {
          parts.push(scores[1].topic[L]());
          lastTopics.push(scores[1].topic.id);
        }
      }

      // De-dupe if same text
      return parts.filter((p, i, arr) => arr.indexOf(p) === i).join('\n\n');
    }

    // Build UI
    const fab = document.createElement('button');
    fab.type = 'button';
    fab.className = 'chat-fab';
    fab.setAttribute('aria-label', 'ARTFIT Assistant');
    fab.setAttribute('aria-expanded', 'false');
    fab.innerHTML = '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>';

    const panel = document.createElement('div');
    panel.className = 'chat-panel';
    panel.setAttribute('role', 'dialog');
    panel.setAttribute('aria-label', 'ARTFIT chat');
    panel.innerHTML = [
      '<div class="chat-header">',
      '  <div class="chat-header-info">',
      '    <div class="chat-avatar">AI</div>',
      '    <div><h3 class="chat-title"></h3><p class="chat-sub"></p></div>',
      '  </div>',
      '  <button type="button" class="chat-close" aria-label="Close">',
      '    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M18 6L6 18M6 6l12 12"/></svg>',
      '  </button>',
      '</div>',
      '<div class="chat-messages" id="chatMessages"></div>',
      '<div class="chat-typing" id="chatTyping"></div>',
      '<div class="chat-suggestions" id="chatChips"></div>',
      '<form class="chat-input-row" id="chatForm">',
      '  <input type="text" id="chatInput" autocomplete="off" maxlength="300" />',
      '  <button type="submit" class="chat-send" aria-label="Send">',
      '    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/></svg>',
      '  </button>',
      '</form>'
    ].join('');

    document.body.appendChild(panel);
    document.body.appendChild(fab);

    const messagesEl = panel.querySelector('#chatMessages');
    const typingEl = panel.querySelector('#chatTyping');
    const chipsEl = panel.querySelector('#chatChips');
    const form = panel.querySelector('#chatForm');
    const input = panel.querySelector('#chatInput');
    const titleEl = panel.querySelector('.chat-title');
    const subEl = panel.querySelector('.chat-sub');
    const closeBtn = panel.querySelector('.chat-close');

    function addMsg(text, who) {
      const div = document.createElement('div');
      div.className = 'chat-msg ' + who;
      div.textContent = text;
      messagesEl.appendChild(div);
      messagesEl.scrollTop = messagesEl.scrollHeight;
    }

    function renderChips() {
      const p = UI[lang()];
      chipsEl.innerHTML = '';
      p.chips.forEach(label => {
        const b = document.createElement('button');
        b.type = 'button';
        b.className = 'chat-chip';
        b.textContent = label;
        b.addEventListener('click', () => send(label));
        chipsEl.appendChild(b);
      });
    }

    function applyLangUI() {
      const p = UI[lang()];
      titleEl.textContent = p.title;
      subEl.textContent = p.subtitle;
      input.placeholder = p.placeholder;
      typingEl.textContent = p.typing;
      renderChips();
    }

    let greeted = false;
    function openPanel() {
      panel.classList.add('open');
      fab.setAttribute('aria-expanded', 'true');
      applyLangUI();
      if (!greeted) {
        addMsg(UI[lang()].welcome, 'bot');
        greeted = true;
      }
      setTimeout(() => input.focus(), 200);
    }

    function closePanel() {
      panel.classList.remove('open');
      fab.setAttribute('aria-expanded', 'false');
    }

    fab.addEventListener('click', () => {
      if (panel.classList.contains('open')) closePanel();
      else openPanel();
    });
    closeBtn.addEventListener('click', closePanel);

    function send(text) {
      const q = (text || '').trim();
      if (!q) return;
      addMsg(q, 'user');
      chipsEl.innerHTML = '';
      typingEl.classList.add('visible');
      messagesEl.scrollTop = messagesEl.scrollHeight;
      const reply = answerFor(q);
      setTimeout(() => {
        typingEl.classList.remove('visible');
        addMsg(reply, 'bot');
        renderChips();
      }, 400 + Math.min(900, q.length * 10));
    }

    form.addEventListener('submit', e => {
      e.preventDefault();
      const v = input.value;
      input.value = '';
      send(v);
    });

    document.addEventListener('artfit-lang-change', applyLangUI);
    window.addEventListener('storage', e => {
      if (e.key === 'artfit-lang') applyLangUI();
    });
  })();

  setLanguage(currentLang);
})();
