import { Portfolio } from "./components/Portfolio";
import { portfolioData } from "../../data/portfolio";

export default function PortfolioPage() {
    return <Portfolio data={portfolioData} />;
}
