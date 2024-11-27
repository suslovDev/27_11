import { usePromo } from "@entities/promo-video";
import qs from "query-string";
import React, { useEffect } from "react";
import { useFormContext } from "react-hook-form";
import { useNavigate, useLocation } from "react-router-dom";

export const SearchParams: React.FC = () => {
  const { setValue, getValues } = useFormContext();

  const { pathname, search } = useLocation();
  const params = qs.parse(search);
  const { removePromo, promo } = usePromo(Number(params.remove_promo_video));
  const navigate = useNavigate();

  const getParams = () => {
    const params = qs.parse(search);
    if (params.promo_video) {
      const id = Number(params.promo_video);
      setValue("promo_video", id, { shouldDirty: true });
    }

    if (params.remove_promo_video) {
      const id = Number(params.remove_promo_video);
      removePromo(id);
      setValue("promo_video", "new", { shouldDirty: true });
    }

    if (params.exercises) {
      const exercises = JSON.parse(params.exercises as string);
      setValue("exercises", exercises, { shouldDirty: true });
    }

    if (params.exercise) {
      const currentExercises = [...getValues("exercises")];
      const exercise = Number(params.exercise);
      const isAlreadyInList = currentExercises.find((ex) => ex === exercise);
      if (!isAlreadyInList) {
        currentExercises.push(exercise);
        setValue("exercises", currentExercises, { shouldDirty: true });
      }
    }

    if (params.remove_exercise) {
      const currentExercises = [...getValues("exercises")];
      const exercise = Number(params.exercise);
      const newExercises = currentExercises.filter((ex) => ex !== exercise);
      setValue("exercises", newExercises, { shouldDirty: true });
    }

    navigate(pathname, { replace: true });
  };

  useEffect(getParams, [getValues, pathname, navigate, search, setValue]);

  return <></>;
};
