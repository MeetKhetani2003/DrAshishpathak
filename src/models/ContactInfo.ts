import mongoose, { Schema, Document } from 'mongoose';

export interface IContactInfo extends Document {
  address: string;
  phone: string;
  email: string;
  workingHours: string;
  facebook?: string;
  twitter?: string;
  linkedin?: string;
}

const ContactInfoSchema: Schema = new Schema({
  address: { type: String, required: true },
  phone: { type: String, required: true },
  email: { type: String, required: true },
  workingHours: { type: String, required: true },
  facebook: { type: String },
  twitter: { type: String },
  linkedin: { type: String }
}, {
  timestamps: true
});

export default mongoose.models.ContactInfo || mongoose.model<IContactInfo>('ContactInfo', ContactInfoSchema);
