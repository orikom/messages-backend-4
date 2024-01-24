const Message = require('../models/messageModel');

const addNewMessageToDB = async({ title, content }) => {
  const messageToAdd = new Message({
    title,
    content
  });

  try{
    const addedMessage = await messageToAdd.save();
    return addedMessage;
  } catch(err){
    throw new Error('failed to add new message to db');
  }
}

const getAllMessagesFromDB = async () => {
  try{
    const allMessagesFromDB = await Message.find({})
    return allMessagesFromDB;
  } catch (err){
    throw new Error('failed to fetch messages from db');

  }
}

module.exports = {
  addNewMessageToDB,
  getAllMessagesFromDB
}

