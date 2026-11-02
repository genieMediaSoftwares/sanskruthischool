export type PageRoute = 
  | 'home'
  | 'about'
  | 'academics'
  | 'campus'
  | 'sports-and-activities'
  | 'student-life'
  | 'admissions'
  | 'media'
  | 'online-payment'
  | 'mandatory-public-disclosure'
  | 'contact';

export interface SchoolInfo {
  name: string;
  tagline: string;
  motto: string;
  affiliationNumber: string;
  schoolCode: string;
  foundedYear: string;
  parentSociety: string;
  address: {
    line1: string;
    area: string;
    city: string;
    state: string;
    pinCode: string;
    country: string;
  };
  phones: string[];
  emails: {
    general: string;
    admissions: string;
    principal: string;
  };
  officeHours: string;
  whatsappNumber: string;
  socials: {
    facebook: string;
    instagram: string;
    youtube: string;
    linkedin?: string;
  };
}

export interface AcademicProgramme {
  id: string;
  title: string;
  ageGroup: string;
  grades: string;
  summary: string;
  features: string[];
  highlights: string[];
}

export interface SportActivity {
  id: string;
  name: string;
  category: 'Academy Sport' | 'Martial Art' | 'Outdoor Field' | 'Cadet & Culture';
  summary: string;
  coach: string;
  facilities: string[];
  schedule: string;
  achievementsSummary: string;
}

export interface AchievementItem {
  id: string;
  year: string;
  category: 'CBSE Academics' | 'Sports & Athletics' | 'STEM & Innovation' | 'Cultural & Arts';
  title: string;
  description: string;
  badge: string;
}

export interface NewsNotice {
  id: string;
  date: string;
  category: 'Circular' | 'Event' | 'Announcement' | 'Academic';
  title: string;
  summary: string;
  fileSize?: string;
  downloadUrl?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'campus' | 'academics' | 'sports' | 'cultural' | 'kindergarten' | 'residential';
  caption: string;
  aspectRatio?: '16:9' | '4:3' | '1:1';
}

export interface DisclosureDoc {
  id?: string;
  sno: number;
  information: string;
  docName: string;
  fileSize: string;
  verifiedDate: string;
}
