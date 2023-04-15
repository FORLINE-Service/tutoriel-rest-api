class User {
  constructor(nom, postnom, prenom, sexe, datenais, territoire, fonction, adresse, telephone, motdepass) {
    this.nom = nom;
    this.postnom =postnom;
    this.prenom = prenom;
    this.sexe = sexe;
    this.datenais = datenais;
    this.territoire = territoire;
    this.fonction= fonction;
    this.adresse = adresse;
    this.telephone = telephone;
    this.motdepass = motdepass;

  }
}

module.exports = { User };
