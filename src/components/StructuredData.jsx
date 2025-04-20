import React from 'react';
import Head from './Head';
import {
  getPersonSchema,
  getWebsiteSchema,
  getServicesSchema,
  getPortfolioSchema,
  getResumeSchema,
  getTestimonialsSchema,
  getContactSchema
} from '../utils/schemaHelpers';

const StructuredData = ({ activeSection }) => {
  // Always include person and website schema
  const personSchema = getPersonSchema();
  const websiteSchema = getWebsiteSchema();

  // Get section-specific schema
  const getSectionSchema = (section) => {
    switch(section) {
      case 'services':
        return getServicesSchema();
      case 'portfolio':
        return getPortfolioSchema();
      case 'skills':
        return getResumeSchema(); // Skills are included in the resume schema
      case 'resume':
        return getResumeSchema();
      case 'testimonials':
        return getTestimonialsSchema();
      case 'contact':
        return getContactSchema();
      default:
        return null;
    }
  };

  const sectionSchema = getSectionSchema(activeSection);
  
  // Combine schemas into a single schema array
  // This will be stringified in the Head component
  const schemas = [personSchema, websiteSchema];
  if (sectionSchema) {
    schemas.push(sectionSchema);
  }

  return (
    <Head schema={schemas} />
  );
};

export default StructuredData;