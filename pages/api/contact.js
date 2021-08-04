import emailRegex from '../../utils/emailRegex';
import { connectDB, insertDB } from '../../utils/api-utils';

async function handler(req, res) {
  if (req.method === 'POST') {
    const { email, name, message } = req.body;

    if (
      !email ||
      !emailRegex.test(email) ||
      !name ||
      name.trim() === '' ||
      !message ||
      message.trim() === ''
    ) {
      return res.status(422).json({ message: 'Invalid input.' });
    }

    const newMessage = { email, name, message };

    let resultStatusCode;
    let resultObj;

    const [dataConnectDB, errConnectDB = null] = await connectDB();
    if (dataConnectDB && !errConnectDB) {
      const [dataInsertDB, errInsertDB = null] = await insertDB(
        dataConnectDB.client,
        dataConnectDB.db,
        'messages',
        newMessage
      );
      if (dataInsertDB && !errInsertDB) {
        resultStatusCode = dataInsertDB.statusCode;
        resultObj = { message: dataInsertDB.message, data: dataInsertDB.data };
      } else {
        resultStatusCode = errInsertDB.statusCode;
        resultObj = { message: errInsertDB.message };
      }
    } else {
      resultStatusCode = errConnectDB.statusCode;
      resultObj = { message: errConnectDB.message };
    }

    return res.status(resultStatusCode).json(resultObj);
  }
}

export default handler;
