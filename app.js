const express = require("express");
const { connect } = require("./db/connect");
const routerUtilisateurs = require("./routers/utilisateur");
const routerAlertes = require("./routers/alerte");
const routerAvecs = require("./routers/avec");
const routerMedicales = require("./routers/medicale");
const routerUsers = require("./routers/user");
const routerSugestions = require("./routers/sugestion");
const routerPsychologiques = require("./routers/psychologique");
const routerJuridiques = require("./routers/juridique");
const routerSessions = require("./routers/session");
const cors = require('cors')
const app = express();

app.use(
  cors({
    origin: 'https://sosv1.netlify.app/',
    // origin: 'http://sosv1.netlify.app',
    // origin: 'http://localhost:3000',
    credentials: false,
    
  })
);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api/v1", routerUtilisateurs);
app.use("/api/v1", routerAlertes);
app.use("/api/v1", routerMedicales);
app.use("/api/v1", routerSessions);
app.use("/api/v1", routerUsers);
app.use("/api/v1", routerPsychologiques);
app.use("/api/v1", routerJuridiques);
app.use("/api/v1", routerSugestions);
app.use("/api/v1", routerAvecs);


// connect("mongodb+srv://apedh:nitGA05t4rIfpdui@cluster0.zbqhk9u.mongodb.net/test", (err) => {
//   if (err) {
//     console.log("Erreur lors de la connexion à la base de données");
//     process.exit(-1);
//   } else {
//     console.log("Connexion avec la base de données établie");
//     app.listen(1337);
//     console.log("Attente des requêtes au port 1337");
//   }
// });


connect("mongodb+srv://apedh:FadEUVO4PtlpHyPm@cluster0.s6vypwx.mongodb.net/test", (err) => {
  if (err) {
    console.log("Erreur lors de la connexion à la base de données");
    process.exit(-1);
  } else {
    console.log("Connexion avec la base de données établie");
    app.listen(1337);
    console.log("Attente des requêtes au port 1337");
  }
});




