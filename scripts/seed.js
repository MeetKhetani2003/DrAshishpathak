import mongoose from 'mongoose';

// Connect to MongoDB
const uri = process.env.MONGODB_URI || 'mongodb://codevibe2003_db_user:uOen7CiFtNmv5qIa@ac-ouysurt-shard-00-00.3soisin.mongodb.net:27017,ac-ouysurt-shard-00-01.3soisin.mongodb.net:27017,ac-ouysurt-shard-00-02.3soisin.mongodb.net:27017/advocate?ssl=true&replicaSet=atlas-tspvzs-shard-0&authSource=admin&appName=Cluster0';

mongoose.connect(uri)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Connection error:', err));

const ServiceSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  icon: { type: String, default: 'FileText' },
  features: [{ type: String }]
}, { timestamps: true });

const ContactInfoSchema = new mongoose.Schema({
  address: { type: String, required: true },
  phone: { type: String, required: true },
  email: { type: String, required: true },
  workingHours: { type: String, required: true },
  facebook: { type: String },
  twitter: { type: String },
  linkedin: { type: String }
}, { timestamps: true });

const Service = mongoose.models.Service || mongoose.model('Service', ServiceSchema);
const ContactInfo = mongoose.models.ContactInfo || mongoose.model('ContactInfo', ContactInfoSchema);

const contactData = {
  address: "Corporate Office: Greater Noida, Uttar Pradesh\nRegional Office: Agra, Uttar Pradesh",
  phone: "+91 90270 62686, +91 82738 20488",
  email: "support@medicolegalexperts.in",
  workingHours: "Mon – Sat · 10:00 – 19:00 IST",
  facebook: "https://www.facebook.com/medicolegalxperts",
  twitter: "",
  linkedin: ""
};

const servicesData = [
  {
    title: "Advocates & Courts",
    icon: "Scale",
    description: "Independent scientific reading of medical evidence for counsel and the bench — injury mechanics, record authenticity and expert cross-examination briefs.",
    features: ["Evidence reading", "Expert briefs", "Independent opinion"]
  },
  {
    title: "Clinical & Forensic Toxicology",
    icon: "FlaskConical",
    description: "Audit of poisoning, substance and drug-related evidence: sample chain, report limitations, dose interpretation and alternative explanations.",
    features: ["Sample chain audit", "Report limitations", "Dose interpretation"]
  },
  {
    title: "Hospital & Practitioner Defense",
    icon: "Hospital",
    description: "Medico-legal audits, negligence defence advisory, emergency MLC protocol design and staff training for healthcare institutions.",
    features: ["Medico-legal audits", "Negligence defence advisory", "MLC protocol design"]
  },
  {
    title: "Orthopedic & MACT Disability",
    icon: "Bone",
    description: "Trauma biomechanics, disability percentage evaluation and consistency review between clinical examination and certificate claims.",
    features: ["Trauma biomechanics", "Disability percentage evaluation", "Consistency review"]
  },
  {
    title: "Law, Medical & Nursing Colleges",
    icon: "GraduationCap",
    description: "Workshops and training that place forensic method in front of future practitioners.",
    features: ["Workshops", "Training", "Forensic method"]
  },
  {
    title: "Corporates, Insurers & TPA",
    icon: "Building",
    description: "Claim fraud audit and compensation verification grounded in clinical records.",
    features: ["Claim fraud audit", "Compensation verification"]
  }
];

async function seed() {
  try {
    // Clear existing
    await Service.deleteMany({});
    await ContactInfo.deleteMany({});
    
    // Seed Contact Info
    const contact = new ContactInfo(contactData);
    await contact.save();
    console.log('Seeded Contact Info');

    // Seed Services
    for (const s of servicesData) {
      const service = new Service(s);
      await service.save();
    }
    console.log('Seeded Services');

    process.exit(0);
  } catch (error) {
    console.error('Seed error:', error);
    process.exit(1);
  }
}

seed();
