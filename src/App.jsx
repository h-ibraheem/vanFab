import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Layout from "./components/Layout";

import Home from "./pages/Home";
import About from "./pages/About";
import Vans, { loader as vanLoader } from "./pages/Vans/Vans";
import VanDetail, { loader as vanDetailLoader } from "./pages/Vans/VanDetails";
import Dashboard from "./pages/Host/Dashboard";
import Income from "./pages/Host/Income";
import Reviews from "./pages/Host/Reviews";
import Login ,{ loader as loginLoader, action as loginAction} from "./components/Login";

import HostVans, { loader as hostVan } from "./pages/Host/HostVans";
import HostVanDetails, {
  loader as hastVanDetails,
} from "./pages/Host/HostVanDetails";

import HostVanInfo from "./pages/Host/HostVanInfo";
import HostVanPhoto from "./pages/Host/HostVanPhotos";
import HostVanPrice from "./pages/Host/HostVanPrice";
import HostLayout from "./components/HostLayout";

import NotFound from "./pages/NotFound";
import Error from "./components/Error";
import { requireAuth } from "./utils";

import "./server";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route 
        path="login" 
        element={<Login />} 
        loader={loginLoader}
        action={loginAction}
      />
      <Route
        path="vans"
        element={<Vans />}
        errorElement={<Error />}
        loader={vanLoader}
      />
      <Route path="vans/:id" element={<VanDetail />} loader={vanDetailLoader} />

      <Route path="host" element={<HostLayout />}>
        <Route
          index
          element={<Dashboard />}
          loader={async () => await requireAuth()}
        />

        <Route
          path="income"
          element={<Income />}
          loader={async () => await requireAuth()}
        />
        <Route
          path="reviews"
          element={<Reviews />}
          loader={async () => await requireAuth()}
        />
        <Route path="vans" element={<HostVans />} loader={hostVan} />
        <Route
          path="vans/:id"
          element={<HostVanDetails />}
          loader={hastVanDetails}
        >
          <Route
            index
            element={<HostVanInfo />}
            loader={async () => await requireAuth()}
          />
          <Route
            path="pricing"
            element={<HostVanPrice />}
            loader={async () => await requireAuth()}
          />
          <Route
            path="photos"
            element={<HostVanPhoto />}
            loader={async () => await requireAuth()}
          />
        </Route>
      </Route>

      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}
export default App;
