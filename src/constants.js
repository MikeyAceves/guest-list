const API =
  "https://fsa-crud-2aa9294fe819.herokuapp.com/api/2601-FTB-ET-WEB-FT/Guests";

export async function getGuests() {
  try {
    const response = await fetch(API);
    const result = await response.json();
    return result.data;
  } catch (e) {
    console.error(e);
    return [];
  }
}

export async function getGuest(id) {
  try {
    const response = await fetch(API + id);
    const result = await response.json();
    return result.data;
  } catch (e) {
    console.error(e);
    return null;
  }
}
