import { useRoutes } from "react-router-dom";
import About from "../components/Content/AboutContent/About";
import Article from "../components/Content/AboutContent/Article";
import Contact from "../components/Content/AboutContent/Contact";
import LifeTY from "../components/Content/AboutContent/LifeTY";
import OurPurposeMission from "../components/Content/AboutContent/OurPurposeMission";
import WorkWith from "../components/Content/AboutContent/WorkWith";
import Home from "../components/Content/HomeContent/Home";
import BankingFinance from "../components/Content/IndustriesContent/BankingFinance";
import Education from "../components/Content/IndustriesContent/Education";
import Healthcare from "../components/Content/IndustriesContent/Healthcare";
import Insurance from "../components/Content/IndustriesContent/Insurance";
import MediaEntertainment from "../components/Content/IndustriesContent/MediaEntertainment";
import RetaileCommerce from "../components/Content/IndustriesContent/RetaileCommerce";
import TechnologyComunications from "../components/Content/IndustriesContent/TechnologyComunications";
import Travel from "../components/Content/IndustriesContent/Travel";
import SkillRary from "../components/Content/ProductsContent/SkillRary";
import ElevateItTraining from "../components/Content/ServicesContent/ElevateItTraining";
import ItConsultingManagedServices from "../components/Content/ServicesContent/ItConsultingManagedServices";
import SoftwareDevelopement from "../components/Content/ServicesContent/SoftwareDevelopement";
import SoftwareTesting from "../components/Content/ServicesContent/SoftwareTesting";

const TyssRoute = () => {
    let Routes = useRoutes([
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/ElevateItTraining",
        element: <ElevateItTraining />,
      },
      {
        path: "/ItConsultingManagedServices",
        element: <ItConsultingManagedServices />,
      },
      {
        path: "/SoftwareDevelopement",
        element: <SoftwareDevelopement />,
      },
      {
        path: "/SoftwareTesting",
        element: <SoftwareTesting />,
      },
      {
        path: "/SkillRary",
        element: <SkillRary />,
      },
      {
        path: "/BankingFinance",
        element: <BankingFinance />,
      },
      {
        path: "/Education",
        element: <Education />,
      },
      {
        path: "/Healthcare",
        element: <Healthcare />,
      },
      {
        path: "/Insurance",
        element: <Insurance />,
      },
      {
        path: "/MediaEntertainment",
        element: <MediaEntertainment />,
      },
      {
        path: "/RetaileCommerce",
        element: <RetaileCommerce />,
      },
      {
        path: "/TechnologyComunications",
        element: <TechnologyComunications />,
      },
      {
        path: "/Travel",
        element: <Travel />,
      },
      {
        path: "/About",
        element: <About />,
      },
      {
        path: "/Article",
        element: <Article />,
      },
      {
        path: "/Contact",
        element: <Contact />,
      },
      {
        path: "/OurPurposeMission",
        element: <OurPurposeMission />,
      },
      {
        path: "/Life@TY",
        element: <LifeTY />,
      },
      {
        path: "/WorkWith",
        element: <WorkWith />,
      },
    ]);
    return Routes;
}
export default TyssRoute;