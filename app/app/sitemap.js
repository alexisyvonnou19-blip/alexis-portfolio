export default function sitemap() {
  const baseUrl = "https://alexisyvonnou.com";

  const routes = [
    "",
    "/photographie/portraits",
    "/photographie/nature-paysage-architecture",
    "/photographie/course-au-large",
    "/photographie/surf",
    "/photographie/wing-foil",
    "/photographie/trail",
    "/photographie/retour-charlie-dalin-vendee-globe-24-25",
    "/photographie/mini-650",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "monthly" : "yearly",
    priority: route === "" ? 1 : 0.8,
  }));
}