import { createContext, useState } from "react";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([
    {
      id: 1,
      text: "This feedback item 1",
      rating: 10,
    },
    {
      id: 2,
      text: "This feedback item 2",
      rating: 9,
    },
    {
      id: 3,
      text: "This feedback item 3",
      rating: 8,
    },
  ]);
  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  });

  // set item to be updated
  const editFeedback = (item) => {
    setFeedbackEdit({
      item,
      edit: true,
    });
  };
  // Delete feedback
  const deleteFeedback = (id) => {
    if (window.confirm("Are you sure you want to delete this feedback?")) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };
  // add the feedback
  const addFeedback = (newFeedback) => {
    setFeedback([newFeedback, ...feedback]);
  };
  // update Feedback Item
  const updateFeedback = (id, updItem) => {
    setFeedback(
      feedback.map((feedbackItem) =>
        feedbackItem.id === id ? { ...feedbackItem, ...updItem } : feedbackItem
      )
    );
  };
  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        feedbackEdit,
        deleteFeedback,
        addFeedback,
        editFeedback,
        updateFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};
export default FeedbackContext;
