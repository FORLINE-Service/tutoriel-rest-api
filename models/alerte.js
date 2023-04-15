class Alerte {
  constructor(nom, postnom, prenom, sexe, datenais, territoire, fonction, adresse, telephone, etatcivile, lieunai, service, numpiece, date) {
    this.nom = nom;
    this.postnom =postnom;
    this.prenom = prenom;
    this.sexe = sexe;
    this.datenais = datenais;
    this.territoire = territoire;
    this.fonction= fonction;
    this.adresse = adresse;
    this.telephone = telephone;
    this.etatcivile = etatcivile;
    this.lieunai = lieunai;
    this.service = service;
    this.numpiece = numpiece;
    this.date = date;

  }
}

module.exports = { Alerte };
