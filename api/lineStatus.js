const subtes_url = "https://www.metrovias.com.ar/Subterraneos/Estado?site=Subterraneos";
var fetchUrl = require("fetch").fetchUrl;

//const lines = ['A', 'B', 'C', 'D', 'E', 'H', 'P', 'U'];


function getSubwayState(req,res) {
   
  fetchUrl(subtes_url, function(error, meta, body){
      if (error) {
        console.log(error);
      } else {
        var subway = JSON.parse(body.toString());
        return res.status(200).send({ status: subway[req.params.id].LineStatus });;
      }
  });
 
}

module.exports = {
    getSubwayState
};