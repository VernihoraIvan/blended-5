import React from "react";
import PropTypes from "prop-types";
import { Comment } from "../Comment/Comment";
import { Grid } from "../Grid/Grid";
import { useSelector } from "react-redux";
import { useGetCommentsQuery } from "../../redux/commentApi";
import { getComments } from "../../redux/filterSlice";

export const Comments = () => {
  const { data: comments } = useGetCommentsQuery();
  console.log(comments);
  const filteredValue = useSelector(getComments);
  console.log(filteredValue);
  const filterCommnets = () => {
    return comments.filter(({ content }) =>
      content.toLowerCase().includes(filteredValue.toLowerCase())
    );
  };

  return (
    <Grid>
      {comments &&
        filterCommnets().map((comment) => (
          <Comment key={comment.id} {...comment} />
        ))}
    </Grid>
  );
};

Comments.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.shape()),
};
