const { ObjectID } = require("bson");
const client = require("../db/connect");
const { Alerte } = require("../models/alerte");

const ajouterAlerte = async (req, res) => {
  try {
    let alerte = new Alerte(
      req.body.nom,
      req.body.postnom,
      req.body.prenom,
      req.body.sexe,
      req.body.datenais,
      req.body.territoire,
      req.body.fonction,
      req.body.adresse,
      req.body.telephone,
      req.body.etatcivile,
      req.body.lieunai,
      req.body.service,
      req.body.numpiece,
      date= Date(),
      

    );
    let result = await client
      .db()
      .collection("alertes")
      .insertOne(alerte);
      console.log(200)

      

    res.status(200).json(result);
  } catch (error) {
    console.log(error);
    res.status(501).json(error);
  }
};

const getAlertes = async (req, res) => {
  try {
    let cursor = client
      .db()
      .collection("alertes")
      .find()
      .sort({ nom: 1 });
    let result = await cursor.toArray();
    if (result.length > 0) {
      res.status(200).json(result);
    } else {
      res.status(204).json({ msg: "Aucun alerte trouvé" });
    }
  } catch (error) {
    console.log(error);
    res.status(501).json(error);
  }
};

const getAlerte = async (req, res) => {
  try {
    let id = new ObjectID(req.params.id);
    let cursor = client.db().collection("alertes").find({ _id: id });
    let result = await cursor.toArray();
    if (result.length > 0) {
      res.status(200).json(result[0]);
    } else {
      res.status(204).json({ msg: "Cet alerte n'existe pas" });
    }
  } catch (error) {
    console.log(error);
    res.status(501).json(error);
  }
};

const updateAlerte = async (req, res) => {
  try {
    let id = new ObjectID(req.params.id);
    let noms = req.body.noms;
    let adresse = req.body.adresse;
    let telephone = req.body.telephone;
    let result = await client
      .db()
      .collection("alertes")
      .updateOne({ _id: id }, { $set: { noms, adresse, telephone } });

    if (result.modifiedCount === 1) {
      res.status(200).json({ msg: "Modification réussie" });
    } else {
      res.status(404).json({ msg: "Cet alerte n'existe pas" });
    }
  } catch (error) {
    console.log(error);
    res.status(501).json(error);
  }
};

const deleteAlerte = async (req, res) => {
  try {
    let id = new ObjectID(req.params.id);
    let result = await client
      .db()
      .collection("alertes")
      .deleteOne({ _id: id });
    if (result.deletedCount === 1) {
      res.status(200).json({ msg: "Suppression réussie" });
    } else {
      res.status(404).json({ msg: "Cet alerte n'existe pas" });
    }
  } catch (error) {
    console.log(error);

    res.status(501).json(error);
  }
};

module.exports = {
  ajouterAlerte,
  getAlertes,
  getAlerte,
  updateAlerte,
  deleteAlerte,
};
