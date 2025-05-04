
import mongoose from 'mongoose';

const propertySchema = new mongoose.Schema({
    // General Details
    propertyTitle: { type: String, required: true },
    propertyDescription: { type: String},
    propertyAddress: { type: String },
    propertyCountry: { type: String},
    propertyState: { type: String},
    propertyZip: { type: String },
    propertyFeaturedImage: { type: String },
    media: [{ type: String }], // links to images/videos

    // Category and Type
    category: { type: String,enum: ['Buy', 'Rent', 'Off Plan', 'Commercial for Buy', 'Commercial for Rent'] },
    propertyType: { type: String }, // e.g. Apartment, Villa, etc.
    
    // Price Details
    propertyPrice: { type: Number},
    numberOfCheques: { type: Number },
    brokerFee: { type: Number},
    
    // Rent-specific
    roiPercentage: { type: Number },
    
    // Off Plan-specific
    completionDate: { type: String },
    paymentPlan: { type: String },
    developer: { type: String },
    
    // Commercial-specific
    commercialType: { type: String },
    
    // Property Features
    propertySize: { type: Number }, // in sq ft
    propertyRooms: { type: Number},
    propertyBedrooms: { type: Number},
    propertyKitchen: { type: Number},
    propertyBathrooms: { type: Number },
    
    // Legal and Agent
    dldPermitNumber: { type: String },
    agent: { type: String }, // Changed from ObjectId to String for simplicity
    dldQrCode: { type: String},
    
    // Location
    latitude: { type: Number },
    longitude: { type: Number },
    
    // Features and Amenities
    features: [{ type: String }],
    amenities: [{ type: String }],

    category: { 
        type: String, 
        required: true,
        enum: ['Buy', 'Rent', 'Off Plan', 'Commercial for Buy', 'Commercial for Rent'] 
    },
}, {
    timestamps: true
});

export default mongoose.model('Property', propertySchema);
