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

  setLanguage(currentLang);
})();
