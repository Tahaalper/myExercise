import Button from './Components/Button';
import Card from "./Components/Card";
import Kurt from "./Assets/Img/kurt8.jpg";
import AhmetKaya from "./Assets/Img/ahmetkaya.webp";
function App() {
  return (
    
    <div className="App">
      <div style={{display : "flex"}}>
        <Button onClick={() => {console.log("buton 1'e tiklandi")}} text ="firstbuttoninshallah" type = "alper"/>
        <Button onClick={() => {console.log("buton 2'ye basildi")}} text = "buton II" type = "taha"/>
     </div>
      <div style={{display:"flex"}}>
      <Card
        singer = {Kurt}
        className = "primary"
        article = "İÇİNDE AŞK VAR YÜZÜNDE KİNNNNN YÜREĞİNE SORRR BU DA KİMMM YÜREĞİNE SOR BU DA KİM HER SABAH BAKTIĞIN AYNADAKİ BANA DELİRİYOR"
        title = " would kurt cobain sing that???"
        />
        <Card
        singer = {AhmetKaya}
        className = "secondary"
        article = "TÜRKÜZ AÇIK ALINLA ON YILDA NE SAVAŞLAR ON YILDA ON BEŞ MİLYON GENÇ YARATTIK HER YAŞTAN (HAŞA)"
        title = " would Ahmet Kaya sing that???"
        />
      </div>
     

    </div>
  );
}

export default App;
