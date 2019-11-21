import * as ErrorPage from "scenes/ErrorPage";
import * as HomePage from "scenes/HomePage";

/**
 * Map with all the public accessible features
 * @example
 * {
 *   login: {
 *     enabled: true,
 *     reducer,
 *     actions,
 *     types,
 *     pages: {
 *       Login: LoginPage
 *     }
 *   },
 *   ...
 * }
 */
// TODO probably try https://github.com/tdeekens/flopflip
// Or https://vasanthk.gitbooks.io/react-bits/patterns/29.feature-flags-using-redux.html
const features = {};

const CALL_DISABLED_FEATURE = "equipenine/CALL_DISABLE_FEATURE";

const overrideValues = (object, newValue) => {
  const newObject = {};
  for (const key in object) {
    newObject[key] = newValue;
  }
  return newObject;
};

/**
 * Function for plugin creation
 */
const registerFeature = ({
  name,
  enabled,
  reducer,
  actions,
  types,
  selectors,
  pages,
  ...rest
}) => {
  if (!name) {
    throw new Error("Feature name is missing");
  }
  if (name in features) {
    throw new Error(`Feature with name ${name} already exists`);
  }

  if (enabled) {
    features[name] = {
      enabled,
      reducer,
      actions,
      types,
      selectors,
      pages,
      ...rest
    };
  } else {
    // Override feature stuff to not do everything if it is not enabled
    const feature = {
      enabled,
      // selectors always have to be public cause of failures in isPending
      selectors
    };
    if (reducer && typeof reducer === "function") {
      feature.reducer = () => ({});
    }
    if (actions && typeof actions === "object") {
      feature.actions = overrideValues(actions, () => {
        console.log(
          `Action can not be executed cause feature ${name} is disabled`
        );
        return {
          type: CALL_DISABLED_FEATURE
        };
      });
    }
    if (pages && typeof pages === "object") {
      feature.pages = overrideValues(pages, {});
    }
    features[name] = feature;
  }
};

registerFeature({
  name: "error",
  enabled: true,
  ...ErrorPage
});

registerFeature({
  name: "home",
  enabled: true,
  ...HomePage
});

export default features;
