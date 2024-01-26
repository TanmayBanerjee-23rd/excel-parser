interface iRetailerSchema {
  id: number;
  name: string;
  nameSlug: string;
  contactInfo: iContactInfo;
}

interface iContactInfo {
  phoneNumber: string;
  email: string;
  website: string;
  location: iLocation;
}

interface iLocation {
  lat: number;
  lng: number;
  address: string;
  street: string;
  city: string;
  state: string;
  zip: number;
  country: string;
}
