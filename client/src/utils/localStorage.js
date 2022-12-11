export const getSavedPetIds = () => {
    const savedPetIds = localStorage.getItem('saved_pets')
      ? JSON.parse(localStorage.getItem('saved_pets'))
      : [];
  
    return savedPetIds;
  };
  
  export const savePetIds = (petIdArr) => {
    if (petIdArr.length) {
      localStorage.setItem('saved_pets', JSON.stringify(petIdArr));
    } else {
      localStorage.removeItem('saved_pets');
    }
  };
  
  export const removePetId = (petId) => {
    const savedPetIds = localStorage.getItem('saved_pets')
      ? JSON.parse(localStorage.getItem('saved_pets'))
      : null;
  
    if (!savedPetIds) {
      return false;
    }
  
    const updatedSavedPetIds = savedPetIds?.filter((savedPetId) => savedPetId !== petId);
    localStorage.setItem('saved_pets', JSON.stringify(updatedSavedPetIds));
  
    return true;
  };
  