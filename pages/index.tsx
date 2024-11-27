import { Route, Routes as AppRoutes, useNavigate } from "react-router-dom";
import { lazy, ReactNode, Suspense } from "react";
import { Loader } from "@src/library/components/common/index";
import { ModalMessageCopy } from "@features/common";

// import { useModules } from '@src/entities/common';

import {
  RootModal,
  // AdminPanel,
  Events,
  Notifications,
  PaymentListener,
  ProgramPayment,
  // Statistics,
} from "modules";

import { Cart } from "./cart";
// import { ProtectedRoute } from 'library/components/common';

import { Clients } from "./clients";
import { CoachesRouts } from "./coaches";
import { Consultations } from "./consultations";
import { ContactsPage } from "./contacts";
import { Main } from "./main";
import { Messenger } from "./messenger";
import { NotFound } from "./not-found";
import { Personal } from "./personal";
import { Schedules } from "./shedules";
import { Shop } from "./shop";
import { Specialization } from "./specialization";
import { Support } from "./support";
import { TechService } from "./tech-service";

const Programs = lazy(
  () => import("@pages/programs/index")
);

const withSuspense = (component: ReactNode) => (
  <Suspense fallback={<Loader />}>{component}</Suspense>
);
export const MainRoutesPaths = {
  clients: "/clients/",
} as const;

export const Routes = () => {
  return (
    <>
      <RootModal />

      <AppRoutes>
        <Route path="/" element={<Main />} />
        <Route path="technical-service" element={<TechService />} />
        <Route path="program-payment" element={<ProgramPayment />} />
        <Route path="messenger" element={<Messenger />} />

        <Route path="/consultations/*" element={<Consultations />} />
      
        <Route path="/coaches/*" element={<CoachesRouts />} />
        <Route path="/schedule/*" element={<Schedules />} />
        <Route path={`${MainRoutesPaths.clients}*`} element={<Clients />} />
        <Route path="/events/*" element={<Events />} />
        <Route
          path={`/programs/*`}
          element={withSuspense(<Programs />)}
        />>
        <Route path="/shop/*" element={<Shop />} />
        <Route path="/personal/*" element={<Personal />} />

        <Route path="/support" element={<Support />} />
        <Route path="/payment" element={<PaymentListener />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/cart/*" element={<Cart />} />

        <Route path="/contacts/*" element={<ContactsPage />} />
        <Route path="/specialization" element={<Specialization />} />

        <Route path="*" element={<NotFound />} />
      </AppRoutes>

      <ModalMessageCopy />
    </>
  );
};
