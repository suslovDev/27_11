import { useModules } from "@entities/common";
import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";

import { useLoadTags } from "@features/common";
import { useLoadGroups } from "@features/common";
import { TagsPage } from "@features/events/event-editor/new-tags/tags-page";
import { ModalBuy, ModalRecommend, ModalShare } from "@features/programs";

import { CoachModal } from "./coach-modal";
import { ProgramEditor } from "./editor";
import { Exercise } from "./exercise";
import { ExerciseEdit } from "./exercise-edit";
import { Exercises } from "./exercise-list";
import { ExercisePreview } from "./exercise-preview";
import { SelectExercise } from "./exercise-select";
import { ProgramDescVideo } from "./program-description-exersice";
import { ProgramList } from "./program-list";
import { ProgramPage } from "./program-page";
import { Promo } from "./promo";
import { PromoEdit } from "./promo-edit";
import { PublicationPage } from "./publication-page";
import { SelectGroup } from "./select-group";
import { Subscribe } from "./subscribe";

export const Programs: React.FC = () => {
  const modules = useModules();
  const code = modules.moduleByType("programs")?.code;
  useLoadTags(code || "");

  useLoadGroups();

  return (
    <>
      <Routes>
        <Route path=":code">
          <Route index element={<ProgramList />} />
          <Route path="program-edit">
            <Route path=":id">
              <Route index element={<ProgramEditor />} />
              <Route path="select-exercises">
                <Route index element={<SelectExercise />} />
                <Route path="exercise/:videoId" element={<ExercisePreview />} />
              </Route>

              <Route path="promo/:videoId" element={<Promo />} />
              <Route path="promo-edit/:videoId" element={<PromoEdit />} />

              <Route path="exercise/:videoId" element={<Exercise />} />
            </Route>
          </Route>
          <Route path="program-edit/new/select-tag" element={<TagsPage />} />
          <Route path="program-edit/:id/select-tag" element={<TagsPage />} />
          <Route
            path="program-edit/new/select-group"
            element={<SelectGroup />}
          />
          <Route
            path="program-edit/:id/select-group"
            element={<SelectGroup />}
          />

          <Route path="program">
            <Route path=":id">
              <Route index element={<ProgramPage />} />
              <Route path="specialist/:coachId" element={<CoachModal />} />
            </Route>
          </Route>

          <Route path="exercise/:videoId" element={<Exercise />} />
          <Route path="exercise-edit/:videoId" element={<ExerciseEdit />} />
          <Route
            path="exercise-edit/:videoId/select-tag"
            element={<TagsPage />}
          />

          <Route path="program-edit">
            <Route path=":id">
              <Route index element={<ProgramEditor />} />
              <Route path="select-exercises">
                <Route index element={<SelectExercise />} />
                <Route path="exercise/:videoId" element={<ExercisePreview />} />
              </Route>
              {<Route path="promo/:videoId" element={<Promo />} />}
              <Route path="promo-edit/:videoId" element={<PromoEdit />} />
              <Route path="exercise/:videoId" element={<Exercise />} />
              <Route path="exercise-edit/:videoId" element={<ExerciseEdit />} />
              <Route
                path="exercise-edit/:videoId/select-tag"
                element={<TagsPage />}
              />
            </Route>
          </Route>
          <Route path="program-edit/new/select-tag" element={<TagsPage />} />
          <Route
            path="program-edit/new/select-group"
            element={<SelectGroup />}
          />

          <Route path="subscribe/:id/:hash" element={<Subscribe />} />

          <Route path="program">
            <Route path=":id">
              <Route index element={<ProgramPage />} />
              <Route path="specialist/:coachId" element={<CoachModal />} />
              <Route path="description" element={<ProgramDescVideo />} />
              <Route path="publication" element={<PublicationPage />} />
              <Route path="buy" element={<ModalBuy />} />
            </Route>
          </Route>

          <Route path="exercises">
            <Route index element={<Exercises />} />
          </Route>
        </Route>
      </Routes>

      <ModalRecommend />
      <ModalShare />
    </>
  );
};
