import { Roles } from "./models/entityModels/Token";
import RouterManager from "./routers/RouterManager";

function App() {
  let userRoles : Roles[] = []

  return (
    <>
      <RouterManager isLogin={false} userRoles={userRoles}></RouterManager>
    </>
  );
}

export default App;