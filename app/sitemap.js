export default function sitemap() {
  const baseUrl = "https://alexisyvonnou.com";

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      priority: 1,
    },
    {
      url: `${baseUrl}/a-propos`,
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: `${baseUrl}/creation-de-contenus`,
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: `${baseUrl}/photographie/portraits`,
      lastModified: new Date(),
      priority: 0.7,
    },
    {
      url: `${baseUrl}/photographie/nature-paysage-architecture`,
      lastModified: new Date(),
      priority: 0.7,
    },
    {
      url: `${baseUrl}/photographie/course-au-large`,
      lastModified: new Date(),
      priority: 0.7,
    },
    {
      url: `${baseUrl}/photographie/surf`,
      lastModified: new Date(),
      priority: 0.7,
    },
    {
      url: `${baseUrl}/photographie/wing-foil`,
      lastModified: new Date(),
      priority: 0.7,
    },
    {
      url: `${baseUrl}/photographie/trail`,
      lastModified: new Date(),
      priority: 0.7,
    },
    {
      url: `${baseUrl}/photographie/retour-charlie-dalin-vendee-globe-24-25`,
      lastModified: new Date(),
      priority: 0.7,
    },
    {
      url: `${baseUrl}/photographie/mini-650`,
      lastModified: new Date(),
      priority: 0.7,
    },
  ];
}