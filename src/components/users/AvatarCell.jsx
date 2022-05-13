import React from "react";

export default function AvatarCell(props) {
  return <img src={props.value} alt="" width={60} height={60} />;
}

export const avatarColumnProps = {
  maxWidth: 60,
  filterable: false,
  Cell: AvatarCell
};
