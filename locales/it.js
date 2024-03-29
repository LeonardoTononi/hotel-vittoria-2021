/* ==== ICONS ===== */
import { GiSittingDog as DogIcon } from "react-icons/gi";
import { AiOutlineWifi as WifiIcon } from "react-icons/ai";
import { FaParking } from "react-icons/fa";
import { MdKitchen } from "react-icons/md";
// import WellnessIcon from "../assets/icons/wellness.png";
// import RiverIcon from "../assets/icons/river.png";
// import BeachIcon from "../assets/icons/beach.png";
// import BikeIcon from "../assets/icons/bike.png";
// import GolfIcon from "../assets/icons/golf.png";
// import LakeIcon from "../assets/icons/lake.png";
// import MountainIcon from "../assets/icons/mountain.png";

export default {
  seo: {
    homepage: "Homepage",
    apartments: "Stanze",
    lodge: "L'Albergo",
    activities: "Attività",
  },
  navbar: {
    home: "Home",
    lodge: "L'Albergo",
    apartments: "Stanze",
    activities: "Attività",
    contact: "Contatti",
    booking: "Prenota Ora"
  },
  header: {
    welcome: "benvenuto",
    hotel_vittoria: {
      title: `Un fantastico e tranquillo`,
      subTitle: "soggiorno per voi.",
      text: "Siamo una felice famiglia che lavora qui da generazioni, ci prendiamo cura di ogni dettaglio per farvi godere al meglio la vostra vacanza.",
      cta: "Scopri di più",
      img: {
        url: "",
        alt: "Hotel Vittoria view from the garden, with a swimming pool",
      },
    },
  },

  rooms: {
    title: "Stanze & Vista",
    desc: "L’Hotel Vittoria si trova nel cuore del borgo di Maderno. La nostra struttura è accogliente e tranquilla: immerso tra il verde degli ulivi, offre spazi ampi e luminosi che ti avvolgono in un’atmosfera calda e accogliente.",
    rooms: [
      {
        name: "lake-view",
        price: "90",
        guest: "Da 90 € al giorno",
        viewMore: "Vedi",
        img: "https://ik.imagekit.io/dcwkdo37k/Hotel_Vittoria/lake-view.jpg?updatedAt=1687974634048",
        videoUrl: "https://www.youtube.com/embed/FCwlLM-Jqic",
        alt: "An internal view of serenity apartment, with a wood table and a big window.",
        othersImages: [
          { url: "https://ik.imagekit.io/dcwkdo37k/Hotel_Vittoria/lake-view.jpg?updatedAt=1687974634048", alt: "" },
          { url: "/assets/rooms/serenity/2.jpeg", alt: "" },
          { url: "/assets/rooms/serenity/3.jpeg", alt: "" },
          { url: "/assets/rooms/serenity/4.jpeg", alt: "" },
          { url: "/assets/rooms/serenity/5.jpeg", alt: "" },
          { url: "/assets/rooms/serenity/6.jpeg", alt: "" },
          { url: "/assets/rooms/serenity/7.jpeg", alt: "" },
          { url: "/assets/rooms/serenity/8.jpeg", alt: "" },
        ],
      },
      {
        name: "garden-view",
        price: "85",
        guest: "Da 85 € al giorno",
        viewMore: "Vedi",
        img: "https://ik.imagekit.io/dcwkdo37k/Hotel_Vittoria/garden-view.jpg?updatedAt=1687974633785",
        videoUrl: "https://www.youtube.com/embed/lG8iiNx6A2g",
        alt: "An internal view of Armony apartment, with a wood table and a big window.",
        othersImages: [
          { url: "https://ik.imagekit.io/dcwkdo37k/Hotel_Vittoria/garden-view.jpg?updatedAt=1687974633785", alt: "" },
          { url: "/assets/rooms/armony/2.jpeg", alt: "" },
          { url: "/assets/rooms/armony/3.jpeg", alt: "" },
          { url: "/assets/rooms/armony/4.jpeg", alt: "" },
          { url: "/assets/rooms/armony/5.jpeg", alt: "" },
          { url: "/assets/rooms/armony/6.jpeg", alt: "" },
          { url: "/assets/rooms/armony/7.jpeg", alt: "" },
          { url: "/assets/rooms/armony/8.jpeg", alt: "" },
        ],
      },
      {
        name: "mountain-view",
        price: "85",
        guest: "Da 85 € al giorno",
        viewMore: "Vedi",
        img: "https://ik.imagekit.io/dcwkdo37k/Hotel_Vittoria/internal-view.jpg?updatedAt=1687974635478",
        videoUrl: "https://www.youtube.com/embed/Efg7OlrCklY",
        alt: "An internal view of Joy apartment, with a wood table and a big window.",
        othersImages: [
          { url: "https://ik.imagekit.io/dcwkdo37k/Hotel_Vittoria/internal-view.jpg?updatedAt=1687974635478", alt: "" },
          { url: "/assets/rooms/joy/2.jpeg", alt: "" },
          { url: "/assets/rooms/joy/3.jpeg", alt: "" },
          { url: "/assets/rooms/joy/4.jpeg", alt: "" },
          { url: "/assets/rooms/joy/5.jpeg", alt: "" },
          { url: "/assets/rooms/joy/6.jpeg", alt: "" },
          { url: "/assets/rooms/joy/7.jpeg", alt: "" },
          { url: "/assets/rooms/joy/8.jpeg", alt: "" },
          { url: "/assets/rooms/joy/9.jpeg", alt: "" },
        ],
      },
    ],
    viewOtherRooms: {
      title: "Vedi altri tipi di stanze",
      /*  text:
        'The apartments are comfortable and charmingly furnished, with any tool that you may need during your journey.', */
    },
    infoRooms: {
      features: [
        { name: "Mini Frigo", icon: <MdKitchen className="text-2xl" /> },
        { name: "Parcheggio", icon: <FaParking className="text-2xl" /> },
        { name: "Wi-Fi Gratis", icon: <WifiIcon className="text-2xl" /> },
        {
          name: "Animali sono Benvenuti",
          icon: <DogIcon className="text-2xl" />,
        },
      ],
      bulletList: {
        title: "Descrizione",
        list: [
          "Le stanze vista lago hanno accesso diretto al terrazzo in comune, fornito di tavoli per poter gioire della vista durante la giornata, i pranzi o le cene.",
        ],
      },
      additionalInfo: {
        title: "Altre informazioni",
        arrivalDeparture: {
          title: "Check-in / Check-out",
          text: "Il check-in potrà essere effettuato dalle 14.00 mentre il check-out è consentito fino alle ore 10.00 di mattina.",
        },
      },
      lookInside: {
        title: "Uno sguardo ai dettagli",
        text: "Dai un'occhiata alle nostre fantastiche camere. Le camere vista lago hanno un accesso diretto alla terrazza comune dove potrete godervi il panorama durante il giorno e i pasti.",
      },
    },
  },

  activities: {
    title: "Attività",
    desc: "Ci sono molte attività che puoi fare. Toscolano Maderno è ricca di attrazioni, con tantissimi percorsi per incredibili passeggiate a piedi, in bicicletta e arrampicate. La magnifica spiaggia si trova a 10 minuti a piedi.",
    cta: "Learn More",
    activitiesList: [
      { name: "mountain", icon: "" },
      { name: "bike", icon: "" },
      { name: "wellness", icon: "" },
      { name: "beach", icon: "" },
    ],
  },
  contact: {
    title: "Scrivici",
    desc: "Siamo qui per aiutarti.",
    form: {
      name: {
        name: "name",
        placeholder: "Nome completo",
      },
      arrival: {
        name: "arrival",
        placeholder: "Seleziona una data di arrivo",
      },
      departure: {
        name: "departure",
        placeholder: "Seleziona una data di partenza",
      },
      email: {
        name: "email",
        placeholder: "Email",
      },
      message: {
        name: "message",
        placeholder: "Scrivi un messaggio",
      },
      is_required: "Questa sezione è obbligatoria",
      success_msg:
        "Email inviata correttamente! Ti risponderemo il prima possibile. Grazie.",
      error_msg:
        "Oops, sembra esserci stato un problema, ti invitiamo a riprovare. Altrimenti scrivici direttamente a info@vittoriahotel.eu",
      button_text: "invia",
    },
  },
  lodge: {
    img_text: "It's coazy",
    title: `La nostra priorità è soddisfare ogni tua necessità`,
    subTitle: "con una cura speciale per i dettagli.",
    text: "",
    facility: {
      img: "https://ik.imagekit.io/dcwkdo37k/Hotel_Vittoria/hotel/facility.jpg?updatedAt=1687975046824",
      title: "La struttura",
      text: "L'albergo dispone di una piscina privata per i nostri ospiti, con due diverse profondità: la prima profonda 1,50 m, adatta agli adulti, e la seconda profonda 1 m, adatta ai bambini. Nel giardino si possono trovare ombrelloni, sdraio e tavolini dove poter comodamente pranzare e cenare all'aria aperta.",
    },

    breakfast: {
      img: "https://ik.imagekit.io/dcwkdo37k/Hotel_Vittoria/hotel/terrace.jpg?updatedAt=1687975039983",
      title: "La colazione",
      text: "La colazione viene servita dalle 08:00 alle 10:00. Troverete un ricco buffet, salato e dolce, con deliziose torte fatte in casa. Puoi anche mangiare all'aperto nella nostra terrazza paradisiaca.",
    },
  },
  activities_page: {
    mountain: {
      title: "Mountain Pizzoccolo",
      desc: "This is the subtitile of mountain pizzoccolo category. This mountain is 1680m height. Situato a un’altitudine di 400 metri e ubicato a 7 km da Toscolano Maderno e dalle rive del Lago di Garda, l’Agriturismo San Lorenzo propone appartamenti in una tranquilla zona di montagna.Benvenuti in Persegno località immersa nella natura del parco Alto Garda.",
      sections: [
        {
          title: "An amazing walk",
          desc: "Situato a un’altitudine di 400 metri e ubicato a 7 km da Toscolano Maderno e dalle rive del Lago di Garda, l’Agriturismo San Lorenzo propone appartamenti in una tranquilla zona di montagna.Benvenuti in Persegno località immersa nella natura del parco Alto Garda.",
          img: "",
        },
      ],
    },
    bike: {
      title: "Bike in Garda Lake",
      desc: "This is the subtitile of mountain pizzoccolo category. This mountain is 1680m height. Situato a un’altitudine di 400 metri e ubicato a 7 km da Toscolano Maderno e dalle rive del Lago di Garda, l’Agriturismo San Lorenzo propone appartamenti in una tranquilla zona di montagna.Benvenuti in Persegno località immersa nella natura del parco Alto Garda.",
      img: "",
      sections: [
        {
          title: "An amazing walk",
          desc: "Situato a un’altitudine di 400 metri e ubicato a 7 km da Toscolano Maderno e dalle rive del Lago di Garda, l’Agriturismo San Lorenzo propone appartamenti in una tranquilla zona di montagna.Benvenuti in Persegno località immersa nella natura del parco Alto Garda.",
          img: "",
          component: "central",
        },
        {
          title: "Not a nice day",
          desc: "Situato a un’altitudine di 400 metri e ubicato a 7 km da Toscolano Maderno e dalle rive del Lago di Garda, l’Agriturismo San Lorenzo propone appartamenti in una tranquilla zona di montagna.Benvenuti in Persegno località immersa nella natura del parco Alto Garda.",
          img: "",
          component: "left",
        },
      ],
    },
    wellness: {
      title: "Wellness in Toscolano Maderno",
      desc: "This is the subtitile of mountain pizzoccolo category. This mountain is 1680m height. Situato a un’altitudine di 400 metri e ubicato a 7 km da Toscolano Maderno e dalle rive del Lago di Garda, l’Agriturismo San Lorenzo propone appartamenti in una tranquilla zona di montagna.Benvenuti in Persegno località immersa nella natura del parco Alto Garda.",
      img: "",
      sections: [
        {
          title: "A pleasure in a SPA",
          desc: "Situato a un’altitudine di 400 metri e ubicato a 7 km da Toscolano Maderno e dalle rive del Lago di Garda, l’Agriturismo San Lorenzo propone appartamenti in una tranquilla zona di montagna.Benvenuti in Persegno località immersa nella natura del parco Alto Garda.",
          img: "",
          component: "central",
        },
        {
          title: "Massage",
          desc: "Situato a un’altitudine di 400 metri e ubicato a 7 km da Toscolano Maderno e dalle rive del Lago di Garda, l’Agriturismo San Lorenzo propone appartamenti in una tranquilla zona di montagna.Benvenuti in Persegno località immersa nella natura del parco Alto Garda.",
          img: "",
          component: "left",
        },
      ],
    },
    beach: {
      title: "Beach in Garda Lake",
      desc: "This is the subtitile of mountain pizzoccolo category. This mountain is 1680m height. Situato a un’altitudine di 400 metri e ubicato a 7 km da Toscolano Maderno e dalle rive del Lago di Garda, l’Agriturismo San Lorenzo propone appartamenti in una tranquilla zona di montagna.Benvenuti in Persegno località immersa nella natura del parco Alto Garda.",
      img: "",
      sections: [
        {
          title: "Limone Beach awasome",
          desc: "Situato a un’altitudine di 400 metri e ubicato a 7 km da Toscolano Maderno e dalle rive del Lago di Garda, l’Agriturismo San Lorenzo propone appartamenti in una tranquilla zona di montagna.Benvenuti in Persegno località immersa nella natura del parco Alto Garda.",
          img: "",
          component: "central",
        },
        {
          title: "Sirmione exclusive beach",
          desc: "Situato a un’altitudine di 400 metri e ubicato a 7 km da Toscolano Maderno e dalle rive del Lago di Garda, l’Agriturismo San Lorenzo propone appartamenti in una tranquilla zona di montagna.Benvenuti in Persegno località immersa nella natura del parco Alto Garda.",
          img: "",
          component: "left",
        },
      ],
    },
  },
};
