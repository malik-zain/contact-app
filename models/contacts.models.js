import mongoose from 'mongoose'; 
import mongoosePaginate from 'mongoose-paginate-v2';

mongoose.plugin(mongoosePaginate);

const contactSchema = new mongoose.Schema({
  firstname: String,
  lastname: String,
  phone: String,
  email: String,
  adress: String
}, { collection: 'contacts' });  

const Contact = mongoose.model('Contact', contactSchema);

export default Contact;
