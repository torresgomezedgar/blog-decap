window.CMS_CONFIG = {
  backend: {
    name: "github",
    repo: "torresgomezedgar/blog-decap",
    branch: "main",
    auth_type: "token",
    token: "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", // 🚀 Vercel lo reemplaza
  },
  media_folder: "public/images/uploads",
  public_folder: "/images/uploads",
  collections: [
    {
      name: "posts",
      label: "Blog",
      folder: "src/content/posts",
      create: true,
      slug: "{{slug}}",
      fields: [
        { label: "Título", name: "title", widget: "string" },
        { label: "Fecha", name: "date", widget: "datetime" },
        { label: "Imagen", name: "image", widget: "image" },
        { label: "Contenido", name: "body", widget: "markdown" },
      ],
    },
  ],
};
