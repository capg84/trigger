export const getSavedPetIds = () => {
    const savedPetIds = localStorage.getItem('saved_pets')
      ? JSON.parse(localStorage.getItem('saved_pets'))
      : [];
  
    return savedPetIds;
  };
  
  export const saveBookIds = (bookIdArr) => {
    if (bookIdArr.length) {
      localStorage.setItem('saved_books', JSON.stringify(bookIdArr));
    } else {
      localStorage.removeItem('saved_books');
    }
  };
  
  export const removeBookId = (bookId) => {
    const savedPetIds = localStorage.getItem('saved_books')
      ? JSON.parse(localStorage.getItem('saved_books'))
      : null;
  
    if (!savedPetIds) {
      return false;
    }
  
    const updatedSavedPetIds = savedPetIds?.filter((savedPetId) => savedPetId !== bookId);
    localStorage.setItem('saved_books', JSON.stringify(updatedSavedPetIds));
  
    return true;
  };
  