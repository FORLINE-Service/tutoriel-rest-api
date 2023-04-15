class Alerte {
  constructor(nom, postnom, prenom, sexe, sugestion, territoire,  telephone, date) {
    this.nom = nom;
    this.postnom =postnom;
    this.prenom = prenom;
    this.sexe = sexe;
    this.territoire = territoire;
    this.telephone = telephone;
    this.sugestion = sugestion;
    this.date = date;

  }
}

module.exports = { Alerte };
