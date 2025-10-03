// Language Management System
class LanguageManager {
    constructor() {
        this.currentLanguage = this.getStoredLanguage() || 'en';
        this.translations = {};
        this.init();
    }

    init() {
        // Load translations
        this.loadTranslations();
        
        // Apply current language
        this.applyLanguage(this.currentLanguage);
        
        // Set up language switcher
        this.setupLanguageSwitcher();
    }

    getStoredLanguage() {
        return localStorage.getItem('preferredLanguage') || 
               (navigator.language.startsWith('es') ? 'es' : 'en');
    }

    storeLanguage(lang) {
        localStorage.setItem('preferredLanguage', lang);
    }

    loadTranslations() {
        this.translations = {
            en: {
                // Navigation
                nav: {
                    home: 'Home',
                    about: 'About',
                    projects: 'Projects',
                    tutor: 'Tutor',
                    switchTo: 'Español'
                },
                // Home page
                home: {
                    title: "Hi there, I'm<br><span id='name'>Logan Calder</span>.",
                    bio: "I'm a MIDS student at UC Berkeley with 3 years of industry experience.",
                    contactButton: 'Contact',
                    downloadCV: 'Download CV',
                    aboutMe: 'About Me',
                    aboutText: "I am an aspiring Software Developer with interests in medical technologies, machine learning, and optimization. My strengths lie in quick-learning capabilities and a driven mindset. <br><br>I have worked as a Software Engineering intern at Evil Geniuses (Peak6 subsidiary) for the last year, developing an internal VOD review tool utilized by the entirety of the company's coaches and marketing staff, as well as working for Austin FC. <br><br>Additionally, I worked two summers at Hewlett Packard Enterprise's Aruba Networks, working on fullstack developer tools for network connections. My work has been utilized by over 100 developers, quality assurance and sales engineers, and customer service representatives.",
                    skills: 'Skills',
                    education: 'Education',
                    experience: 'Experience',
                    skillsContent: 'Python, C, C++, C#, Java, JS, HTML & CSS, Unity, mySQL, K8, Docker',
                    educationContent: 'UC Berkeley, MIDS 2026\nSanta Clara University, B.S. CS&E',
                    experienceContent: '3x SWE Intern @ Aruba Networks\nSWE Intern @ Evil Geniuses\nSWE Intern @ Austin FC\nResearch Assistant @ SCU',
                    featuredProjects: 'Featured Projects',
                    featuredProjectBadge: '🏆 Senior Design Winner',
                    featuredProjectTitle: 'EMT Vision',
                    featuredProjectSubtitle: 'Senior Design 2025',
                    featuredProjectDesc: 'First place winner offering AR-based automatic population of ePCR forms. This innovative solution streamlines emergency medical documentation through cutting-edge augmented reality technology.',
                    featuredProjectDate: 'May 9, 2025',
                    project1Title: 'EMT Vision - Senior Design 2025',
                    project1Date: 'May 9, 2025',
                    project1Desc: 'First place winner of 2025 SCU Senior Design, offering AR-based automatic population of ePCR forms.',
                    project2Title: 'H4H 2025 - lmk',
                    project2Date: 'February 16, 2025',
                    project2Desc: 'An AI-powered web service that analyzes and alerts users of dangerous scenarios in their area.',
                    project3Title: 'Valentines 2025 Video Game',
                    project3Date: 'February 10, 2025',
                    project3Desc: "I asked my girlfriend to be my Valentine with a video game this year!",
                    connectTitle: "Let's Connect!",
                    connectText: "I am always looking to connect with new people! If you are interested in working with or learning more about me, please do feel free to fill out the form so we can begin talking.",
                    formName: 'Name:',
                    formNamePlaceholder: 'Introduce yourself!',
                    formEmail: 'Email:',
                    formEmailPlaceholder: 'address@domain.com',
                    formMessage: 'Message:',
                    formMessagePlaceholder: 'Why do you want to get connected?',
                    formSubmit: 'Send',
                    footer: 'Made with <span style="color: white;font-weight: bold;">♥</span> by Logan C'
                },
                // About page
                about: {
                    title: 'A bit <span id="gradient">about me</span>...',
                    bio1: "I'm Logan, a Computer Science student at Santa Clara University.",
                    bio2: "I have been writing code for over <span id='highlight'>6 years</span>. Ever since I began developing my first applications, I fell in love with programming.",
                    bio3: "Growing up, I had a strong passion for creation. From LEGOs to Minecraft, I loved building and creating worlds of my own imagination. There was just <span id='highlight'>something so satisfying and rewarding about being able to construct anything</span> that my imagination desired.",
                    bio4: "Fast forward to now, and I still find myself holding that same passion for creation. Provided this, I've felt that Computer Science is the perfect discipline for me to reflect this creative liberty.",
                    bio5: "My passions lie within <span id='highlight'>medicine, ML, and UI design</span>. I would love to be a part of a development team that worked to create new medical technologies, or other interfaces that users may interact with."
                },
                // Projects page
                projects: {
                    title: 'My Projects & Experience',
                    all: 'All',
                    personal: 'Personal',
                    work: 'Work & School',
                    project1Title: 'EMT Vision - Senior Design 2025',
                    project1Date: 'May 9, 2025',
                    project2Title: 'H4H 2025 - lmk',
                    project2Date: 'February 16, 2025',
                    project3Title: 'Valentines 2025 Video Game',
                    project3Date: 'February 10, 2025',
                    project4Title: 'Performance Tuning Research',
                    project4Date: 'January 1, 2025',
                    project5Title: 'Aruba Networks',
                    project5Date: 'September 16, 2024',
                    project6Title: 'Valentines 2024 Questionnaire',
                    project6Date: 'February 10, 2024',
                    project7Title: 'Christian Ministry Website',
                    project7Date: 'February 1, 2024',
                    project8Title: 'Hewlett Packard Enterprise',
                    project8Date: 'October 1, 2023',
                    project9Title: 'Treehacks 2023',
                    project9Date: 'February 19, 2023',
                    project10Title: 'Old Website',
                    project10Date: 'September 1, 2021'
                },
                // Tutor page
                tutor: {
                    title: 'Interested in <span id="gradient">tutoring</span>?',
                    subtitle: "I'd love to help you excel in your courses.",
                    description1: 'I have been tutoring for over <span id="highlight">5 years</span>, with experience teaching subjects such as: <span id="gradient"><b>Python</b></span>, <span id="gradient"><b>Pre-Algebra</b></span>, <span id="gradient"><b>Algebra I-II</b></span>, <span id="gradient"><b>Calculus I</b></span>, and <span id="gradient"><b>Spanish</b></span>.',
                    description2: 'As a tutor, my primary goal is to ensure that the student has a <span id="highlight">strong understanding of the subject</span>, being prepared enough to <span id="highlight">take exams confidently</span>. I will always try my best to <span id="highlight">accomodate my teaching</span> to the student\'s prefered learning style, and explain lessons in whatever method helps them learn best.',
                    description3: 'My students have a record of consistently earning <span id="highlight">A\'s</span> and <span id="highlight">high B\'s</span> on their exams after coming to me and recieving instruction, while prior recieving low or failing grades. While I cannot guarantee a grade boost (that is on the student to truly practice and improve), I can ensure that I will always do my best to help the student learn, even <span id="highlight">responding to questions outside of designated tutoring sessions</span>.',
                    bookLesson: 'Book Lesson',
                    connectTitle: "Let's Connect!",
                    connectText: 'Please fill out this form so that I can get connected with you and reserve a time slot to meet with you or your student! I meet over Zoom or in-person (if in San Jose).'
                }
            },
            es: {
                // Navigation
                nav: {
                    home: 'Hogar',
                    about: 'Sobre Mí',
                    projects: 'Proyectos',
                    tutor: 'Tutoría',
                    switchTo: 'English'
                },
                // Home page
                home: {
                    title: "Hola, soy<br><span id='name'>Logan Calder</span>.",
                    bio: "Soy un estudiante de MIDS en UC Berkeley con 3 años de experiencia en la industria.",
                    contactButton: 'Contactar',
                    downloadCV: 'Descargar CV',
                    aboutMe: 'Sobre Mí',
                    aboutText: "Soy un programador de software con intereses en tecnologías médicas, software, y optimización. Mis fortalezas radican en las capacidades de aprendizaje rápido y una mentalidad impulsada.<br><br>He trabajado como pasante de ingeniería de software en Evil Geniuses (subsidiaria de Peak6) durante el último año, desarrollando una herramienta interna de revisión de VOD utilizada por la totalidad de los entrenadores y personal de marketing de la empresa, así como trabajando para Austin FC. <br><br>Además, trabajé dos veranos en Hewlett Packard Enterprise's Aruba Networks, trabajando en herramientas de desarrollo fullstack para conexiones de red. Mi trabajo ha sido utilizado por más de 100 desarrolladores, ingenieros de control de calidad y ventas, y representantes de servicio al cliente.<br><br>También disfruto enseñando y soy un mentor en los temas de Español, Python, y Álgebra a través del cálculo.",
                    skills: 'Habilidades',
                    education: 'Educación',
                    experience: 'Experiencia',
                    skillsContent: 'Python, C, C++, C#, Java, JS, HTML & CSS, Unity, mySQL, K8s, Docker',
                    educationContent: 'UC Berkeley, MIDS 2026\nUniversidad de Santa Clara, B.S. Ciencias de Computación e Ingeniería',
                    experienceContent: '3x Pasante de SWE @ Aruba Networks\nPasante de SWE @ Evil Geniuses\nPasante de SWE @ Austin FC\nAsistente de Investigación @ SCU',
                    featuredProjects: 'Proyectos Destacados',
                    featuredProjectBadge: '🏆 Ganador Diseño Senior',
                    featuredProjectTitle: 'EMT Vision',
                    featuredProjectSubtitle: 'Diseño Senior 2025',
                    featuredProjectDesc: 'Ganador del primer lugar ofreciendo llenado automático de formularios ePCR basado en AR. Esta solución innovadora optimiza la documentación médica de emergencia a través de tecnología de realidad aumentada de vanguardia.',
                    featuredProjectDate: '9 de mayo, 2025',
                    project1Title: 'EMT Vision - Diseño Senior 2025',
                    project1Date: '9 de mayo, 2025',
                    project1Desc: 'Ganador del primer lugar en el Diseño Senior 2025 de SCU, ofreciendo llenado automático de formularios ePCR basado en AR.',
                    project2Title: 'H4H 2025 - lmk',
                    project2Date: '16 de febrero, 2025',
                    project2Desc: 'Un servicio web impulsado por IA que analiza y alerta a los usuarios sobre escenarios peligrosos en su área.',
                    project3Title: 'Videojuego de San Valentín 2025',
                    project3Date: '10 de febrero, 2025',
                    project3Desc: '¡Le pedí a mi novia que fuera mi San Valentín con un videojuego este año!',
                    connectTitle: 'Vamos a Conectar!',
                    connectText: '¡Siempre estoy buscando a conectar con gente nueva! Si estás interesado en trabajar conmigo o aprendiendo más sobre yo, por favor rellene el formulario para que podamos empezar a hablar.',
                    formName: 'Nombre:',
                    formNamePlaceholder: 'Preséntate',
                    formEmail: 'Email:',
                    formEmailPlaceholder: 'nombre@domain.com',
                    formMessage: 'Mensaje:',
                    formMessagePlaceholder: '¿Por qué quieres conectar?',
                    formSubmit: 'Enviar',
                    footer: 'Hecho con <span style="color: white;font-weight: bold;">♥</span> de Logan C'
                },
                // About page
                about: {
                    title: 'Un poco <span id="gradient">sobre mí</span>...',
                    bio1: 'Soy Logan, un estudiante de ciencias de computación en la Universidad de Santa Clara.',
                    bio2: 'He estado escribiendo código hace <span id="highlight">6 años</span>. Desde que empiece a desarrollar, me enamoré de la programación.',
                    bio3: 'Al crecer, tuve una gran pasión por la creación. Desde LEGO hasta Minecraft, me encantaba construir y crear mundos de mi propia imaginación. Era <span id="highlight">algo tan satisfactorio y gratificante de poder construir cualquier cosa</span> que mi imaginación deseaba.',
                    bio4: 'Avance rápido hasta ahora, y todavía me encuentro sosteniendo esa misma pasión por la creación. Teniendo esto en cuenta, he sentido que la informática es la disciplina perfecta para reflejar esta libertad creativa.',
                    bio5: 'Mis pasiones son <span id="highlight">medicina and diseño de UI</span>. Me encantaría formar parte de un equipo de desarrollo que trabajara para crear nuevas tecnologías médicas u otras interfaces con las que los usuarios puedan interactuar.'
                },
                // Projects page
                projects: {
                    title: 'Mis Proyectos e Experiencia',
                    all: 'Todos',
                    personal: 'Personal',
                    work: 'Trabajo e Escuela',
                    project1Title: 'EMT Vision - Diseño Senior 2025',
                    project1Date: '9 de mayo, 2025',
                    project2Title: 'H4H 2025 - lmk',
                    project2Date: '16 de febrero, 2025',
                    project3Title: 'Videojuego de San Valentín 2025',
                    project3Date: '10 de febrero de 2025',
                    project4Title: 'Investigación en SCU',
                    project4Date: '1 de enero de 2025',
                    project5Title: 'Aruba Networks',
                    project5Date: '16 de septiembre de 2024',
                    project6Title: 'Cuestionario de San Valentín',
                    project6Date: '10 de febrero de 2024',
                    project7Title: 'Christian Ministry Website',
                    project7Date: '1 de febrero de 2024',
                    project8Title: 'Hewlett Packard Enterprise',
                    project8Date: '1 de octubre de 2023',
                    project9Title: 'Treehacks de 2023',
                    project9Date: '19 de febrero de 2023',
                    project10Title: 'Sitio Web Viejo',
                    project10Date: '1 de septiembre de 2021'
                },
                // Tutor page
                tutor: {
                    title: '¿Te interesa en<span id="gradient">clases particulares</span>?',
                    subtitle: 'Me encantaría ayudarte a sobresalir en tus cursos.',
                    description1: 'He estado enseñando hace <span id="highlight">5 años</span>, con experiencia en la enseñanza de asignaturas como: <span id="gradient"><b>Python</b></span>, <span id="gradient"><b>Pre-Álgebra</b></span>, <span id="gradient"><b>Álgebra I-II</b></span>, <span id="gradient"><b>Cálculo I</b></span>, e <span id="gradient"><b>Español</b></span>.',
                    description2: 'Como tutor, mi objetivo principal es asegurarme de que el estudiante tenga una <span id="highlight">sólida comprensión del tema </span>, preparados lo suficiente como para <span id="highlight">tomar los exámenes con confianza</span>. Siempre haré mi mejor esfuerzo para <span id="highlight">acomodar mi enseñanza</span> al estilo de aprendizaje preferido del estudiante, y explicaré las lecciones en cualquier método que les ayude a aprender mejor.',
                    description3: 'Mis estudiantes tienen un registro de obtener constantemente <span id="highlight">A</span> y <span id="highlight">B\'s altos</span> en sus exámenes después de venir a mí y recibir instrucción, mientras que antes recibió calificaciones bajas o fallidas. Si bien no puedo garantizar un aumento de la calificación (que está en el estudiante para practicar y mejorar realmente), puedo asegurar que siempre haré mi mejor esfuerzo para ayudar al estudiante a aprender, incluso <span id="highlight">respondiendo a preguntas fuera de las sesiones de tutoría designadas.</span>',
                    bookLesson: 'Reservar una Lección',
                    connectTitle: 'Vamos a Conectar!',
                    connectText: '¡Siempre estoy buscando a conectar con gente nueva! Si estás interesado en trabajar conmigo o aprendiendo más sobre yo, por favor rellene el formulario para que podamos empezar a hablar.'
                }
            }
        };
    }

