import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Van, { loader as vanLoader } from "./pages/Vans/Vans";
import VanDetails from "./pages/Vans/VanDetails";
import Layout from "./components/Layout";
import Dashboard from "./pages/Host/Dashboard";
import Income from "./pages/Host/Income";
import Reviews from "./pages/Host/Reviews";
import HostVans from "./pages/Host/HostVans";

import HostVanDetails from "./pages/Host/HostVanDetails";

import HostVanInfo from "./pages/Host/HostVanInfo";
import HostVanPhoto from "./pages/Host/HostVanPhotos";
import HostVanPrice from "./pages/Host/HostVanPrice";
import HostLayout from "./components/HostLayout";


import NotFound from "./pages/NotFound";
import Error  from "./components/Error";

import "./server";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />} errorElement ={<Error />} >
      <Route index element={<Home />}/>
      <Route path="about" element={<About />} />

      <Route path="vans">
        <Route index element={<Van />} loader={vanLoader}/>
        <Route path=":id" element={<VanDetails />} />
      </Route>

      <Route path="host" element={<HostLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="income" element={<Income />} />

        <Route path="vans" element={<HostVans />} />

        <Route path="vans/:id" element={<HostVanDetails />}>
          <Route index element={<HostVanInfo />} />
          <Route path="priceing" element={<HostVanPrice />} />
          <Route path="photos" element={<HostVanPhoto />} />
        </Route>

        <Route path="reviews" element={<Reviews />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}
export default App;
