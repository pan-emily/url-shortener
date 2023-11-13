export function validateUrl(value) {
    return /^(ftp|http|https):\/\/[^ "]+$/.test(value);        
  }