    applyLanguage(lang) {
        this.currentLanguage = lang;
        this.storeLanguage(lang);
        
        // Update document language
        document.documentElement.lang = lang;
        
        // Apply translations to all elements with data-translate attribute
        const elements = document.querySelectorAll('[data-translate]');
        elements.forEach(element => {
            const key = element.getAttribute('data-translate');
            const translation = this.getTranslation(key, lang);
            if (translation) {
                if (element.tagName === 'INPUT' && element.type === 'submit') {
                    element.value = translation;
                } else if (element.tagName === 'INPUT' && element.placeholder) {
                    element.placeholder = translation;
                } else {
                    // Convert newlines to <br> tags for proper HTML display
                    const htmlTranslation = translation.replace(/\n/g, '<br>');
                    element.innerHTML = htmlTranslation;
                }
            }
        });

        // Apply placeholder translations
        const placeholderElements = document.querySelectorAll('[data-translate-placeholder]');
        placeholderElements.forEach(element => {
            const key = element.getAttribute('data-translate-placeholder');
            const translation = this.getTranslation(key, lang);
            if (translation) {
                element.placeholder = translation;
            }
        });

        // Update language switcher text
        const langSwitcher = document.querySelector('.lang-button a');
        if (langSwitcher) {
            langSwitcher.textContent = this.translations[lang].nav.switchTo;
        }

        // Update page title
        this.updatePageTitle(lang);
    }

