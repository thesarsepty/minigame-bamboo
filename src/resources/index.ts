import * as ex from "excalibur";
import bamboo from "./images/bamboo.png";
import klik from "./sound/klik.mp3"


const Resources = {
  Bamboo: new ex.ImageSource(bamboo),
  Klik: new ex.Sound(klik)
};

export { Resources };