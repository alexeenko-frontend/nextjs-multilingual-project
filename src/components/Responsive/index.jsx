import { MediaMatcher, MediaServerRender } from "react-media-match";

import { SecodaryMedia } from "../../mediaMatch";

export const Desktop = props => (
  <SecodaryMedia.Matcher mobile={null} tablet={null} desktop={props.children} />
);

export const Mobile = props => (
  <SecodaryMedia.Matcher mobile={props.children} desktop={null} tablet={null} />
);