    getTranslation(key, lang = this.currentLanguage) {
        const keys = key.split('.');
        let translation = this.translations[lang];
        
        for (const k of keys) {
            if (translation && translation[k]) {
                translation = translation[k];
            } else {
                return null;
            }
        }
        
        return translation;
    }

    updatePageTitle(lang) {
        const currentPage = this.getCurrentPage();
        const titles = {
            en: {
                home: 'Logan Calder',
                about: 'LC - About',
                projects: 'LC - Projects',
                tutor: 'LC - Tutor'
            },
            es: {
                home: 'Logan Calder',
                about: 'LC - Sobre Mí',
                projects: 'LC - Proyectos',
                tutor: 'LC - Tutoría'
            }
        };
        
        if (titles[lang] && titles[lang][currentPage]) {
            document.title = titles[lang][currentPage];
        }
    }

    getCurrentPage() {
        const path = window.location.pathname;
        if (path.includes('about')) return 'about';
        if (path.includes('projects')) return 'projects';
        if (path.includes('tutor')) return 'tutor';
        return 'home';
    }

    setupLanguageSwitcher() {
        const langSwitcher = document.querySelector('.lang-button a');
        if (langSwitcher) {
            langSwitcher.addEventListener('click', (e) => {
                e.preventDefault();
                const newLang = this.currentLanguage === 'en' ? 'es' : 'en';
                this.applyLanguage(newLang);
            });
        }
    }

    switchLanguage() {
        const newLang = this.currentLanguage === 'en' ? 'es' : 'en';
        this.applyLanguage(newLang);
    }
}

// Initialize language manager when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.languageManager = new LanguageManager();
});
