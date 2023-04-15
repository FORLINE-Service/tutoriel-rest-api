const { ObjectID } = require("bson");
const client = require("../db/connect");
const { Sugestion } = require("../models/sugestion");

const ajouterSugestion = async (req, res) => {
  try {
    let sugestion = new Sugestion(
      req.body.nom,
      req.body.postnom,
      req.body.prenom,
      req.body.sexe,

      req.body.territoire,
      req.sugestion.sugestion,
      
   
      req.body.telephone,
  
     
    
      date= Date(),
      

    );
    let result = await client
      .db()
      .collection("sugestions")
      .insertOne(sugestion);
      console.log(200)

      

    res.status(200).json(result);
  } catch (error) {
    console.log(error);
    res.status(501).json(error);
  }
};

const getSugestions = async (req, res) => {
  try {
    let cursor = client
      .db()
      .collection("sugestions")
      .find()
      .sort({ nom: 1 });
    let result = await cursor.toArray();
    if (result.length > 0) {
      res.status(200).json(result);
    } else {
      res.status(204).json({ msg: "Aucun sugestion trouvé" });
    }
  } catch (error) {
    console.log(error);
    res.status(501).json(error);
  }
};

const getSugestion = async (req, res) => {
  try {
    let id = new ObjectID(req.params.id);
    let cursor = client.db().collection("sugestions").find({ _id: id });
    let result = await cursor.toArray();
    if (result.length > 0) {
      res.status(200).json(result[0]);
    } else {
      res.status(204).json({ msg: "Cet sugestion n'existe pas" });
    }
  } catch (error) {
    console.log(error);
    res.status(501).json(error);
  }
};

const updateSugestion = async (req, res) => {
  try {
    let id = new ObjectID(req.params.id);
    let noms = req.body.noms;
    let adresse = req.body.adresse;
    let telephone = req.body.telephone;
    let result = await client
      .db()
      .collection("sugestions")
      .updateOne({ _id: id }, { $set: { noms, adresse, telephone } });

    if (result.modifiedCount === 1) {
      res.status(200).json({ msg: "Modification réussie" });
    } else {
      res.status(404).json({ msg: "Cet sugestion n'existe pas" });
    }
  } catch (error) {
    console.log(error);
    res.status(501).json(error);
  }
};

const deleteSugestion = async (req, res) => {
  try {
    let id = new ObjectID(req.params.id);
    let result = await client
      .db()
      .collection("sugestions")
      .deleteOne({ _id: id });
    if (result.deletedCount === 1) {
      res.status(200).json({ msg: "Suppression réussie" });
    } else {
      res.status(404).json({ msg: "Cet sugestion n'existe pas" });
    }
  } catch (error) {
    console.log(error);

    res.status(501).json(error);
  }
};

module.exports = {
  ajouterSugestion,
  getSugestions,
  getSugestion,
  updateSugestion,
  deleteSugestion,
};
