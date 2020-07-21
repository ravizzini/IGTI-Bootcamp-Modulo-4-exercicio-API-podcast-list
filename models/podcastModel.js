//exportação do esquema para index.js
export default (mongoose) => {
  //definição do schema
  const schema = mongoose.Schema({
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    source: {
      type: String,
      required: true,
    },
    itunes: String,
    rss: String,
    soundcloud: String,
    android: String,
  });

  //atribui esquema a coleção
  const Podcast = mongoose.model('podcast', schema, 'podcasts');

  return Podcast;
};
