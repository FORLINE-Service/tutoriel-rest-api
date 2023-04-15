const { ObjectID } = require("bson");
const client = require("../db/connect");
const { Juridique } = require("../models/juridique");

const ajouterJuridique = async (req, res) => {
  try {
    let juridique = new Juridique(
      req.body.A1,
      req.body.A3,
      req.body.A4,
      req.body.A5,
      req.body.A6,
      req.body.A8,
      req.body.B1LN1,
      req.body.B2LN2,
      req.body.B3LN3,
      req.body.B4LN4,
      req.body.B5ORD1,
      req.body.B6ORD2,
      req.body.B7INC,
      req.body.B8AN1,
      req.body.B9AN2,
      req.body.B10CZS1,
      req.body.B11CZS2,
      req.body.B12CZS3,
      req.body.B13CZS4,
      req.body.B14CZS5,
      req.body.B15CZS6,
      req.body.B16CZS7,
      req.body.B17CZS8,
      req.body.B18CZS9,
      req.body.B19CZ10,
      req.body.B20CS1,
      req.body.B21CS2,
      req.body.B22CS3,
      req.body.B23CS4,
      req.body.B24CS5,
      req.body.B25CS6,
      req.body.B26CS7,

      req.body.B1B2B3,
      req.body.B4B5,
      req.body.B4B5,
      req.body.C1C2,
      req.body.lieu,
      req.body.Numdos,
      req.body.datedepdos,
      req.body.C5,
      req.body.C6,
      req.body.C7,
      req.body.C8,
      req.body.C8B,
      req.body.C9,
      req.body.C10,
      req.body.C11,
      req.body.C12,
      req.body.C12B,
      req.body.C14,
      req.body.C15,
      req.body.C16,
      req.body.D,
      req.body.E,
      req.body.coderesp,
      req.body.fonction,
      date= Date(),
      

    );
    let result = await client
      .db()
      .collection("juridiques")
      .insertOne(juridique);
      console.log(200)

      

    res.status(200).json(result);
  } catch (error) {
    console.log(error);
    res.status(501).json(error);
  }
};

const getJuridiques = async (req, res) => {
  try {
    let cursor = client
      .db()
      .collection("juridiques")
      .find()
      .sort({ nom: 1 });
    let result = await cursor.toArray();
    if (result.length > 0) {
      res.status(200).json(result);
    } else {
      res.status(204).json({ msg: "Aucun juridique trouvé" });
    }
  } catch (error) {
    console.log(error);
    res.status(501).json(error);
  }
};

const getJuridique = async (req, res) => {
  try {
    let id = new ObjectID(req.params.id);
    let cursor = client.db().collection("juridiques").find({ _id: id });
    let result = await cursor.toArray();
    if (result.length > 0) {
      res.status(200).json(result[0]);
    } else {
      res.status(204).json({ msg: "Cet juridique n'existe pas" });
    }
  } catch (error) {
    console.log(error);
    res.status(501).json(error);
  }
};

const updateJuridique = async (req, res) => {
  try {
    let id = new ObjectID(req.params.id);
    let noms = req.body.noms;
    let adresse = req.body.adresse;
    let telephone = req.body.telephone;
    let result = await client
      .db()
      .collection("juridiques")
      .updateOne({ _id: id }, { $set: { noms, adresse, telephone } });

    if (result.modifiedCount === 1) {
      res.status(200).json({ msg: "Modification réussie" });
    } else {
      res.status(404).json({ msg: "Cet juridique n'existe pas" });
    }
  } catch (error) {
    console.log(error);
    res.status(501).json(error);
  }
};

const deleteJuridique = async (req, res) => {
  try {
    let id = new ObjectID(req.params.id);
    let result = await client
      .db()
      .collection("juridiques")
      .deleteOne({ _id: id });
    if (result.deletedCount === 1) {
      res.status(200).json({ msg: "Suppression réussie" });
    } else {
      res.status(404).json({ msg: "Cet juridique n'existe pas" });
    }
  } catch (error) {
    console.log(error);

    res.status(501).json(error);
  }
};

module.exports = {
  ajouterJuridique,
  getJuridiques,
  getJuridique,
  updateJuridique,
  deleteJuridique,
};
