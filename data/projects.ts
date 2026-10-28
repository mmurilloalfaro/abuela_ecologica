export interface Project {
  slug: string;
  title: string;
  status: "active" | "completed";
  excerpt?: string;
  description: string;
  location: string;
  year: string;
  image: string;
  heroImages?: string[];
  content: string[];
  stats?: { value: string; label: string }[];
  cta?: {
    title: string;
    text: string;
  };
}

export const projects = [
  {
    slug: "arboles-plumas",
    title: "Árboles y Plumas",
    status: "active",
    excerpt: "Restauramos bosques para devolverle el hogar a la lapa verde",
    description:
      "Restauración del hábitat de la lapa verde en San Carlos mediante la siembra de árboles clave y el fortalecimiento de corredores biológicos.",
    location: "Zona Norte",
    year: "2025 - 2026",
    image: "/projects/arboles/arboles_01.jpeg",
    heroImages: [
      "/projects/arboles/arboles_01.jpeg",
      "/projects/arboles/arboles2.jpeg",
      "/projects/arboles/arboles3.jpeg",
      "/projects/arboles/arboles3.jpeg",
    ],
    content: [
      "Árboles y Plumas es un proyecto dedicado a la restauración del hábitat de la lapa verde. La lapa verde es una de las guacamayas más emblemáticas de Costa Rica, pero también una de las más amenazadas. La deforestación y la fragmentación del bosque han reducido drásticamente su hábitat, confinándola a pequeños núcleos aislados.",
      "San Carlos sigue siendo un territorio clave para su recuperación. Aún existen bosques, comunidades comprometidas y especies arbóreas esenciales como el almendro de montaña que permiten devolverle condiciones adecuadas para alimentarse y anidar.",
      "Árboles y Plumas nace como una respuesta concreta: restaurar corredores biológicos mediante la siembra de especies clave y la participación activa de comunidades locales, instituciones y aliados estratégicos.",
    ],
    stats: [
      { value: "8.000", label: "Árboles nativos" },
      { value: "Ara ambiguus", label: "Lapa verde" },
      { value: "Zona Norte", label: "Territorio" },
      { value: "2025–2026", label: "Periodo" },
    ],
    cta: {
      title: "Ayudá a devolverle el bosque a la lapa verde",
      text: "Tu donación apoya la producción, siembra y mantenimiento de árboles nativos esenciales para la supervivencia de esta especie y la restauración del ecosistema.",
    },
    
  },

  {
    slug: "bosque-los-lolos",
    title: "Bosque de los Lolos",
    status: "completed",

    excerpt:
      "Restauración ecológica para fortalecer la conectividad entre bosques y proteger fuentes de agua.",

    description:
      "Recuperación de 1.400 m² de terreno mediante la siembra de 700 árboles nativos para la protección de dos nacientes de importancia estratégica para la Zona Norte de Costa Rica.",

    location: "Zona Norte",
    year: "2025 - 2026",

    image: "/projects/sanvi/image06.JPG",

    heroImages: [
      "/projects/sanvi/image01.JPG",
      "/projects/sanvi/image02.JPG",
      "/projects/sanvi/image03.JPG",
      "/projects/sanvi/image04.JPG",
      "/projects/sanvi/image05.JPG",
      "/projects/sanvi/image06.JPG",
      "/projects/sanvi/image09.JPG",
    ],

    content: [
      "El proyecto Bosque de los Lolos consistió en la restauración de un antiguo potrero de aproximadamente 1.400 metros cuadrados ubicado en San Vicente de Ciudad Quesada. El área alberga dos nacientes de gran relevancia para las comunidades locales: una que forma parte del sistema de abastecimiento de agua de Ciudad Quesada y otra que suministra agua a la comunidad de El Porvenir.",

      "La siembra de 700 árboles nativos contribuye a la protección de estas fuentes hídricas, mejora la infiltración y regulación del agua en el suelo y fortalece la conectividad ecológica entre fragmentos de bosque cercanos, creando condiciones más favorables para la biodiversidad de la región.",

      "La iniciativa contó con el acompañamiento técnico de profesionales de la Escuela de Ingeniería Forestal y de la Escuela de Agronomía del Instituto Tecnológico de Costa Rica (TEC), quienes brindaron asesoría durante las etapas de planificación, selección de especies y establecimiento de la restauración.",

      "Debido a que el sitio se encuentra a aproximadamente 1.400 metros sobre el nivel del mar, se realizó una selección cuidadosa de especies nativas adaptadas a las condiciones climáticas, edáficas y ecológicas propias de la zona, con el objetivo de maximizar la supervivencia de los árboles y el impacto ambiental a largo plazo."
    ],

    stats: [
      { value: "700", label: "Árboles plantados" },
      { value: "2", label: "Nacientes" },
      { value: "San Vicente", label: "Lugar" },
      { value: "2024–2025", label: "Periodo" },
    ],

    cta: {
      title: "Súmate a la restauración de nuestros bosques",
      text: "Tu donación contribuye a la producción, siembra y mantenimiento de árboles nativos que protegen el agua, fortalecen la biodiversidad y restauran ecosistemas esenciales para las futuras generaciones."
    },
  },

  {
    slug: "nietos-abuela-ecologica",
    title: "Nietos de la Abuela Ecológica",
    status: "active",
    excerpt: "Llevando alegría y esperanza a niños y niñas de comunidades rurales vulnerables.",
    description:
      "Más de 1.700 regalos entregados desde 2020 a niños y niñas de comunidades rurales en situación de vulnerabilidad.",
    location: "Zona Norte, Costa Rica",
    year: "2020-2025",
    image: "/projects/nietos/nietos00.png",
    heroImages: [
      "/projects/nietos/nietos01.png",
      "/projects/nietos/nietos02.png",
      "/projects/nietos/nietos03.png",
      "/projects/nietos/nietos04.png",
      "/projects/nietos/nietos05.png",
    ],
    content: [
      "Nietos de la Abuela Ecológica es una campaña solidaria que nace en 2020 con un propósito simple y profundo: llevar un regalo navideño a niños y niñas de comunidades rurales en situación de vulnerabilidad en la Zona Norte de Costa Rica.",
      "Desde su inicio, la campaña ha entregado más de 1.700 regalos, gracias a la colaboración de padrinos, donaciones solidarias y empresas que creen en el impacto social de esta labor. Cada regalo representa mucho más que un objeto: es un gesto de acompañamiento, alegría y dignidad para las familias beneficiadas.",
      "A lo largo de los años, la campaña ha llegado a diversas comunidades:",
      "• 2020: 350 regalos en el Territorio Indígena Maleku, en los palenques El Sol, Margarita y Tonjibe.",  
      "• 2021: Alrededor de 500 regalos en Santa Rosa de Pocosol, Tres y Tres de Pocosol, así como a beneficiarios de CENCINAI en San Joaquín de Cutris y Dulce Nombre de Ciudad Quesada.",  
      "• 2022: 150 regalos entregados en Boca San Carlos.",  
      "• 2023: Cerca de 350 regalos para niños y niñas de CENCINAI de Boca Tapada, Santa Rita, Boca San Carlos, Cureñita y el área de Pediatría del Hospital San Carlos.",  
      "• 2024: 350 regalos entregados en Boca Tapada, Santa Rita, Boca San Carlos y Cureñita.",  
      "• 2025: 200 regalos distribuidos en Crucitas y Moravia de Cutris, Pediatría del Hospital San Carlos y el Hogarcito de Ciudad Quesada.",
      "La campaña es coordinada desde sus inicios por María Fernanda Murillo, y se sostiene gracias al compromiso constante de personas y organizaciones que año a año deciden sumarse como padrinos o realizar donaciones.",
      "Nietos de la Abuela Ecológica demuestra que la solidaridad también transforma territorios, crea comunidad y deja huella en la infancia.",
    ],
    stats: [
      { value: "1.700+", label: "Regalos entregados" },
      { value: "15", label: "Comunidades beneficiadas" },
      { value: "Zona Norte", label: "Territorio" },
      { value: "2020–2025", label: "Periodo" },
    ],

  },

  {
  slug: "reforestacion-consciente",
  title: "Reforestación Consciente",
  status: "completed",
  excerpt:
    "Siembra de árboles nativos para proteger nacientes de agua y fortalecer ecosistemas en La Tigra de San Carlos.",
  description:
    "Siembra de 5.000 árboles nativos para proteger nacientes de agua y fortalecer ecosistemas en La Tigra de San Carlos.",
  location: "La Tigra",
  year: "2020",
  image: "/projects/reforestacion_consciente/img01.JPG",
  heroImages: [
      "/projects/reforestacion_consciente/img01.JPG",
      "/projects/reforestacion_consciente/img02.JPG",
      "/projects/reforestacion_consciente/img03.JPG",
      "/projects/reforestacion_consciente/img04.JPG",
      "/projects/reforestacion_consciente/img05.JPG",
      "/projects/reforestacion_consciente/img06.JPG",
      "/projects/reforestacion_consciente/img07.JPG",
    ],
  content: [
    "Durante octubre, noviembre y diciembre de 2020 se realizaron varias jornadas de reforestación en la zona de La Tigra de San Carlos, logrando sembrar exitosamente 5.000 árboles de 55 especies nativas.",
    "Uno de los terrenos intervenidos colinda con el Bosque Eterno de los Niños, mientras que el otro es propiedad de la ASADA La Lucha – La Vega. Ambos terrenos albergan nacientes de agua de alto valor ecológico.",
    "En el terreno perteneciente a la ASADA se encuentran las captaciones de agua que abastecen a más de 5.000 familias, por lo que la reforestación tuvo un impacto directo en la protección del recurso hídrico.",
    "Durante las jornadas, las personas voluntarias aprendieron sobre especies forestales y fauna silvestre, y pudieron observar serpientes, ranas, aves y mamíferos en su hábitat natural.",
    "Este proyecto se desarrolló como parte de una compensación ambiental de una empresa privada, siendo ejecutado integralmente por nuestra organización."
  ],
  stats: [
    { value: "5000", label: "Árboles plantados" },
    { value: "Ara ambiguus", label: "Lapa verde" },
    { value: "La Tigra", label: "Zona" },
    { value: "2020", label: "Periodo" },
  ],
  cta: {
    title: "Ayudá a devolverle el bosque a la lapa verde",
    text: "Tu donación apoya la producción, siembra y mantenimiento de árboles nativos esenciales para la supervivencia de esta especie y la restauración del ecosistema.",
  },
    
},

 {
  slug: "un-norte-lapa-verde",
  title: "Un Norte para la Lapa Verde",
  status: "completed",
  excerpt:
    "Proyecto de restauración ecológica enfocado en la donación y siembra de almendro de montaña para proteger el hábitat de la lapa verde.",
  location: "Zona Huetar Norte y Vertiente Atlántica",
  year: "2020",
  image: "/projects/lapa_verde/lapaverde1.JPG",
  heroImages: [
      "/projects/lapa_verde/lapaverde1.JPG",
      "/projects/lapa_verde/lapaverde2.JPG",
    ],
  content: [
    "Un Norte para la Lapa Verde es un proyecto de conservación desarrollado entre noviembre de 2019 y julio de 2020, enfocado en reforzar el hábitat de una de las especies más emblemáticas y amenazadas de Costa Rica: la lapa verde.",
    "La lapa verde se encuentra catalogada como En Peligro de Extinción según la UICN y la legislación nacional. Su principal amenaza continúa siendo la pérdida de hábitat, especialmente la desaparición del almendro de montaña, árbol del cual depende directamente para alimentarse y anidar.",
    "Diversas investigaciones han demostrado que entre el 80% y 90% de la dieta de la lapa verde proviene del fruto del almendro, y que cerca del 90% de sus nidos se ubican en cavidades naturales de este árbol. Su conservación está, literalmente, ligada a la presencia del almendro en el paisaje.",
    "Ante esta realidad, el proyecto se enfocó en la donación y siembra de 5.000 árboles de almendro de montaña en la Zona Huetar Norte y la Vertiente Atlántica, regiones que forman parte del rango histórico de distribución de la especie.",
    "El proyecto integró acciones de comunicación ambiental, producción de material educativo, viverización de plantones y acompañamiento técnico a las personas beneficiarias, promoviendo el cuidado y seguimiento de los árboles sembrados.",
    "Las semillas utilizadas fueron recolectadas en sitios estratégicos como Veracruz, El Sahino de Pital, Santa Clara, La Tigra y Peñas Blancas, además del apoyo del vivero del ICE de Sarapiquí, que donó 4.000 plantones.",
    "Un Norte para la Lapa Verde sentó las bases para futuros proyectos de restauración ecológica de la Fundación Abuela Ecológica, consolidando un modelo de conservación basado en ciencia, territorio y participación comunitaria."
  ],
  stats: [
    { value: "5.000", label: "Árboles donados" },
    { value: "Dipteryx panamensis", label: "Especie clave" },
    { value: "Ara ambiguus", label: "Especie protegida" },
    { value: "9 meses", label: "Duración" },
  ],
  cta: {
    title: "Ayudá a devolverle el bosque a la lapa verde",
    text: "Tu donación apoya la producción, siembra y mantenimiento de árboles nativos esenciales para la supervivencia de esta especie y la restauración del ecosistema.",
  },
},

{
  slug: "inclusion-intercultural",
  title: "Inclusión Intercultural",
  status: "completed",
  excerpt:
    "Proyecto socioambiental que une reforestación, educación ambiental e inclusión de comunidades indígenas en la Zona Norte.",
  description:
    "Proyecto de inclusión intercultural que promueve la reforestación como espacio de encuentro, educación ambiental y fortalecimiento del tejido social entre comunidades indígenas y ciudadanía.",
  location: "Territorio Indígena Maleku",
  year: "2019",
  image: "/projects/inclusion_intercultural/inclusion00.png",
  heroImages: [

    "/projects/inclusion_intercultural/inclusion01.jpeg",
    "/projects/inclusion_intercultural/inclusion02.JPG",
    "/projects/inclusion_intercultural/inclusion00.png",
  ],
  content: [
    "Inclusión Intercultural nace con el propósito de proteger la naturaleza a través de la reforestación, utilizando esta actividad como un espacio de encuentro entre comunidades indígenas y habitantes de la Zona Norte.",
    "El proyecto integra la acción ambiental con la educación social y cultural, promoviendo el respeto, la inclusión y el aprendizaje mutuo entre personas de distintos orígenes, edades e instituciones.",
    "La reforestación funciona como un eje articulador que permite generar conciencia ambiental, fortalecer vínculos comunitarios y abrir espacios para el diálogo intercultural.",
    "El 30 de octubre de 2019 se realizó la primera edición del proyecto, con la participación aproximada de 110 personas y la presencia de representantes de las etnias Boruca, Ngöbe y Maleku.",
    "Además, el evento contó con el acompañamiento de diversas instituciones públicas, organizaciones sociales y grupos comunitarios, consolidando una experiencia colectiva de alto valor social y ambiental.",
    "Este proyecto se concibe como un motor para futuras iniciativas que promuevan un desarrollo más inclusivo y sostenible, no solo en la Zona Norte, sino a nivel nacional."
  ],
  stats: [
    { value: "1.000", label: "Árboles plantados" },
    { value: "110", label: "Personas participantes" },
    { value: "3", label: "Pueblos indígenas" },
    { value: "2019", label: "Año" },
  ],
},


];
