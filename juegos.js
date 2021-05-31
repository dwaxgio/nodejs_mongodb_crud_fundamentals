// 2. Se exportan variables, para ser utilizadas en proyecto

const juegos = ["Halo", "AOE", "GOD"];
const consolas = ["XBOX", "PLAYSTATION", "NINTENDO"];

/// 2.3: module.exports = juegos;
// 2.4: Para exportar más de una variable, se envía un objeto con las variables

module.exports = {
  juegos: juegos,
  consolas: consolas,
};
