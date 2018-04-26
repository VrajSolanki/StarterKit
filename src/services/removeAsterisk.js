export const removeAsterisk = (data) => {
  let index = data.indexOf("*");
  if(index>=0){
    data = data.replace("*","");
  }
  return data;
}
