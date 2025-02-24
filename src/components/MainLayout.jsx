import Header from "./Header";
import FeedbackForm from "./FeedbackForm";
import FeedbackStats from "./FeedbackStats";
import FeedbackList from "./FeedbackList";

import AboutIconLink from "./AboutIconLink.jsx";

function MainLayout() {
  return (
    <div>
      <Header />
      <div className="container">
        <FeedbackForm />
        <FeedbackStats />
        <FeedbackList />
      </div>
      <AboutIconLink />
    </div>
  );
}

export default MainLayout;
