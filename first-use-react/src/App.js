import './styles/App.css';
import Navbar from "./components/Navbar";
import Heading from './components/Heading';
import Cards from './components/Cards';
import Footer from './components/Footer';


function App() {
  return (
    <div>
      <Navbar/>
      <Heading/>
      <Cards cardName = "Hunter X Hunter" cardImg = "https://1.bp.blogspot.com/-7VG7HOn8TyU/YSbV4q8cWcI/AAAAAAAAsSA/Cohh5A7XpcwxQrj0ZiZPdaGjk7yOegS-gCLcBGAsYHQ/s0/episodios_hunter_x_hunter-relleno-orden-cronologico.jpg" cardText="Es una serie de manga escrita e ilustrada por Yoshihiro Togashi. La historia tiene como protagonista a Gon Freecss, un niño de doce años que desea encontrar a su padre a toda costa, por lo que decide convertirse en «cazador», justo como él, y de alguna forma hallar su paradero."/>
      <Cards cardName = "Fullmetal Alchemist" cardImg = "https://cuatrobastardos.com/wp-content/uploads/2019/01/FMAB-1-1.jpg" cardText="Narra la historia de los hermanos Elric. Con una dote especial para la alquimia, por motivos desafortunados primero pierden a su padre en la guerra, por ser llamado a filas por su habilidad alquímica y posteriormente pierden a su madre por una enfermedad."/>
      <Cards cardName = "Kimetsu no Yaiba" cardImg="https://kokohai.com/wp-content/uploads/2020/10/que-significa-kimetsu-no-yaiba.jpg" cardText="También conocida bajo su nombre en inglés Demon Slayer , es una serie de manga escrita e ilustrada por Koyoharu Gotōge. Tanjiro emprende un viaje arriesgado para buscar una cura a la maldición de su hermana y vengar a su familia asesinada por un demonio."/>
      <Cards cardName = "Haikyū!!" cardImg="https://larepublica.pe/resizer/4wUrxq2W5c769rmfMA_9E2GQHNw=/480x282/top/smart/cloudfront-us-east-1.images.arcpublishing.com/gruporepublica/SQKIUJ3SABHS5PMRWRRECTSUSY.JPG" cardText="Shōyō Hinata, aún siendo un estudiante de primaria, ve un partido de voleibol por la televisión, en el cual vio jugar al conocido Pequeño Gigante. Desde entonces, pretende convertirse en alguien como él, debido a que ambos son bajos de estatura, y comienza a aficionarse por el deporte."/>
      <Footer/>
    </div>
  );
}

export default App;
