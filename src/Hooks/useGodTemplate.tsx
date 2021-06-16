import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../Redux/Reducers/index";
import { useRouteMatch } from "react-router-dom";
import { setGodInfo } from "../Redux/Actions/DataActions";

const useGodTemplate = () => {
  const { godInfo, activeCategory, error } = useSelector(
    (store: RootState) => store.DataReducer
  );
  const dispatch = useDispatch();
  const match = useRouteMatch();

  const [videoIsReady, setVideoIsReady] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const onVideoLoadHandler = () => {
    setVideoIsReady(true);
  };

  const ImageSrcHandler = (): string => {
    try {
      return require(`../assets/gods/${godInfo.name}-${
        activeCategory
          ? activeCategory.title.includes("mythology:")
            ? ""
            : activeCategory.title
                .replaceAll("mythology:", "")
                .replaceAll(/\s/g, "-")
          : ""
      }.png`).default;
    } catch (err) {
      return require(`../assets/gods/${godInfo.name}.png`).default;
    }
  };

  useEffect(() => {
    if (videoIsReady) setIsLoading(false);
  }, [videoIsReady, godInfo]);

  useEffect(() => {
    dispatch(setGodInfo(match.url));
  }, [dispatch, match]);

  return {
    isLoading,
    error,
    godInfo,
    activeCategory,
    onVideoLoadHandler,
    ImageSrcHandler,
  };
};

export default useGodTemplate;
