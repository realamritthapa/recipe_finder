const fetch = require("node-fetch").default;
const recipeSearch = (req, res) => {
  let search = req.query.data;
  fetch(
    `https://api.edamam.com/api/recipes/v2?type=public&q=${search}&app_id=${process.env.EDAMAM_REC_ID}&app_key=${process.env.EDAMAM_REC_KEY}`
  )
    .then((response) => response.json())
    .then(({ hits }) => res.send(hits));
};
module.exports = recipeSearch;
