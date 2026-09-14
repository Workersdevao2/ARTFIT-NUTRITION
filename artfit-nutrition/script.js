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


  // ========== ARTFIT AI Assistant (client-side knowledge) ==========
  (function initArtfitChat() {
    const knowledge = {
      pt: {
        welcome: 'Olá! Sou o assistente ARTFIT. Posso ajudar com dúvidas sobre creatina monohidrato, tamanhos, dosagem, preços e qualidade. Como posso ajudar?',
        placeholder: 'Pergunte sobre creatina, preços…',
        typing: 'A escrever…',
        title: 'Assistente ARTFIT',
        subtitle: 'Dúvidas sobre produtos',
        chips: ['O que é a creatina?', 'Preços', 'Como tomar?', 'Tamanhos', 'É segura?'],
        fallback: 'Não tenho essa informação com precisão. Para uma resposta personalizada, fale connosco no WhatsApp: 948 387 343.',
        answers: [
          {
            keys: ['preço', 'preco', 'preços', 'precos', 'custo', 'quanto custa', 'valor', 'kz', 'precos', 'promo'],
            text: 'Preços actuais (podem actualizar-se):\n• 200g — 12.500 KZ (promoção)\n• 300g — 17.500 KZ\n• 500g — 27.500 Kz\n• Creatina HCL — em breve\n\nPara encomendar, use o WhatsApp 948 387 343.'
          },
          {
            keys: ['o que é', 'o que e', 'creatina', 'monohidrato', 'monohidratada', 'o que e creatina', 'oque'],
            text: 'A Creatina ARTFIT é monohidrato de creatina micronizado — a forma mais estudada e eficaz. Ajuda a aumentar força, potência muscular e recuperação. É 100% pure, com certificado de qualidade e Halal.'
          },
          {
            keys: ['como tomar', 'dosagem', 'dose', 'tomar', 'usar', 'uso', 'scoop', 'colher'],
            text: 'Dosagem típica: cerca de 5g por dia (1 scoop), dissolvida em água ou sumo. Pode tomar antes ou depois do treino, ou em qualquer altura do dia. Consulte um profissional de saúde se tiver condições médicas.'
          },
          {
            keys: ['tamanho', 'tamanhos', '200', '300', '500', 'gramas', 'g ', 'embalagem', 'doses'],
            text: 'Temos três tamanhos de monohidrato:\n• 200g ≈ 40 doses\n• 300g ≈ 60 doses\n• 500g ≈ 100 doses\nCreatina HCL está a chegar em breve.'
          },
          {
            keys: ['hcl', 'hidrocloreto', 'em breve', 'novidade'],
            text: 'A Creatina HCL ARTFIT está em breve. Tem melhor solubilidade e pode ser usada em doses menores. Acompanhe no Instagram ou pergunte no WhatsApp para ser avisado.'
          },
          {
            keys: ['segura', 'segurança', 'efeito', 'efeitos', 'risco', 'rim', 'fígado', 'figado', 'side'],
            text: 'A creatina monohidrato é um dos suplementos mais estudados e é considerada segura para adultos saudáveis nas doses recomendadas. Não substitui uma alimentação equilibrada. Se tiver problemas renais ou outras condições, fale com o seu médico antes de usar.'
          },
          {
            keys: ['benefício', 'beneficio', 'beneficios', 'vantagens', 'para que serve', 'resultados'],
            text: 'Principais benefícios: mais força e potência no treino, melhor recuperação entre séries, aumento do volume muscular (retenção de água intramuscular) e suporte a treinos de alta intensidade.'
          },
          {
            keys: ['qualidade', 'puro', 'pure', 'certificado', 'halal', 'lab', 'teste', 'micronizado'],
            text: 'ARTFIT usa creatina monohidrato micronizado 100% pure, com verificação de qualidade e certificação Halal. Pode ver rótulos e certificados na secção Qualidade do site.'
          },
          {
            keys: ['onde', 'loja', 'local', 'luanda', 'combatentes', 'morada', 'endereço', 'endereco'],
            text: 'Estamos em Combatentes – Luanda, Angola. Encomendas e dúvidas: WhatsApp 948 387 343 (Seg–Sáb, 09:00–18:00).'
          },
          {
            keys: ['comprar', 'encomendar', 'pedido', 'whatsapp', 'contact', 'contacto', 'falar'],
            text: 'Para comprar ou encomendar, envie mensagem no WhatsApp 948 387 343. Pode usar o botão verde no site — a mensagem já vai pré-preenchida.'
          },
          {
            keys: ['instagram', 'rede', 'social', 'ig'],
            text: 'Siga-nos no Instagram para novidades e conteúdo de treino: instagram.com (perfil ARTFIT no link do site).'
          },
          {
            keys: ['água', 'agua', 'inchaço', 'inchaco', 'peso'],
            text: 'A creatina pode aumentar ligeiramente o peso por retenção de água dentro do músculo (não é gordura). Beba água ao longo do dia. O “inchaço” subcutâneo excessivo é raro com monohidrato de qualidade em doses normais.'
          },
          {
            keys: ['mulher', 'mulheres', 'feminino'],
            text: 'Sim — a creatina monohidrato é adequada para mulheres que treinam força ou alta intensidade, nas mesmas doses habituais (~5g/dia), salvo indicação médica em contrário.'
          },
          {
            keys: ['olá', 'ola', 'oi', 'bom dia', 'boa tarde', 'boa noite', 'hello', 'hi'],
            text: 'Olá! Em que posso ajudar sobre a creatina ARTFIT ou os nossos produtos?'
          },
          {
            keys: ['obrigado', 'obrigada', 'valeu', 'thanks'],
            text: 'Com prazer! Se precisar de mais alguma coisa ou quiser encomendar, estamos no WhatsApp 948 387 343.'
          }
        ]
      },
      en: {
        welcome: 'Hi! I’m the ARTFIT assistant. I can help with creatine monohydrate, sizes, dosage, prices and quality. How can I help?',
        placeholder: 'Ask about creatine, prices…',
        typing: 'Typing…',
        title: 'ARTFIT Assistant',
        subtitle: 'Product questions',
        chips: ['What is creatine?', 'Prices', 'How to take?', 'Sizes', 'Is it safe?'],
        fallback: 'I don’t have precise info on that. For a personal answer, message us on WhatsApp: 948 387 343.',
        answers: [
          {
            keys: ['price', 'prices', 'cost', 'how much', 'kz', 'promo'],
            text: 'Current prices (subject to update):\n• 200g — 12,500 KZ (promo)\n• 300g — 17,500 KZ\n• 500g — 27,500 KZ\n• Creatine HCL — coming soon\n\nTo order, WhatsApp 948 387 343.'
          },
          {
            keys: ['what is', 'creatine', 'monohydrate', 'about'],
            text: 'ARTFIT Creatine is micronized creatine monohydrate — the most researched and effective form. It supports strength, power and recovery. 100% pure, quality-verified and Halal certified.'
          },
          {
            keys: ['how to take', 'dosage', 'dose', 'use', 'scoop', 'serving'],
            text: 'Typical dose: about 5g per day (1 scoop), mixed in water or juice. Take before/after training or any time of day. Check with a health professional if you have medical conditions.'
          },
          {
            keys: ['size', 'sizes', '200', '300', '500', 'gram', 'pack'],
            text: 'Three monohydrate sizes:\n• 200g ≈ 40 servings\n• 300g ≈ 60 servings\n• 500g ≈ 100 servings\nCreatine HCL is coming soon.'
          },
          {
            keys: ['hcl', 'hydrochloride', 'coming soon', 'new'],
            text: 'ARTFIT Creatine HCL is coming soon — better solubility and lower typical doses. Follow Instagram or ask on WhatsApp to be notified.'
          },
          {
            keys: ['safe', 'safety', 'side', 'kidney', 'liver', 'risk'],
            text: 'Creatine monohydrate is one of the most studied supplements and is considered safe for healthy adults at recommended doses. It does not replace a balanced diet. If you have kidney issues or other conditions, ask your doctor first.'
          },
          {
            keys: ['benefit', 'benefits', 'results', 'why'],
            text: 'Main benefits: more strength and power, better recovery between sets, increased muscle volume (intramuscular water) and support for high-intensity training.'
          },
          {
            keys: ['quality', 'pure', 'certif', 'halal', 'lab', 'micronized'],
            text: 'ARTFIT uses 100% pure micronized creatine monohydrate with quality verification and Halal certification. See labels and certificates in the Quality section.'
          },
          {
            keys: ['where', 'location', 'luanda', 'combatentes', 'address', 'store'],
            text: 'We are in Combatentes – Luanda, Angola. Orders & questions: WhatsApp 948 387 343 (Mon–Sat, 09:00–18:00).'
          },
          {
            keys: ['buy', 'order', 'whatsapp', 'contact', 'purchase'],
            text: 'To buy or order, message WhatsApp 948 387 343. Use the green button on the site — the message is pre-filled.'
          },
          {
            keys: ['instagram', 'social', 'ig'],
            text: 'Follow us on Instagram for updates and training content — link is on the site.'
          },
          {
            keys: ['water', 'bloat', 'weight'],
            text: 'Creatine can slightly increase body weight via water held inside the muscle (not fat). Drink water through the day. Excess subcutaneous bloating is uncommon with quality mono at normal doses.'
          },
          {
            keys: ['woman', 'women', 'female'],
            text: 'Yes — creatine monohydrate is suitable for women who train strength or high intensity, at the usual ~5g/day, unless a doctor advises otherwise.'
          },
          {
            keys: ['hello', 'hi', 'hey', 'good morning', 'good afternoon'],
            text: 'Hello! How can I help with ARTFIT creatine or our products?'
          },
          {
            keys: ['thank', 'thanks'],
            text: 'You’re welcome! For anything else or to order, WhatsApp 948 387 343.'
          }
        ]
      }
    };

    function lang() {
      return (localStorage.getItem('artfit-lang') || 'pt') === 'en' ? 'en' : 'pt';
    }

    function pack() {
      return knowledge[lang()];
    }

    function normalize(s) {
      return (s || '')
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .trim();
    }

    function answerFor(question) {
      const q = normalize(question);
      const list = pack().answers;
      let best = null;
      let bestScore = 0;
      list.forEach(item => {
        let score = 0;
        item.keys.forEach(k => {
          const nk = normalize(k);
          if (q.includes(nk)) score += nk.length;
        });
        if (score > bestScore) {
          bestScore = score;
          best = item;
        }
      });
      if (best && bestScore > 0) return best.text;
      return pack().fallback;
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
      const p = pack();
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
      const p = pack();
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
        addMsg(pack().welcome, 'bot');
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
      }, 450 + Math.min(800, q.length * 12));
    }

    form.addEventListener('submit', e => {
      e.preventDefault();
      const v = input.value;
      input.value = '';
      send(v);
    });

    // Refresh labels when language toggles
    document.addEventListener('artfit-lang-change', applyLangUI);
    window.addEventListener('storage', e => {
      if (e.key === 'artfit-lang') applyLangUI();
    });
  })();


  setLanguage(currentLang);
})();
