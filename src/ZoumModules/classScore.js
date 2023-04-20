const takeInp = () => {
  const jeu = {
    user: document.querySelector('.InpText').value,
    score: document.querySelector('.InpNumber').value,
  };
  return jeu;
};
export default takeInp;