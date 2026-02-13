import ProfileCard from "./assets/components/ProfileCard";

function App() {
  return (
    <div style={style.container}>
      <ProfileCard
        name="Preethi🌷"
        title={"Frontend developer"}
        description={
          "I am currently building my frontend foundations by working on small UI components using React. My focus is on understanding state management, reusable components, and clean design principles while strengthening JavaScript fundamentals."
        }
      />
    </div>
  );
}

const style = {
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff",
    width: "400px",
    height: "300px",
    marginLeft: "550px",
  },
};

export default App;
