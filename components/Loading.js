import { Circle } from "better-react-spinkit"

const Loading = () => {
  return (
    <center style={{ display: "flex", placeItems: "center", height: "100vh" }}>
        <div>
            <img 
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/512px-WhatsApp.svg.png" alt="whatsapp-logo" 
                style={{ marginBottom: 10 }}
                height={200}
            />
            <Circle color="#3CBC28" size={60} />
        </div>
    </center>
  )
}

export default Loading
