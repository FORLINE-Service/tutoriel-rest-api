const express = require("express");
const { connect } = require("./db/connect");
const routerUtilisateurs = require("./routers/utilisateur");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api/v1", routerUtilisateurs);

connect("mongodb://127.0.0.1:27017/", (err) => {
  if (err) {
    console.log("Erreur lors de la connexion à la base de données");
    process.exit(-1);
  } else {
    console.log("Connexion avec la base de données établie");
    app.listen(3000);
    console.log("Attente des requêtes au port 3OOO");
  }
});
// connect("mongodb+srv://apedh:nitGA05t4rIfpdui@cluster0.zbqhk9u.mongodb.net/test", (err) => {
//   if (err) {
//     console.log("Erreur lors de la connexion à la base de données");
//     process.exit(-1);
//   } else {
//     console.log("Connexion avec la base de données établie");
//     app.listen(3000);
//     console.log("Attente des requêtes au port 3OOO");
//   }
// });

