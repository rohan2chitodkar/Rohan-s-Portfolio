import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home"
import { NotFound } from "./pages/NotFound"
import { Toaster } from "@/components/ui/toaster";

function App() {
  return (
    <>
      <Toaster></Toaster>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home></Home>}></Route>
          <Route path="*" element={<NotFound></NotFound>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  ); 
}

export default App
