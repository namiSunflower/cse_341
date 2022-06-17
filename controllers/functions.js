const { json } = require('body-parser');
const mongodb = require('../db/connect');
const ObjectId = require('mongodb').ObjectId;

const displayAll = async (req, res, next) => {
  //#swagger.summary = Use to request all contacts
  /* #swagger.responses[200] = { 
              description: 'Successfully retrieved all contacts.' 
  } */
  const result = await mongodb.getDb().db('cse341').collection('contacts').find();
  result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists);
  });
};

const displayOne = async (req, res, next) => {
  //#swagger.summary = Use to create update existing contact
   /* #swagger.responses[200] = { 
              description: 'Successfully updated the contact.' 
   }
  #swagger.parameters['id'] = {description: 'contact user ID'}
   */
  const userId = new ObjectId(req.params.id);
  const result = await mongodb
    .getDb()
    .db('cse341')
    .collection('contacts')
    .find({ _id: userId });
  result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists[0]);
  });
};

const createOne = async (req, res, next) => {
   //#swagger.summary = Use to create a new contact
   /* #swagger.responses[201] = { 
              description: 'Successfully created a new contact.' 
   }
   #swagger.responses[500] = {
            description: 'Failed to create new contact.'
   }
   */
  const newContact = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    favoriteColor: req.body.favoriteColor,
    birthday: req.body.birthday
  }
  const result = await mongodb.getDb().db('cse341').collection('contacts').insertOne(newContact);
  if (result.acknowledged){
    res.status(201).json(result);
  }
  else{
    res.status(500).json(result.error || 'An error occurred while creating the new contact.')
  }
};

const updateOne = async (req, res, next) => {
  //#swagger.summary = Use to create update existing contact
   /* #swagger.responses[204] = { 
              description: 'Successfully updated the contact.' 
   }
   #swagger.responses[500] = {
            description: 'Failed to create new contact.'
   }
  #swagger.parameters['id'] = {description: 'contact user ID'}
   */
  const userId = new ObjectId(req.params.id);
  //Be aware that using updateOne instead will update specific fields only
  const updatedContact = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    favoriteColor: req.body.favoriteColor,
    birthday: req.body.birthday
  }
  const result = await mongodb
    .getDb()
    .db('cse341')
    .collection('contacts')
    .replaceOne({_id:userId},updatedContact);
    console.log(result);
    if(result.modifiedCount > 0){
      res.status(204).send();
    } else {
      res.status(500).json(result.error || 'An error occurred while updating the contact.')
    }
}

const deleteOne = async(req, res) => {
   //#swagger.summary = Use to delete a contact
   /* #swagger.responses[204] = { 
              description: 'Successfully deleted the contact.' 
   }
   #swagger.responses[500] = {
            description: 'Failed to delete contact.'
   }
   #swagger.parameters['id'] = {description: 'contact user ID'}
   */ 
  const userId = new ObjectId(req.params.id);
  const result = await mongodb
  .getDb()
  .db('cse341')
  .collection('contacts')
  .remove({ _id: userId }, true);
  if (result.deletedCount > 0){
    res.status(204).send();
  } else {
    res.status(500).json(result.error || 'An error occurred while deleting the contact');
  }
}

module.exports = {displayAll, displayOne, createOne, updateOne, deleteOne};