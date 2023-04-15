const { ObjectID } = require("bson");
const { resourceUsage } = require("process");
const client = require("../db/connect");
const { Session } = require("../models/session");

const ajouterSession = async (req, res) => {
  // try {
  //   let session = new Session(
      
  //     req.body.telephone,
  //     req.body.motdepass,
      
      

  //   );
  //   let result = await client
  //     .db()
  //     .collection("sessions")
  //     .insertOne(session);
  //     console.log(200)



  //   res.status(200).json(result);
  // } catch (error) {
  //   console.log(error);
  //   res.status(501).json(error);
  // }

 
    
    let num= req.body.telephone
    let pwd= req.body.motdepass

      
    let cursor = client.db().collection("users").find({ telephone: num, motdepass: pwd });

    let result2 = await cursor.toArray();
    if (result2.length > 0) {
      res.status(200).json(result2[0]);
    } else {
      res.status(204).json({ msg: "Cet session n'existe pas" });
    }
    


}

const getSessions = async (req, res) => {
  try {
    let cursor = client
      .db()
      .collection("sessions")
      .find()
      .sort({ nom: 1 });
    let result = await cursor.toArray();
    if (result.length > 0) {
      res.status(200).json(result);
    } else {
      res.status(204).json({ msg: "Aucun session trouvé" });
    }
  } catch (error) {
    console.log(error);
    res.status(501).json(error);
  }
};

const getSession = async (req, res) => {
  try {
    let id = new ObjectID(req.params.id);
    let cursor = client.db().collection("sessions").find({ _id: id });
    let result = await cursor.toArray();
    if (result.length > 0) {
      res.status(200).json(result[0]);
    } else {
      res.status(204).json({ msg: "Cet session n'existe pas" });
    }
  } catch (error) {
    console.log(error);
    res.status(501).json(error);
  }
};

const updateSession = async (req, res) => {
  try {
    let id = new ObjectID(req.params.id);
    let noms = req.body.noms;
    let adresse = req.body.adresse;
    let telephone = req.body.telephone;
    let result = await client
      .db()
      .collection("sessions")
      .updateOne({ _id: id }, { $set: { noms, adresse, telephone } });

    if (result.modifiedCount === 1) {
      res.status(200).json({ msg: "Modification réussie" });
    } else {
      res.status(404).json({ msg: "Cet session n'existe pas" });
    }
  } catch (error) {
    console.log(error);
    res.status(501).json(error);
  }
};

const deleteSession = async (req, res) => {
  try {
    let id = new ObjectID(req.params.id);
    let result = await client
      .db()
      .collection("sessions")
      .deleteOne({ _id: id });
    if (result.deletedCount === 1) {
      res.status(200).json({ msg: "Suppression réussie" });
    } else {
      res.status(404).json({ msg: "Cet session n'existe pas" });
    }
  } catch (error) {
    console.log(error);

    res.status(501).json(error);
  }
};

module.exports = {
  ajouterSession,
  getSessions,
  getSession,
  updateSession,
  deleteSession,
};
