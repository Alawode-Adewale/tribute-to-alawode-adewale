const translations = {
  en: {
    title: "Tribute to Alawode Adewale Afeez",
    name: "Alawode Adewale Afeez",
    subtitle: "Web Developer | Vision Creator | Founder of EyesightWorks",
    caption: "Founder of EyesightWorks — empowering ideas with web technology.",
    about: "About",
    bio: "Alawode Adewale Afeez is a passionate web developer focused on clean, functional, and meaningful digital experiences.",
    achievements: "Key Achievements",
    founder: "👨‍💻 Founder of EyesightWorks",
    github: "🌱 Builds with GitHub & freeCodeCamp",
    student: "🎓 Learning Full Stack Development",
    learner: "📚 Lifelong learner & contributor",
    quote: "Code with purpose. Design with clarity. Build with heart.",
    learnmore: "Learn more on"
  },
  ar: {
    title: "تحية إلى علاود أدي والي عفيز",
    name: "علاود أدي والي عفيز",
    subtitle: "مطور ويب | صانع رؤية | مؤسس EyesightWorks",
    caption: "مؤسس EyesightWorks — تمكين الأفكار بالتكنولوجيا.",
    about: "حول",
    bio: "علاود أدي والي هو مطور ويب شغوف يركز على تجارب رقمية ذات معنى.",
    achievements: "الإنجازات الرئيسية",
    founder: "👨‍💻 مؤسس EyesightWorks",
    github: "🌱 يستخدم GitHub و freeCodeCamp",
    student: "🎓 يتعلم تطوير الويب الشامل",
    learner: "📚 متعلم مدى الحياة ومساهم",
    quote: "برمج بهدف. صمم بوضوح. ابنِ بإخلاص.",
    learnmore: "اعرف المزيد على"
  },
  es: {
    title: "Homenaje a Alawode Adewale Afeez",
    name: "Alawode Adewale Afeez",
    subtitle: "Desarrollador Web | Creador de Visión | Fundador de EyesightWorks",
    caption: "Fundador de EyesightWorks — potenciando ideas con tecnología.",
    about: "Acerca de",
    bio: "Alawode Adewale Afeez es un desarrollador web apasionado por experiencias digitales significativas.",
    achievements: "Logros clave",
    founder: "👨‍💻 Fundador de EyesightWorks",
    github: "🌱 Construye con GitHub & freeCodeCamp",
    student: "🎓 Estudiando desarrollo full-stack",
    learner: "📚 Aprendiz de por vida y colaborador",
    quote: "Programa con propósito. Diseña con claridad. Construye con corazón.",
    learnmore: "Más información en"
  },
  fr: {
    title: "Hommage à Alawode Adewale Afeez",
    name: "Alawode Adewale Afeez",
    subtitle: "Développeur Web | Créateur de Vision | Fondateur de EyesightWorks",
    caption: "Fondateur de EyesightWorks — propulsant les idées avec la technologie.",
    about: "À propos",
    bio: "Alawode Adewale Afeez est un développeur passionné créant des expériences numériques utiles.",
    achievements: "Réalisations clés",
    founder: "👨‍💻 Fondateur de EyesightWorks",
    github: "🌱 Travaille avec GitHub & freeCodeCamp",
    student: "🎓 Apprend le développement full stack",
    learner: "📚 Apprenant et contributeur à vie",
    quote: "Coder avec un but. Concevoir avec clarté. Construire avec passion.",
    learnmore: "En savoir plus sur"
  }
};

document.getElementById("language").addEventListener("change", function () {
  const lang = this.value;
  const elements = document.querySelectorAll("[data-i18n]");
  elements.forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang] && translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });
});
