import PacMan from "@/src/components/game";
import PageTitle from "@/src/components/PageTitle";

export default function HomePage() {
  return (
    <div style={{gap:"15px",display:"flex", justifyContent:"center", flexDirection: "column", alignContent:"center", textAlign:"center", width:"100%", height:"100%" }} >
      <PageTitle text="Home Page" />
        <p style={{color:"rgba(102, 252, 241, 0.4)"}} >To move, press and hold W-A-S-D key on your keyboard</p>
      <PacMan />
    </div>
  );
}
